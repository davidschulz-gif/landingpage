import React from 'react'
import { Megaphone, ShoppingCart, Sparkles, Users, ShieldCheck } from 'lucide-react'
import { CornerSquares } from '@/components/common/corner-squares'

interface AdvantagesSectionProps {
  t: (key: string) => string
}

export function AdvantagesSection({ t }: AdvantagesSectionProps) {
  const advantageItems = [
    { icon: Megaphone },
    { icon: ShoppingCart },
    { icon: Sparkles },
    { icon: Users },
    { icon: ShieldCheck },
  ]

  return (
    <section className="py-10 border-t border-neutral-200/80 dark:border-neutral-800 space-y-8">
      <div className="w-full space-y-8">
        <h3 className="heading-primary text-2xl sm:text-3xl" style={{ fontFamily: 'Arial' }}>
          {t('slide9.title')}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {advantageItems.map((col, idx) => (
            <div
              key={idx}
              className="relative p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-2xs flex flex-col justify-between space-y-4 text-center hover:shadow-lg transition"
            >
              <CornerSquares size="w-1.5 h-1.5" />
              <col.icon className="w-7 h-7 text-neutral-800 dark:text-neutral-200 mx-auto stroke-[1.5]" />
              <div className="space-y-1">
                <div
                  className="text-2xl sm:text-3xl font-mono text-neutral-900 dark:text-white font-medium"
                  style={{ fontFamily: 'Arial, monospace' }}
                >
                  {t(`slide9.items.${idx}.num`)}
                </div>
                <div
                  className="subheading-primary text-xs sm:text-sm text-neutral-900 dark:text-white"
                  style={{ fontFamily: 'Arial' }}
                >
                  {t(`slide9.items.${idx}.title`)}
                </div>
              </div>
              <p
                className="subheading-primary text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 leading-snug"
                style={{ fontFamily: 'Arial' }}
              >
                {t(`slide9.items.${idx}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
