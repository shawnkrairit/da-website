export function r2(path: string): string {
    const base = process.env.NEXT_PUBLIC_CLOUDFLARE_R2_URL?.replace(/\/$/, '') ?? '';
    return `${base}/${path.replace(/^\//, '')}`;
}
