# 07_website/jobs_page_spec.md

## Purpose

Specify the Jobs / Join the Production page for **WE OUT HERE**, including listing structure, application behavior, and credibility requirements.

## Owner/Subagent

hr_agent

## Status

Draft v1 - ready for production recruiting setup

## Dependencies

- `07_website/website_copy.md`
- `07_website/component_inventory.md`
- Hiring owner and inbox routing
- Legal review for compensation and employment language

## Content

## Page Goal

Recruit aligned collaborators and crew while communicating that the production is organized, serious, and respectful of applicants' time.

## Page States

### State A. No Open Roles

Contents:

- Clear inactive message
- Optional future-interest submission path
- Link to updates signup

### State B. Open Roles

Contents:

- Open roles list
- Production working style note
- Application process details
- Form or email route

## Required Sections

### 1. Page Hero

- H1: `Jobs / Join the Production`
- Intro copy
- Status line
- CTA: `View Open Roles` or `Introduce Yourself`

### 2. Why Work On This

Short section explaining:

- Creative ambition
- Standards of collaboration
- What kind of people fit the project

### 3. Open Roles List

Per role fields:

- Role title
- Department
- Engagement type
- Location
- Compensation summary
- Start window
- Deadline
- Short description
- CTA

### 4. Role Detail

Required fields:

- Overview
- Responsibilities
- Qualifications
- Logistics
- Compensation note
- Application instructions

### 5. General Interest Option

Use only if there is a real process to review submissions.

Fields:

- Area of interest
- Resume / portfolio link
- Availability
- Short note

### 6. FAQ Snippets

- Are roles paid?
- Are remote collaborators considered?
- Can students or early-career applicants apply?
- How long does review take?

## Functional Requirements

- Structured job entries with clear open / closed status.
- Clean archive or automatic unpublish path for expired roles.
- Application routing by role.
- Support for links and file uploads where needed.

## Tone Requirements

- Exact, respectful, and credible
- Tasteful but not ornate
- Honest about constraints

## Risks To Avoid

- Ambiguous compensation language
- Fake-open roles used only for list building
- Missing location or timeline information
- Applications routed to unmanaged inboxes

## Analytics

- Role detail views
- Application starts
- Application completions
- General-interest submissions

## Success Criteria

- Applicants can quickly tell whether a role is relevant.
- The page attracts stronger-fit candidates.
- The experience reinforces production credibility.

## Next related files

- `07_website/casting_page_spec.md`
- `07_website/contact_page_spec.md`
- `07_website/faq_page_spec.md`
- `07_website/structured_content_model.md`
- `09_hr_recruiting/`
