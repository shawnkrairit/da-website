import type { LocaleKey } from "@/data/practices";
import { SECTORS } from "@/data/sectors";
import { getTranslations, getLocale } from "next-intl/server";
import Section from "../global/Section";

async function SectorsWeServe() {
    const [t, rawLocale] = await Promise.all([
        getTranslations('HomePage.sectorsWeServeSection'),
        getLocale(),
    ])
    const locale = (rawLocale as LocaleKey) in { en: 1, th: 1, cn: 1 } ? rawLocale as LocaleKey : 'en'

    return (
        <Section
            title={t.rich('title', { br: () => <br /> })}
            description={t.rich('description', { br: () => <br /> })}
        >
            <div className="grid grid-cols-1 gap-x-10 border-t border-rule-strong sm:grid-cols-2">
                {SECTORS.map((s) => {
                    const { name, detail } = s.content[locale]
                    return (
                        <div key={s.key} className="border-b border-rule pb-6.5 pt-5.5">
                            <h3 className="text-[1.375rem] leading-tight">{name}</h3>
                            <p className="mt-2 text-[0.9375rem] leading-[1.6] text-ink-soft">{detail}</p>
                        </div>
                    )
                })}
            </div>
        </Section>
    );
}

export default SectorsWeServe;
