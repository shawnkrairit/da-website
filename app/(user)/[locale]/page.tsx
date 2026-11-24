import CrossBorderWork from "@/components/homepage/CrossBorderWork";
import FAQ from "@/components/homepage/FAQ";
import GlobalReach from "@/components/homepage/GlobalReach";
import HeroSection from "@/components/homepage/HeroSection";
import Ranking from "@/components/homepage/Ranking";
import SectorsWeServe from "@/components/homepage/SectorsWeServe";
import TalkToUs from "@/components/homepage/TalkToUs";
import WhatWeDo from "@/components/homepage/WhatWeDo";

function UserHomePage() {
    return (
        <div className="flex flex-col w-full">
            <HeroSection/>
            <WhatWeDo/>

            <CrossBorderWork/>

            <SectorsWeServe/>

            <Ranking/>

            <GlobalReach/>

            <FAQ/>

            <TalkToUs/>
        </div>
    );
}

export default UserHomePage;