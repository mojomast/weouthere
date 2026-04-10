# WE OUT HERE — Working Assumptions Register

**Document ID:** WOH-ADMIN-003  
**Version:** 1.0.0  
**Created:** 2026-04-10  
**Last Updated:** 2026-04-10  
**Responsible Agent:** ops_agent  
**Status:** Draft  
**Classification:** Internal — All Principals

---

## Purpose

This document records **every working assumption** underlying the WE OUT HERE project. Assumptions are categorized by department and tagged by confidence level:

| Tag | Meaning | Implication |
|---|---|---|
| **FIRM** | High confidence; based on canon lock, signed agreements, or principal decisions already made | Treat as fact unless formally revised |
| **SOFT** | Reasonable estimate; based on industry norms, comparable projects, or informed judgment | Plan around it, but validate before committing resources |
| **PLACEHOLDER** | Speculative or TBD; included to prevent planning gaps | Must be replaced with FIRM or SOFT values before entering relevant wave |

**Governance:** Assumptions should be reviewed at every wave gate. When an assumption is validated, it graduates to a decision (logged in the relevant deliverable). When an assumption is invalidated, ops_agent flags downstream impact and triggers replanning.

**Canon Reference:** All assumptions must be consistent with `00_admin/canon_lock.md` (WOH-ADMIN-000). Where this document elaborates on canon values, the canon lock takes precedence on any point of conflict.

---

## §1 — Creative Assumptions

### 1.1 Format & Structure

| ID | Assumption | Confidence | Source | Notes |
|---|---|---|---|---|
| A-CRE-001 | Season 1 is 6 episodes × 30 minutes | **FIRM** | canon_lock.md §1.1 | Immutable canon. Not negotiable. |
| A-CRE-002 | Single-camera production style (not multi-cam, not hybrid cam setups) | **FIRM** | canon_lock.md §1.1 | Defines blocking, lighting design, and edit grammar |
| A-CRE-003 | ~30–40% of total screen time is screenlife/desktop realism content | **SOFT** | Production estimate | May shift per episode; some episodes heavier on UI (e.g., S01E01 "Don't Send That" likely skews higher), others heavier on live action |
| A-CRE-004 | ~50–60% of total screen time is traditional live-action single-cam coverage | **SOFT** | Production estimate | Complementary to A-CRE-003; these two percentages plus surreal inserts should total ~100% |
| A-CRE-005 | ~10% of total screen time is surreal insert sequences (stylized, VFX-heavy) | **SOFT** | Production estimate | Budget-sensitive; could be reduced to 5% if VFX costs exceed projections |
| A-CRE-006 | Each episode has a distinct A-story and at least one B-story thread | **SOFT** | Writers' room convention | To be confirmed during story breaks |
| A-CRE-007 | Cold opens are standard for every episode | **SOFT** | Format assumption | Per deliverable `02_scripts/cold_opens.md`; may be adjusted per showrunner |
| A-CRE-008 | The show's fictional chat platform is `Backchannel`, not Discord, and will have a unique UI | **FIRM** | canon_lock.md §1.3 | `Backchannel` is the in-world platform name; UI design is a brand_agent deliverable |
| A-CRE-009 | The fictional consultancy is working-titled "Cataclysm Consulting" | **SOFT** | canon_lock.md §2 | May change during writers' room; requires showrunner approval to alter |
| A-CRE-010 | No fourth main character will be introduced in Season 1 | **FIRM** | canon_lock.md §1.2 | Exactly three main characters. Recurring/guest characters are permitted but are not main cast. |
| A-CRE-011 | Season arc is a one-way ratchet — instability accumulates, no resets | **FIRM** | canon_lock.md §1.5 | Load-bearing structural principle |
| A-CRE-012 | Comedy derives from defense mechanisms, labor anxiety, and failed containment — not sitcom contrivance | **FIRM** | canon_lock.md §1.8 | Writerly constraint; enforced in all scripts |

### 1.2 Writers' Room

