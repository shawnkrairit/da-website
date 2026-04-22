import HeroSection from "@/components/homepage/HeroSection";
import TrustBar from "@/components/homepage/TrustBar";
import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";

async function UserHomePage() {
    const t = await getTranslations('HomePage')
    return (
        <div className="flex flex-col w-full">
            <HeroSection/>
            <TrustBar/>
        </div>
    );
}

export default UserHomePage;