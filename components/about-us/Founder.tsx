import Image from 'next/image'
import { getTranslations, getLocale } from 'next-intl/server'
import SectionHeader from '@/components/global/SectionHeader'
import { FOUNDER_NARRATIVE, FOUNDER_TIMELINE } from '@/data/about-us'
import type { LocaleKey } from '@/data/practices'
import { r2 } from '@/lib/image'

async function Founder() {
    const [t, rawLocale] = await Promise.all([
        getTranslations('AboutPage.founderSection'),
        getLocale(),
    ])
    const locale = (rawLocale as LocaleKey) in { en: 1, th: 1, cn: 1 } ? rawLocale as LocaleKey : 'en'
    const narrative = FOUNDER_NARRATIVE[locale]

    return (
        <section id="founder" className="w-full border-t border-rule py-[clamp(72px,9vw,128px)]">
            <div className="wrap flex flex-col gap-16">
                <SectionHeader
                    eyebrow={t('eyebrow')}
                    title={t.rich('title', { br: () => <br /> })}
                    description={t('description')}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left: profile + narrative */}
                    <div className="flex flex-col gap-8">

                        {/* Avatar + name */}
                        <div className="flex items-center gap-6">
                            <div className="size-24 shrink-0 rounded-full border border-rule overflow-hidden">
                                <Image
                                    src={r2('admin/attorney/Dejudom Krairit 4-5.webp')}
                                    alt="Prof. Dej-Udom Krairit"
                                    width={96}
                                    height={96}
                                    className="size-full object-cover object-top"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl mb-1">{t('founder')}</h3>
                                <p className="text-[0.9375rem] font-medium mb-1">{t('position_title')}</p>
                                <p className="text-[0.8125rem] text-ink-soft">{t('since')}</p>
                            </div>
                        </div>

                        {/* Narrative */}
                        <div className="flex flex-col gap-6 text-base text-text-secondary leading-relaxed">
                            <p className="first-letter:font-heading first-letter:text-5xl first-letter:float-left first-letter:leading-none first-letter:mr-3 first-letter:mt-2">
                                {narrative[0]}
                            </p>
                            <p>{narrative[1]}</p>
                            <p>{narrative[2]}</p>
                        </div>
                    </div>

                    {/* Right: timeline */}
                    <div className="relative pl-10">
                        <div className="absolute left-0 top-4 bottom-4 w-px bg-rule-strong" />

                        {FOUNDER_TIMELINE.map(({ year, content }, i) => (
                            <div key={year} className={i < FOUNDER_TIMELINE.length - 1 ? 'relative pb-10' : 'relative'}>
                                <div className="absolute -left-11 top-2 size-2.5 rounded-full bg-brand shadow-[0_0_0_4px_var(--color-paper)]" />
                                <p className="font-heading text-xl tabular-nums mb-2">{year}</p>
                                <p className="text-base text-text-secondary leading-relaxed">{content[locale]}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Founder
