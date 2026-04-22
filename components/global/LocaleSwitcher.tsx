'use client';

import {Locale, useLocale} from 'next-intl';
import {useRouter, usePathname} from '@/i18n/navigation';
import { Button } from '../ui/button';

const locales: Locale[] = ['en', 'th', 'cn'];

function LocaleSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLocale = (nextLocale: Locale) => {
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <div className='flex flex-row gap-2 items-center'>
            {locales.map((cur) => (
                <Button 
                    key={cur}
                    onClick={() => switchLocale(cur)}
                    variant={ locale === cur ? "default" : "link"}
                    className={
                        locale === cur 
                            ? "bg-gold text-forest-deep"
                            : "text-text-secondary hover:text-gold"
                    }
                > 
                    {cur.toUpperCase()}
                </Button>
            ))}
        </div>
    );
}

export default LocaleSwitcher;