| ID | Assumption | Confidence | Source | Notes |
|---|---|---|---|---|
| A-CRE-013 | Writers' room will consist of 4–6 writers including the showrunner/head writer | **SOFT** | Industry norm for indie-budget 6-episode series | Could be as small as 3 if budget requires; showrunner may solo-write with a story editor |
| A-CRE-014 | Writers' room operates for approximately 8–12 weeks pre-production | **SOFT** | Standard room duration for short-order season | Overlaps with Wave 2 (Creative Build) |
| A-CRE-015 | All writers will sign IP assignment and NDA agreements before room commencement | **FIRM** | Legal requirement | Per `11_legal/ip_assignment_template.md` and `11_legal/nda_template.md` |
| A-CRE-016 | Story breaks will be completed for all 6 episodes before any script goes to full draft | **SOFT** | Best practice | Showrunner may choose to break and write in parallel |
| A-CRE-017 | At least one table read per episode will occur before production | **SOFT** | Standard quality gate | Logistics TBD; may be remote |

### 1.3 Tone & Audience

| ID | Assumption | Confidence | Source | Notes |
|---|---|---|---|---|
| A-CRE-018 | Target audience is adults 22–45, internet-literate, tech-adjacent or tech-aware | **SOFT** | Marketing estimate | To be validated by marketing_agent in `05_marketing/audience_profile.md` |
| A-CRE-019 | Content rating equivalent: TV-MA or strong TV-14 (language, thematic content, no explicit sexual content or graphic violence) | **SOFT** | Tone estimate | Rating affects platform eligibility; to be confirmed by distribution_agent |
| A-CRE-020 | The show will not require intimacy coordination (no sex scenes) | **SOFT** | Creative assumption based on current tone | If scripts evolve to include intimacy, this assumption must be revised and budget/crew adjusted |

---

## §2 — Production Assumptions

### 2.1 Schedule

| ID | Assumption | Confidence | Source | Notes |
|---|---|---|---|---|
| A-PRD-001 | Target production start: Q3 2026 (July–September) | **SOFT** | canon_lock.md §2 | Depends on financing close and cast attachment; currently a soft lock |
| A-PRD-002 | 4–5 shooting days per episode | **SOFT** | Industry norm for indie 30-min single-cam | Some episodes may need 6 days if heavy on locations or surreal inserts |
| A-PRD-003 | Total shoot days: approximately 25–30 for the full season | **SOFT** | Derived from A-PRD-002 × 6 episodes | Block shooting may optimize this |
| A-PRD-004 | Block shooting across episodes will be used where possible | **SOFT** | Efficiency assumption | Requires shooting schedule to be designed around location consolidation |
| A-PRD-005 | 5-day shooting weeks (Mon–Fri); no planned weekend shoots | **SOFT** | Crew welfare standard | Overtime/weekend shoots may be needed for weather or schedule recovery |
| A-PRD-006 | 12-hour maximum shooting days with mandatory turnaround | **FIRM** | SAG-AFTRA and standard crew safety requirements | Non-negotiable regardless of union status |
| A-PRD-007 | Pre-production period: approximately 8–10 weeks before principal photography | **SOFT** | Industry norm | Includes casting, location scouting, set construction, tech prep |
| A-PRD-008 | Principal photography wraps by end of Q3 2026 or early Q4 2026 | **SOFT** | Derived from A-PRD-001 + A-PRD-003 | Depends on actual start date |

### 2.2 Locations & Sets

| ID | Assumption | Confidence | Source | Notes |
|---|---|---|---|---|
| A-PRD-009 | 2–3 standing sets will be built or dressed for recurring locations | **SOFT** | Production design estimate | Likely: main living/work space, secondary character space, a communal/public space |
| A-PRD-010 | 3–5 practical locations will be used across the season | **SOFT** | Production estimate | Coffee shops, co-working spaces, client offices, outdoor locations |
| A-PRD-011 | No international locations required | **SOFT** | Script assumption | All action takes place in a single U.S. metro area (city TBD) |
| A-PRD-012 | Production will be based in a single metro area (likely NYC, LA, Atlanta, or a tax-incentive state) | **PLACEHOLDER** | To be determined by finance_agent + production_agent | Tax incentives may drive this decision; see A-FIN-010 |
| A-PRD-013 | Standing sets will be built on a stage or in a converted warehouse/industrial space, not on a traditional studio lot | **SOFT** | Budget-driven assumption | Full studio lot rental likely exceeds budget |

