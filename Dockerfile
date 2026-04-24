# Stage 1: Build
FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

RUN apk add --no-cache libc6-compat openssl

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml* ./
COPY prisma ./prisma/
COPY prisma.config.ts ./

RUN pnpm install --frozen-lockfile

RUN pnpm prisma generate

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# NEXT_PUBLIC_* vars must be present at build time — Next.js inlines them.
# All other vars (DATABASE_URL, BETTER_AUTH_*, TURNSTILE_SECRET_KEY) are
# runtime-only: pass them via --env-file or your platform's env injection.
ARG NEXT_PUBLIC_APP_URL
ARG NEXT_PUBLIC_CLOUDFLARE_R2_URL
ARG NEXT_PUBLIC_TURNSTILE_SITE_KEY
ENV NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL
ENV NEXT_PUBLIC_CLOUDFLARE_R2_URL=$NEXT_PUBLIC_CLOUDFLARE_R2_URL
ENV NEXT_PUBLIC_TURNSTILE_SITE_KEY=$NEXT_PUBLIC_TURNSTILE_SITE_KEY

RUN pnpm run build

# Stage 2: Runner
FROM node:22-alpine AS runner

WORKDIR /app

RUN apk add --no-cache openssl

RUN corepack enable && corepack prepare pnpm@latest --activate

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma/
COPY --from=builder /app/prisma.config.ts ./

EXPOSE 3000

CMD ["pnpm", "run", "start"]
