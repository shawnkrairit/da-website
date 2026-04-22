import { getTranslations } from "next-intl/server";

async function UserHomePage() {
    const t = await getTranslations('HomePage')
    return (
        <div>
            <h1 className="text-white">{t('title')}</h1>
        </div>
    );
}

export default UserHomePage;