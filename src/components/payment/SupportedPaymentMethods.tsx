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
      <section className={`space-y-2 ${className}`}>
        <div className='relative text-left'>
          <p className='text-[10px] font-semibold uppercase tracking-wider text-gray-500'>
            {displayTitle}
          </p>
          {description && (
            <p className='text-xs text-gray-600 mt-1'>{description}</p>
          )}
        </div>
        <ul className='flex flex-wrap gap-2 justify-start'>
          {brands.map(brand => (
            <div 
              key={brand.label} 
              title={brand.label} 
              aria-label={brand.label}
              className='scale-75 origin-left'
            >
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
