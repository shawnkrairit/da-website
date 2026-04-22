import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function LocaleNotFound() {
    const t = await getTranslations("NotFound");

    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 text-center px-6">
            <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
                404
            </p>
            <h1 className="text-4xl font-bold">{t("title")}</h1>
            <p className="text-muted-foreground max-w-sm">{t("description")}</p>
            <Button asChild>
                <Link href="/">{t("back")}</Link>
            </Button>
        </div>
    );
}