### 2.3 Crew & Equipment

| ID | Assumption | Confidence | Source | Notes |
|---|---|---|---|---|
| A-PRD-014 | Core crew size: approximately 30–40 people during principal photography | **SOFT** | Industry norm for indie-to-lower-mid single-cam | Skeleton crew for screenlife capture days may be as small as 8–12 |
| A-PRD-015 | Camera package: digital cinema (likely RED, ARRI, or Sony FX series) | **SOFT** | Standard for indie narrative | Final selection depends on DP preference and rental deals |
| A-PRD-016 | Screenlife/desktop content will be captured via dedicated screen-recording pipeline, not simulated in post | **SOFT** | Production design principle per canon_lock.md §1.8.2 | "If you can't shoot it as a real screen recording, redesign it" |
| A-PRD-017 | A dedicated UI/UX designer will be on the creative team to build the fictional chat platform interface | **SOFT** | Required for screenlife production quality | May be contracted rather than full-time crew |
| A-PRD-018 | Surreal insert sequences will require a small VFX team (2–4 artists) or outsourced VFX vendor | **SOFT** | Based on ~10% surreal content ratio | Scope depends on final script requirements |
| A-PRD-019 | No stunt coordinator required unless scripts call for physical comedy beyond standard blocking | **SOFT** | Based on current creative direction | Revisit after story breaks |

---

## §3 — Post-Production Assumptions

| ID | Assumption | Confidence | Source | Notes |
|---|---|---|---|---|
| A-POST-001 | Editorial timeline: 8–10 weeks per episode, with overlapping schedules across episodes | **SOFT** | Industry norm for indie series with VFX components | Episode 1 enters post first; subsequent episodes overlap by 2–3 weeks |
| A-POST-002 | Total post-production period: approximately 16–22 weeks for the full season | **SOFT** | Derived from overlapping editorial schedules | Includes edit, VFX, sound, color, final QC |
| A-POST-003 | Editor will work with a single assistant editor | **SOFT** | Budget assumption | May need additional AE support during VFX-heavy episodes |
| A-POST-004 | Sound design will include: dialogue editing, foley, ambient design, UI sound effects (notification chimes, typing, scrolling), and mix | **SOFT** | Required by hybrid format | UI sounds are critical to screenlife immersion |
| A-POST-005 | Original score will be composed (not entirely library/stock music) | **SOFT** | Creative ambition | Budget may dictate hybrid approach: original themes + licensed/library cues |
| A-POST-006 | Color grade will be performed by an external colorist, not in-house | **SOFT** | Industry standard | Budgeted as post-production line item |
| A-POST-007 | VFX for surreal inserts will be completed by a boutique VFX house or freelance team, not a major facility | **SOFT** | Budget constraint | Scope to be defined in `13_post/vfx_breakdown.md` |
| A-POST-008 | Final deliverables will conform to platform-standard specs (ProRes, H.264/H.265, various aspect ratios) | **SOFT** | Distribution requirement | Specific specs depend on acquisition platform; see `13_post/deliverables_spec.md` |
| A-POST-009 | Closed captions and subtitles will be produced for all episodes | **FIRM** | Accessibility and platform requirement | English captions at minimum; additional languages TBD based on distribution |
| A-POST-010 | Target delivery of completed season: Q1–Q2 2027 | **SOFT** | Derived from production start Q3 2026 + post timeline | Critical date for festival submission windows |

---

## §4 — Financial Assumptions

