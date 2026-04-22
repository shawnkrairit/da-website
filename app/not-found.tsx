import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function NotFound() {
    const locale = await getLocale();
    const messages = await getMessages();
    const t = await getTranslations("NotFound");

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="flex min-h-svh flex-col items-center justify-center gap-6 text-center px-6">
                <p className="text-text-secondary text-sm font-medium tracking-widest uppercase">
                    404
                </p>
                <h1 className="text-4xl font-bold text-gold">{t("title")}</h1>
                <p className="text-text-secondary max-w-sm">{t("description")}</p>
                <Button asChild variant='default'>
                    <Link href="/">{t("back")}</Link>
                </Button>
            </div>
        </NextIntlClientProvider>
    );
}
