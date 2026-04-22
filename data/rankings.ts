export type Credential = {
    key: string
    source: string
    name: string
    description: string
}

export const CREDENTIALS: Credential[] = [
    {
        key: 'wtr',
        source: 'World Trademark Review',
        name: 'WTR 1000',
        description: 'Recognised for trademark filing, prosecution, and enforcement in Thailand.',
    },
    {
        key: 'legal500',
        source: 'Legal 500',
        name: 'Asia Pacific',
        description: 'Recommended for commercial legal services across multiple practice areas.',
    },
    {
        key: 'managingip',
        source: 'Managing IP',
        name: 'IP Stars',
        description: 'Ranked for patent and trademark practice across prosecution, enforcement, and transactions.',
    },
    {
        key: 'asialaw',
        source: 'Asia Law',
        name: 'Top 100 Lawyers',
        description: 'Prof. Dej-Udom Krairit recognised among Asia Law\'s Top 100 Lawyers in Thailand.',
    },
    {
        key: 'boi',
        source: 'Board of Investment',
        name: 'BOI Certified',
        description: 'Authorised to submit LTR Visa applications directly to the BOI.',
    },
    {
        key: 'google',
        source: 'Google Reviews',
        name: '4.9 Stars',
        description: 'Highest-rated law firm in the Bangrak district for client satisfaction.',
    },
    {
        key: 'inta',
        source: 'Membership',
        name: 'INTA',
        description: 'International Trademark Association — Member since 1997.',
    },
    {
        key: 'apaa',
        source: 'Membership',
        name: 'APAA',
        description: 'Asian Patent Attorneys Association — Active member.',
    },
    {
        key: 'aippi',
        source: 'Membership',
        name: 'AIPPI',
        description: 'International Association for the Protection of Intellectual Property — Thailand National Group.',
    },
    {
        key: 'aseanipa',
        source: 'Membership',
        name: 'ASEAN IPA',
        description: 'ASEAN Intellectual Property Association — Corporate Member.',
    },
    {
        key: 'ipba',
        source: 'Membership',
        name: 'IPBA',
        description: 'Inter-Pacific Bar Association — Member.',
    },
]
