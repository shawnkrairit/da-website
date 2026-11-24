import { getTranslations, getLocale } from "next-intl/server";
import type { LocaleKey } from "@/data/practices";
import { STATS } from "@/data/crossBorderWork";
import Section from "../global/Section";

async function CrossBorderWork() {
    const [t, rawLocale] = await Promise.all([
        getTranslations('HomePage.crossBorderSection'),
        getLocale(),
    ])
    const locale = (rawLocale as LocaleKey) in { en: 1, th: 1, cn: 1 } ? rawLocale as LocaleKey : 'en'

    return (
        <Section
            title={t.rich('title', { br: () => <br /> })}
            description={t.rich('description', { br: () => <br /> })}
        >
            <dl className="border-t border-rule-strong">
                {STATS.map((s) => {
                    const { label, description } = s.content[locale]
                    return (
                        <div key={s.key} className="grid grid-cols-1 gap-x-8 gap-y-1.5 border-b border-rule pb-6 pt-5.5 sm:grid-cols-12">
                            <dt className="font-heading text-[1.375rem] leading-tight sm:col-span-5">
                                <span className="mr-[0.35em] inline-block min-w-[2ch] tabular-nums">{s.value}</span>
                                {label}
                            </dt>
                            <dd className="text-ink-soft sm:col-span-7">{description}</dd>
                        </div>
                    )
                })}
            </dl>
        </Section>
    );
}

export default CrossBorderWork;
