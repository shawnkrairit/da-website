import type { LocaleKey } from "@/data/practices";
import { SECTORS } from "@/data/sectors";
import { getTranslations, getLocale } from "next-intl/server";
import SectionHeader from "@/components/global/SectionHeader";
import SectorAccordion from "./SectorAccordion";
import Image from "next/image";
import { r2 } from "@/lib/image";

async function SectorsWeServe() {
    const [t, rawLocale] = await Promise.all([
        getTranslations('HomePage.sectorsWeServeSection'),
        getLocale(),
    ])
    const locale = (rawLocale as LocaleKey) in { en: 1, th: 1, cn: 1 } ? rawLocale as LocaleKey : 'en'

    return (
        <section className="relative flex w-full items-center overflow-hidden bg-forest-deep">
            {/* Background photo */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={r2('client/yaowarat-background.png')}
                    alt="Sectors / Industries Dejudom serves"
                    fill
                    className="object-cover object-center opacity-20"
                    priority
                    aria-hidden
                />
            </div>

            {/* Radial gradient overlay */}
            <div className="pointer-events-none absolute inset-0 z-1 bg-forest-deep/50" />

            <div className="relative z-2 mx-auto flex flex-col container gap-16 py-26 px-4 lg:px-0">
                <SectionHeader
                    eyebrow={t('eyebrow')}
                    title={t.rich('title', {br: () => <br />})}
                    description={t.rich('description', {br: () => <br />})}
                />
                <SectorAccordion sectors={SECTORS} locale={locale} />
            </div>
        </section>
    );
}

export default SectorsWeServe;
