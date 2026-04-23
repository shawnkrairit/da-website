import 'dotenv/config'
import { PrismaClient } from '../app/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

// ─── Departments

const DEPARTMENT_SEEDS = [
    { slug: 'intellectual-property', order: 0, nameEn: 'Intellectual Property',      nameTh: 'ทรัพย์สินทางปัญญา',                         nameCn: '知识产权' },
    { slug: 'immigration',           order: 1, nameEn: 'Immigration & Work Permits',  nameTh: 'การตรวจคนเข้าเมืองและใบอนุญาตทำงาน',         nameCn: '移民与工作许可' },
    { slug: 'corporate',             order: 2, nameEn: 'Corporate & M&A',             nameTh: 'กฎหมายบริษัทและการควบรวมกิจการ',             nameCn: '公司法与并购' },
    { slug: 'litigation',            order: 3, nameEn: 'Litigation & Disputes',       nameTh: 'การดำเนินคดีและการระงับข้อพิพาท',             nameCn: '诉讼与争议解决' },
    { slug: 'employment',            order: 4, nameEn: 'Employment & Labour Law',     nameTh: 'กฎหมายแรงงานและการจ้างงาน',                 nameCn: '劳动与雇佣法' },
    { slug: 'data-privacy',          order: 5, nameEn: 'Data Privacy & PDPA',         nameTh: 'ความเป็นส่วนตัวของข้อมูลและ PDPA',           nameCn: '数据隐私与 PDPA' },
    { slug: 'taxation',              order: 6, nameEn: 'Taxation',                    nameTh: 'ภาษีอากร',                                   nameCn: '税务' },
    { slug: 'real-estate',           order: 7, nameEn: 'Real Estate & Property',      nameTh: 'อสังหาริมทรัพย์และทรัพย์สิน',               nameCn: '房地产与不动产' },
    { slug: 'banking-finance',       order: 8, nameEn: 'Banking & Finance',           nameTh: 'การธนาคารและการเงิน',                        nameCn: '银行与金融' },
    { slug: 'boi',                   order: 9, nameEn: 'BOI & Investment Promotion',  nameTh: 'BOI และการส่งเสริมการลงทุน',                 nameCn: 'BOI 与投资促进' },
]

// ─── Attorneys

const ATTORNEY_SEEDS = [
    {
        slug: 'dej-udom-krairit',
        order: 0, // founder always first
        email: 'dej-udom@dejudom.com',
        phone: '+66 2233 0055',
        imageUrl: null,
        isActive: true,
        fullNameEn: 'Prof. Dej-Udom Krairit',
        fullNameTh: 'ศาสตราจารย์ เดชอุดม ไกรฤทธิ์',
        fullNameCn: 'Dej-Udom Krairit 教授',
        titleEn: 'Founder & Managing Partner',
        titleTh: 'ผู้ก่อตั้งและหุ้นส่วนผู้จัดการ',
        titleCn: '创始人兼管理合伙人',
        biographyEn: 'Professor Dej-Udom Krairit founded Dej-Udom & Associates in 1986, establishing one of Thailand\'s first specialist intellectual property practices. Over four decades, he has built the firm into a full-service commercial law firm advising multinational companies across five practice areas. He continues to lead the firm\'s IP strategy and serves as counsel on complex cross-border matters.',
        biographyTh: 'ศาสตราจารย์เดชอุดม ไกรฤทธิ์ ก่อตั้งเดชอุดม แอนด์ แอสโซซิเอทส์ ในปี พ.ศ. 2529 โดยเป็นหนึ่งในสำนักงานเฉพาะทางด้านทรัพย์สินทางปัญญาแห่งแรกของประเทศไทย ตลอดระยะเวลากว่าสี่ทศวรรษ ท่านได้พัฒนาสำนักงานให้เป็นสำนักงานกฎหมายพาณิชย์ครบวงจร ให้คำปรึกษาแก่บริษัทข้ามชาติในห้าสาขากฎหมาย',
        biographyCn: 'Dej-Udom Krairit 教授于 1986 年创立 Dej-Udom & Associates，建立了泰国首批知识产权专业律所之一。四十余年来，他将律所发展为全方位商业法律事务所，为跨国公司提供五大业务领域的法律咨询，并继续主导律所的知识产权战略。',
        education: [
            'LL.B., Thammasat University',
            'LL.M., University of Pennsylvania',
            'Thai Lawyers Council (Barrister-at-Law)',
            'Notarial Services Attorney',
        ],
        departmentIds: ['intellectual-property', 'corporate', 'litigation'],
    },
]

