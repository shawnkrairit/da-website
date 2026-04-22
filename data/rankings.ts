import type { LocaleKey } from './practices'

export type Credential = {
    key: string
    source: string
    name: string
    description: Record<LocaleKey, string>
}

export const CREDENTIALS: Credential[] = [
    {
        key: 'wtr',
        source: 'World Trademark Review',
        name: 'WTR 1000',
        description: {
            en: 'Recognised for trademark filing, prosecution, and enforcement in Thailand.',
            th: 'ได้รับการยอมรับด้านการยื่นจดทะเบียน การดำเนินคดี และการบังคับสิทธิ์เครื่องหมายการค้าในไทย',
            cn: '荣获泰国商标申请、诉讼及维权领域权威认可。',
        },
    },
    {
        key: 'legal500',
        source: 'Legal 500',
        name: 'Asia Pacific',
        description: {
            en: 'Recommended for commercial legal services across multiple practice areas.',
            th: 'ได้รับการแนะนำด้านบริการกฎหมายพาณิชย์ในหลายสาขาการปฏิบัติ',
            cn: '荣获多个业务领域商事法律服务推荐。',
        },
    },
    {
        key: 'managingip',
        source: 'Managing IP',
        name: 'IP Stars',
        description: {
            en: 'Ranked for patent and trademark practice across prosecution, enforcement, and transactions.',
            th: 'ได้รับการจัดอันดับด้านสิทธิบัตรและเครื่องหมายการค้า ครอบคลุมการดำเนินคดี การบังคับสิทธิ์ และธุรกรรม',
            cn: '在专利和商标业务的申请、维权及交易方面均获权威排名认可。',
        },
    },
    {
        key: 'asialaw',
        source: 'Asia Law',
        name: 'Top 100 Lawyers',
        description: {
            en: 'Prof. Dej-Udom Krairit recognised among Asia Law\'s Top 100 Lawyers in Thailand.',
            th: 'ศ.ดร.เดชอุดม ไกรฤทธิ์ ได้รับการยอมรับให้เป็นหนึ่งใน Top 100 Lawyers ของ Asia Law ในประเทศไทย',
            cn: '德乔·乌多姆·格莱里特教授荣列Asia Law泰国百大律师榜单。',
        },
    },
    {
        key: 'boi',
        source: 'Board of Investment',
        name: 'BOI Certified',
        description: {
            en: 'Authorised to submit LTR Visa applications directly to the BOI.',
            th: 'ได้รับอนุญาตให้ยื่นคำขอ LTR Visa โดยตรงต่อสำนักงานคณะกรรมการส่งเสริมการลงทุน',
            cn: '获授权直接向泰国投资促进委员会提交LTR签证申请。',
        },
    },
    {
        key: 'google',
        source: 'Google Reviews',
        name: '4.9 Stars',
        description: {
            en: 'Highest-rated law firm in the Bangrak district for client satisfaction.',
            th: 'สำนักงานกฎหมายที่ได้รับคะแนนสูงสุดในย่านบางรักด้านความพึงพอใจของลูกค้า',
            cn: '邦拉克区客户满意度评分最高的律师事务所。',
        },
    },
    {
        key: 'inta',
        source: 'Membership',
        name: 'INTA',
        description: {
            en: 'International Trademark Association — Member since 1997.',
            th: 'สมาคมเครื่องหมายการค้าระหว่างประเทศ — สมาชิกตั้งแต่ พ.ศ. 2540',
            cn: '国际商标协会——自1997年起正式成员。',
        },
    },
    {
        key: 'apaa',
        source: 'Membership',
        name: 'APAA',
        description: {
            en: 'Asian Patent Attorneys Association — Active member.',
            th: 'สมาคมทนายความสิทธิบัตรแห่งเอเชีย — สมาชิกที่ยังคงดำเนินงานอยู่',
            cn: '亚洲专利代理人协会——现任会员。',
        },
    },
    {
        key: 'aippi',
        source: 'Membership',
        name: 'AIPPI',
        description: {
            en: 'International Association for the Protection of Intellectual Property — Thailand National Group.',
            th: 'สมาคมระหว่างประเทศเพื่อการคุ้มครองทรัพย์สินทางปัญญา — กลุ่มแห่งชาติไทย',
            cn: '国际知识产权保护协会——泰国国家小组成员。',
        },
    },
    {
        key: 'aseanipa',
        source: 'Membership',
        name: 'ASEAN IPA',
        description: {
            en: 'ASEAN Intellectual Property Association — Corporate Member.',
            th: 'สมาคมทรัพย์สินทางปัญญาอาเซียน — สมาชิกองค์กร',
            cn: '东盟知识产权协会——企业会员。',
        },
    },
    {
        key: 'ipba',
        source: 'Membership',
        name: 'IPBA',
        description: {
            en: 'Inter-Pacific Bar Association — Member.',
            th: 'สมาคมทนายความระหว่างประเทศแห่งเอเชียแปซิฟิก — สมาชิก',
            cn: '泛太平洋律师公会——正式会员。',
        },
    },
]
