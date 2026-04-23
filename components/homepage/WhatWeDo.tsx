import { r2 } from "@/lib/image";
import { PRACTICES } from "@/data/practices";
import type { LocaleKey } from "@/data/practices";
import { getTranslations, getLocale } from "next-intl/server";
import Image from "next/image";
import SectionHeader from "@/components/global/SectionHeader";

async function WhatWeDo() {
    const [t, rawLocale] = await Promise.all([
        getTranslations('HomePage.whatWeDoSection'),
        getLocale(),
    ])
    const locale = (rawLocale as LocaleKey) in { en: 1, th: 1, cn: 1 } ? rawLocale as LocaleKey : 'en'

    return (
        <section className="relative flex w-full items-center overflow-hidden bg-forest-deep">
            {/* Background photo */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={r2('client/legal-discussion.jpg')}
                    alt="What We Do"
                    fill
                    className="object-cover object-center opacity-15 brightness-75 saturate-[0.3]"
                    priority
                    aria-hidden
                />
            </div>

            {/* Radial gradient overlay */}
            <div className="pointer-events-none absolute inset-0 z-1 bg-forest-deep/50" />

            <div className="relative z-2 mx-auto flex flex-col container gap-16 py-26 px-4 lg:px-0">
                <SectionHeader
                    eyebrow={t('eyebrow')}
                    title={t('title')}
                    description={t('description')}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 border border-white/8 rounded-lg overflow-hidden">
                    {PRACTICES.map((p, i) => {
                        const Icon = p.icon
                        const isLeftCol = i % 2 === 0
                        const isLastRow = i >= PRACTICES.length - 2
                        const isLast = i === PRACTICES.length - 1

                        return (
                            <div
                                key={p.key}
                                className={[
                                    'px-6 py-6 flex flex-row gap-4 transition-colors hover:bg-gold/5',
                                    isLeftCol ? 'md:border-r border-white/8' : '',
                                    !isLast ? 'border-b border-white/8' : '',
                                    isLastRow ? 'md:border-b-0' : '',
                                ].join(' ')}
                            >
                                <div className="shrink-0 bg-gold/10 rounded-lg p-3 h-fit">
                                    <Icon className="text-gold" size={20} />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="font-heading font-semibold text-lg text-text-primary">{p.content[locale].title}</p>
                                    <p className="text-text-secondary text-base leading-relaxed">{p.content[locale].description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default WhatWeDo;
