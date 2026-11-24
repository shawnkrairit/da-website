import { getTranslations } from "next-intl/server";
import SectionHeader from "@/components/global/SectionHeader";
import ContactForm from "../form/ContactForm";

async function TalkToUs() {
    const t = await getTranslations('HomePage.talkToUsSection')
    const phone = t('phone')
    const email = t('email')
    const address = t('address')
    const lineCls = "flex min-h-14 items-center border-b border-rule py-2.5 font-heading text-xl leading-snug transition-colors duration-150 hover:border-brand"

    return (
        <section id="contact" className="bg-tint py-[clamp(72px,9vw,128px)]">
            <div className="wrap grid grid-cols-1 gap-x-6 gap-y-12 lg:grid-cols-12">
                <div className="lg:col-span-5">
                    <SectionHeader
                        title={t.rich('title', { br: () => <br /> })}
                        description={t.rich('description', { br: () => <br /> })}
                    />
                    <div className="mt-9 flex flex-col border-t border-rule-strong">
                        <a href={`tel:${phone.replace(/\(0\)|[^+\d]/g, '')}`} className={`${lineCls} tabular-nums`}>{phone}</a>
                        <a href={`mailto:${email}`} className={lineCls}>{email}</a>
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                            target="_blank"
                            rel="noopener"
                            className={lineCls}
                        >
                            {address}
                        </a>
                    </div>
                </div>
                <div className="lg:col-span-6 lg:col-start-7">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

export default TalkToUs;
