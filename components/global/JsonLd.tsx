import type { LegalService, Person, WebSite, WithContext } from 'schema-dts'
import { r2 } from '@/lib/image'

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://www.dejudomlaw.com'

// U+FF0C full-width commas are correct Chinese punctuation — using unicode escapes to satisfy linter
const DESCRIPTIONS: Record<string, string> = {
    en: 'Established in 1986, Dej-Udom & Associates is a partner-led, full-service law firm based in Bangkok, delivering commercially minded legal counsel to clients operating in and across Thailand. Core practices include Corporate & Commercial, Intellectual Property, Immigration & Employment, Litigation & Dispute Resolution, Patent & Technology, and Taxation.',
    th: 'เดชอุดม แอนด์ แอสโซซิเอทส์ ก่อตั้งในปี พ.ศ. 2529 เป็นสำนักงานกฎหมายครบวงจรในกรุงเทพฯ นำโดยหุ้นส่วน ให้คำปรึกษาทางกฎหมายเชิงธุรกิจแก่ลูกค้าที่ดำเนินงานในและทั่วประเทศไทย ครอบคลุมด้านกฎหมายบริษัทและพาณิชย์ ทรัพย์สินทางปัญญา ตรวจคนเข้าเมืองและแรงงาน คดีความและการระงับข้อพิพาท สิทธิบัตรและเทคโนโลยี และภาษีอากร',
    cn: 'Dej-Udom & Associates成立于1986年，是一家总部位于曼谷的合伙人主导全服务律师事务所，为在泰国及整个东南亚运营的客户提供以商业为导向的法律顾问服务。核心业务涵盖公司与商业法、知识产权、移民与雇佣、诉讣与争议解决、专利与技术及税务。',
}

const NAV_PAGES = [
    { name: 'Home',      path: '' },
    { name: 'About',     path: '/about' },
    { name: 'Expertise', path: '/expertise' },
    { name: 'Insights',  path: '/insight' },
    { name: 'Careers',   path: '/careers' },
    { name: 'Contact',   path: '/contact' },
]

const founderSchema: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dej-Udom Krairit',
    alternateName: 'เดชอุดม ไกรฤทธิ์',
    birthDate: '1956-06-25',
    nationality: { '@type': 'Country', name: 'Thailand' },
    jobTitle: 'Founder & Senior Partner',
    worksFor: { '@type': 'LegalService', name: 'Dej-Udom & Associates', url: BASE_URL },
    url: `${BASE_URL}/en/about#founder`,
    alumniOf: [
        {
            '@type': 'EducationalOrganization',
            name: 'Thammasat University',
            url: 'https://www.tu.ac.th',
        },
        {
            '@type': 'EducationalOrganization',
            name: 'University of Pennsylvania Carey Law School',
            url: 'https://www.law.upenn.edu',
        },
    ],
    hasCredential: [
        {
            '@type': 'EducationalOccupationalCredential',
            name: 'Bachelor of Laws (LL.B.)',
            credentialCategory: 'degree',
            recognizedBy: { '@type': 'EducationalOrganization', name: 'Thammasat University' },
        },
        {
            '@type': 'EducationalOccupationalCredential',
            name: 'Master of Laws (LL.M.)',
            credentialCategory: 'degree',
            recognizedBy: { '@type': 'EducationalOrganization', name: 'University of Pennsylvania' },
        },
        {
            '@type': 'EducationalOccupationalCredential',
            name: 'Honorary Doctor of Laws (LL.D.)',
            credentialCategory: 'honoraryDegree',
            recognizedBy: { '@type': 'EducationalOrganization', name: 'Thammasat University' },
        },
        {
            '@type': 'EducationalOccupationalCredential',
            name: 'Thai Barrister-at-Law',
            credentialCategory: 'license',
            recognizedBy: { '@type': 'Organization', name: 'The Lawyers Council of Thailand under Royal Patronage' },
        },
        {
            '@type': 'EducationalOccupationalCredential',
            name: 'Notarial Services Attorney',
            credentialCategory: 'license',
            recognizedBy: { '@type': 'Organization', name: 'The Lawyers Council of Thailand under Royal Patronage' },
        },
    ],
    memberOf: [
        {
            '@type': 'Organization',
            name: 'The Lawyers Council of Thailand under Royal Patronage',
            description: 'Served as President of the Lawyers Council of Thailand',
        },
        {
            '@type': 'Organization',
            name: 'The Lawyers Council of Thailand — Legal Aid Committee',
            description: 'Chairman of the Committee for Legal Assistance to the Public',
        },
        {
            '@type': 'Organization',
            name: 'Thai Bar Association (Sapha Nabundit Yosapa)',
            description: 'Committee Member and Deputy Secretary-General',
        },
        {
            '@type': 'Organization',
            name: 'Inter-Pacific Bar Association (IPBA)',
            description: 'Served as President',
            url: 'https://www.ipba.org',
        },
        {
            '@type': 'EducationalOrganization',
            name: 'Thammasat University Council',
            description: 'Member of the University Council',
        },
        {
            '@type': 'Organization',
            name: 'Thammasat University Law Alumni Association',
            description: 'Served as President',
        },
    ],
    knowsAbout: [
        'Intellectual Property Law',
        'Corporate & Commercial Law',
        'Immigration Law',
        'Litigation & Dispute Resolution',
        'Patent Law',
        'Thai Taxation',
        'ASEAN Legal Practice',
    ],
}

