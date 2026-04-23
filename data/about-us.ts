import type { LocaleKey } from './practices'

export const FOUNDER_NARRATIVE: Record<LocaleKey, [string, string, string]> = {
    en: [
        "Professor Dej-Udom Krairit established the firm in 1986 with a single focus: providing rigorous intellectual property advice to international companies entering the Thai market. At a time when Thailand's IP framework was still developing, the firm built its reputation on technical depth and direct access to the regulatory bodies that shaped the system.",
        "Over the following decades, the practice expanded in response to what clients actually needed. Companies that came for trademark protection soon needed corporate structuring, work permits for their expatriate staff, and eventually, representation in disputes. Rather than referring these matters out, Professor Dej-Udom built dedicated departments — each led by practitioners with genuine depth in their area.",
        "Today, Dej-Udom & Associates advises in Thai and English across intellectual property, immigration and relocation, corporate and investment law, litigation and dispute resolution, and notarial services. The approach hasn't changed: understand the client's business first, then provide advice that accounts for how Thai law actually works in practice.",
    ],
    th: [
        "ศาสตราจารย์เดชอุดม ไกรฤทธิ์ ก่อตั้งสำนักงานในปี พ.ศ. 2529 โดยมุ่งเน้นเพียงจุดเดียว คือการให้คำแนะนำด้านทรัพย์สินทางปัญญาอย่างเข้มงวดแก่บริษัทต่างชาติที่เข้าสู่ตลาดไทย ในช่วงเวลาที่กรอบกฎหมายทรัพย์สินทางปัญญาของไทยยังอยู่ระหว่างการพัฒนา สำนักงานได้สร้างชื่อเสียงจากความเชี่ยวชาญเชิงเทคนิคและการเข้าถึงหน่วยงานกำกับดูแลโดยตรง",
        "ในทศวรรษต่อมา สำนักงานขยายตัวตอบสนองต่อความต้องการที่แท้จริงของลูกค้า บริษัทที่มาเพื่อการคุ้มครองเครื่องหมายการค้าเริ่มต้องการการจัดโครงสร้างบริษัท ใบอนุญาตทำงานสำหรับพนักงานต่างชาติ และการว่าความในข้อพิพาท แทนที่จะส่งต่อคดีเหล่านี้ออกไป ศาสตราจารย์เดชอุดมได้สร้างแผนกเฉพาะทาง ซึ่งแต่ละแผนกนำโดยผู้เชี่ยวชาญที่มีความลึกซึ้งในสาขาของตน",
        "ปัจจุบัน เดชอุดม แอนด์ แอสโซซิเอทส์ ให้คำปรึกษาทั้งภาษาไทยและภาษาอังกฤษ ครอบคลุมด้านทรัพย์สินทางปัญญา การตรวจคนเข้าเมืองและการโยกย้าย กฎหมายบริษัทและการลงทุน คดีความและการระงับข้อพิพาท และบริการรับรองเอกสาร แนวทางไม่เคยเปลี่ยนแปลง: เข้าใจธุรกิจของลูกค้าก่อน จากนั้นให้คำแนะนำที่คำนึงถึงวิธีที่กฎหมายไทยทำงานในทางปฏิบัติ",
    ],
    cn: [
        "Dej-Udom Krairit 教授于 1986 年创立律所，专注于为进入泰国市场的外资企业提供严谨的知识产权法律建议。彼时泰国知识产权法律体系尚在发展之中，律所凭借深厚的专业技术底蕴及与监管机构的直接沟通渠道，逐步建立起卓越声誉。",
        "此后数十年间，律所顺应客户的实际需求持续扩展业务。最初寻求商标保护的企业，随后需要公司架构搭建、外籍员工工作许可办理，乃至争议代理服务。Dej-Udom 教授并未将这些事务转介他处，而是组建了各具专深实力的专业部门，由各领域的资深从业者亲自主导。",
        "时至今日，Dej-Udom & Associates 以泰语和英语为客户提供全方位法律服务，涵盖知识产权、移民与外派管理、公司与投资法、诉讼与争议解决，以及公证服务。律所的核心理念始终如一：先深入了解客户的业务，再提供契合泰国法律实际运作的专业建议。",
    ],
}

export interface TimelineItem {
    year: string
    content: Record<LocaleKey, string>
}

export const FOUNDER_TIMELINE: TimelineItem[] = [
    {
        year: '1986',
        content: {
            en: 'Professor Dej-Udom Krairit founds the firm as a specialist intellectual property practice in Bangkok',
            th: 'ศาสตราจารย์เดชอุดม ไกรฤทธิ์ ก่อตั้งสำนักงานในฐานะสำนักงานเฉพาะทางด้านทรัพย์สินทางปัญญาในกรุงเทพฯ',
            cn: 'Dej-Udom Krairit 教授在曼谷创立知识产权专业律所',
        },
    },
    {
        year: '1995',
        content: {
            en: 'Expands cross-border capabilities through INTA and APAA memberships, strengthening international IP network',
            th: 'ขยายความสามารถข้ามพรมแดนผ่านการเป็นสมาชิก INTA และ APAA เสริมสร้างเครือข่าย IP ระหว่างประเทศ',
            cn: '通过加入 INTA 与 APAA，拓展跨境服务能力，强化国际知识产权网络',
        },
    },
    {
        year: '2005',
        content: {
            en: 'Expands into full-service operations — adding corporate, litigation, and immigration departments',
            th: 'ขยายสู่การดำเนินงานแบบครบวงจร เพิ่มแผนกกฎหมายบริษัท คดีความ และตรวจคนเข้าเมือง',
            cn: '扩展为综合全服务律所，新增公司法、诉讼及移民业务部门',
        },
    },
    {
        year: '2018',
        content: {
            en: 'Strengthens regional coverage across Southeast Asia through expanded professional network partnerships',
            th: 'เสริมสร้างการครอบคลุมระดับภูมิภาคทั่วเอเชียตะวันออกเฉียงใต้ผ่านการขยายพันธมิตรเครือข่ายวิชาชีพ',
            cn: '通过拓展专业合作网络，进一步强化在东南亚地区的业务覆盖',
        },
    },
    {
        year: '2023',
        content: {
            en: 'Appointed BOI Certified Agency for the Long-Term Resident (LTR) Visa programme — one of a limited number of authorised firms',
            th: 'ได้รับการแต่งตั้งเป็นตัวแทนที่ได้รับการรับรองจาก BOI สำหรับโครงการวีซ่าผู้พำนักระยะยาว (LTR) — หนึ่งในสำนักงานที่ได้รับอนุญาตจำนวนจำกัด',
            cn: '获委任为 BOI 长期居留签证 (LTR) 认证代理机构，属获授权事务所之一',
        },
    },
]