| ID | Assumption | Confidence | Source | Notes |
|---|---|---|---|---|
| A-FIN-001 | Total season budget range: $1.5M–$3M | **SOFT** | Estimate based on comparable indie series (e.g., early-season HIGH MAINTENANCE, JOE PERA, RAMY pilot) | This is a planning range, not a locked number. Actual budget depends on financing commitments. |
| A-FIN-002 | Per-episode budget: approximately $250K–$500K | **SOFT** | Derived from A-FIN-001 ÷ 6 | Episodes with heavier VFX or more locations will cost more |
| A-FIN-003 | Above-the-line costs (writers, director, cast, producers): approximately 25–35% of total budget | **SOFT** | Industry norm for indie/lower-mid | Highly dependent on cast attachments and whether showrunner is also director |
| A-FIN-004 | Below-the-line production costs: approximately 40–50% of total budget | **SOFT** | Industry norm | Includes crew, equipment, locations, set construction, catering, transport |
| A-FIN-005 | Post-production costs: approximately 15–25% of total budget | **SOFT** | Industry norm; higher end due to VFX and screenlife pipeline | VFX budget is the primary variable |
| A-FIN-006 | Marketing and distribution costs: approximately 5–10% of total budget (or separate from production budget entirely) | **PLACEHOLDER** | Depends on distribution model | If acquired by a streamer, platform handles marketing; if self-distributed, this line item grows significantly |
| A-FIN-007 | Financing will come from a combination of: private equity/angel investment, production grants, tax incentives, and/or platform pre-sale | **SOFT** | Indie financing norm | See `10_finance/funding_strategy.md` for detailed plan |
| A-FIN-008 | No single investor will hold majority ownership of the production entity | **SOFT** | Governance assumption | Subject to operating agreement terms |
| A-FIN-009 | Cash flow will require bridge financing or credit facility during production gap between investor commitments and platform payments | **SOFT** | Common indie cash flow challenge | finance_agent to model in `10_finance/cashflow_projection.md` |
| A-FIN-010 | Production will pursue state tax incentives (e.g., Georgia, New Mexico, New Jersey, New York) | **SOFT** | Standard cost-reduction strategy | Incentive availability may drive location decision (see A-PRD-012) |
| A-FIN-011 | Contingency buffer: 10% of total budget held as contingency | **SOFT** | Industry standard | Critical for indie production where overruns have outsized impact |
| A-FIN-012 | All cast and crew will be paid; this is not a deferred-pay or spec project | **FIRM** | Ethical and legal requirement | Rates may be indie-scaled, but no unpaid labor |

---

## §5 — Legal Assumptions

