'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import StatusModal from '../status-modal'

/**
 * Handles status/message from URL and displays a custom modal instead of toast.
 */
export const ToastProvider = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const prevParamsRef = useRef<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState<'success' | 'error' | null>(null)
  const [modalMessage, setModalMessage] = useState<string>('')

  // Function to remove params from URL
  const cleanURL = () => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href)
      url.searchParams.delete('status')
      url.searchParams.delete('message')
      router.replace(url.pathname + url.search, { scroll: false })
    }
  }
  // Called when modal is closed
  const closeModal = () => {
    setShowModal(false)
    setModalType(null)
    setModalMessage('')
    cleanURL()
    prevParamsRef.current = null // allow re-trigger if user comes again
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true)
    }
  }, [])

  useEffect(() => {
    const status = searchParams.get('status')
    const message = searchParams.get('message')
    const statusPlusMsg = `${status ?? ''}:${message ?? ''}`

    if (
      (status === 'success' || status === 'error') &&
      prevParamsRef.current !== statusPlusMsg
    ) {
      const decodedMessage = message
        ? decodeURIComponent(message)
        : status === 'success'
          ? 'Email verified and added to BigMailer successfully'
          : 'An error occurred during verification'
      setShowModal(true)
      setModalType(status)
      setModalMessage(decodedMessage)
      prevParamsRef.current = statusPlusMsg
    } else if (!status && !message) {
      setShowModal(false)
      setModalType(null)
      setModalMessage('')
      prevParamsRef.current = null
    }
  }, [searchParams, router])

  return isMounted
    ? createPortal(
        <StatusModal
          open={showModal}
          type={modalType}
          message={modalMessage}
          onClose={closeModal}
        />,
        document.body
      )
    : null
}
