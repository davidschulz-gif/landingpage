'use client'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import SupportedPaymentMethods from './payment/SupportedPaymentMethods'

const socialLinks = [
  {
    name: 'Twitter',
    icon: Twitter,
    href: '#twitter',
    color: 'hover:text-blue-400',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: '#linkedin',
    color: 'hover:text-blue-600',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: '#github',
    color: 'hover:text-gray-600',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:hello@typus.ai',
    color: 'hover:text-red-500',
  },
]

export function FooterSection() {
  const t = useTranslations('Footer')

  const footerLinks = {
    solutions: [
      { name: t('links.create'), href: '#create' },
      { name: t('links.edit'), href: '#edit' },
      { name: t('links.upscale'), href: '#upscale' },
    ],
    community: [
      { name: t('links.tutorials'), href: '#tutorials' },
      { name: t('links.press'), href: '#press' },
      { name: t('links.reviews'), href: '#reviews' },
      { name: t('links.instagram'), href: '#instagram' },
      { name: t('links.linkedin'), href: '#linkedin' },
    ],
    licenses: [
      { name: t('links.pricing'), href: '#pricing' },
      { name: t('links.plugins'), href: '#plugins' },
      { name: t('links.studentAccess'), href: '#student-access' },
    ],
    contact: [{ name: t('links.bookCall'), href: '#book-a-call' }],
    legal: [
      { name: t('links.terms'), href: 'https://app.typus.ai/terms' },
      {
        name: t('links.dataPrivacy'),
        href: 'https://app.typus.ai/data-privacy',
      },
      { name: t('links.imprint'), href: 'https://app.typus.ai/imprint' },
    ],
  }

  return (
    <footer className='bg-white border-t border-gray-100 '>
      <div className='max-w-6xl mx-auto px-4 py-4'>
        {/* Logo Section */}
        <div className='mb-12 flex flex-col items-center space-y-2'>
          <div className='bg-black size-4 m-3'></div>
          <span
            className='text-center uppercase'
            style={{
              fontFamily: "var(--font-source-serif-4), 'Source Serif 4', serif",
              fontSize: '18px',
              fontWeight: 300,
              letterSpacing: '2.5px',
              lineHeight: '1.3em',
              color: '#000',
              textTransform: 'uppercase',
            }}
          >
            typus.AI
          </span>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8'>
          <div>
            <h3 className='text-[10px] md:text-[11px] lg:text-[13px] font-medium text-gray-800 uppercase mb-4'>
              {t('solutions')}
            </h3>
            <ul className='space-y-2'>
              {footerLinks.solutions.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-[12px] font-medium text-gray-900'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-[10px] md:text-[11px] lg:text-[13px] font-medium text-gray-800 uppercase mb-4'>
              {t('community')}
            </h3>
            <ul className='space-y-2'>
              {footerLinks.community.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-[12px] font-medium text-gray-900'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-[10px] md:text-[11px] lg:text-[13px] font-medium text-gray-800 uppercase mb-4'>
              {t('licenses')}
            </h3>
            <ul className='space-y-2'>
              {footerLinks.licenses.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-[12px] font-medium text-gray-900'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-[10px] md:text-[11px] lg:text-[13px] font-medium text-gray-800 uppercase mb-4'>
              {t('contact')}
            </h3>
            <ul className='space-y-2'>
              {footerLinks.contact.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-[12px] font-medium text-gray-900'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-[10px] md:text-[11px] lg:text-[13px] font-medium text-gray-800 uppercase mb-4'>
              {t('legal')}
            </h3>
            <ul className='space-y-2'>
              {footerLinks.legal.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-[12px] font-medium text-gray-900'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='flex flex-wrap gap-4 justify-center mt-10 w-full items-center'>
          <Image
            className='h-9 w-auto'
            src='/eu-kofinanziert-von-der-europaeischen-union.png'
            alt=''
            width={200}
            height={200}
          />
          <Image
            className='h-9 w-auto'
            src='/Logo_MWIKE.jpg'
            alt=''
            width={200}
            height={200}
          />
        </div>

        <div className='mt-12 xl:mt-24 flex justify-center'>
          <SupportedPaymentMethods className='max-w-xl' />
        </div>

        <div className='border-t mt-10 border-gray-100 pt-8'>
          <p className='text-xs text-center text-gray-500'>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
