import {
    Plane,
    Fingerprint,
    Building2,
    Scale,
    Users,
    ShieldCheck,
    Receipt,
    Building,
    Landmark,
    TrendingUp,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type LocaleKey = 'en' | 'th' | 'cn'

type LocaleContent = { title: string; description: string }

export type Practice = {
    key: string
    icon: LucideIcon
    content: Record<LocaleKey, LocaleContent>
}

export const PRACTICES: Practice[] = [
    {
        key: 'immigration',
        icon: Plane,
        content: {
            en: {
                title: 'Immigration & Work Permits',
                description: 'Visas, work permits, LTR Visa, BOI & OSSC processing, 90-day reporting and re-entry permits for foreign nationals in Thailand.',
            },
            th: {
                title: 'การตรวจคนเข้าเมืองและใบอนุญาตทำงาน',
                description: 'วีซ่า ใบอนุญาตทำงาน LTR Visa การดำเนินการ BOI & OSSC การรายงานตัว 90 วัน และใบอนุญาตกลับเข้าประเทศสำหรับชาวต่างชาติในไทย',
            },
            cn: {
                title: '移民与工作许可',
                description: '为在泰外籍人士提供签证、工作许可、LTR签证、BOI及OSSC申请、90天报到及再入境许可服务。',
            },
        },
    },
    {
        key: 'ip',
        icon: Fingerprint,
        content: {
            en: {
                title: 'Intellectual Property',
                description: 'Trademark, patent, copyright & trade secrets — registration, enforcement, licensing and ASEAN portfolio management.',
            },
            th: {
                title: 'ทรัพย์สินทางปัญญา',
                description: 'เครื่องหมายการค้า สิทธิบัตร ลิขสิทธิ์ และความลับทางการค้า — การจดทะเบียน การบังคับสิทธิ์ การอนุญาตใช้สิทธิ์ และการจัดการพอร์ตโฟลิโอในอาเซียน',
            },
            cn: {
                title: '知识产权',
                description: '商标、专利、版权及商业秘密——注册、维权、许可及东盟知识产权组合管理。',
            },
        },
    },
    {
        key: 'corporate',
        icon: Building2,
        content: {
            en: {
                title: 'Corporate & M&A',
                description: 'Market entry, company formation, Foreign Business Licence, mergers & acquisitions, joint ventures and corporate governance.',
            },
            th: {
                title: 'กฎหมายองค์กรและการควบรวมกิจการ',
                description: 'การเข้าสู่ตลาด การจัดตั้งบริษัท ใบอนุญาตประกอบธุรกิจต่างชาติ การควบรวมและซื้อกิจการ การร่วมทุน และการกำกับดูแลกิจการ',
            },
            cn: {
                title: '公司及并购',
                description: '市场准入、公司设立、外商营业执照、并购、合资企业及公司治理。',
            },
        },
    },
    {
        key: 'litigation',
        icon: Scale,
        content: {
            en: {
                title: 'Litigation, Mediation & ADR',
                description: 'Commercial litigation across Thai courts, domestic and international arbitration, and structured mediation.',
            },
            th: {
                title: 'การดำเนินคดี การไกล่เกลี่ย และ ADR',
                description: 'การดำเนินคดีพาณิชย์ในศาลไทย อนุญาโตตุลาการในประเทศและระหว่างประเทศ และการไกล่เกลี่ยอย่างมีโครงสร้าง',
            },
            cn: {
                title: '诉讼、调解与替代争议解决',
                description: '在泰国法院进行商事诉讼、国内外仲裁及结构性调解。',
            },
        },
    },
    {
        key: 'employment',
        icon: Users,
        content: {
            en: {
                title: 'Employment & Labour Law',
                description: 'Employment contracts, termination & severance, Labour Court litigation, non-compete enforcement and workforce restructuring.',
            },
            th: {
                title: 'กฎหมายแรงงานและการจ้างงาน',
                description: 'สัญญาจ้างงาน การเลิกจ้างและค่าชดเชย การดำเนินคดีในศาลแรงงาน การบังคับใช้ข้อตกลงไม่แข่งขัน และการปรับโครงสร้างบุคลากร',
            },
            cn: {
                title: '劳动与雇佣法',
                description: '劳动合同、终止雇佣与遣散费、劳动法院诉讼、竞业限制执行及人员重组。',
            },
        },
    },
    {
        key: 'pdpa',
        icon: ShieldCheck,
        content: {
            en: {
                title: 'Data Privacy & PDPA',
                description: 'PDPA compliance programmes, DPO services, breach response, cross-border data transfers and privacy impact assessments.',
            },
            th: {
                title: 'การคุ้มครองข้อมูลส่วนบุคคลและ PDPA',
                description: 'โปรแกรมการปฏิบัติตาม PDPA บริการ DPO การรับมือเหตุข้อมูลรั่วไหล การถ่ายโอนข้อมูลข้ามพรมแดน และการประเมินผลกระทบด้านความเป็นส่วนตัว',
            },
            cn: {
                title: '数据隐私与PDPA',
                description: 'PDPA合规方案、DPO服务、数据泄露应对、跨境数据传输及隐私影响评估。',
            },
        },
    },
    {
        key: 'tax',
        icon: Receipt,
        content: {
            en: {
                title: 'Taxation',
                description: 'Corporate tax planning, transfer pricing, international tax & DTA planning, tax disputes, VAT and expatriate tax structuring.',
            },
            th: {
                title: 'กฎหมายภาษี',
                description: 'การวางแผนภาษีนิติบุคคล การกำหนดราคาโอน การวางแผนภาษีระหว่างประเทศและสนธิสัญญาภาษีซ้อน ข้อพิพาทด้านภาษี ภาษีมูลค่าเพิ่ม และการวางแผนภาษีสำหรับชาวต่างชาติ',
            },
            cn: {
                title: '税务',
                description: '企业税务筹划、转让定价、国际税务及税收协定规划、税务争议、增值税及外籍人员税务架构。',
            },
        },
    },
    {
        key: 'realestate',
        icon: Building,
        content: {
            en: {
                title: 'Real Estate & Property',
                description: 'Condominium acquisition, leasehold structuring, property due diligence, commercial property and construction matters.',
            },
            th: {
                title: 'กฎหมายอสังหาริมทรัพย์',
                description: 'การซื้อคอนโดมิเนียม การจัดโครงสร้างสิทธิเช่า การตรวจสอบวิเคราะห์สถานะ อสังหาริมทรัพย์เชิงพาณิชย์ และงานก่อสร้าง',
            },
            cn: {
                title: '房地产与物业',
                description: '公寓购置、租赁权结构安排、物业尽职调查、商业地产及建筑事务。',
            },
        },
    },
    {
        key: 'banking',
        icon: Landmark,
        content: {
            en: {
                title: 'Banking & Finance',
                description: 'Banking regulatory compliance, securities, fintech & digital assets, foreign exchange controls and structured finance.',
            },
            th: {
                title: 'กฎหมายธนาคารและการเงิน',
                description: 'การปฏิบัติตามกฎระเบียบธนาคาร หลักทรัพย์ ฟินเทคและสินทรัพย์ดิจิทัล การควบคุมการแลกเปลี่ยนเงินตราต่างประเทศ และการจัดโครงสร้างทางการเงิน',
            },
            cn: {
                title: '银行与金融',
                description: '银行监管合规、证券、金融科技与数字资产、外汇管制及结构性融资。',
            },
        },
    },
    {
        key: 'boi',
        icon: TrendingUp,
        content: {
            en: {
                title: 'BOI & Investment Promotion',
                description: 'BOI application strategy, post-promotion compliance, OSSC immigration, EEC & special zone incentives and audit defence.',
            },
            th: {
                title: 'BOI และการส่งเสริมการลงทุน',
                description: 'กลยุทธ์การขอรับการส่งเสริม BOI การปฏิบัติตามเงื่อนไขหลังได้รับการส่งเสริม การตรวจคนเข้าเมือง OSSC แรงจูงใจในเขต EEC และการต่อสู้คดีตรวจสอบ',
            },
            cn: {
                title: 'BOI与投资促进',
                description: 'BOI申请策略、获批后合规、OSSC移民、EEC及特区激励措施及审计抗辩。',
            },
        },
    },
]
