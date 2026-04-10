# 07_website/structured_content_model.md

## Purpose

Define the structured content entities, fields, relationships, and publishing rules required to run the **WE OUT HERE** website in a maintainable CMS-backed workflow.

## Owner/Subagent

cms_agent

## Status

Draft v1 - schema planning baseline

## Dependencies

- `07_website/sitemap.md`
- `07_website/component_inventory.md`
- `07_website/seo_metadata.md`
- Final CMS decision

## Content

## Modeling Principles

- Centralize canonical facts once and reference them across pages.
- Structure update-heavy content; leave highly art-directed layout decisions in code.
- Support active / inactive states for operational pages.
- Avoid making every paragraph a CMS field.

## Core Models

### 1. Site Settings

Purpose:
Single source of truth for global values.

Fields:

- Site title
- Default meta description
- Primary social links
- Primary contact email(s)
- Current global status line
- Default social image
- Footer legal links
- Community status: `active`, `waitlist`, `closed`

### 2. Project Profile

Purpose:
Canonical series facts.

Fields:

- Title
- Short tagline
- Short logline
- Short synopsis
- Long synopsis
- Format
- Genre
- Runtime
- Stage / status
- Production base
- Language
- Creator names
- Approved quick facts
- Hero media reference

### 3. Static Page Content

Purpose:
Manage selected copy blocks for stable pages.

Fields:

- Page key
- Hero eyebrow
- Hero title override optional
- Hero supporting copy
- CTA labels
- Body sections as modular rich text / section entries
- SEO override fields

Recommended page keys:

- home
- about
- episodes
- characters
- press
- casting
- jobs
- investors
- contact
- faq
- community

### 4. Update Post

Purpose:
Power News / Updates.

Fields:

- Title
- Slug
- Publish date
- Summary
- Body
- Category
- Featured image
- SEO title optional
- SEO description optional
- Draft / published status

### 5. Episode

Fields:

- Episode number
- Title
- Slug
- Logline
- Short summary optional
- Status
- Sort order
- Private materials note optional

### 6. Character

Fields:

- Name
- Slug
- Role label
- Summary
- Long description optional
- Portrait image
- Sort order
- Casting status optional

### 7. Person / Team Member

Purpose:
Creators and key team reused across Press and Investors pages.

Fields:

- Name
- Role
- Short bio
- Long bio optional
- Headshot
- Links optional
- Featured flag

### 8. Press Asset

Fields:

- Title
- Asset type
- File
- File size
- Resolution / dimensions optional
- Preview image optional
- Usage note optional
- Sort order
- Published flag

### 9. Recognition Item

Purpose:
Festival, lab, press mention, or award entries.

Fields:

- Title
- Type
- Source / organization
- Date
- URL optional
- Display text
- Sort order

### 10. Casting Call

Fields:

- Title
- Slug
- Status: `draft`, `open`, `closed`
- Character / role summary
- Location
- Timeframe
- Compensation note
- Deadline
- Eligibility note
- Submission instructions
- Submission URL or email
- Featured flag

### 11. Job Posting

Fields:

- Title
- Slug
- Department
- Status: `draft`, `open`, `closed`
- Engagement type
- Location
- Compensation summary
- Start window
- Deadline
- Short description
- Responsibilities
- Qualifications
- Logistics
- Application instructions
- Application URL or email
- Featured flag

### 12. FAQ Item

Fields:

- Question
- Answer
- Category
- Sort order
- Published flag

### 13. Community Settings

Fields:

- Community status
- Invite URL
- Waitlist form URL
- Intro copy
- Rules summary

### 14. Inquiry Routing Settings

Fields:

- Inquiry type label
- Destination email or webhook
- Auto-response enabled
- Thank-you message

## Relationships

- Static Page Content can reference Project Profile, Person, Press Asset, Update Post, Episode, Character, FAQ Item
- Press page references Project Profile, Person, Press Asset, Recognition Item
- Investors page references Project Profile, Person, Recognition Item
- Home references Project Profile, latest Update Posts, Community Settings

## What Should Stay In Code

- Art-directed homepage layout decisions
- Animation behavior
- Navigation structure
- Form validation logic
- Component presentation rules

## Publishing Rules

- Only published content appears publicly.
- Closed casting calls and jobs should archive or unlist automatically.
- FAQ and News should support scheduled publishing.
- Core Project Profile updates should trigger review of SEO and Press pages.

## Editorial Roles

- Admin: schema and settings
- Editor: copy, updates, FAQs
- Press editor: assets, bios, press page content
- Recruiting editor: casting calls and jobs

## MVP CMS Scope

Must be CMS-managed:

- News / Updates
- FAQ
- Casting calls
- Job postings
- Press assets
- Select global settings

Can remain code-managed initially:

- Homepage section order
- About longform page composition
- Investors page layout

## Next related files

- `07_website/cms_plan.md`
- `07_website/component_inventory.md`
- `07_website/press_page_spec.md`
- `07_website/casting_page_spec.md`
- `07_website/jobs_page_spec.md`
