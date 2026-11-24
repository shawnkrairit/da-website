import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const LINKS = [
    { href: '/about',     key: 'Header.About' },
    { href: '/expertise', key: 'Header.Expertise' },
    { href: '/insight',   key: 'Header.Insights' },
    { href: '/careers',   key: 'Header.Careers' },
    { href: '/contact',   key: 'Header.Contact' },
] as const;

async function Footer() {
    const [t, c] = await Promise.all([
        getTranslations('Global'),
        getTranslations('HomePage.talkToUsSection'),
    ]);
    const phone = c('phone');
    const email = c('email');
    const linkCls = "inline-flex min-h-10 items-center text-[0.9375rem] text-on-dark-soft transition-colors duration-150 hover:text-white";

    return (
        <footer className="on-dark bg-brand pb-8 pt-[clamp(56px,7vw,96px)] text-white">
            <div className="wrap">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-12">
                    <div className="md:col-span-6">
                        <Image
                            src="/dejudom-associates-logo-white.png"
                            width={230}
                            height={60}
                            alt="Dej-Udom & Associates, Attorneys at Law"
                            className="h-14 w-auto"
                        />
                        <p className="mt-6 max-w-[34ch] text-[0.9375rem] text-on-dark-soft">{c('address')}</p>
                    </div>
                    <nav aria-label="Footer" className="flex flex-col md:col-span-3">
                        {LINKS.map(({ href, key }) => (
                            <Link key={href} href={href} className={linkCls}>{t(key)}</Link>
                        ))}
                    </nav>
                    <div className="flex flex-col md:col-span-3">
                        <a href={`tel:${phone.replace(/\(0\)|[^+\d]/g, '')}`} className={`${linkCls} whitespace-nowrap tabular-nums`}>{phone}</a>
                        <a href={`mailto:${email}`} className={`${linkCls} whitespace-nowrap`}>{email}</a>
                    </div>
                </div>
                <p className="mt-[clamp(40px,6vw,72px)] border-t border-rule-on-dark pt-5 text-[0.8125rem] text-on-dark-soft">
                    © {new Date().getFullYear()} Dej-Udom &amp; Associates
                </p>
            </div>
        </footer>
    );
}

export default Footer;
