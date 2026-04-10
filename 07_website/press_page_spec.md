# 07_website/press_page_spec.md

## Purpose

Specify the structure, content requirements, functional behavior, and success criteria for the **WE OUT HERE** Press Kit page.

## Owner/Subagent

press_agent

## Status

Draft v1 - ready for design and implementation

## Dependencies

- `07_website/website_copy.md`
- `07_website/component_inventory.md`
- Approved press facts, bios, credits, stills, and downloads
- Press contact ownership and inbox routing

## Content

## Page Goal

Help press, festival programmers, and industry stakeholders retrieve approved information and assets in one visit with no confusion about what is current, official, and usable.

## Primary Users

- Journalists
- Festival programmers
- Publicists and reps
- Industry stakeholders

## Core Actions

- Read the official logline and synopsis
- Download approved stills and materials
- Verify creator bios and credits
- Reach the correct contact quickly

## Required Sections

### 1. Page Hero

Contents:

- H1: `Press Kit`
- Short intro copy
- Last updated date
- Primary CTA: `Download Key Assets`
- Secondary CTA: `Contact Press`

### 2. Project Snapshot

Fields:

- Title
- Format
- Genre
- Runtime
- Status
- Country / region
- Language
- Creator(s)

### 3. Logline

- One approved short logline

### 4. Synopsis

- One approved short synopsis
- Optional longer synopsis block

### 5. Creator And Team Bios

Fields per bio:

- Name
- Role
- 80 to 160 word bio
- Headshot optional

### 6. Credits

Fields:

- Creator
- Writers
- Producers
- Director if attached
- Production company or presenting entity if applicable

### 7. Asset Downloads

Required asset groups:

- Key art
- Still photography
- Creator headshots
- Logos / wordmarks
- One-page PDF overview optional

For each asset:

- Asset title
- File type
- Dimensions or resolution
- File size
- Download link
- Usage note if needed

### 8. Coverage / Recognition

Only show if real.

Possible content:

- Festival selections
- Lab participation
- Press mentions
- Awards or shortlist mentions

### 9. Contact Block

Contents:

- Press contact name or role
- Email
- Response expectation note
- Link to general Contact page as fallback

## Functional Requirements

- Downloads must work directly without broken routing.
- Asset labels must be understandable at a glance.
- Last updated date must be easy to maintain.
- Page should support future expansion with new asset groups.
- Important facts should be indexable text, not embedded in images.

## Trust Requirements

- No placeholder bios.
- No fake laurels, awards, or endorsements.
- Do not display empty asset shells.
- If a screener is not public, say `Available on request` instead of implying open access.

## SEO Notes

- Page title should include `Press Kit` and `TV Series` or final approved format term.
- Include structured data for Organization and, where relevant, CreativeWork / TVSeries.
- Allow indexing.

## Analytics

- Asset download clicks
- Press contact clicks
- Time on page
- Traffic source by referral domain

## Success Criteria

- A journalist can pull the basics in under two minutes.
- A programmer can verify format, creators, and status in one pass.
- Contact and asset access feel legitimate and frictionless.

## Next related files

- `07_website/website_copy.md`
- `07_website/seo_metadata.md`
- `07_website/structured_content_model.md`
- `07_website/cms_plan.md`
- `06_press_kit/`
