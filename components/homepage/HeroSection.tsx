import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

const HEADLINE: Record<string, [string, string]> = {
    en: ['Legal expertise', 'with a commercial edge'],
    th: ['ความเชี่ยวชาญทางกฎหมาย', 'ที่ตอบโจทย์ธุรกิจ'],
    cn: ['专业法律服务', '兼具商业洞察'],
};

async function HeroSection() {
    const [t, locale] = await Promise.all([
        getTranslations('HomePage.heroSection'),
        getLocale(),
    ]);
    const [line1, line2] = HEADLINE[locale] ?? HEADLINE.en;

    const facts: [string, string][] = [
        ['40', t('yearsOfPractice')],
        ['80%+', t('multinational')],
        ['11', t('asean_countries')],
        ['20+', t('licensed_attorneys')],
    ];

    return (
        <section className="relative overflow-hidden pb-[clamp(56px,7vw,104px)] pt-[clamp(56px,9vw,136px)]">
            <div className="wrap relative">
                {/* the brand guide's overlapping-circles mark */}
                <svg
                    aria-hidden
                    viewBox="0 0 312 172"
                    fill="none"
                    stroke="currentColor"
                    className="pointer-events-none absolute top-1/2 hidden h-auto w-[clamp(420px,44vw,720px)] -translate-y-[58%] text-brand opacity-90 lg:block"
                    style={{ right: 'calc(-1 * var(--gut) - 150px)' }}
                >
                    <circle cx="86" cy="86" r="85" vectorEffect="non-scaling-stroke" strokeWidth="1.25" />
                    <circle cx="226" cy="86" r="85" vectorEffect="non-scaling-stroke" strokeWidth="1.25" />
                </svg>

                <h1 className="relative max-w-[20ch] text-[clamp(2.5rem,1.1rem+5.4vw,5.25rem)]">
                    {line1}<br />{line2}
                </h1>

                <p className="relative mt-[clamp(24px,3vw,40px)] max-w-[52ch] text-[clamp(1.125rem,1.05rem+0.3vw,1.25rem)] leading-[1.55] text-ink-soft">
                    {t('description')}
                </p>

                <div className="relative mt-[clamp(28px,3vw,40px)] flex flex-wrap items-center gap-x-7 gap-y-3">
                    <Link
                        href="#practices"
                        className="inline-flex min-h-12 items-center rounded-sm bg-brand px-6.5 font-medium text-white transition-[background-color,transform] duration-150 hover:bg-brand-hover active:scale-[0.97]"
                    >
                        {t('explore_button')}
                    </Link>
                    <Link
                        href="#contact"
                        className="inline-flex min-h-11 items-center font-medium underline decoration-rule-strong decoration-1 underline-offset-[5px] transition-colors duration-150 hover:decoration-current"
                    >
                        {t('getintouch_button')}
                    </Link>
                </div>

                <ul className="relative mt-[clamp(48px,7vw,96px)] flex flex-wrap gap-x-10 gap-y-1.5 border-t border-rule pt-5 text-[0.9375rem] text-ink-soft">
                    <li className="font-medium text-ink">{t('eyebrow')}</li>
                    {facts.map(([figure, label]) => (
                        <li key={label}>
                            <span className="font-medium tabular-nums text-ink">{figure}</span> {label}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default HeroSection;
