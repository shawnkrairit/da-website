'use client'

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { animate } from "motion";
import { useEffect, useState } from "react";
import { r2 } from "@/lib/image";

const EASE: [number, number, number, number] = [0.16, 1, 0.2, 1];

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const controls = animate(0, to, {
            duration: 1.8,
            ease: 'easeOut',
            onUpdate: (v) => setCount(Math.round(v)),
        });
        return () => controls.stop();
    }, [to]);

    return <>{count}{suffix}</>;
}

function MetricCard({ number, suffix = '', label }: {
    number: number;
    suffix?: string;
    label: string;
}) {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/3 p-8 text-left transition-all duration-400 hover:-translate-y-0.5 hover:border-[rgba(212,168,83,0.2)] hover:bg-white/5">
            <div
                className="absolute inset-x-0 top-0 h-0.5 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }}
            />
            <div className="font-heading mb-2 text-4xl lg:text-5xl font-normal leading-none text-text-primary">
                <CountUp to={number} suffix={suffix} />
            </div>
            <div className="text-sm font-medium uppercase tracking-[2px] text-[rgba(232,228,221,0.3)]">
                {label}
            </div>
        </div>
    );
}

function HeroSection() {
    const t = useTranslations('HomePage.heroSection');
    const locale = useLocale();

    return (
        <section className="relative flex w-full min-h-[60vh] items-center overflow-hidden bg-forest-deep">
            {/* Background photo */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={r2('client/bangkok-river.jpg')}
                    alt=""
                    fill
                    className="object-cover object-center opacity-15 brightness-75 saturate-[0.3]"
                    priority
                    aria-hidden
                />
            </div>

            {/* Radial gradient overlay */}
            <div
                className="pointer-events-none absolute inset-0 z-1"
                style={{
                    background: [
                        'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(26,122,58,0.08) 0%, transparent 70%)',
                        'radial-gradient(ellipse 60% 80% at 20% 80%, rgba(212,168,83,0.04) 0%, transparent 60%)',
                        'linear-gradient(180deg, rgba(5,13,8,0) 0%, rgba(5,13,8,0.6) 100%)',
                    ].join(', '),
                }}
            />

            {/* Animated ambient orbs */}
            <motion.div
                animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0], scale: [1, 1.05, 0.95, 1] }}
                transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut', times: [0, 0.33, 0.66, 1] }}
                className="pointer-events-none absolute -right-25 -top-50 z-1 size-150 rounded-full bg-emerald opacity-[0.12] blur-[80px]"
            />
            <motion.div
                animate={{ x: [0, -30, 20, 0], y: [0, 40, -20, 0], scale: [1, 0.95, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut', times: [0, 0.33, 0.66, 1], delay: 7 }}
                className="pointer-events-none absolute -bottom-25 -left-12.5 z-1 size-100 rounded-full bg-gold opacity-[0.06] blur-[80px]"
            />
            <motion.div
                animate={{ x: [0, 20, -15, 0], y: [0, -20, 10, 0], scale: [1, 1.05, 0.95, 1] }}
                transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut', times: [0, 0.33, 0.66, 1], delay: 14 }}
                className="pointer-events-none absolute left-[60%] top-[30%] z-1 size-75 rounded-full bg-emerald-dim opacity-[0.08] blur-[80px]"
            />

            {/* Main content grid */}
            <div className="relative z-2 mx-auto grid grid-cols-1 md:grid-cols-2 w-full max-w-350 items-center gap-10 md:gap-20 
            px-4 lg:px-12 pb-30 pt-45">

                {/* ── Left ── */}
                <div className="max-w-165 flex flex-col gap-6 lg:gap-8">
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: EASE, delay: 0.3 }}
                        className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[4px] text-gold"
                    >
                        <span className="h-px w-10 shrink-0 bg-gold opacity-50" />
                        {t('eyebrow')}
                    </motion.div>

                    {/* H1 */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: EASE, delay: 0.5 }}
                        className="font-normal leading-[1.1] tracking-[-0.5px] text-white text-[clamp(42px,5.5vw,68px)]"
                    >
                        {locale === 'en' ? (
                            <>Legal expertise<br /><em className="text-gold">with a commercial edge</em></>
                        ) : locale === 'th' ? (
                            <>ความเชี่ยวชาญทางกฎหมาย<br /><em className="text-gold">ที่ตอบโจทย์ธุรกิจ</em></>
                        ) : (
                            <>专业法律服务<br /><em className="text-gold">兼具商业洞察</em></>
                        )}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: EASE, delay: 0.7 }}
                        className="max-w-120 leading-[1.8] text-text-secondary"
                    >
                        {t('description')}
                    </motion.p>

                    {/* CTA row */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: EASE, delay: 0.9 }}
                        className="flex flex-col lg:flex-row items-center md:items-start gap-4"
                    >
                        <Link
                            href="#practices"
                            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-8 py-4 font-semibold tracking-[0.5px] text-forest transition-all duration-300 hover:-translate-y-0.5 w-full md:w-fit"
                        >
                            {t('explore_button')}
                            <span className="text-base transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-8 py-4 font-medium text-text-primary transition-all duration-300 hover:border-gold hover:bg-gold-muted hover:text-gold w-full md:w-fit"
                        >
                            {t('getintouch_button')}
                        </Link>
                    </motion.div>
                </div>

                {/* ── Right: metrics ── */}
                <div className="flex flex-col gap-4">
                    <MetricCard number={40} label={t('yearsOfPractice')} />
                    <div className="grid grid-cols-2 gap-4">
                        <MetricCard number={80} suffix="%+" label={t('multinational')} />
                        <MetricCard number={11} label={t('asean_countries')} />
                    </div>
                    <MetricCard number={20} suffix="+" label={t('licensed_attorneys')} />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
