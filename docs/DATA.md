# Data

---

## Collections

### Attorneys

Represents individual lawyers and staff at the firm.

| Field | Type | Localized | Notes |
|---|---|---|---|
| `name` | text | yes | Full name |
| `title` | text | yes | e.g. "Senior Partner", "หุ้นส่วนอาวุโส" |
| `photo` | upload | no | Relation to Media, aspect ratio 4:5 |
| `bio` | richText | yes | Full biography |
| `education` | array of text | yes | Each item is one qualification, rendered as bullet list |
| `departments` | relationship | no | Relation to Departments taxonomy |
| `email` | email | no | |
| `phone` | text | no | |
| `order` | number | no | Display order in grid |
| `slug` | text | no | Auto-generated from name |

**Departments taxonomy** (shared across EN/TH and CN, not localized):
- `intellectual-property`
- `immigration`
- `corporate`
- `litigation-mediation-adr`
- `taxation`
- `banking-finance`
- `boi-investment-promotion`
- `data-privacy-pdpa`
- `employment-labor-law`
- `real-estate`
- `operations`

---

### Insights (Blog Posts)

Law firm editorial content for SEO, similar to Baker McKenzie Insights.

| Field | Type | Localized | Notes |
|---|---|---|---|
| `title` | text | yes | Post title |
| `slug` | text | no | URL slug, auto-generated |
| `excerpt` | textarea | yes | Short summary for cards |
| `content` | richText | yes | Full post body |
| `cover_image` | upload | no | Relation to Media |
| `categories` | relationship | no | Practice area categories |
| `author` | relationship | no | Relation to Attorneys collection |
| `published_at` | date | no | |
| `status` | select | no | `draft` or `published` |

---

### Publications

Books, guides, and legal commentary published by the firm. Similar to Insights but includes a downloadable PDF.

| Field | Type | Localized | Notes |
|---|---|---|---|
| `title` | text | yes | Book or publication title |
| `slug` | text | no | URL slug |
| `description` | richText | yes | Markdown-style description |
| `cover_image` | upload | no | Relation to Media |
| `file` | upload | no | PDF file, stored in Cloudflare R2 |
| `author` | relationship | no | Relation to Attorneys collection |
| `published_at` | date | no | |

---

### Form Submissions

Stores contact and careers form submissions. Readable only by admin.

| Field | Type | Notes |
|---|---|---|
| `type` | select | `contact` or `careers` |
| `name` | text | |
| `email` | email | |
| `phone` | text | |
| `area_of_interest` | text | Free text, careers form only |
| `message` | textarea | Cover note or contact message |
| `cv_file` | upload | PDF/DOC, careers form only, stored in R2 |
| `status` | select | `new`, `reviewed`, `replied` |
| `submitted_at` | date | Auto |
| `ip_address` | text | Collected for security, not displayed publicly |
| `user_agent` | text | Collected for security, not displayed publicly |

---

### Media

Managed by Payload. All uploads go to Cloudflare R2.

| Field | Notes |
|---|---|
| `filename` | Auto |
| `alt` | Required for accessibility |
| `url` | R2 public URL |
| `mimeType` | Auto |
| `filesize` | Auto |

---

## Globals

### Homepage

Fields editable by admin that appear on the landing page stats/hero section.

| Field | Type | Localized | Notes |
|---|---|---|---|
| `years_of_operation` | number | no | e.g. 40 |
| `asean_countries` | number | no | e.g. 11 |
| `industry_sectors` | number | no | e.g. 8 |
| `working_languages` | number | no | e.g. 2 |
| `hero_title` | text | yes | Main hero heading |
| `hero_subtitle` | text | yes | Hero subheading |

---

## Static Content (next-intl)

Anything that is UI chrome and does not need admin editing lives in:

```
messages/
  en.json
  th.json
```

Examples:
- Navigation labels
- Footer text
- Form labels and placeholders
- Section headings that never change
- Error messages
- Button text