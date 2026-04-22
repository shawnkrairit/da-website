import CrossBorderWork from "@/components/homepage/CrossBorderWork";
import GlobalReach from "@/components/homepage/GlobalReach";
import HeroSection from "@/components/homepage/HeroSection";
import Ranking from "@/components/homepage/Ranking";
import SectorsWeServe from "@/components/homepage/SectorsWeServe";
import TrustBar from "@/components/homepage/TrustBar";
import WhatWeDo from "@/components/homepage/WhatWeDo";
import { getTranslations } from "next-intl/server";

async function UserHomePage() {
    const t = await getTranslations('HomePage')
    return (
        <div className="flex flex-col w-full">
            <HeroSection/>
            <TrustBar/>
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/8">
                <div className="flex flex-col items-center text-center py-8 lg:py-10 px-2 gap-4 md:border-r border-b md:border-b-0 border-white/8">
                    <p className="font-heading text-3xl md:text-5xl">10</p>
                    <p className="text-gold uppercase text-sm tracking-wider">{t('statistics.practiceAreas')}</p>
                    <p className="max-w-xs text-text-secondary text-sm">{t('statistics.practiceAreas_content')}</p>
                </div>
                <div className="flex flex-col items-center text-center py-8 lg:py-10 px-2 gap-4 md:border-r border-b md:border-b-0 border-white/8">
                    <p className="font-heading text-3xl md:text-5xl">3</p>
                    <p className="text-gold uppercase text-sm tracking-wider">{t('statistics.workingLang')}</p>
                    <p className="max-w-xs text-text-secondary text-sm">{t('statistics.workingLang_content')}</p>
                </div>
                <div className="flex flex-col items-center text-center py-8 lg:py-10 px-2 gap-4">
                    <p className="font-heading text-3xl md:text-5xl">BOI</p>
                    <p className="text-gold uppercase text-sm tracking-wider">{t('statistics.boi')}</p>
                    <p className="max-w-xs text-text-secondary text-sm">{t('statistics.boi_content')}</p>
                </div>
            </div>

            <WhatWeDo/>

            <CrossBorderWork/>

            <SectorsWeServe/>

            <Ranking/>

            <GlobalReach/>
        </div>
    );
}

export default UserHomePage;