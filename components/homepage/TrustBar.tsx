'use client'

import { motion, useMotionValue, useAnimationFrame } from 'motion/react'
import { useRef, useState } from 'react'

const ITEMS = [
    'INTA — Member since 1997',
    'APAA — Member',
    'AIPPI — Thailand National Group',
    'ASEAN IPA — Corporate Member',
    'IPBA — Member',
    'WTR 1000 — Recommended',
]

const TRACK = [...ITEMS, ...ITEMS]

function TrustBar() {
    const [hovered, setHovered] = useState(false)
    const x = useMotionValue(0)
    const trackRef = useRef<HTMLDivElement>(null)
    const speed = useRef(0.04)

    useAnimationFrame((_, delta) => {
        const target = hovered ? 0.012 : 0.04
        speed.current += (target - speed.current) * 0.05

        const half = (trackRef.current?.offsetWidth ?? 0) / 2
        const next = x.get() - delta * speed.current
        x.set(next <= -half ? 0 : next)
    })

    return (
        <div
            className="border-y border-white/6 bg-forest-deep/50 py-5 overflow-hidden cursor-default"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <motion.div ref={trackRef} className="flex gap-12 w-max" style={{ x }}>
                {TRACK.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 shrink-0">
                        <span className="block size-1.5 rounded-full bg-gold/40" />
                        <span className="text-text-secondary font-medium text-xs tracking-wider whitespace-nowrap">
                            {item}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default TrustBar
