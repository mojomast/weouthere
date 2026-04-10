# 07_website/seo_metadata.md

## Purpose

Define page-level SEO metadata, social metadata, and structured data recommendations for the **WE OUT HERE** website.

## Owner/Subagent

seo_agent

## Status

Draft v1 - launch metadata set

## Dependencies

- `07_website/sitemap.md`
- `07_website/website_copy.md`
- Final domain
- Final social preview image set
- Structured data implementation support

## Content

## SEO Principles

- Prioritize branded search and factual clarity.
- Use titles and descriptions that name the project and page function plainly.
- Avoid keyword stuffing.
- Keep metadata aligned with approved canon.

## Global Metadata

### Site Name

WE OUT HERE

### Default Meta Description

WE OUT HERE is a premium indie dark sitcom about startup rot, status hunger, and the internet leaking into real life.

### Default Open Graph Image

- Ratio: 1.91:1
- Style: high-tension still or branded key art with clean legibility
- Avoid overcrowded text

## Page Metadata

### Home `/`

- Title: `WE OUT HERE | Premium Indie Dark Sitcom Series`
- Meta description: `Discover WE OUT HERE, a psychologically sharp indie dark sitcom about startup rot, ambition, intimacy, and life inside internet-native systems.`
- H1: `WE OUT HERE`

### About `/about`

- Title: `About the Series | WE OUT HERE`
- Meta description: `Learn about WE OUT HERE, a premium indie series exploring startup culture, online self-construction, and the emotional cost of modern ambition.`
- H1: `About the Series`

### Episodes `/episodes`

- Title: `Episodes | WE OUT HERE`
- Meta description: `Explore the season structure and episode loglines for WE OUT HERE.`
- H1: `Episodes`

### Characters `/characters`

- Title: `Characters | WE OUT HERE`
- Meta description: `Meet the characters of WE OUT HERE and the social ecosystem shaping the series.`
- H1: `Characters`

### Press Kit `/press`

- Title: `Press Kit | WE OUT HERE TV Series`
- Meta description: `Access the official WE OUT HERE press kit with series information, bios, credits, stills, and press contact details.`
- H1: `Press Kit`

### News `/news`

- Title: `News and Updates | WE OUT HERE`
- Meta description: `Read the latest news, production milestones, and public updates from WE OUT HERE.`
- H1: `News / Updates`

### Casting `/casting`

- Title: `Casting | WE OUT HERE`
- Meta description: `View current casting opportunities and submission guidance for WE OUT HERE.`
- H1: `Casting`

### Jobs `/jobs`

- Title: `Jobs / Join the Production | WE OUT HERE`
- Meta description: `Explore open production roles and collaborator opportunities for WE OUT HERE.`
- H1: `Jobs / Join the Production`

### Investors `/investors`

- Title: `For Investors and Partners | WE OUT HERE`
- Meta description: `Learn about partnership and investor conversation opportunities around WE OUT HERE, a premium indie series project.`
- H1: `For Investors / Partners`

### Contact `/contact`

- Title: `Contact | WE OUT HERE`
- Meta description: `Contact the WE OUT HERE team for press, production, casting, jobs, community, or partnership inquiries.`
- H1: `Contact`

### FAQ `/faq`

- Title: `FAQ | WE OUT HERE`
- Meta description: `Find answers to common questions about WE OUT HERE, including project status, press, casting, jobs, community, and contact.`
- H1: `FAQ`

### Community `/community`

- Title: `Community / Discord | WE OUT HERE`
- Meta description: `Join the WE OUT HERE community to follow updates, connect with the project, and stay close to the series.`
- H1: `Community / Discord`

## Structured Data Plan

### Sitewide

- `Organization`
- `WebSite`

### Home And About

- `TVSeries` or `CreativeWorkSeries`, depending on implementation support and final positioning

### News

- `Article` or `NewsArticle` per post

### FAQ

- `FAQPage` only for live visible questions

### Press

- Reuse `CreativeWork` / `TVSeries` facts and `Person` entities for key creators where appropriate

## Canonical Rules

- One canonical URL per page
- Strip tracking parameters
- Use trailing-slash convention only if applied consistently sitewide

## Indexing Rules

- Index all primary content pages
- Do not index thank-you or internal utility pages
- Consider noindex for any future gated press-download wrapper pages if they duplicate press content

## Social Metadata Rules

- Use platform-safe Open Graph and Twitter images
- Preserve title consistency with page intent
- Use concise descriptions that read well out of context in social previews

## Search Priorities

- `WE OUT HERE`
- `WE OUT HERE series`
- `WE OUT HERE TV series`
- creator names plus title
- title plus `press kit`, `episodes`, or `casting`

## Maintenance Notes

- Update metadata if series format terminology changes.
- Refresh social images when final key art lands.
- Keep News post metadata unique and descriptive.

## Next related files

- `07_website/sitemap.md`
- `07_website/website_copy.md`
- `07_website/structured_content_model.md`
- `07_website/cms_plan.md`
- `07_website/faq_page_spec.md`
