'use client'

import { useTranslations } from 'next-intl'
import { memo } from 'react'
import { paymentBrands } from './paymentBrands'

const SupportedPaymentMethods = memo(
  ({
    title,
    description,
    brands = paymentBrands,
    className = '',
  }: {
    title?: string
    description?: string
    brands?: typeof paymentBrands
    className?: string
  }) => {
    const t = useTranslations('PaymentMethods')
    const displayTitle = title || t('title')

    return (
      <section className={`space-y-3 ${className}`}>
        <div className='relative text-center'>
          <p className='text-xs font-semibold uppercase tracking-widest text-gray-500'>
            {displayTitle}
          </p>
          {description && (
            <p className='text-sm text-gray-600 mt-1'>{description}</p>
          )}
        </div>
        <ul className='flex flex-wrap gap-3'>
          {brands.map(brand => (
            <div key={brand.label} title={brand.label} aria-label={brand.label}>
              {brand.icon}
            </div>
          ))}
        </ul>
      </section>
    )
  }
)

SupportedPaymentMethods.displayName = 'SupportedPaymentMethods'

export default SupportedPaymentMethods
