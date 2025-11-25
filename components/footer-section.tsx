'use client'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const footerLinks = {
  solutions: [
    { name: 'Create', href: '#create' },
    { name: 'Edit', href: '#edit' },
    { name: 'Upscale', href: '#upscale' },
  ],
  community: [
    { name: 'Tutorials', href: '#tutorials' },
    { name: 'Press', href: '#press' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Instagram', href: '#instagram' },
    { name: 'Linkedin', href: '#linkedin' },
  ],
  licenses: [
    { name: 'Pricing', href: '#pricing' },
    { name: 'Plugins', href: '#plugins' },
    { name: 'Student Access', href: '#student-access' },
  ],
  contact: [{ name: 'Book a Call', href: '#book-a-call' }],
  legal: [
    { name: 'Terms', href: 'https://app.typus.ai/terms' },
    { name: 'Data Privacy', href: 'https://app.typus.ai/data-privacy' },
    { name: 'Imprint', href: 'https://app.typus.ai/imprint' },
  ],
}

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
              Solutions
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
              Community
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
              Licenses
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
              Contact
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
              Legal
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

        <div className='border-t mt-10 border-gray-100 pt-8'>
          <p className='text-xs text-center text-gray-500'>
            © 2025 Typus.AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
