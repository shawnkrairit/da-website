import { PRACTICES } from "@/data/practices";
import type { LocaleKey } from "@/data/practices";
import { getTranslations, getLocale } from "next-intl/server";

async function WhatWeDo() {
    const [t, rawLocale] = await Promise.all([
        getTranslations('HomePage.whatWeDoSection'),
        getLocale(),
    ])
    const locale = (rawLocale as LocaleKey) in { en: 1, th: 1, cn: 1 } ? rawLocale as LocaleKey : 'en'

    return (
        <section id="practices" className="border-t border-rule py-[clamp(72px,9vw,128px)]">
            <div className="wrap">
                <div className="grid grid-cols-1 items-end gap-x-6 gap-y-4 lg:grid-cols-12">
                    <h2 className="text-[clamp(1.875rem,1.35rem+1.9vw,3rem)] lg:col-span-5">{t('title')}</h2>
                    <p className="max-w-[52ch] text-ink-soft lg:col-span-7 lg:col-start-6">{t('description')}</p>
                </div>

                <ul className="mt-[clamp(40px,5vw,72px)] grid grid-cols-1 gap-x-[clamp(32px,6vw,96px)] border-t border-rule-strong md:grid-cols-2">
                    {PRACTICES.map((p) => (
                        <li key={p.key} className="border-b border-rule pb-6 pt-5.5">
                            <h3 className="text-[clamp(1.375rem,1.2rem+0.6vw,1.75rem)] leading-tight tracking-[-0.01em]">
                                {p.content[locale].title}
                            </h3>
                            <p className="mt-2 max-w-[50ch] text-[0.9375rem] leading-[1.55] text-ink-soft">
                                {p.content[locale].description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default WhatWeDo;
