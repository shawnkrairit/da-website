import { getTranslations, getLocale } from "next-intl/server";
import type { LocaleKey } from "@/data/practices";
import SectionHeader from "../global/SectionHeader";
import RankingMarquee from "./RankingMarquee";

async function Ranking() {
    const [t, rawLocale] = await Promise.all([
        getTranslations('HomePage.rankingSection'),
        getLocale(),
    ])
    const locale = (rawLocale as LocaleKey) in { en: 1, th: 1, cn: 1 } ? rawLocale as LocaleKey : 'en'

    return (
        <section className="flex w-full flex-col items-center gap-16 overflow-hidden pt-26">
            <div className="container px-4 lg:px-0">
                <SectionHeader
                    eyebrow={t('eyebrow')}
                    title={t.rich('title', { br: () => <br /> })}
                    description={t.rich('description', { br: () => <br /> })}
                />
            </div>

            <RankingMarquee locale={locale} />
        </section>
    );
}

export default Ranking;
