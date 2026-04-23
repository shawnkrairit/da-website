import { getTranslations, getLocale } from "next-intl/server";
import type { LocaleKey } from "@/data/practices";
import { FAQS } from "@/data/faq";
import SectionHeader from "../global/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

async function FAQ() {
    const [t, rawLocale] = await Promise.all([
        getTranslations('HomePage.faqSection'),
        getLocale(),
    ])
    const locale = (rawLocale as LocaleKey) in { en: 1, th: 1, cn: 1 } ? rawLocale as LocaleKey : 'en'

    return (
        <section className="flex w-full flex-col items-center gap-16 overflow-hidden py-26">
            <div className="container px-4 lg:px-0">
                <SectionHeader
                    eyebrow={t('eyebrow')}
                    title={t.rich('title', { br: () => <br /> })}
                />
            </div>

            <div className="container px-4 lg:px-0 flex justify-center">
                <Accordion type="single" collapsible className="max-w-4xl">
                    {FAQS.map(({ key, content }) => {
                        const { question, answer } = content[locale]
                        return (
                            <AccordionItem
                                key={key}
                                value={key}
                                className="border-white/8"
                            >
                                <AccordionTrigger className="text-left font-medium text-lg text-text-primary hover:text-gold hover:no-underline py-5">
                                    {question}
                                </AccordionTrigger>
                                <AccordionContent className="text-text-secondary leading-relaxed pb-5 text-base">
                                    {answer}
                                </AccordionContent>
                            </AccordionItem>
                        )
                    })}
                </Accordion>
            </div>
        </section>
    );
}

export default FAQ;
