import { getTranslations } from "next-intl/server";
import SectionHeader from "@/components/global/SectionHeader";
import Image from "next/image";
import { r2 } from "@/lib/image";

async function AboutHeroSection() {
    const t = await getTranslations('AboutPage.heroSection')

    return (
        <section className="relative flex w-full justify-center items-center overflow-hidden bg-forest-deep">
            <div className="absolute inset-0 z-0">
                <Image
                    src={r2('client/office-business.jpg')}
                    alt=""
                    fill
                    className="object-cover object-center opacity-20"
                    priority
                    aria-hidden
                />
            </div>

            <div className="pointer-events-none absolute inset-0 z-1 bg-forest-deep/50" />

            <div className="relative z-2 mx-auto flex flex-col container gap-16 py-26 px-4 lg:px-0 pb-30 pt-45">
                <SectionHeader
                    eyebrow={t('eyebrow')}
                    title={t.rich('title', {
                        br:   () => <br />,
                        gold: (chunks) => <em className="text-gold">{chunks}</em>,
                    })}
                    description={t('description')}
                />
            </div>
        </section>
    );
}

export default AboutHeroSection;
