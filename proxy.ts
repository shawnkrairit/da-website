import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { auth } from "./lib/auth";

const intlMiddleware = createIntlMiddleware(routing);

export default async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith("/api")) {
        return NextResponse.next();
    }

    if (pathname.startsWith("/admin")) {
        const publicAdminRoutes = ["/admin/login", "/admin/signup", "/admin/forgot-password"];
        if (publicAdminRoutes.includes(pathname)) {
            return NextResponse.next();
        }

        const session = await auth.api.getSession({ headers: request.headers });

        if (!session) {
            const loginUrl = new URL("/admin/login", request.url);
            loginUrl.searchParams.set("callbackUrl", pathname);
            return NextResponse.redirect(loginUrl);
        }

        return NextResponse.next();
    }

    return intlMiddleware(request);
}

export const config = {
    matcher: ["/((?!_next|_vercel|.*\\..*).*)"],
};