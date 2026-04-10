# 07_website/contact_page_spec.md

## Purpose

Specify the Contact page for **WE OUT HERE**, including inquiry routing, form structure, and messaging rules.

## Owner/Subagent

ops_agent

## Status

Draft v1 - implementation-ready form spec

## Dependencies

- `07_website/website_copy.md`
- Final inbox routing map
- Privacy policy language
- Anti-spam and form service decision

## Content

## Page Goal

Route inbound contact efficiently while making the project feel responsive, legitimate, and well-organized.

## Primary Inquiry Types

- General
- Press / Festival
- Casting
- Jobs / Crew
- Investors / Partners
- Community

## Required Sections

### 1. Page Hero

- H1: `Contact`
- Intro copy
- Short note telling visitors to choose the best inquiry type

### 2. Contact Form

Required fields:

- Inquiry type
- Name
- Email
- Organization / outlet optional
- Subject optional
- Message

Conditional behavior:

- Press / Festival: show optional deadline field
- Investors / Partners: show optional company field
- Jobs / Crew: show optional portfolio link
- Casting: show note directing applicants to live casting page if active

### 3. Direct Contact Blocks

Only if monitored reliably.

Possible blocks:

- Press contact
- General production contact
- Community contact

### 4. Response Expectations

Copy should state:

- Not all inquiries receive a reply
- Time-sensitive press should include deadline
- Submissions outside listed casting or jobs process may be redirected or ignored

### 5. Privacy Note

State how submitted information is used and stored.

## Functional Requirements

- Form must route by inquiry type.
- Success state should confirm routing, not promise response.
- Anti-spam protection required.
- Form should be accessible and fully keyboard operable.

## Trust Requirements

- Use named inquiry categories, not a single vague inbox.
- Never display broken mailto links or dead addresses.
- Avoid exposing personal emails if team aliases exist.

## Analytics

- Form starts
- Form submissions by inquiry type
- Field drop-off rate
- Direct email click rate if shown

## Success Criteria

- Visitors can self-sort correctly.
- The form reduces misrouted inbound.
- Contact experience supports the broader credibility of the project.

## Next related files

- `07_website/casting_page_spec.md`
- `07_website/jobs_page_spec.md`
- `07_website/investor_page_spec.md`
- `07_website/faq_page_spec.md`
- `07_website/cms_plan.md`
