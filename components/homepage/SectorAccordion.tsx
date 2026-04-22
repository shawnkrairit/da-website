'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { Sector } from '@/data/sectors'
import type { LocaleKey } from '@/data/practices'

type Props = {
    sectors: Sector[]
    locale: LocaleKey
}

function SectorAccordion({ sectors, locale }: Props) {
    const [openKey, setOpenKey] = useState<string | null>(null)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 bg-forest-deep border border-white/8 rounded-lg overflow-hidden">
            {sectors.map((s, i) => {
                const { name, detail } = s.content[locale]
                const isOpen = openKey === s.key
                const isLeftCol = i % 2 === 0
                const isLastRow = i >= sectors.length - 2
                const isLast = i === sectors.length - 1

                return (
                    <div
                        key={s.key}
                        className={[
                            'flex flex-col transition-colors hover:bg-white/2',
                            isLeftCol ? 'md:border-r border-white/8' : '',
                            !isLast ? 'border-b border-white/8' : '',
                            isLastRow ? 'md:border-b-0' : '',
                        ].join(' ')}
                    >
                        <button
                            onClick={() => setOpenKey(isOpen ? null : s.key)}
                            className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                            aria-expanded={isOpen}
                        >
                            <span className="font-heading font-medium text-base text-text-primary">
                                {name}
                            </span>
                            <motion.span
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.25, ease: 'easeInOut' }}
                                className="shrink-0 ml-4 text-gold/60"
                            >
                                <ChevronDown size={18} />
                            </motion.span>
                        </button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    key="content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                                >
                                    <p className="px-6 pb-5 text-sm text-text-secondary leading-relaxed">
                                        {detail}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )
            })}
        </div>
    )
}

export default SectorAccordion
