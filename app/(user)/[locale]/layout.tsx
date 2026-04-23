import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/global/Header';
import JsonLd from '@/components/global/JsonLd';
import { r2 } from '@/lib/image';

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://www.dejudomlaw.com'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return {
        title: t('title'),
        description: t('description'),
        metadataBase: new URL(BASE_URL),
        alternates: {
            canonical: `/${locale}`,
            languages: {
                'en': '/en',
                'th': '/th',
                'zh-Hans': '/cn',
                'x-default': '/en',
            },
        },
        openGraph: {
            title: t('ogTitle'),
            description: t('ogDescription'),
            url: `${BASE_URL}/${locale}`,
            siteName: 'Dej-Udom & Associates',
            locale: locale === 'cn' ? 'zh_CN' : locale === 'th' ? 'th_TH' : 'en_US',
            type: 'website',
            images: [{ url: r2('client/og-image.jpg'), width: 1200, height: 630 }],
        },
        twitter: {
            card: 'summary_large_image',
            title: t('ogTitle'),
            description: t('ogDescription'),
            images: [r2('client/og-image.jpg')],
        },
        icons: {
            icon: '/favicon.png',
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <JsonLd locale={locale} />
            <div className='flex flex-col w-full'>
                <Header />
                {children}
            </div>
        </NextIntlClientProvider>
    );
}
