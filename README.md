# Dej-Udom & Associates — Official Website

Law firm website for Dej-Udom & Associates, a full-service commercial law firm based in Bangkok, Thailand, specialising in intellectual property, immigration, corporate law, litigation, and related practice areas.

## Overview

Bilingual (EN/TH) marketing and informational website built with Next.js App Router. Content is managed directly in code — no CMS. The site serves as the firm's primary digital presence for international and domestic clients.

## Features

- Bilingual routing via next-intl (English default, Thai under `/th/` and Simplified Chinese under `/cn/`)
- Attorney profiles with department filtering
- Insights — editorial blog for SEO and thought leadership
- Publications — firm-published books and legal commentary with PDF viewer
- Contact and careers application forms with file upload
- Admin dashboard for reading form submissions and managing content

## Tech Stack

- **Next.js 15** App Router
- **Tailwind CSS** + shadcn/ui
- **next-intl** for i18n routing and static translations
- **PostgreSQL** for form submissions and dynamic data
- **Cloudflare R2** for media and file storage
- **Railway** for hosting and database

## Content

Static content lives in `messages/en.json`, `messages/th.json` and `messages/cn.json`. Dynamic content (attorneys, insights, publications) is managed via the admin dashboard at `/admin`.