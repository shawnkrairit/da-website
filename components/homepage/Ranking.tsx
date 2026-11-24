import { getTranslations, getLocale } from "next-intl/server";
import type { LocaleKey } from "@/data/practices";
import { CREDENTIALS } from "@/data/rankings";
import Section from "../global/Section";

async function Ranking() {
    const [t, rawLocale] = await Promise.all([
        getTranslations('HomePage.rankingSection'),
        getLocale(),
    ])
    const locale = (rawLocale as LocaleKey) in { en: 1, th: 1, cn: 1 } ? rawLocale as LocaleKey : 'en'

    return (
        <Section
            tone="dark"
            title={t.rich('title', { br: () => <br /> })}
            description={t.rich('description', { br: () => <br /> })}
        >
            <dl className="border-t border-rule-on-dark">
                {CREDENTIALS.map((c) => (
                    <div key={c.key} className="grid grid-cols-1 gap-x-8 gap-y-1.5 border-b border-rule-on-dark pb-5 pt-4.5 sm:grid-cols-12">
                        <dt className="sm:col-span-5">
                            <span className="block font-heading text-[1.375rem] leading-tight">{c.name}</span>
                            <span className="mt-1 block text-[0.8125rem] font-medium text-gold">{c.source}</span>
                        </dt>
                        <dd className="sm:col-span-7">{c.description[locale]}</dd>
                    </div>
                ))}
            </dl>
        </Section>
    );
}

export default Ranking;
