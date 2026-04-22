import { getTranslations } from "next-intl/server";
import SectionHeader from "../global/SectionHeader";
import RankingMarquee from "./RankingMarquee";

async function Ranking() {
    const t = await getTranslations('HomePage.ranking')

    return (
        <section className="flex w-full flex-col items-center gap-16 overflow-hidden py-26">
            <div className="container px-4 lg:px-0">
                <SectionHeader
                    eyebrow={t('eyebrow')}
                    title={t.rich('title', { br: () => <br /> })}
                    description={t.rich('description', { br: () => <br /> })}
                />
            </div>

            <RankingMarquee />
        </section>
    );
}

export default Ranking;
