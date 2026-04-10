# 07_website/component_inventory.md

## Purpose

Define the reusable component system needed to build the **WE OUT HERE** website across public pages, editorial content, recruitment flows, and inquiry forms.

## Owner/Subagent

web_agent

## Status

Draft v1 - implementation inventory

## Dependencies

- `07_website/sitemap.md`
- `07_website/design_direction.md`
- `07_website/homepage_wireframe.md`
- `07_website/structured_content_model.md`

## Content

## Principles

- Components should support editorial layouts, not force generic marketing-page patterns.
- Modules should work on both desktop and mobile without losing the premium interface language.
- Core content blocks should accept structured CMS content wherever practical.
- Motion and visual effects must degrade gracefully.

## Global Components

### 1. Site Header

Purpose:
Persistent navigation and key CTA entry point.

Needs:

- Logo / wordmark
- Primary nav links
- `Get Updates` CTA
- Mobile menu trigger
- Optional current status chip

### 2. Site Footer

Purpose:
Secondary navigation, legal links, social links, and email signup repeat.

Needs:

- Footer nav groups
- Contact link
- Social link(s)
- Legal links
- Optional compact signup module

### 3. Page Hero

Purpose:
Top-of-page framing block for major pages.

Variants:

- Editorial hero with text only
- Split hero with still or motion asset
- Dossier-style hero with metadata panel

Fields:

- Eyebrow
- H1
- Supporting copy
- Quick facts list
- Primary CTA
- Secondary CTA
- Media asset

### 4. CTA Bar

Purpose:
High-clarity action strip for signup, contact, press, or apply actions.

Variants:

- Inline block
- Full-width band
- Sticky mobile bottom action

### 5. Signup Module

Purpose:
Email capture for updates and waitlists.

Needs:

- Email field
- Optional interest tags
- Consent note
- Success / error states

### 6. Contact Form

Purpose:
General inquiry routing.

Fields:

- Inquiry type
- Name
- Email
- Organization / outlet optional
- Subject optional
- Message
- Consent checkbox if required

### 7. Metadata List

Purpose:
Display fast facts in a compact, scannable format.

Use cases:

- Format, genre, status, location
- Press credits
- Role details on Jobs and Casting

## Editorial Components

### 8. Rich Text Block

Purpose:
Body copy for About, FAQ answers, and longform page sections.

Requirements:

- Headings
- Lists
- Links
- Pull quotes
- Inline emphasis

### 9. Section Intro

Purpose:
Consistent heading-plus-copy block used ahead of content groups.

### 10. Quote / Testimonial Block

Purpose:
Support press pull-quotes or creator statements.

Fields:

- Quote text
- Attribution
- Link optional

### 11. Data Panel

Purpose:
Show project facts in a slightly system-like, dossier-style container.

Use cases:

- Quick facts on Home and About
- Project snapshot on Investors page
- Press facts on Press page

### 12. Timeline / Update Feed

Purpose:
List time-based project updates.

Variants:

- Compact feed
- Full News index

Fields:

- Date
- Category
- Title
- Summary
- Image optional
- Link

## Story World Components

### 13. Episode Card

Purpose:
Present season episode lineup.

Fields:

- Episode number
- Title
- Logline
- Status label
- Optional detail link

### 14. Character Card

Purpose:
Introduce principal characters.

Fields:

- Name
- Role
- Summary
- Portrait or still
- Optional casting / actor label

### 15. Media Frame

Purpose:
Display stills, motion loops, or faux-interface imagery inside the visual language of the site.

Requirements:

- Image and video support
- Caption optional
- Alt text
- Reduced-motion fallback

## Press Components

### 16. Asset Download Grid

Purpose:
Present downloadable press assets clearly.

Fields:

- Asset title
- Type
- File size
- Preview optional
- Download link
- Usage note optional

### 17. Bio Card

Purpose:
Display creator or key team bios.

Fields:

- Name
- Role
- Bio
- Headshot optional
- Link optional

### 18. Press Contact Card

Purpose:
Single clearly trusted contact block.

Fields:

- Contact name or team
- Email
- Response note
- Office hours optional

## Recruitment Components

### 19. Opportunity Card

Purpose:
Reusable listing card for casting calls and job openings.

Fields:

- Title
- Type
- Status
- Location
- Compensation note
- Short summary
- Deadline
- CTA

### 20. Opportunity Detail Block

Purpose:
Long-form requirements and application instructions.

Fields:

- Overview
- Responsibilities or role description
- Requirements
- Logistics
- Submission instructions
- Deadline

### 21. Application Form

Purpose:
Structured submission for jobs or casting.

Requirements:

- Conditional fields by role type
- File upload support if needed
- Links to portfolio / reel
- Consent and privacy text
- Spam protection

## Community Components

### 22. Community Rules Block

Purpose:
Set onboarding expectations for Discord or community waitlist.

### 23. Invite / Waitlist Panel

Purpose:
Switch between direct join and signup waitlist depending on community status.

## FAQ Components

### 24. Accordion

Purpose:
Handle expandable question-and-answer content.

Requirements:

- Keyboard accessible
- Deep-linkable items if possible
- CMS-driven ordering

## Status Components

### 25. Notice Banner

Purpose:
Announce active casting, festival news, or temporary site-wide notices.

### 26. Empty State Block

Purpose:
Handle inactive casting, inactive jobs, or no news yet without making the page feel abandoned.

## Technical Notes

- Every component with text should support semantic HTML first.
- Asset-heavy modules should define mobile crops separately.
- Forms should integrate with analytics events and anti-spam protection.
- Components tied to structured content should avoid hardcoded labels where fields can supply them.

## Priority Build Order

1. Header, Footer, Page Hero, Signup Module, CTA Bar
2. Rich Text Block, Section Intro, Data Panel, Media Frame
3. Episode Card, Character Card, Timeline / Update Feed
4. Asset Download Grid, Bio Card, Press Contact Card
5. Opportunity Card, Opportunity Detail Block, Application Form
6. Accordion, Community Rules Block, Invite / Waitlist Panel, Notice Banner, Empty State Block

## Next related files

- `07_website/design_direction.md`
- `07_website/homepage_wireframe.md`
- `07_website/press_page_spec.md`
- `07_website/structured_content_model.md`
- `07_website/cms_plan.md`
