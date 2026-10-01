# Cloudflare Pages Deployment Guide: sakibh.work

This agency website for **Sakib Hossen** is architected to deploy natively to **Cloudflare Pages** (or Cloudflare Workers static assets) with zero server overhead, lightning-fast edge delivery, and automatic SSL.

---

## 1. Project Specifications

- **Domain:** `https://sakibh.work`
- **Build Command:** `npm run build`
- **Build Output Directory:** `dist`
- **Node.js Version:** `18` or `20` (Node 20 recommended)
- **Routing Configuration:** SPA routing pre-configured via `/public/_redirects`
- **Security & Caching Headers:** Pre-configured via `/public/_headers`

---

## 2. Deploying via Cloudflare Dashboard (Recommended)

### Step 1: Connect Git Repository
1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left navigation, click on **Workers & Pages**.
3. Click **Create Application** &rarr; select the **Pages** tab.
4. Click **Connect to Git** and choose the repository containing this codebase.

### Step 2: Configure Build Settings
Fill in the build settings as follows:
- **Project Name:** `sakibh-work` (or your choice)
- **Production Branch:** `main`
- **Framework Preset:** `Vite` (or `None`)
- **Build Command:** `npm run build`
- **Build Output Directory:** `dist`

### Step 3: Environment Variables (Optional)
In the Cloudflare Pages settings under **Settings &rarr; Environment variables**:
- `NODE_VERSION`: `20`
- `VITE_APP_URL`: `https://sakibh.work`
- *(Optional)* `VITE_GTM_ID`: `GTM-XXXXXX` (when you are ready to connect Google Tag Manager)

### Step 4: Click "Save and Deploy"
Cloudflare will compile the application in ~45 seconds and provide a preview URL (e.g., `sakibh-work.pages.dev`).

---

## 3. Custom Domain Configuration (`sakibh.work`)

1. Once the deployment succeeds, navigate to your project in **Workers & Pages** &rarr; `sakibh-work`.
2. Click the **Custom domains** tab &rarr; **Set up a custom domain**.
3. Enter `sakibh.work` (and optionally `www.sakibh.work`).
4. Click **Continue**.
5. **DNS Setup:**
   - If your domain `sakibh.work` is already managed on Cloudflare DNS, Cloudflare automatically provisions the CNAME/Apex records.
   - If your domain is registered elsewhere (Namecheap, GoDaddy, Google Domains, etc.), point your DNS nameservers to Cloudflare, or create a CNAME record pointing to `sakibh-work.pages.dev`.
6. SSL/TLS certificate will automatically activate within a few minutes.

---

## 4. Alternative: Deploy via Wrangler CLI

If you prefer deploying directly from your terminal:

```bash
# 1. Install Wrangler globally (or use npx)
npm install -g wrangler

# 2. Build the production bundle
npm run build

# 3. Deploy the dist folder to Cloudflare Pages
npx wrangler pages deploy dist --project-name sakibh-work
```

---

## 5. Analytics & Tag Manager (dataLayer)

All user interactions (CTA clicks, strategy call bookings, service views, industry views, contact forms) are routed through `window.dataLayer` via `src/utils/analytics.ts`.

To activate live GTM:
1. Paste your GTM container script into `<head>` in `index.html` (or inject it via Cloudflare Zaraz / Cloudflare Workers).
2. All events (`cta_click`, `contact_form_submit`, `strategy_call_booked`, etc.) will immediately populate in your GTM preview debugger.

---

## 6. Verification Checklist
- [x] Canonical URL configured to `https://sakibh.work`
- [x] Schema.org JSON-LD (ProfessionalService, OfferCatalog, WebSite)
- [x] `public/robots.txt` and `public/sitemap.xml`
- [x] `public/_redirects` (`/* /index.html 200` for SPA routing)
- [x] `public/_headers` (Security headers + asset cache policies)
- [x] High-contrast WCAG AA accessible dark UI
