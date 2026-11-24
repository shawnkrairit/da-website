'use client';

import {Locale, useLocale} from 'next-intl';
import {useRouter, usePathname} from '@/i18n/navigation';

const LOCALES: { code: Locale; label: string; lang: string }[] = [
    { code: 'en', label: 'EN', lang: 'en' },
    { code: 'th', label: 'ไทย', lang: 'th' },
    { code: 'cn', label: '中文', lang: 'zh-Hans' },
];

function LocaleSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    return (
        <div role="group" aria-label="Language" className="flex items-center gap-0.5">
            {LOCALES.map(({ code, label, lang }) => (
                <button
                    key={code}
                    type="button"
                    lang={lang}
                    aria-pressed={locale === code}
                    onClick={() => router.replace(pathname, { locale: code })}
                    className={`min-h-11 min-w-11 cursor-pointer whitespace-nowrap border-b px-2 text-sm font-medium transition-colors duration-150 ${
                        locale === code
                            ? 'border-gold text-ink'
                            : 'border-transparent text-ink-soft hover:text-ink'
                    }`}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}

export default LocaleSwitcher;
