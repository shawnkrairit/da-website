import type { LocaleKey } from './practices'

type LocaleContent = { name: string; detail: string }

export type Sector = {
    key: string
    content: Record<LocaleKey, LocaleContent>
}

export const SECTORS: Sector[] = [
    {
        key: 'manufacturing',
        content: {
            en: {
                name: 'Manufacturing',
                detail: 'Advising multinational manufacturers on BOI investment promotion, factory licensing, employment compliance, IP protection for industrial designs, and cross-border supply chain agreements across ASEAN.',
            },
            th: {
                name: 'ภาคการผลิต',
                detail: 'ให้คำปรึกษาแก่ผู้ผลิตข้ามชาติเกี่ยวกับการส่งเสริมการลงทุน BOI การขอใบอนุญาตโรงงาน การปฏิบัติตามกฎหมายแรงงาน การคุ้มครองทรัพย์สินทางปัญญา และข้อตกลงห่วงโซ่อุปทานข้ามพรมแดนในอาเซียน',
            },
            cn: {
                name: '制造业',
                detail: '就BOI投资促进、工厂许可证、劳工合规、工业设计知识产权保护及东盟跨境供应链协议，为跨国制造商提供法律建议。',
            },
        },
    },
    {
        key: 'automotive',
        content: {
            en: {
                name: 'Automotive',
                detail: 'Supporting automotive OEMs and suppliers with regulatory compliance, joint venture structuring, distributor agreements, and EV-related incentive applications under Thailand\'s investment promotion framework.',
            },
            th: {
                name: 'อุตสาหกรรมยานยนต์',
                detail: 'สนับสนุน OEM และผู้ผลิตชิ้นส่วนยานยนต์ในด้านการปฏิบัติตามกฎระเบียบ การจัดโครงสร้างการร่วมทุน ข้อตกลงผู้จัดจำหน่าย และการขอรับสิทธิประโยชน์ด้าน EV ภายใต้กรอบการส่งเสริมการลงทุนของไทย',
            },
            cn: {
                name: '汽车行业',
                detail: '为汽车整车厂及供应商提供法规合规、合资结构、经销商协议及泰国投资促进框架下新能源汽车激励申请等方面的法律支持。',
            },
        },
    },
    {
        key: 'lifesciences',
        content: {
            en: {
                name: 'Life Sciences & Healthcare',
                detail: 'Guiding pharmaceutical companies, medical device firms, and healthcare providers through Thai FDA registration, clinical trial agreements, patent protection, and market access strategies.',
            },
            th: {
                name: 'วิทยาศาสตร์เพื่อชีวิตและการดูแลสุขภาพ',
                detail: 'แนะนำบริษัทยา ผู้ผลิตเครื่องมือแพทย์ และผู้ให้บริการสุขภาพเกี่ยวกับการขึ้นทะเบียน อย. ไทย ข้อตกลงการทดลองทางคลินิก การคุ้มครองสิทธิบัตร และกลยุทธ์การเข้าสู่ตลาด',
            },
            cn: {
                name: '生命科学与医疗健康',
                detail: '指导制药公司、医疗器械企业及医疗服务机构完成泰国FDA注册、临床试验协议、专利保护及市场准入策略。',
            },
        },
    },
    {
        key: 'energy',
        content: {
            en: {
                name: 'Energy & Infrastructure',
                detail: 'Advising on power purchase agreements, renewable energy licensing, EPC contracts, and infrastructure concession arrangements under Thai energy regulations.',
            },
            th: {
                name: 'พลังงานและโครงสร้างพื้นฐาน',
                detail: 'ให้คำปรึกษาเกี่ยวกับสัญญาซื้อขายไฟฟ้า การขออนุญาตพลังงานหมุนเวียน สัญญา EPC และการจัดการสัมปทานโครงสร้างพื้นฐานภายใต้กฎระเบียบด้านพลังงานของไทย',
            },
            cn: {
                name: '能源与基础设施',
                detail: '就购电协议、可再生能源许可证、EPC合同及泰国能源法规下的基础设施特许经营安排提供法律建议。',
            },
        },
    },
    {
        key: 'technology',
        content: {
            en: {
                name: 'Technology & Digital',
                detail: 'Supporting tech companies with PDPA compliance, software licensing, SaaS agreements, digital platform regulations, and intellectual property protection in Thailand\'s growing digital economy.',
            },
            th: {
                name: 'เทคโนโลยีและดิจิทัล',
                detail: 'สนับสนุนบริษัทเทคโนโลยีด้านการปฏิบัติตาม PDPA การอนุญาตใช้ซอฟต์แวร์ ข้อตกลง SaaS กฎระเบียบแพลตฟอร์มดิจิทัล และการคุ้มครองทรัพย์สินทางปัญญาในเศรษฐกิจดิจิทัลของไทย',
            },
            cn: {
                name: '科技与数字',
                detail: '为科技企业提供PDPA合规、软件许可、SaaS协议、数字平台监管及泰国数字经济中知识产权保护等方面的支持。',
            },
        },
    },
    {
        key: 'consumer',
        content: {
            en: {
                name: 'Consumer & Retail',
                detail: 'Assisting consumer brands with trademark portfolios, franchise agreements, distribution networks, and regulatory compliance for product labelling and consumer protection in Thailand.',
            },
            th: {
                name: 'สินค้าอุปโภคบริโภคและค้าปลีก',
                detail: 'ช่วยเหลือแบรนด์ผู้บริโภคด้านพอร์ตโฟลิโอเครื่องหมายการค้า ข้อตกลงแฟรนไชส์ เครือข่ายการจัดจำหน่าย และการปฏิบัติตามกฎระเบียบด้านการติดฉลากสินค้าและการคุ้มครองผู้บริโภคในไทย',
            },
            cn: {
                name: '消费品与零售',
                detail: '协助消费品牌管理商标组合、特许经营协议、分销网络，并确保符合泰国产品标签及消费者保护法规。',
            },
        },
    },
    {
        key: 'financial',
        content: {
            en: {
                name: 'Financial Services',
                detail: 'Advising banks, insurance companies, and fintech platforms on Thai financial regulations, licensing requirements, AML compliance, and cross-border financial transactions.',
            },
            th: {
                name: 'บริการทางการเงิน',
                detail: 'ให้คำปรึกษาแก่ธนาคาร บริษัทประกันภัย และแพลตฟอร์มฟินเทคเกี่ยวกับกฎระเบียบทางการเงินของไทย ข้อกำหนดการขอใบอนุญาต การปฏิบัติตามกฎหมายป้องกันการฟอกเงิน และธุรกรรมทางการเงินข้ามพรมแดน',
            },
            cn: {
                name: '金融服务',
                detail: '就泰国金融法规、许可证要求、反洗钱合规及跨境金融交易，为银行、保险公司及金融科技平台提供法律建议。',
            },
        },
    },
    {
        key: 'trade',
        content: {
            en: {
                name: 'International Trade',
                detail: 'Supporting importers and exporters with customs regulations, trade compliance, anti-dumping investigations, and FTA utilisation across ASEAN and Asia Pacific markets.',
            },
            th: {
                name: 'การค้าระหว่างประเทศ',
                detail: 'สนับสนุนผู้นำเข้าและผู้ส่งออกด้านกฎระเบียบศุลกากร การปฏิบัติตามกฎหมายการค้า การสอบสวนการทุ่มตลาด และการใช้ประโยชน์จาก FTA ในตลาดอาเซียนและเอเชียแปซิฟิก',
            },
            cn: {
                name: '国际贸易',
                detail: '为进出口商提供海关法规、贸易合规、反倾销调查及东盟与亚太市场自由贸易协定运用等方面的支持。',
            },
        },
    },
]
