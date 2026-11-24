import { getTranslations } from "next-intl/server";
import { COUNTRIES } from "@/data/global-reach";
import Section from "../global/Section";

async function GlobalReach() {
    const t = await getTranslations('HomePage.globalReachSection')

    return (
        <Section
            title={t.rich('title', { br: () => <br /> })}
            description={t.rich('description', { br: () => <span className="block h-4" /> })}
        >
            <ul className="grid grid-cols-2 gap-x-8 border-t border-rule-strong sm:grid-cols-3">
                {COUNTRIES.map(({ code, name }) => (
                    <li key={code} className="flex min-h-16 items-center border-b border-rule font-heading text-xl">
                        {name}
                    </li>
                ))}
            </ul>
        </Section>
    );
}

export default GlobalReach;
