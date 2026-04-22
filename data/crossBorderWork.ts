import type { LocaleKey } from './practices'

type LocaleContent = { label: string; description: string }

export type Stat = {
    key: string
    value: string
    content: Record<LocaleKey, LocaleContent>
}

export const STATS: Stat[] = [
    {
        key: 'years',
        value: '40',
        content: {
            en: {
                label: 'Years of Excellence',
                description: 'Four decades of institutional expertise advising Fortune 500 companies and global enterprises since 1986.',
            },
            th: {
                label: 'ปีแห่งความเชี่ยวชาญ',
                description: 'สี่ทศวรรษแห่งองค์ความรู้ที่สั่งสมในการเป็นที่ปรึกษาแก่บริษัท Fortune 500 และองค์กรชั้นนำระดับโลกมาตั้งแต่ปี 2529',
            },
            cn: {
                label: '载法律深耕',
                description: '自1986年起，凭借四十载积淀的行业经验，竭诚为财富500强及跨国集团提供战略法律咨询。',
            },
        },
    },
    {
        key: 'asean',
        value: '11',
        content: {
            en: {
                label: 'ASEAN Reach',
                description: 'Strategically positioned to provide seamless legal support across all 11 ASEAN member states through our established regional network.',
            },
            th: {
                label: 'เครือข่ายครอบคลุมอาเซียน',
                description: 'พร้อมให้การสนับสนุนทางกฎหมายอย่างไร้รอยต่อใน 11 ประเทศสมาชิกอาเซียน ผ่านเครือข่ายพันธมิตรทางวิชาชีพที่แข็งแกร่งทั่วภูมิภาค',
            },
            cn: {
                label: '东盟区域覆盖',
                description: '依托深厚的区域合作伙伴网络，为东盟全部11个成员国提供无缝衔接的跨境法律支持。',
            },
        },
    },
    {
        key: 'sectors',
        value: '8',
        content: {
            en: {
                label: 'Core Specialisations',
                description: 'Deep technical expertise in manufacturing, automotive, life sciences, energy, technology, consumer goods, financial services, and international trade.',
            },
            th: {
                label: 'กลุ่มอุตสาหกรรมหลัก',
                description: 'ความเชี่ยวชาญเชิงลึกในอุตสาหกรรมการผลิต ยานยนต์ วิทยาศาสตร์เพื่อชีวิต พลังงาน เทคโนโลยี สินค้าอุปโภคบริโภค บริการทางการเงิน และการค้าระหว่างประเทศ',
            },
            cn: {
                label: '核心行业专长',
                description: '深耕制造业、汽车、生命科学、能源、高科技、消费品、金融服务及国际贸易等关键领域。',
            },
        },
    },
    {
        key: 'languages',
        value: '2',
        content: {
            en: {
                label: 'Working Languages',
                description: 'Full bilingual proficiency in Thai and English, ensuring absolute precision in legal drafting, cross-border negotiations, and regulatory filings.',
            },
            th: {
                label: 'ภาษาที่ใช้ในการปฏิบัติงาน',
                description: 'ความเชี่ยวชาญระดับสูงทั้งภาษาไทยและภาษาอังกฤษ มั่นใจได้ในความแม่นยำของการร่างเอกสารกฎหมาย การเจรจาระหว่างประเทศ และการติดต่อหน่วยงานกำกับดูแล',
            },
            cn: {
                label: '双语执业能力',
                description: '精通泰英双语，确保在法律文书起草、跨境谈判及政府申报等各项业务中均能达到极高的精准度。',
            },
        },
    },
]