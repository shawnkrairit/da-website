import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LocaleSwitcher from "./LocaleSwitcher";
import { Button } from "../ui/button";

function Header() {
    const t = useTranslations('Global')

    return (
        <div className="bg-forest-deep min-h-20 flex items-center justify-center">
            <div className="container flex flex-row justify-between h-full">
                <Image
                    src='/dejudom-associates-logo-white.png'
                    width={300}
                    height={80}
                    alt="Dejudom & Associates Logo"
                />
                <div className="flex flex-row items-center gap-6 text-text-secondary text-sm">
                    <Link href='/' passHref>
                        <Button variant='link' className="text-text-secondary hover:cursor-pointer decoration-gold">
                            {t('Header.Home')}
                        </Button>
                    </Link>
                    <Link href='/about'>
                        <Button variant='link' className="text-text-secondary hover:cursor-pointer decoration-gold">
                            {t('Header.About')}
                        </Button>
                    </Link>
                    <Link href='/expertise'>
                        <Button variant='link' className="text-text-secondary hover:cursor-pointer decoration-gold">
                            {t('Header.Expertise')}
                        </Button>
                    </Link>
                    <Link href='/insight'>
                        <Button variant='link' className="text-text-secondary hover:cursor-pointer decoration-gold">
                            {t('Header.Insights')}
                        </Button>
                    </Link>
                    <Link href='/careers'>
                        <Button variant='link' className="text-text-secondary hover:cursor-pointer decoration-gold">
                            {t('Header.Careers')}
                        </Button>
                    </Link>
                </div>
                <LocaleSwitcher/>
               <div className="flex items-center">
                    <Button className="rounded-full bg-gold text-forest hover:cursor-pointer font-base px-4 py-4">
                        CONTACT
                    </Button>
               </div>
            </div>
        </div>
    );
}

export default Header;