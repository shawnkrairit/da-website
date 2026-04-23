import { getTranslations } from "next-intl/server";
import SectionHeader from "@/components/global/SectionHeader";
import Image from "next/image";
import { r2 } from "@/lib/image";
import ContactForm from "../form/ContactForm";
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";

async function TalkToUs() {
    const t = await getTranslations('HomePage.talkToUsSection')

    return (
        <section className="relative flex w-full justify-center overflow-hidden bg-forest-deep">
            {/* Background photo */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={r2('client/handshake.jpg')}
                    alt="Contact Us"
                    fill
                    className="object-cover object-center opacity-20"
                    priority
                    aria-hidden
                />
            </div>

            {/* overlay */}
            <div className="pointer-events-none absolute inset-0 z-1 bg-forest-deep/50" />

            <div className="relative z-2 container grid grid-cols-1 lg:grid-cols-2 gap-16 py-26 px-4 lg:px-0 items-center">
                <div className="flex flex-col gap-8">
                    <SectionHeader
                        eyebrow={t('eyebrow')}
                        title={t.rich('title', {br: () => <br />})}
                        description={t.rich('description', {br: () => <br />})}
                    />
                    <div className="flex flex-col gap-4 pt-2">
                        {[
                            { icon: PhoneIcon, value: t('phone') },
                            { icon: MailIcon,  value: t('email') },
                            { icon: MapPinIcon, value: t('address') },
                        ].map(({ icon: Icon, value }) => (
                            <div key={value} className="flex items-start gap-4">
                                <div className="size-11 shrink-0 rounded-full border border-gold bg-gold/10 flex items-center justify-center text-gold">
                                    <Icon size={18} />
                                </div>
                                <p className="text-text-secondary leading-relaxed pt-2">{value}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <ContactForm/>
            </div>
        </section>
    );
}

export default TalkToUs;