export default function JsonLd({ locale }: { locale: string }) {
    const description = DESCRIPTIONS[locale] ?? DESCRIPTIONS.en

    const firmSchema: WithContext<LegalService> = {
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        name: 'Dej-Udom & Associates',
        alternateName: ['เดชอุดม แอนด์ แอสโซซิเอทส์', 'Dej-Udom & Associates Attorneys at Law'],
        description,
        url: `${BASE_URL}/${locale}`,
        logo: `${BASE_URL}/dejudom-associates-logo-white.png`,
        image: r2('client/og-image.jpg'),
        telephone: '+6622330055',
        email: 'dej-udom@dejudom.com',
        foundingDate: '1986',
        founder: { '@type': 'Person', name: 'Dej-Udom Krairit', alternateName: 'เดชอุดม ไกรฤทธิ์' },
        address: {
            '@type': 'PostalAddress',
            streetAddress: '942/69 Rama IV Road, Charn Issara Tower I, 2nd Floor',
            addressLocality: 'Bangkok',
            postalCode: '10500',
            addressCountry: 'TH',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 13.7304933,
            longitude: 100.533683,
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
        },
        areaServed: [
            { '@type': 'Country', name: 'Thailand' },
            { '@type': 'Country', name: 'Myanmar' },
            { '@type': 'Country', name: 'Vietnam' },
            { '@type': 'Country', name: 'Cambodia' },
            { '@type': 'Country', name: 'Laos' },
            { '@type': 'Country', name: 'Malaysia' },
            { '@type': 'Country', name: 'Singapore' },
            { '@type': 'Country', name: 'Indonesia' },
            { '@type': 'Country', name: 'Philippines' },
            { '@type': 'Country', name: 'Brunei' },
            { '@type': 'Country', name: 'Timor-Leste' },
        ],
        knowsLanguage: ['en', 'th', 'zh'],
        memberOf: [
            { '@type': 'Organization', name: 'International Lawyers Network (ILN)', url: 'https://www.iln.com' },
            { '@type': 'Organization', name: 'International Trademark Association (INTA)', url: 'https://www.inta.org' },
            { '@type': 'Organization', name: 'Asian Patent Attorneys Association (APAA)', url: 'https://www.apaa.info' },
            { '@type': 'Organization', name: 'ASEAN Attorneys Alliance (AAA)' },
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Legal Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Corporate & Commercial Law',
                        description: 'Company incorporation, M&A, joint ventures, commercial contracts, and regulatory compliance for foreign businesses operating in Thailand.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Intellectual Property',
                        description: 'Trademark registration and enforcement, copyright, trade secrets, IP portfolio management, and anti-counterfeiting in Thailand and ASEAN.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Immigration & Employment',
                        description: 'Work permits, business visas, LTR visas via BOI, expatriate relocation, and Thai employment law compliance.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Litigation & Dispute Resolution',
                        description: 'Civil and commercial litigation, arbitration, and dispute resolution before Thai courts and international tribunals.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Patent & Technology',
                        description: 'Patent prosecution, technology licensing, software and innovation protection under Thai and international patent law.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Taxation',
                        description: 'Corporate tax planning, transfer pricing, BOI tax incentives, VAT advisory, and tax dispute resolution in Thailand.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Banking & Finance',
                        description: 'Loan transactions, securities, structured finance, and regulatory advice for financial institutions operating in Thailand.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Real Estate & Property',
                        description: 'Property acquisition, due diligence, land title, and real estate transactions for foreign investors in Thailand.',
                    },
                },
            ],
        },
        sameAs: [
            'https://www.linkedin.com/company/dej-udom-&-associates-attorneys-at-law',
        ],
    }

    const websiteSchema: WithContext<WebSite> = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Dej-Udom & Associates',
        url: BASE_URL,
        inLanguage: locale === 'cn' ? 'zh-Hans' : locale,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${BASE_URL}/${locale}/insight?q={search_term_string}`,
            },
            // @ts-expect-error — schema-dts does not type query-input but Google requires it
            'query-input': 'required name=search_term_string',
        },
        hasPart: NAV_PAGES.map(({ name, path }) => ({
            '@type': 'WebPage' as const,
            name,
            url: `${BASE_URL}/${locale}${path}`,
        })),
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(firmSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
            />
        </>
    )
}
