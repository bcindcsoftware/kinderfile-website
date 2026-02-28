# KinderFile Website

Marketing website for KinderFile — staff credential compliance tracking for daycare centers.

## Local Development

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) (v0.157.0 or later)
  - Or use via npx: `npx hugo-extended`

### Run locally

```bash
hugo server
```

Open [http://localhost:1313](http://localhost:1313) in your browser.

### Build for production

```bash
hugo
```

Output is written to the `public/` directory.

## Deployment

This site deploys automatically via Netlify when changes are pushed to the `main` branch.

### Netlify Setup

1. Connect this GitHub repo in the Netlify dashboard
2. Build command: `hugo`
3. Publish directory: `public`
4. Hugo version is set in `netlify.toml`

### Custom Domain

1. Add `kinderfile.com` as a custom domain in Netlify
2. Update DNS records at your registrar (CNAME or Netlify DNS)
3. HTTPS is automatic via Netlify

### Decap CMS Setup

1. Enable **Netlify Identity** in the Netlify dashboard
2. Enable **Git Gateway** under Identity settings
3. Invite yourself as a user
4. Access the CMS at [kinderfile.com/admin/](https://kinderfile.com/admin/)

### Google Search Console

1. Add property for kinderfile.com
2. Replace `PLACEHOLDER_VERIFICATION_CODE` in `layouts/partials/head.html` with your actual verification code
3. Submit `sitemap.xml`

## Project Structure

```
├── config.toml              Hugo site config
├── content/
│   ├── _index.md            Homepage metadata
│   ├── blog/                Blog posts (managed via Decap CMS)
│   └── login/               Login placeholder page
├── layouts/
│   ├── index.html           Homepage template
│   ├── _default/            Default list + single templates
│   ├── page/                Static page templates
│   └── partials/            Reusable components
├── static/
│   ├── admin/               Decap CMS
│   ├── css/style.css        All styles
│   ├── js/main.js           Menu, scroll, form handling
│   └── images/              Logo, favicon, uploads
└── netlify.toml             Netlify build config
```