| ID | Assumption | Confidence | Source | Notes |
|---|---|---|---|---|
| A-LEG-001 | Production entity: Out Here Productions LLC (Delaware) | **SOFT** | canon_lock.md §2 | Entity has NOT been formed yet. All references are provisional. Formation must precede any contractor engagement. |
| A-LEG-002 | LLC will be managed by 1–2 managing members (showrunner + EP) | **SOFT** | Standard indie structure | Per `studio_manifest.md` §2 |
| A-LEG-003 | Union status: SAG-AFTRA New Media agreement or comparable indie framework for above-the-line talent | **SOFT** | Assumed based on target cast quality and platform expectations | New Media agreement allows reduced rates and modified terms for qualifying projects |
| A-LEG-004 | Below-the-line crew: non-union possible, depending on production state and budget | **SOFT** | Common for indie-budget productions | IATSE engagement would significantly increase BTL costs; decision depends on location and crew availability |
| A-LEG-005 | All contributors (writers, cast, crew, contractors) will execute IP assignment or work-for-hire agreements | **FIRM** | Legal requirement for clean chain of title | No work commences without signed agreements |
| A-LEG-006 | E&O (errors and omissions) insurance will be obtained before production | **FIRM** | Required for distribution | Platform acquisition almost universally requires E&O policy in place |
| A-LEG-007 | General liability and production insurance (workers' comp, equipment, location) will be obtained | **FIRM** | Legal and practical requirement | Standard production insurance package |
| A-LEG-008 | All real-world brand references in scripts will be cleared or fictionalized | **SOFT** | Standard legal practice | The show satirizes tech culture — real company names, logos, and products must be treated carefully |
| A-LEG-009 | The fictional chat platform will be designed to avoid trade dress claims from Discord, Slack, or similar platforms | **SOFT** | Legal risk mitigation | UI design must be "inspired by" without being "confusingly similar to" |
| A-LEG-010 | Music licensing will be a mix of original score, commissioned tracks, and cleared library music — no unlicensed needle drops | **SOFT** | Budget and legal constraint | Needle drops from recognizable artists likely exceed budget |
| A-LEG-011 | NDAs will be executed with all personnel who access scripts, story materials, or unreleased content | **FIRM** | Standard practice | Per `11_legal/nda_template.md` |
| A-LEG-012 | The operating agreement will include provisions for IP ownership, profit participation, decision-making authority, and dissolution | **FIRM** | Standard LLC governance | Per `11_legal/operating_agreement.md` |

---

## §6 — Distribution & Marketing Assumptions

| ID | Assumption | Confidence | Source | Notes |
|---|---|---|---|---|
| A-DST-001 | Primary distribution strategy: festival premiere → streamer acquisition | **SOFT** | Standard indie prestige path | Festivals provide press, validation, and buyer attention |
| A-DST-002 | Backup distribution strategy: direct digital release (TVOD/SVOD self-distribution) | **SOFT** | Contingency if platform acquisition does not materialize | Lower revenue ceiling but maintains creative control |
| A-DST-003 | Target festivals: Sundance, SXSW, Tribeca, SeriesFest, Series Mania (TV-specific festivals prioritized) | **SOFT** | Based on format and tone | Submission deadlines drive post-production timeline |
| A-DST-004 | Platform targets: Hulu, FX on Hulu, Adult Swim/Max, Peacock, Amazon Freevee, Apple TV+, Roku Channel | **PLACEHOLDER** | Based on comparable acquisitions | To be refined by distribution_agent in `14_distribution/platform_targets.md` |
| A-DST-005 | A pilot episode or sizzle reel may be produced as proof-of-concept before full financing | **SOFT** | Common indie strategy | Could accelerate attachment of cast and financing partners |
| A-DST-006 | International distribution is secondary; domestic is priority for Season 1 | **SOFT** | Standard for first-season indie series | International sales may be pursued post-domestic deal |
| A-DST-007 | Marketing will lean heavily on social media, meme culture, and internet-native channels | **SOFT** | Aligned with show's audience and tone | Traditional advertising likely not in budget |
| A-DST-008 | A project website will be built as a marketing/press hub before festival premiere | **SOFT** | Standard practice | Per `07_website/website_spec.md` |
| A-DST-009 | Press strategy will target tech media, comedy media, and indie film press — not mainstream entertainment outlets initially | **SOFT** | Audience-aligned PR | See `06_press_kit/press_kit.md` |

---

## §7 — Organizational & Operational Assumptions

| ID | Assumption | Confidence | Source | Notes |
|---|---|---|---|---|
| A-ORG-001 | The project is managed by a small founding team (1–3 principals) with authority over all creative and business decisions | **SOFT** | Per studio_manifest.md §1 | Principal names TBD pending formal attachment |
| A-ORG-002 | All project documentation is maintained in markdown, stored in the project repository | **FIRM** | Per studio_manifest.md §7.1 | Standard enforced by ops_agent and qc_agent |
| A-ORG-003 | 19 subagents are defined in the studio manifest; not all require human staffing (some are agent roles) | **FIRM** | Per studio_manifest.md §4 | Agent model may evolve but the scope boundaries are fixed |
| A-ORG-004 | Wave-based production schedule with 4 waves across approximately 22 weeks of document production | **SOFT** | Per studio_manifest.md §5 | Wave timing may shift based on dependencies and blockers |
| A-ORG-005 | Communication flows through ops_agent as central coordinator; no ad-hoc inter-agent communication | **FIRM** | Per studio_manifest.md §6.1 | Prevents coordination failure and contradictory decisions |
| A-ORG-006 | The project will use standard indie-production tools: Google Workspace or equivalent for collaboration, Final Draft or equivalent for scripts, Frame.io or equivalent for review, Slack or equivalent for real-time communication | **PLACEHOLDER** | Tool stack not yet defined | To be specified in `16_ops/tool_stack.md` |
| A-ORG-007 | All deliverables will go through a QC and continuity review before approval | **FIRM** | Per studio_manifest.md §10.2 | Enforced at wave gates |
| A-ORG-008 | Key creative roles (showrunner, director, DP, editor) may be consolidated — e.g., showrunner may also direct some or all episodes | **SOFT** | Common at this budget level | Reduces headcount and cost but increases individual workload |
| A-ORG-009 | Remote collaboration will be used extensively during development and pre-production; production itself requires physical co-location | **SOFT** | Practical reality for indie production | Writers' room may be remote; set requires presence |

---

## §8 — Web & Technology Assumptions

| ID | Assumption | Confidence | Source | Notes |
|---|---|---|---|---|
| A-WEB-001 | A project website will be built as a static or semi-static site (not a complex web application) | **SOFT** | Budget and scope assumption | Landing page + press kit + contact; not a content platform |
| A-WEB-002 | The fictional chat platform UI will be built as a functional prototype for screen capture, not just a mockup | **SOFT** | Production requirement per A-CRE-016 | Requires front-end development; may use Electron, web app, or similar |
| A-WEB-003 | Screen capture content will be produced at native resolution (likely 1920×1080 or 2560×1440) for clean integration with live-action footage | **SOFT** | Technical requirement | Resolution must match or exceed final delivery specs |
| A-WEB-004 | Social media accounts will be created for the show (Instagram, TikTok, X/Twitter, possibly Bluesky) | **SOFT** | Marketing assumption | Handles should be secured early even if accounts are dormant initially |
| A-WEB-005 | In-universe social media and web content may be created as marketing assets (e.g., "leaked" chats, character posts) | **PLACEHOLDER** | Creative marketing idea | Depends on marketing strategy; see `05_marketing/social_media_plan.md` |

---

## §9 — Assumption Dependencies & Critical Chains

The following assumptions are **load-bearing** — if they are invalidated, they trigger cascading replanning across multiple departments:

| Critical Assumption | If Invalidated… | Departments Affected |
|---|---|---|
| **A-FIN-001** (Budget range $1.5M–$3M) | Entire production plan, crew size, shoot days, VFX scope, post timeline, and distribution strategy must be rescaled | ALL |
| **A-PRD-001** (Production start Q3 2026) | Wave schedule, crew availability, festival submission windows, and delivery timeline all shift | Production, Post, Distribution, Marketing, Ops |
| **A-LEG-001** (Entity formation as Delaware LLC) | All contracts, bank accounts, insurance, and IP ownership structures must be restructured | Legal, Finance, HR |
| **A-LEG-003** (SAG-AFTRA New Media) | Cast budget, contract terms, residuals structure, and potentially cast pool all change | Legal, Finance, Casting, Production |
| **A-PRD-012** (Single metro production base) | Location plan, crew sourcing, tax incentives, and logistics all change | Production, Finance, HR |
| **A-CRE-003** (30–40% screenlife) | VFX pipeline, UI design scope, post workflow, and potentially editorial timeline all shift | Production, Post, Brand |
| **A-DST-001** (Festival → streamer path) | Marketing timeline, delivery deadlines, and revenue projections all change | Distribution, Marketing, Finance |

---

## §10 — Assumption Review Schedule

| Review Point | Timing | Scope | Owner |
|---|---|---|---|
| **Wave 1 Gate** | End of Week 3 | Validate all §1 (Creative), §5 (Legal), and §7 (Org) assumptions | ops_agent + showrunner |
| **Wave 2 Gate** | End of Week 8 | Validate all §4 (Financial), §6 (Distribution), and remaining §2 (Production) assumptions | ops_agent + EP + finance_agent |
| **Wave 3 Gate** | End of Week 14 | Final validation of all assumptions before production commitment (GO/NO-GO) | All principals |
| **Production Wrap** | Post-shoot | Post-production assumptions validated against actual footage and pipeline capacity | ops_agent + post_agent |
| **Delivery** | Pre-delivery | Distribution and marketing assumptions validated against actual market conditions | ops_agent + distribution_agent |

---

## Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0.0 | 2026-04-10 | ops_agent | Initial creation — 60+ assumptions across 8 departments, dependency chain, review schedule |

---

*This document tracks what we believe to be true. Beliefs are not facts until validated. Review early, review often, and flag the moment something stops being true.*
