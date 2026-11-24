import { getTranslations, getLocale } from "next-intl/server";
import type { LocaleKey } from "@/data/practices";
import { FAQS } from "@/data/faq";
import Section from "../global/Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

async function FAQ() {
    const [t, rawLocale] = await Promise.all([
        getTranslations('HomePage.faqSection'),
        getLocale(),
    ])
    const locale = (rawLocale as LocaleKey) in { en: 1, th: 1, cn: 1 } ? rawLocale as LocaleKey : 'en'

    return (
        <Section title={t.rich('title', { br: () => <br /> })}>
            <Accordion type="single" collapsible defaultValue={FAQS[0]?.key} className="border-t border-rule-strong">
                {FAQS.map(({ key, content }) => {
                    const { question, answer } = content[locale]
                    return (
                        <AccordionItem key={key} value={key} className="border-rule">
                            <AccordionTrigger className="cursor-pointer py-5 text-left font-heading text-[1.375rem] font-normal leading-snug hover:no-underline">
                                {question}
                            </AccordionTrigger>
                            <AccordionContent className="max-w-[68ch] pb-6 text-[1.0625rem] leading-[1.6] text-ink-soft">
                                {answer}
                            </AccordionContent>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </Section>
    );
}

export default FAQ;
