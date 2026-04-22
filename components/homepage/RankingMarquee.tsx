'use client'

import { motion, useMotionValue, useAnimationFrame } from 'motion/react'
import { useRef, useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { CREDENTIALS } from '@/data/rankings'

const TRACK = [...CREDENTIALS, ...CREDENTIALS]

function RankingMarquee() {
    const [hovered, setHovered] = useState(false)
    const x = useMotionValue(0)
    const trackRef = useRef<HTMLDivElement>(null)
    const speed = useRef(0.035)

    useAnimationFrame((_, delta) => {
        const target = hovered ? 0.008 : 0.035
        speed.current += (target - speed.current) * 0.05
        const half = (trackRef.current?.offsetWidth ?? 0) / 2
        const next = x.get() - delta * speed.current
        x.set(next <= -half ? 0 : next)
    })

    return (
        <div
            className="overflow-hidden cursor-default py-2"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <motion.div ref={trackRef} className="flex gap-4 w-max" style={{ x }}>
                {TRACK.map((c, i) => (
                    <Card
                        key={`${c.key}-${i}`}
                        className="rounded-lg w-72 shrink-0 bg-forest border-white/8 hover:bg-forest-mid transition-colors duration-300"
                    >
                        <CardHeader className="pt-5 px-5">
                            <p className="text-xs font-semibold uppercase tracking-wider text-gold/70 pb-1">
                                {c.source}
                            </p>
                            <p className="font-heading text-xl font-semibold text-text-primary leading-tight">
                                {c.name}
                            </p>
                        </CardHeader>
                        <CardContent className="px-5 pb-5">
                            <p className="text-sm text-text-secondary leading-relaxed">
                                {c.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </motion.div>
        </div>
    )
}

export default RankingMarquee
