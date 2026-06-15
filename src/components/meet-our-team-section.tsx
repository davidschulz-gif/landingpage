'use client'

import { motion } from 'framer-motion'
import { LinkedinIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { BreathingAnimationText } from './breathing-animation-text'

const teamMembers = [
  // {
  //   id: 'julia',
  //   name: 'JULIA GÖGE',
  //   role: 'CONTENT MARKETING',
  //   image: '/team/juliagoge.png',
  //   linkedin: 'https://www.linkedin.com/in/julia-g%C3%B6ge-6256741a2/',
  // },
  {
    id: 'dominik',
    name: 'DOMINIK DENNY',
    role: 'ACCOUNT MANAGER',
    image: '/DominikDenny.png',
    linkedin: '#',
  },
  {
    id: 'adavkayser',
    role: 'Account Managerin',
    name: 'Ada von Kayser',
    image: '/team/adavkayser.jpeg',
    linkedin: 'https://www.linkedin.com/in/adavkayser/'
  },
  // {
  //   id: 'bjarne',
  //   name: 'BJARNE WEBER',
  //   role: 'VISUALIZER',
  //   image: '/BjarneWeber.webp',
  //   linkedin: '#',
  // },
  {
    id: 'marc-langer',
    name: 'MARC LANGER',
    role: 'SALES',
    image: '/marc-langer.png',
    linkedin: 'https://www.linkedin.com/in/marc-langer-b78338356/',
  },
]

export function MeetOurTeamSection() {
  const t = useTranslations('Team')

  return (
    <section className='py-10' style={{ backgroundColor: '#fcfcfd' }}>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-12'>
          <BreathingAnimationText animationType='black-gray'>
            <motion.h2
              className='text-[30px] text-gray-900 mb-3 font-normal'
              style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-50px' }}
            >
              {t('title')}
            </motion.h2>
          </BreathingAnimationText>
        </div>

        {/* Team Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: 'easeOut',
              }}
              viewport={{ once: true, margin: '-50px' }}
              className='group'
            >
              <div className='relative group'>
                <div className='absolute inset-0  bg-gradient-to-r from-red-500 via-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-all duration-500 p-[2px]'>
                  <div className='w-full h-full bg-[#fcfcfd] '></div>
                </div>
                <div className='bg-white p-8 text-center relative z-10 border-2 border-transparent group-hover:border-transparent transition-all duration-500'>
                  {/* Profile Image */}
                  <div className='relative w-48 h-48 mx-auto mb-6 overflow-hidden flex-shrink-0'>
                    <div className='w-full h-full p-10'>
                      <Image
                        src={member.image}
                        alt=''
                        width={192}
                        height={192}
                        className='w-full h-full rounded-full object-cover object-center group-hover:scale-105 transition-transform duration-300'
                        sizes='192px'
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <BreathingAnimationText animationType='black-gray'>
                    <h3
                      className='text-lg font-bold text-gray-900 mb-2'
                      style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                    >
                      {member.name}
                    </h3>
                  </BreathingAnimationText>

                  {/* Role */}
                  <BreathingAnimationText animationType='black-gray'>
                    <p
                      className='text-sm text-gray-600 mb-6'
                      style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                    >
                      {member.role}
                    </p>
                  </BreathingAnimationText>

                  {/* LinkedIn Link */}
                  <motion.a
                    href={member.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center justify-center text-gray-600 transition-all duration-300 hover:text-gray-800'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={member.name}
                  >
                    <LinkedinIcon className='w-4 h-4' />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
