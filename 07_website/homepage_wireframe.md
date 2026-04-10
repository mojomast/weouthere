# 07_website/homepage_wireframe.md

## Purpose

Define the structure, content hierarchy, and section-level behavior of the **WE OUT HERE** homepage for design and frontend implementation.

## Owner/Subagent

web_agent

## Status

Draft v1 - homepage build spec

## Dependencies

- `07_website/sitemap.md`
- `07_website/website_copy.md`
- `07_website/component_inventory.md`
- `07_website/design_direction.md`

## Content

## Homepage Job

The homepage must accomplish five things quickly:

- Explain what WE OUT HERE is
- Establish cultural and production credibility
- Show a distinct visual and tonal identity
- Route different audiences to the right pages
- Capture email interest without feeling like a funnel

## Wireframe Structure

### Section 1. Global Header

Contents:

- Wordmark
- Primary nav
- `Get Updates` CTA
- Mobile menu

Behavior:

- Stays clean at load
- Can become more compact on scroll

### Section 2. Hero / Opening Frame

Goal:
Immediate project definition plus emotional charge.

Contents:

- Eyebrow: `Independent Series`
- H1 headline
- Supporting paragraph
- Quick facts row: format, genre, status, location
- Primary CTA: `Explore the Series`
- Secondary CTA: `Get Updates`
- Tertiary text link: `View Press Kit`
- One high-tension media frame: still, loop, or stylized interface scene

Layout notes:

- Desktop: split or asymmetrical composition with text and media in tension
- Mobile: text first, quick facts second, CTA row third, media frame immediately below

### Section 3. Series Statement

Goal:
Clarify premise and thematic intelligence.

Contents:

- Section heading
- Two short paragraphs from About copy
- Optional pull-quote or creator statement fragment

### Section 4. Discovery Routes

Goal:
Move visitors into deeper story pages.

Contents:

- Route card: About the Series
- Route card: Episodes
- Route card: Characters

Each card includes:

- Label
- One-sentence reason to click
- CTA link

### Section 5. Credibility Block

Goal:
Signal that this is a real production package.

Contents:

- Heading: `Built as a real series, not a mood board.`
- Short supporting copy
- Data panel with approved facts
- CTA links to Press Kit and Contact

Optional content:

- Logo strip for festivals, labs, press mentions, or partners when available

### Section 6. Audience Routing Grid

Goal:
Send high-intent visitors directly to operational pages.

Contents:

- For press: Press Kit
- For collaborators: Casting / Jobs
- For partners: Investors / Partners
- For community: Community / Discord

Notes:

- Keep card language clear and factual
- This section should feel efficient, not salesy

### Section 7. Latest Updates Preview

Goal:
Show motion and recency.

Contents:

- Section intro
- 2 to 3 latest update cards
- CTA: `Read the Updates`

Fallback:

- If no posts yet, show one editorial empty state and email signup

### Section 8. Email Capture

Goal:
Primary low-friction conversion.

Contents:

- Heading: `Stay close to the project.`
- Supporting copy
- Email field
- Subscribe button
- Consent note

Design note:

- Should feel like joining a signal channel, not entering a lead-gen form

### Section 9. Community Tease

Goal:
Invite deeper participation without over-promising.

Contents:

- Short copy about community / Discord
- Key community values
- CTA: `Join the Community` or `Join the Waitlist`

### Section 10. Footer

Contents:

- Repeat nav links
- Contact link
- Legal links
- Social link
- Optional compact signup

## Mobile Notes

- Keep hero facts visible before the first long scroll.
- Avoid horizontal overflow in framed UI treatments.
- Audience routing grid can stack but should preserve visual differentiation.
- Email capture must remain simple and thumb-friendly.

## Content Priority Order

1. Title, format, premise, genre, status
2. Distinctive series identity
3. Press / credibility path
4. Discovery path into About, Episodes, Characters
5. Email capture
6. Updates and community

## Required Components

- Site Header
- Page Hero
- Metadata List
- Media Frame
- Section Intro
- Data Panel
- CTA Bar
- Timeline / Update Feed
- Signup Module
- Site Footer

## Analytics Events

- Hero CTA clicks
- Press Kit clicks from homepage
- Email signup submit
- Audience routing card clicks
- News card clicks
- Community CTA clicks

## Open Implementation Notes

- Build hero so text remains strong even before final key art is approved.
- Do not block launch on update-feed population; include graceful empty state.
- Keep homepage editable in CMS only where content actually changes often.

## Next related files

- `07_website/design_direction.md`
- `07_website/component_inventory.md`
- `07_website/website_copy.md`
- `07_website/seo_metadata.md`
- `07_website/cms_plan.md`
