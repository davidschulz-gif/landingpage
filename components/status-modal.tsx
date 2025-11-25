import { IconAlertCircle, IconCheck, IconX } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

interface StatusModalProps {
  open: boolean
  type: 'success' | 'error' | null
  message: string
  onClose: () => void
}

const StatusModal: React.FC<StatusModalProps> = ({
  open,
  type,
  message,
  onClose,
}) => {
  if (!open || !type) return null
  return (
    <AnimatePresence>
      <motion.div
        className='fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 backdrop-blur-sm'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        role='dialog'
        aria-modal='true'
        aria-labelledby='modal-status-title'
        aria-describedby='modal-status-message'
        tabIndex={-1}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className='bg-white dark:bg-neutral-900 p-6 shadow-2xl flex flex-col items-center gap-3 max-w-full w-[400px] relative outline-none'
        >
          <button
            className='absolute top-2 right-2 text-gray-500 hover:text-black dark:hover:text-white p-1 focus:outline-none'
            aria-label='Close'
            onClick={onClose}
            autoFocus
          >
            <IconX size={18} />
          </button>
          {type === 'success' ? (
            <IconCheck
              className='text-green-600'
              size={36}
              aria-hidden='true'
            />
          ) : (
            <IconAlertCircle
              className='text-red-600'
              size={36}
              aria-hidden='true'
            />
          )}
          <div
            id='modal-status-title'
            className='font-bold text-lg mt-2 text-center'
          >
            {type === 'success' ? 'Success' : 'Error'}
          </div>
          <div
            id='modal-status-message'
            className='text-center text-sm text-gray-700 dark:text-gray-200 px-1'
          >
            {message}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default StatusModal
