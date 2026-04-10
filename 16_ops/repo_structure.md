# `16_ops/repo_structure.md`

**Purpose:** Define the package layout, directory ownership, and the minimum structure required for resumable, parallelized, handoff-ready operations across the full WE OUT HERE project package.

**Owner/Subagent:** `ops_agent`

**Status:** Active

**Dependencies:** `00_admin/studio_manifest.md`, `00_admin/canon_lock.md`, `16_ops/subagent_orchestration.md`

## Structure Principles

The WE OUT HERE package is a document-first production repository. The folder structure is not cosmetic. It is the dependency map for the project.

Operational rules:

- Treat `00_admin` as the control room.
- Treat `01_development` through `15_business_dev` as department workspaces.
- Treat `16_ops` as the execution layer for coordination, QA, naming, approvals, and handoff readiness.
- Do not create ad hoc top-level folders unless a principal approves a structural change.
- Do not move files across numbered folders to solve a local problem. Update dependencies and handoffs instead.

## Required Top-Level Package

```text
we-out-here/
├── 00_admin/
├── 01_development/
├── 02_scripts/
├── 03_writers_room/
├── 04_brand/
├── 05_marketing/
├── 06_press_kit/
├── 07_website/
├── 08_casting/
├── 09_hr_recruiting/
├── 10_finance/
├── 11_legal/
├── 12_production/
├── 13_post/
├── 14_distribution/
├── 15_business_dev/
└── 16_ops/
```

## Directory Roles

| Folder | Role | Primary Owner | Notes |
|---|---|---|---|
| `00_admin/` | Master controls, planning, assumptions, manifest, logs | `ops_agent` | Source for schedule, package state, and administrative authority |
| `01_development/` | Canon-adjacent creative development docs | `bible_agent`, `development_agent` | Upstream for most creative work |
| `02_scripts/` | Episode scripts and script-wide guides | `script_agent` | Blocks casting, production, and post if incomplete |
| `03_writers_room/` | Story break and room infrastructure | `writers_room_agent` | Feeds scripts and season coherence |
| `04_brand/` | Visual identity and UI style | `brand_agent` | Feeds marketing, website, press, and fictional interface work |
| `05_marketing/` | Strategy, audience, campaign planning | `marketing_agent` | Feeds press, website, social, biz dev |
| `06_press_kit/` | Publicity materials | `press_agent` | External-facing, approval-sensitive |
| `07_website/` | Website planning and copy | `web_agent` | Should stay tightly aligned with brand and marketing |
| `08_casting/` | Character breakdowns and casting process docs | `casting_agent` | Depends on canon and scripts |
| `09_hr_recruiting/` | Crew hiring and onboarding | `hr_agent` | Depends on budget, legal templates, production needs |
| `10_finance/` | Budgets, funding, cashflow | `finance_agent` | Feeds production feasibility and partner conversations |
| `11_legal/` | Entity, IP, contracts, compliance | `legal_agent` | Must stay current before external engagement |
| `12_production/` | Shoot planning and logistics | `production_agent` | Critical path folder for pre-production readiness |
| `13_post/` | Editorial and delivery pipeline | `post_agent` | Final technical readiness |
| `14_distribution/` | Release and platform planning | `distribution_agent` | Wave 4 heavy |
| `15_business_dev/` | Partnerships, sponsorship, extension strategy | `bizdev_agent` | Wave 4 heavy |
| `16_ops/` | Infrastructure, QA, approvals, package hygiene | `ops_agent` | Keeps the whole package operable |

## Structural Rules For Handoff-Ready Work

1. Every file lives in exactly one department folder.
2. Every file has one clear owner, even if multiple agents contribute.
3. Cross-functional input is expressed through dependencies, not duplicate files.
4. Canon and admin sources are referenced, not recopied.
5. A downstream file must never become the only place where an upstream decision exists.
6. If a document is blocked, leave the file in place with clear status rather than creating a shadow replacement elsewhere.

## Resumable Work Rules

Use the same package structure to support pause/resume across parallel agents.

Required behavior:

- Put durable decisions in the owned department file, not in chat-only notes.
- Record open questions in the file that owns the decision.
- When a file cannot be finished, leave a visible status and exact dependency list.
- Prefer partially complete canonical files over complete side documents that are off-structure.
- If a supplemental document exists outside the manifest baseline, state which baseline file it informs.

## Parallelization Rules By Folder

These folders can usually progress in parallel once Wave 1 canon is stable:

- `04_brand/`
- `10_finance/`
- `11_legal/`
- `05_marketing/`
- `07_website/`

These folders are more dependency-heavy and should be watched as gate-sensitive:

- `02_scripts/`
- `08_casting/`
- `12_production/`
- `13_post/`

## Recommended In-Folder Hygiene

Within each numbered folder:

- Keep only baseline deliverables plus approved supplemental docs.
- Avoid draft sprawl such as `final_final`, `v2_new`, or dated alternates.
- If a true alternate is required, encode it in status/version inside the file, not the filename.
- Keep file names stable once referenced by other docs.

## Supplemental Files Policy

Supplemental files are allowed when they reduce risk or improve coordination, but they do not replace manifest-baseline deliverables unless explicitly adopted.

Current examples of supplemental/admin support docs already in use include:

- `00_admin/canon_lock.md`
- `00_admin/assumptions.md`
- `00_admin/risk_register.md`
- `00_admin/project_glossary.md`
- `16_ops/subagent_orchestration.md`

Rule: if a supplemental file materially overlaps a missing baseline file, the overlap should be noted in the missing-items report so handoff teams can judge whether to rename, merge, or keep both.

## Structural Review Checklist

- Are all top-level folders `00_admin` through `16_ops` present?
- Is each file stored in the folder that matches its functional owner?
- Does each baseline deliverable exist at its manifest path?
- Are supplemental files clearly non-conflicting?
- Can a new operator understand ownership and continue work without asking where things go?

## Next Related Files

- `16_ops/file_naming_rules.md`
- `16_ops/qa_checklists.md`
- `16_ops/approval_workflow.md`
- `16_ops/missing_items_report.md`
- `16_ops/subagent_orchestration.md`
