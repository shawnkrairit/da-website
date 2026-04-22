import { getTranslations } from "next-intl/server";
import SectionHeader from "../global/SectionHeader";
import Image from "next/image";
import { COUNTRIES } from "@/data/global-reach";

async function GlobalReach() {
    const t = await getTranslations('HomePage.globalReachSection')

    return (
        <section className="flex w-full flex-col items-center overflow-hidden pt-26">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 px-4 lg:px-0 items-center">
                <SectionHeader
                    eyebrow={t('eyebrow')}
                    title={t.rich('title', { br: () => <br /> })}
                    description={t.rich('description', { br: () => <br /> })}
                />

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 h-fit">
                    {COUNTRIES.map(({ code, name, home }) => (
                        <div
                            key={code}
                            className={[
                                'flex flex-wrap items-center gap-3 rounded-xl border px-4 py-6 transition-all duration-300',
                                'hover:border-gold/30',
                                home
                                    ? 'border-gold/30 bg-gold/6'
                                    : 'border-white/8 bg-white/3',
                            ].join(' ')}
                        >
                            <Image
                                src={`https://flagcdn.com/w80/${code}.png`}
                                alt={name}
                                width={40}
                                height={28}
                                className="rounded object-cover shadow-md shadow-black/30 shrink-0"
                            />
                            <span className={`text-sm font-semibold ${home ? 'text-gold' : 'text-text-primary'}`}>
                                {name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default GlobalReach;