// ─── Insights

const INSIGHT_SEEDS = [
    {
        slug: 'thailand-ltr-visa-guide',
        publishedAt: new Date('2024-03-01'),
        isPublished: true,
        title: 'Thailand LTR Visa: A Complete Guide for Foreign Professionals',
        excerpt: 'The Long-Term Resident Visa programme offers qualifying foreign nationals a 10-year stay with streamlined work authorisation. As a BOI Certified Agency, we break down the eligibility categories, required documents, and application process.',
        body: `## Overview

The Long-Term Resident (LTR) Visa was introduced by the Thai government in 2022 to attract high-potential foreign nationals. It offers a 10-year stay with a streamlined work authorisation process — eliminating the need for a traditional Non-B visa and annual renewals.

## Who Qualifies

The programme has four target categories, each with its own income and asset requirements.

### Wealthy Global Citizens

Applicants must demonstrate personal assets of at least USD 1 million and a minimum annual income of USD 80,000 over the past two years. A health insurance policy covering at least USD 50,000 is also required.

### Wealthy Pensioners

Retirees aged 50 and above with a pension or passive income of at least USD 40,000 per year. Applicants must hold health insurance and have no criminal record.

### Work-From-Thailand Professionals

Employed by an overseas company with at least three years of operating history. A minimum annual income of USD 40,000 is required, along with proof of employment and professional qualifications.

### Highly Skilled Professionals

Working for a Thai entity in a targeted industry (EEC, BCG, S-Curve). Requires an annual income of at least USD 40,000 (or USD 80,000 for certain roles) and relevant academic credentials.

## Key Benefits

- **10-year visa** renewable once (effectively 20 years)
- **Work permit** issued within 30 days, single document
- **17% flat personal income tax** for qualified professionals
- **Fast-track immigration** at international airports
- Dependants (spouse and children under 20) are included

## Application Process

1. Prepare all supporting documents (income proof, health insurance, employment letter)
2. Submit application through the BOI Online portal or a certified agency
3. BOI reviews within 20 business days
4. Collect the visa sticker at a Thai consulate or immigration office

As a BOI Certified Agency, Dej-Udom & Associates can submit LTR Visa applications directly on behalf of clients.`,
        departmentIds: ['immigration', 'boi'],
    },
    {
        id: 'ins_trademark',
        slug: 'trademark-registration-thailand',
        publishedAt: new Date('2024-05-15'),
        isPublished: true,
        title: 'Trademark Registration in Thailand: What Foreign Companies Need to Know',
        excerpt: 'Thailand operates a first-to-file trademark system. Foreign companies entering the Thai market should register their marks before commercial launch — this guide covers the process, timelines, and common pitfalls.',
        body: `## Overview

Thailand's trademark system is governed by the Trademark Act B.E. 2534 (1991) and its amendments. The system operates on a **first-to-file** basis — the first party to file wins the registration, regardless of who used the mark first. Foreign companies should file before entering the Thai market, not after.

## What Can Be Registered

### Trademarks

Any distinctive sign capable of distinguishing goods or services: words, logos, shapes, colours, sounds, or combinations thereof. The mark must not be descriptive of the goods, contrary to public order, or identical to a well-known mark.

### Service Marks

Identical in principle to trademarks but covering services rather than goods. Registered and enforced under the same act.

### Certification Marks and Collective Marks

Available for organisations certifying standards or for use by members of an association.

## The Registration Process

1. **Trademark search** — conducted at the Department of Intellectual Property (DIP) to check for conflicts
2. **Filing** — application submitted with a representation of the mark, goods/services list, and power of attorney
3. **Examination** — the DIP examines the mark for registrability (typically 12–18 months)
4. **Publication** — if accepted, the mark is published in the Trademark Journal for 60 days for opposition
5. **Registration** — if no opposition is filed (or opposition is defeated), the certificate is issued

## Common Pitfalls

- Filing only in one class when the business spans multiple classes
- Using a mark in Thailand before filing — third parties can file first
- Allowing registrations to lapse (renewal is every 10 years)
- Not monitoring the journal for conflicting applications`,
        departmentIds: ['intellectual-property'],
    },
    {
        id: 'ins_boi',
        slug: 'boi-promotion-foreign-investment',
        publishedAt: new Date('2024-08-20'),
        isPublished: true,
        title: 'BOI Promotion for Foreign Investors: Incentives, Eligibility & Application',
        excerpt: "Thailand's Board of Investment offers significant tax and non-tax incentives for qualifying businesses. Understanding which activities are promotable and how to structure your application is key to maximising your benefits.",
        body: `## Overview

The Board of Investment (BOI) of Thailand was established to promote both foreign and domestic investment in targeted industries. Promoted companies receive a package of tax and non-tax benefits that can significantly reduce the cost of doing business in Thailand.

## Tax Incentives

### Corporate Income Tax Exemption

Depending on the activity and location, promoted companies may receive a corporate income tax (CIT) exemption for 3, 5, or 8 years. Activities in Special Economic Zones or EEC areas typically receive the maximum period.

### Import Duty Exemption

Machinery and raw materials imported for use in promoted activities are exempt from import duties. This applies to both initial investment and ongoing production inputs.

### Additional Deductions

Promoted companies may also deduct infrastructure installation and construction costs (25% of actual costs over 10 years) and double-deduct costs for R&D and workforce training.

## Non-Tax Incentives

- Permission to own land (normally restricted for foreign companies under the Land Code)
- Permission to bring in foreign skilled workers and experts
- Permit to remit foreign currency abroad
- Protection against nationalisation and competition from state enterprises

## Eligible Activities

BOI promotion covers a wide range of industries, grouped into:

- **Agriculture and agricultural products**
- **Mining, ceramics, and basic metals**
- **Light industry** (textiles, furniture, jewellery)
- **Metal products, machinery, and transport equipment**
- **Electronics and electrical appliances**
- **Chemicals, paper, and plastics**
- **Services** (including software, R&D, and logistics)
- **Public utilities and infrastructure**

## How to Apply

1. Review the BOI's current investment promotion policy and eligible activity list
2. Prepare a project proposal including investment plan, production process, and financial projections
3. Submit through the BOI e-Investment portal
4. BOI considers the application within 40–60 business days
5. If approved, sign the investment promotion certificate within 3 months`,
        departmentIds: ['boi', 'corporate', 'taxation'],
    },
]

