'use client'

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LocaleSwitcher from "./LocaleSwitcher";
import { Button } from "../ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NAV_LINKS = [
    { href: '/',          key: 'Header.Home' },
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

function Header() {
    const t = useTranslations('Global');
    const [open, setOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 w-full bg-forest-deep/80 backdrop-blur-md">
            {/* ── Desktop / mobile bar ── */}
            <div className="container mx-auto flex h-18 items-center justify-between px-4 lg:px-8">

                {/* Logo */}
                <Link href="/" className="shrink-0">
                    <Image
                        src="/dejudom-associates-logo-white.png"
                        width={230}
                        height={60}
                        alt="Dej-Udom & Associates"
                        priority
                    />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden lg:flex items-center gap-6 text-sm text-text-secondary">
                    {NAV_LINKS.map(({ href, key }) => {
                        if (key === 'Header.About') {
                            return (
                                <DropdownMenu key={href} open={aboutOpen} onOpenChange={setAboutOpen}>
                                    <DropdownMenuTrigger asChild>
                                        <div
                                            onMouseEnter={() => setAboutOpen(true)}
                                            onMouseLeave={() => setAboutOpen(false)}
                                        >
                                            <Link href={href}>
                                                <Button variant="link" className="text-text-secondary hover:text-gold decoration-gold cursor-pointer">
                                                    {t(key)}
                                                </Button>
                                            </Link>
                                        </div>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        onMouseEnter={() => setAboutOpen(true)}
                                        onMouseLeave={() => setAboutOpen(false)}
                                        className="bg-forest-deep border-white/8 min-w-44"
                                        align="center"
                                    >
                                        {ABOUT_SECTIONS.map(({ href, label }) => (
                                            <DropdownMenuItem
                                                key={href}
                                                asChild
                                                className="py-2 justify-center text-text-secondary data-highlighted:bg-forest-mid data-highlighted:text-text-secondary"
                                            >
                                                <Link href={href} className="cursor-pointer text-center w-full">
                                                    {label}
                                                </Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            )
                        }

                        return (
                            <Link key={href} href={href}>
                                <Button variant="link" className="text-text-secondary hover:text-gold decoration-gold cursor-pointer">
                                    {t(key)}
                                </Button>
                            </Link>
                        )
                    })}
                </nav>

                {/* Desktop right */}
                <div className="hidden lg:flex items-center gap-4">
                    <LocaleSwitcher />
                    <Link href="/contact">
                        <Button className="rounded-full cursor-pointer px-6">
                            {t('Header.Contact')}
                        </Button>
                    </Link>
                </div>

                {/* Burger */}
                <button
                    className="lg:hidden flex items-center justify-center p-2 text-text-primary cursor-pointer"
                    onClick={() => setOpen(o => !o)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* ── Mobile dropdown ── */}
            <div className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${open ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="border-t border-white/6 bg-forest px-6 pb-6 pt-4 flex flex-col gap-0">
                    {/* Nav links */}
                    {NAV_LINKS.map(({ href, key }) => (
                        <Link key={href} href={href} onClick={() => setOpen(false)}
                            className="py-4"
                        >
                            <Button variant="link" className="w-full justify-center text-text-secondary hover:text-gold decoration-gold cursor-pointer text-xl py-4">
                                {t(key)}
                            </Button>
                        </Link>
                    ))}

                    {/* About sub-links on mobile */}
                    <div className="flex flex-col items-center gap-1 pb-2">
                        {ABOUT_SECTIONS.map(({ href, label }) => (
                            <Link key={href} href={href} onClick={() => setOpen(false)}>
                                <Button variant="link" className="text-text-secondary/60 hover:text-gold cursor-pointer text-sm">
                                    {label}
                                </Button>
                            </Link>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="my-3 h-px bg-white/6" />

                    {/* Lang switcher */}
                    <div className="flex justify-center">
                        <LocaleSwitcher />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
