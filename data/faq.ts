import type { LocaleKey } from './practices'

type LocaleContent = { question: string; answer: string }

export type FAQItem = {
    key: string
    content: Record<LocaleKey, LocaleContent>
}

export const FAQS: FAQItem[] = [
    {
        key: 'practice-areas',
        content: {
            en: {
                question: 'What practice areas does Dej-Udom & Associates cover?',
                answer: 'We provide full-service legal representation across 10 practice areas: Immigration & Work Permits, Intellectual Property, Corporate & M&A, Litigation/Mediation/ADR, Employment & Labour Law, Data Privacy & PDPA, Taxation, Real Estate & Property, Banking & Finance, and BOI & Investment Promotion. With 40 years of practice in Bangkok, we advise multinational companies operating across Thailand and the ASEAN region.',
            },
            th: {
                question: 'สำนักงานกฎหมายเดชอุดมและหุ้นส่วนให้บริการด้านใดบ้าง?',
                answer: 'เราให้บริการกฎหมายครบวงจรใน 10 สาขา ได้แก่ การตรวจคนเข้าเมืองและใบอนุญาตทำงาน ทรัพย์สินทางปัญญา กฎหมายองค์กรและการควบรวมกิจการ การดำเนินคดี/การไกล่เกลี่ย/ADR กฎหมายแรงงานและการจ้างงาน การคุ้มครองข้อมูลส่วนบุคคลและ PDPA กฎหมายภาษี กฎหมายอสังหาริมทรัพย์ กฎหมายธนาคารและการเงิน และ BOI กับการส่งเสริมการลงทุน ด้วยประสบการณ์ 40 ปีในกรุงเทพฯ เราให้คำปรึกษาแก่บริษัทข้ามชาติที่ดำเนินงานทั่วไทยและอาเซียน',
            },
            cn: {
                question: '德乔·乌多姆律师事务所涵盖哪些业务领域？',
                answer: '我们提供涵盖10个业务领域的全方位法律服务：移民与工作许可、知识产权、公司及并购、诉讼/调解/替代争议解决、劳动与雇佣法、数据隐私与PDPA、税务、房地产与物业、银行与金融，以及BOI与投资促进。凭借40年的曼谷执业经验，我们为在泰国及东盟地区运营的跨国公司提供法律咨询。',
            },
        },
    },
    {
        key: 'trademark',
        content: {
            en: {
                question: 'How long does it take to register a trademark in Thailand?',
                answer: 'A straightforward trademark registration in Thailand typically takes 12 to 18 months from filing to registration. The process involves filing, examination by the Department of Intellectual Property (DIP), publication for opposition, and issuance of the registration certificate. Our IP team manages over 3,000 trademark matters annually and can advise on the fastest path for your situation.',
            },
            th: {
                question: 'การจดทะเบียนเครื่องหมายการค้าในไทยใช้เวลานานเท่าใด?',
                answer: 'การจดทะเบียนเครื่องหมายการค้าในไทยโดยทั่วไปใช้เวลา 12 ถึง 18 เดือนนับจากการยื่นจนถึงการจดทะเบียน กระบวนการประกอบด้วยการยื่นคำขอ การตรวจสอบโดยกรมทรัพย์สินทางปัญญา การประกาศเพื่อคัดค้าน และการออกหนังสือสำคัญการจดทะเบียน ทีมทรัพย์สินทางปัญญาของเราดูแลเรื่องเครื่องหมายการค้ากว่า 3,000 รายการต่อปี และพร้อมให้คำแนะนำเส้นทางที่เร็วที่สุดสำหรับสถานการณ์ของท่าน',
            },
            cn: {
                question: '在泰国注册商标需要多长时间？',
                answer: '泰国商标注册从提交申请到完成注册通常需要12至18个月。流程包括提交申请、泰国知识产权局审查、公告异议期及颁发注册证书。我们的知识产权团队每年处理逾3,000件商标事务，可就您的具体情况提供最优路径建议。',
            },
        },
    },
    {
        key: 'ltr-visa',
        content: {
            en: {
                question: 'What is the LTR Visa and who qualifies?',
                answer: 'The Long-Term Resident (LTR) Visa is a 10-year visa introduced by the Thai government for four categories of foreign nationals: Wealthy Global Citizens, Wealthy Pensioners, Work-from-Thailand Professionals, and Highly-Skilled Professionals. Benefits include a 17% flat income tax rate, exemption from the 4:1 Thai-to-foreign worker ratio, and 90-day reporting extended to annual reporting. Our immigration team handles the full application process.',
            },
            th: {
                question: 'LTR Visa คืออะไร และใครมีสิทธิ์ขอ?',
                answer: 'วีซ่า Long-Term Resident (LTR) คือวีซ่า 10 ปีที่รัฐบาลไทยออกสำหรับชาวต่างชาติ 4 กลุ่ม ได้แก่ ผู้มีความมั่งคั่งสูง ผู้เกษียณอายุที่มีฐานะดี ผู้ประกอบอาชีพอิสระแบบ Work-from-Thailand และผู้เชี่ยวชาญระดับสูง สิทธิประโยชน์รวมถึงอัตราภาษีเงินได้แบบเหมา 17% การยกเว้นสัดส่วนพนักงานไทยต่อต่างชาติ 4:1 และการรายงานตัว 90 วันเปลี่ยนเป็นรายปี ทีมตรวจคนเข้าเมืองของเราดูแลกระบวนการยื่นขอทั้งหมด',
            },
            cn: {
                question: 'LTR签证是什么？哪些人符合申请资格？',
                answer: '长期居留签证（LTR）是泰国政府为四类外籍人士推出的10年签证：富裕全球公民、富裕退休人士、泰国远程工作专业人士及高技能专业人士。福利包括17%的固定个人所得税税率、豁免4:1泰籍与外籍员工比例要求，以及将90天报到改为每年报到一次。我们的移民团队可全程处理申请事宜。',
            },
        },
    },
    {
        key: 'foreign-business',
        content: {
            en: {
                question: 'Can a foreign company set up a business in Thailand?',
                answer: 'Yes. Foreign companies can establish a presence in Thailand through several structures: a Thai Limited Company, a Branch Office, a Representative Office, or through BOI (Board of Investment) promoted activities which offer tax incentives and permit majority foreign ownership. Our corporate team advises on the optimal structure based on your business activity, investment level, and long-term goals in the Thai and ASEAN markets.',
            },
            th: {
                question: 'บริษัทต่างชาติสามารถตั้งธุรกิจในไทยได้หรือไม่?',
                answer: 'ได้ บริษัทต่างชาติสามารถเข้ามาดำเนินธุรกิจในไทยได้หลายรูปแบบ ได้แก่ บริษัทจำกัดไทย สาขา สำนักงานตัวแทน หรือผ่านการส่งเสริมการลงทุน BOI ซึ่งมีสิทธิประโยชน์ทางภาษีและอนุญาตให้ถือหุ้นต่างชาติเกินกว่า 50% ทีมองค์กรของเราให้คำปรึกษาเกี่ยวกับโครงสร้างที่เหมาะสมที่สุดตามประเภทธุรกิจ ระดับการลงทุน และเป้าหมายระยะยาวของท่านในไทยและอาเซียน',
            },
            cn: {
                question: '外资公司可以在泰国设立业务吗？',
                answer: '可以。外资公司可通过多种结构在泰国设立经营主体：泰国有限公司、分公司、代表处，或通过BOI（泰国投资促进委员会）获得税收优惠并允许外资持股超过50%。我们的公司业务团队将根据您的经营活动、投资规模及在泰国和东盟市场的长期目标，为您推荐最优架构。',
            },
        },
    },
    {
        key: 'outside-thailand',
        content: {
            en: {
                question: 'Does Dej-Udom & Associates handle cases outside Thailand?',
                answer: 'While our offices are in Bangkok, we advise clients on legal matters across all 11 ASEAN jurisdictions through our regional network of partner firms. We coordinate cross-border IP portfolios, multi-country immigration matters, and regional corporate transactions through a single point of contact. Our ASEAN country guides cover Thailand, Vietnam, Singapore, Indonesia, Malaysia, Philippines, Cambodia, Myanmar, Laos, Brunei, and Timor-Leste.',
            },
            th: {
                question: 'เดชอุดมและหุ้นส่วนรับดูแลคดีนอกประเทศไทยด้วยหรือไม่?',
                answer: 'แม้สำนักงานของเราตั้งอยู่ที่กรุงเทพฯ แต่เราให้คำปรึกษาด้านกฎหมายครอบคลุมทุก 11 เขตอำนาจศาลในอาเซียนผ่านเครือข่ายสำนักงานกฎหมายพันธมิตร เราประสานงานพอร์ตโฟลิโอทรัพย์สินทางปัญญาข้ามพรมแดน การตรวจคนเข้าเมืองหลายประเทศ และธุรกรรมองค์กรระดับภูมิภาคผ่านจุดติดต่อเดียว ครอบคลุมไทย เวียดนาม สิงคโปร์ อินโดนีเซีย มาเลเซีย ฟิลิปปินส์ กัมพูชา เมียนมา ลาว บรูไน และติมอร์-เลสเต',
            },
            cn: {
                question: '德乔·乌多姆律师事务所是否处理泰国境外的法律事务？',
                answer: '尽管我们的办公室位于曼谷，但我们通过区域合作律所网络，为客户提供覆盖东盟全部11个司法管辖区的法律建议。我们通过单一联络点协调跨境知识产权组合、多国移民事务及区域公司交易，服务范围涵盖泰国、越南、新加坡、印度尼西亚、马来西亚、菲律宾、柬埔寨、缅甸、老挝、文莱及东帝汶。',
            },
        },
    },
]