// ─── Main

async function main() {
    console.log('Seeding departments...')
    for (const { slug, ...rest } of DEPARTMENT_SEEDS) {
        await prisma.department.upsert({
            where: { slug },
            update: rest,
            create: { slug, ...rest },
        })
    }
    // build slug → id map from actual DB values
    const deptMap = Object.fromEntries(
        (await prisma.department.findMany({ select: { id: true, slug: true } }))
            .map(d => [d.slug, d.id])
    )

    console.log('Seeding attorneys...')
    for (const { departmentIds, ...atty } of ATTORNEY_SEEDS) {
        const { id: attorneyId } = await prisma.attorney.upsert({
            where: { slug: atty.slug },
            update: atty,
            create: atty,
            select: { id: true },
        })
        await prisma.attorneyDepartment.deleteMany({ where: { attorneyId } })
        await prisma.attorneyDepartment.createMany({
            data: departmentIds.map(slug => ({ attorneyId, departmentId: deptMap[slug] })),
        })
    }

    console.log('Seeding insights...')
    for (const { departmentIds, ...insight } of INSIGHT_SEEDS) {
        const { id: insightId } = await prisma.insight.upsert({
            where: { slug: insight.slug },
            update: insight,
            create: insight,
            select: { id: true },
        })
        await prisma.insightDepartment.deleteMany({ where: { insightId } })
        await prisma.insightDepartment.createMany({
            data: departmentIds.map(slug => ({ insightId, departmentId: deptMap[slug] })),
        })
    }

    console.log('Done.')
}

main()
    .catch(e => { console.error(e); process.exit(1) })
    .finally(() => prisma.$disconnect())
