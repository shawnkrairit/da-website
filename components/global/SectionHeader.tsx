'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'

const EASE: [number, number, number, number] = [0.16, 1, 0.2, 1]

type Props = {
    eyebrow: string
    title: ReactNode
    description?: ReactNode
}

function SectionHeader({ eyebrow, title, description }: Props) {
    return (
        <div className="flex flex-col gap-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: EASE, delay: 0.1 }}
                className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[4px] text-gold"
            >
                <span className="h-px w-10 shrink-0 bg-gold opacity-50" />
                {eyebrow}
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: EASE, delay: 0.25 }}
                className="font-heading text-5xl font-semibold"
            >
                {title}
            </motion.h2>

            {description && (
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: EASE, delay: 0.4 }}
                    className="text-base text-text-secondary max-w-2xl"
                >
                    {description}
                </motion.p>
            )}
        </div>
    )
}

export default SectionHeader
