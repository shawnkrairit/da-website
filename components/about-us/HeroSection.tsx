import { getTranslations } from "next-intl/server";
import SectionHeader from "@/components/global/SectionHeader";

async function AboutHeroSection() {
    const t = await getTranslations('AboutPage.heroSection')

    return (
        <section className="pb-[clamp(56px,7vw,104px)] pt-[clamp(56px,9vw,136px)]">
            <div className="wrap">
                <SectionHeader
                    as="h1"
                    eyebrow={t('eyebrow')}
                    title={t.rich('title', {
                        br:   () => <br />,
                        gold: (chunks) => <>{chunks}</>,
                    })}
                    description={t('description')}
                />
            </div>
        </section>
    );
}

export default AboutHeroSection;
