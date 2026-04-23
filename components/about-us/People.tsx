import { getTranslations, getLocale } from 'next-intl/server'
import SectionHeader from '../global/SectionHeader'
import PeopleClient from './PeopleClient'
import prisma from '@/lib/prisma'
import type { LocaleKey } from '@/data/practices'

async function People() {
    const [t, rawLocale, departments, attorneys] = await Promise.all([
        getTranslations('AboutPage.attorneySection'),
        getLocale(),
        prisma.department.findMany({
            orderBy: { order: 'asc' },
            select: { id: true, slug: true, nameEn: true, nameTh: true, nameCn: true },
        }),
        prisma.attorney.findMany({
            where: { isActive: true },
            orderBy: { order: 'asc' },
            select: {
                id: true,
                slug: true,
                imageUrl: true,
                fullNameEn: true,
                fullNameTh: true,
                fullNameCn: true,
                titleEn: true,
                titleTh: true,
                titleCn: true,
                biographyEn: true,
                biographyTh: true,
                biographyCn: true,
                departments: {
                    select: {
                        department: {
                            select: { id: true, slug: true, nameEn: true, nameTh: true, nameCn: true },
                        },
                    },
                },
            },
        }),
    ])

    const locale = (rawLocale as LocaleKey) in { en: 1, th: 1, cn: 1 }
        ? rawLocale as LocaleKey
        : 'en'

    return (
        <section className="w-full bg-forest-deep py-24">
            <div className="container flex flex-col gap-16 px-4 lg:px-0 mx-auto">
                <SectionHeader
                    eyebrow={t('eyebrow')}
                    title={t.rich('title', { br: () => <br /> })}
                    description={t('description')}
                />
                <PeopleClient
                    departments={departments}
                    attorneys={attorneys}
                    locale={locale}
                />
            </div>
        </section>
    )
}

export default People
