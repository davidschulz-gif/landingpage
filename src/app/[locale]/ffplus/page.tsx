'use client'

import { NavbarDemo } from '@/components/adaptive-navbar-2'
import { FooterSection } from '@/components/footer-section'
import { ToastProvider } from '@/components/providers/toast-provider'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FFplusPage() {
    const t = useTranslations('ffplus')

    return (
        <div className='relative w-full bg-white dark:bg-black text-black dark:text-white min-h-screen'>
            <NavbarDemo />

            <main className="pt-32 pb-16 px-4 md:px-8 max-w-5xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        {t('title')}
                    </h1>
                    
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                        {t('intro')}
                    </p>

                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                        {t('unlike')}
                    </p>

                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                        {t('together')}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl font-semibold">
                        {t('why_title')}
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        {t('why_desc')}
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 dark:text-gray-300">
                        <li>{t('why_list_1')}</li>
                        <li>{t('why_list_2')}</li>
                        <li>{t('why_list_3')}</li>
                        <li>{t('why_list_4')}</li>
                    </ul>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        {t('why_end')}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl font-semibold">
                        {t('what_title')}
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        {t('what_desc_1')}
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        {t('what_desc_2')}
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        {t('what_desc_3')}
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 dark:text-gray-300">
                        <li>{t('what_list_1')}</li>
                        <li>{t('what_list_2')}</li>
                        <li>{t('what_list_3')}</li>
                        <li>{t('what_list_4')}</li>
                        <li>{t('what_list_5')}</li>
                    </ul>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        {t('what_end')}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl font-semibold">
                        {t('benefits_title')}
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        {t('benefits_desc')}
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 dark:text-gray-300">
                        <li>{t('benefits_list_1')}</li>
                        <li>{t('benefits_list_2')}</li>
                        <li>{t('benefits_list_3')}</li>
                        <li>{t('benefits_list_4')}</li>
                        <li>{t('benefits_list_5')}</li>
                        <li>{t('benefits_list_6')}</li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl font-semibold">
                        {t('vision_title')}
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        {t('vision_desc_1')}
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        {t('vision_desc_2')}
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 dark:text-gray-300">
                        <li>{t('vision_list_1')}</li>
                        <li>{t('vision_list_2')}</li>
                        <li>{t('vision_list_3')}</li>
                    </ul>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        {t('vision_end')}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-16 p-8 bg-gray-50 dark:bg-zinc-900 rounded-2xl space-y-4"
                >
                    <Link href="https://www.ffplus-project.eu" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:underline">
                        {t('footer_link')}
                    </Link>
                    <p className="text-gray-600 dark:text-gray-400">
                        {t('footer_desc_1')}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                        {t('footer_desc_2')}
                    </p>
                </motion.div>
            </main>

            <FooterSection />
            <ToastProvider />
        </div>
    )
}
