# 07_website/sitemap.md

## Purpose

Define the public-facing information architecture, URL structure, navigation system, and user pathways for the **WE OUT HERE** website so design, web, and content teams can build against one approved sitemap.

## Owner/Subagent

web_agent

## Status

Draft v1 - build-ready sitemap baseline

## Dependencies

- `07_website/website_strategy.md`
- Final approved navigation labels
- Final domain and URL policy
- Content availability for Episodes, Characters, Press Kit, and News
- Legal review for Casting, Jobs, and Investors / Partners pages

## Content

## Primary Navigation

- Home
- About the Series
- Episodes
- Characters
- Press Kit
- News / Updates
- Casting
- Jobs / Join the Production
- For Investors / Partners
- Contact
- FAQ
- Community / Discord

## Utility Navigation

- Email signup trigger
- Press contact shortcut
- Download press kit shortcut
- Discord / community link when active

## Footer Navigation

- About the Series
- Episodes
- Characters
- Press Kit
- News / Updates
- Casting
- Jobs / Join the Production
- For Investors / Partners
- Contact
- FAQ
- Community / Discord
- Privacy Policy
- Terms / Legal
- Instagram or primary social account
- Email signup

## URL Map

### Top Level

- `/` - Home
- `/about` - About the Series
- `/episodes` - Episodes index
- `/characters` - Characters index
- `/press` - Press Kit
- `/news` - News / Updates index
- `/casting` - Casting
- `/jobs` - Jobs / Join the Production
- `/investors` - For Investors / Partners
- `/contact` - Contact
- `/faq` - FAQ
- `/community` - Community / Discord

### Scalable Detail Routes

- `/episodes/[slug]` - optional future individual episode pages
- `/characters/[slug]` - optional future individual character pages
- `/news/[slug]` - article detail pages
- `/jobs/[slug]` - individual job postings if volume grows
- `/casting/[slug]` - individual casting call pages if needed

### Non-Nav Support Routes

- `/privacy`
- `/terms`
- `/thank-you` - generic form success state
- `/press/downloads` - optional gated or ungated asset route if asset library expands

## Hierarchy And Page Roles

### 1. Home `/`

Role:
Front door for discovery, tone, legitimacy, and routing.

Primary actions:

- Explore the series
- View press materials
- Join email list
- Contact the team

Secondary actions:

- Read updates
- Explore characters
- Join community

### 2. About the Series `/about`

Role:
Canonical public overview of the premise, format, themes, world, and creators.

Primary actions:

- Understand the show quickly
- Build trust for press, festivals, talent, and partners

### 3. Episodes `/episodes`

Role:
Present season structure, episode loglines, and narrative progression without oversharing protected materials.

Primary actions:

- Deepen audience engagement
- Signal writing maturity and format discipline

### 4. Characters `/characters`

Role:
Introduce principal characters and the social ecosystem of the series.

Primary actions:

- Make the world legible
- Support attachment and casting context

### 5. Press Kit `/press`

Role:
Fastest route to approved facts, assets, bios, credits, and contact.

Primary actions:

- Download materials
- Contact press lead
- Verify production credibility

### 6. News / Updates `/news`

Role:
Living archive of project activity.

Primary actions:

- Show momentum
- Share milestones
- Improve search freshness

### 7. Casting `/casting`

Role:
Publish current casting calls, process rules, and legitimacy signals.

Primary actions:

- Submit interest when active
- Understand submission requirements

### 8. Jobs / Join the Production `/jobs`

Role:
Recruit crew, collaborators, and production support.

Primary actions:

- View open roles
- Submit interest
- Understand working model and expectations

### 9. For Investors / Partners `/investors`

Role:
Public-facing partner entry point that signals seriousness without disclosing sensitive material.

Primary actions:

- Request conversation
- Evaluate fit quickly

### 10. Contact `/contact`

Role:
Central inquiry routing for general, press, casting, jobs, and partner contact.

Primary actions:

- Send inquiry to right destination
- Reduce inbox confusion

### 11. FAQ `/faq`

Role:
Answer repeated questions about status, submissions, community, and access.

Primary actions:

- Reduce repetitive admin work
- Set public expectations

### 12. Community / Discord `/community`

Role:
Onboard fans and aligned supporters into a selective community space.

Primary actions:

- Join Discord
- Understand community norms
- Join email list if not ready for Discord

## Homepage Routing Priorities

The homepage should push visitors into one of five intent tracks within the first two scrolls.

- Public discovery: About, Episodes, Characters
- Press and festival: Press Kit, News, Contact
- Recruiting: Casting, Jobs
- Investor / partner: Investors page, Contact
- Community: Community / Discord, email signup

## Recommended Global CTA Pattern

- Header CTA: `Get Updates`
- Secondary header CTA: `Press Kit`
- Homepage hero CTAs: `Explore the Series` and `Get Updates`
- Contextual page CTAs: `Contact Press`, `Apply`, `Join the Production`, `Request a Conversation`, `Join the Community`

## Page Availability Rules

- Pages may launch with partial content only if they still answer the basic user question clearly.
- Do not publish thin placeholder pages with one paragraph and no next action.
- If Casting or Jobs are inactive, convert the page to an evergreen information page with archive context and email opt-in.
- If Community is not yet open, use `/community` as a waitlist and values page.

## User Journeys

### Discovery Visitor

1. Lands on Home from social or direct share.
2. Understands premise, format, and tone.
3. Clicks About or Characters.
4. Signs up for updates or joins community.

### Press / Festival Visitor

1. Lands on Home, Press, or News.
2. Confirms project format, creators, stills, and current status.
3. Downloads assets.
4. Contacts press lead.

### Talent / Crew Visitor

1. Lands on Jobs or Casting.
2. Confirms legitimacy through About, Press, and creator information.
3. Reviews role requirements.
4. Submits interest.

### Investor / Partner Visitor

1. Lands on Home or Investors page from direct outreach.
2. Reviews positioning, traction, format, team, and project stage.
3. Submits contact form for further material.

## Navigation Notes For Design

- Desktop nav should be editorial and deliberate, not crowded utility chrome.
- Mobile nav should preserve all required pages without burying Press, Jobs, or Investors.
- Use clear labels, not clever labels, in navigation.
- Keep route labels consistent across nav, footer, metadata, and page H1s.

## Next related files

- `07_website/homepage_wireframe.md`
- `07_website/website_copy.md`
- `07_website/component_inventory.md`
- `07_website/seo_metadata.md`
- `07_website/structured_content_model.md`
