import { getTranslations, getLocale } from "next-intl/server";
import type { LocaleKey } from "@/data/practices";
import { STATS } from "@/data/crossBorderWork";
import SectionHeader from "../global/SectionHeader";

async function CrossBorderWork() {
    const [t, rawLocale] = await Promise.all([
        getTranslations('HomePage.crossBorderSection'),
        getLocale(),
    ])
    const locale = (rawLocale as LocaleKey) in { en: 1, th: 1, cn: 1 } ? rawLocale as LocaleKey : 'en'

    return (
        <section className="flex w-full justify-center overflow-hidden">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 py-26 px-4 lg:px-0">
                <SectionHeader
                    eyebrow={t('eyebrow')}
                    title={t.rich('title', { br: () => <br /> })}
                    description={t.rich('description', {br: () => <br />})}
                />

                <div className="flex flex-col">
                    {STATS.map((s, i) => {
                        const { label, description } = s.content[locale]
                        return (
                            <div
                                key={s.key}
                                className={`flex flex-row py-4 gap-4 ${i < STATS.length - 1 ? 'border-b border-white/8' : ''}`}
                            >
                                <div className="size-16 shrink-0 flex items-center justify-center bg-gold/10 rounded-lg text-gold font-heading font-semibold text-xl">
                                    {s.value}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="font-semibold text-lg">{label}</p>
                                    <p className="text-text-secondary">{description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default CrossBorderWork;
