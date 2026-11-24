'use client'

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LocaleSwitcher from "./LocaleSwitcher";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { href: '/about',     key: 'Header.About' },
    { href: '/expertise', key: 'Header.Expertise' },
    { href: '/insight',   key: 'Header.Insights' },
    { href: '/careers',   key: 'Header.Careers' },
] as const;

const ABOUT_SECTIONS = [
    { href: '/about#founder', label: 'Our Founder' },
    { href: '/about#people',  label: 'Our People' },
    { href: '/about#publications', label: 'Publications' },
];

const linkCls =
    "relative inline-flex min-h-11 items-center text-[0.9375rem] font-medium " +
    "after:absolute after:inset-x-0 after:bottom-2 after:h-px after:origin-left after:scale-x-0 after:bg-current " +
    "after:transition-transform after:duration-200 after:ease-[cubic-bezier(0.23,1,0.32,1)] hover:after:scale-x-100";

function Header() {
    const t = useTranslations('Global');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [open]);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-rule bg-paper">
            <div className="wrap flex h-(--nav-h) items-center gap-8">
                <Link href="/" className="mr-auto shrink-0">
                    {/* the firm's wordmark; the white file is rendered in brand green on the white header */}
                    <Image
                        src="/dejudom-associates-logo-white.png"
                        width={230}
                        height={60}
                        alt="Dej-Udom & Associates, Attorneys at Law"
                        className="h-11 w-auto brightness-0"
                        priority
                    />
                </Link>

                <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
                    {NAV_LINKS.map(({ href, key }) =>
                        key === 'Header.About' ? (
                            <div key={href} className="group relative">
                                <Link href={href} className={linkCls}>{t(key)}</Link>
                                <div className="invisible absolute -left-4 top-full min-w-48 translate-y-1 rounded-sm border border-rule bg-paper py-1.5 opacity-0 shadow-[0_12px_28px_-12px_rgba(5,27,4,0.25)] transition-[opacity,transform,visibility] duration-150 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                    {ABOUT_SECTIONS.map(({ href, label }) => (
                                        <Link key={href} href={href} className="flex min-h-11 items-center px-4 text-[0.9375rem] hover:bg-tint">
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link key={href} href={href} className={linkCls}>{t(key)}</Link>
                        )
                    )}
                </nav>

                <div className="hidden items-center gap-5 lg:flex">
                    <LocaleSwitcher />
                    <Link
                        href="/contact"
                        className="inline-flex min-h-10 items-center rounded-sm bg-brand px-5 text-[0.9375rem] font-medium text-white transition-[background-color,transform] duration-150 hover:bg-brand-hover active:scale-[0.97]"
                    >
                        {t('Header.Contact')}
                    </Link>
                </div>

                <button
                    type="button"
                    className="flex size-11 cursor-pointer items-center justify-center lg:hidden"
                    onClick={() => setOpen(o => !o)}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                >
                    {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
                </button>
            </div>

            {open && (
                <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-(--nav-h) overflow-y-auto bg-paper lg:hidden">
                    <nav aria-label="Main" className="wrap flex flex-col pb-10 pt-2">
                        {[...NAV_LINKS, { href: '/contact', key: 'Header.Contact' } as const].map(({ href, key }) => (
                            <div key={href} className="border-b border-rule">
                                <Link href={href} onClick={() => setOpen(false)} className="flex min-h-14 items-center font-heading text-2xl">
                                    {t(key)}
                                </Link>
                                {key === 'Header.About' && (
                                    <div className="flex flex-col pb-3">
                                        {ABOUT_SECTIONS.map(({ href, label }) => (
                                            <Link key={href} href={href} onClick={() => setOpen(false)} className="flex min-h-11 items-center text-ink-soft">
                                                {label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="pt-5">
                            <LocaleSwitcher />
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;
