import AboutHeroSection from '@/components/about-us/HeroSection'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'AboutPage.metadata' })

    return {
        title: t('title'),
        description: t('description'),
        openGraph: {
            title: t('ogTitle'),
            description: t('ogDescription'),
            type: 'website',
        },
    }
}

function AboutPage() {
    return (
        <div className='flex flex-col'>
            <AboutHeroSection/>
        </div>
    )
}

export default AboutPage
