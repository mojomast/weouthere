# WE OUT HERE — Risk Register

**Document ID:** WOH-ADMIN-004  
**Version:** 1.0.0  
**Created:** 2026-04-10  
**Last Updated:** 2026-04-10  
**Responsible Agent:** ops_agent  
**Status:** Draft  
**Classification:** Internal — All Principals

---

## Purpose

This document identifies, assesses, and tracks all known risks to the WE OUT HERE project. Every risk is scored, assigned an owner, and paired with a mitigation strategy. The register is reviewed at every wave gate and updated as risks emerge, evolve, or are retired.

**Governance:** ops_agent maintains this register. Risk owners are responsible for executing mitigation strategies. Showrunner and EP are the final escalation point for any risk rated Critical (score ≥ 16).

**Canon Reference:** All risks must be assessed against canon values in `00_admin/canon_lock.md` and assumptions in `00_admin/assumptions.md`.

---

## Risk Scoring Methodology

### Likelihood Scale

| Score | Label | Definition |
|---|---|---|
| 1 | Rare | Unlikely to occur; no precedent in comparable projects |
| 2 | Unlikely | Could occur but would require multiple failures or unlikely conditions |
| 3 | Possible | Has occurred in comparable projects; plausible under current conditions |
| 4 | Likely | More probable than not given current project conditions |
| 5 | Almost Certain | Expected to occur unless proactive intervention is taken |

### Impact Scale

| Score | Label | Definition |
|---|---|---|
| 1 | Negligible | Minor inconvenience; absorbed within existing buffers |
| 2 | Minor | Some rework or delay; does not affect critical path or deliverables |
| 3 | Moderate | Noticeable schedule delay, budget impact, or quality reduction; requires management attention |
| 4 | Major | Significant threat to project timeline, budget, or creative integrity; requires principal intervention |
| 5 | Critical | Project-threatening; could result in cancellation, legal liability, or fundamental creative failure |

### Risk Score Matrix

**Risk Score = Likelihood × Impact**

|  | **Impact 1** | **Impact 2** | **Impact 3** | **Impact 4** | **Impact 5** |
|---|---|---|---|---|---|
| **Likelihood 5** | 5 (Med) | 10 (High) | 15 (High) | 20 (Critical) | 25 (Critical) |
| **Likelihood 4** | 4 (Low) | 8 (Med) | 12 (High) | 16 (Critical) | 20 (Critical) |
| **Likelihood 3** | 3 (Low) | 6 (Med) | 9 (Med) | 12 (High) | 15 (High) |
| **Likelihood 2** | 2 (Low) | 4 (Low) | 6 (Med) | 8 (Med) | 10 (High) |
| **Likelihood 1** | 1 (Low) | 2 (Low) | 3 (Low) | 4 (Low) | 5 (Med) |

### Response Priority

| Score Range | Priority | Action |
|---|---|---|
| 1–4 | **Low** | Monitor; review at wave gates |
| 5–9 | **Medium** | Active mitigation; review monthly |
| 10–15 | **High** | Escalate to principals; active management required |
| 16–25 | **Critical** | Immediate principal attention; may trigger GO/NO-GO reassessment |

---

## §1 — Creative Risks

| ID | Risk | L | I | Score | Mitigation | Owner | Status |
|---|---|---|---|---|---|---|---|
| R-CRE-001 | **Tone failure — show reads as mean-spirited or nihilistic rather than darkly humane** | 3 | 5 | 15 | Tone guide established in Wave 1; continuity_agent reviews all scripts for tone compliance; table reads with sensitivity focus; showrunner as final tone arbiter. Ensure every episode has at least one emotionally true moment (per canon_lock.md §1.8.4). | showrunner | Open |
| R-CRE-002 | **Script delays — writers cannot deliver 6 scripts on schedule** | 4 | 4 | 16 | Staggered deadlines with 2-week buffer between episodes; story breaks completed before drafting begins; showrunner can step in to draft/rewrite; maintain a "script emergency" contingency of 2 additional weeks in schedule. | showrunner + writers_room_agent | Open |
| R-CRE-003 | **Cast chemistry failure — the trio does not generate convincing comedic and emotional dynamics** | 3 | 5 | 15 | Extensive chemistry reads during casting; multi-round callback process; consider workshopping key scenes before final casting decisions; pilot/proof-of-concept shoot as chemistry test. | casting_agent + showrunner | Open |
| R-CRE-004 | **Screenlife content is visually boring or narratively inert** | 3 | 4 | 12 | Dedicated UI/UX designer on creative team; prototype screenlife sequences early in pre-production; study comparable screenlife work (SEARCHING, UNFRIENDED, SUCCESSION phone scenes); build visual grammar for chat dynamics. | brand_agent + production_agent | Open |
| R-CRE-005 | **Surreal inserts feel disconnected from the rest of the show** | 3 | 3 | 9 | Establish clear surreal-insert grammar in tone guide and show format spec; each surreal sequence must be psychologically motivated (externalizing a character's internal state); review surreal sequences in story breaks before scripting. | showrunner + bible_agent | Open |
| R-CRE-006 | **Scope creep — writers want more than 6 episodes or 30-minute runtime** | 3 | 3 | 9 | Episode count and runtime are immutable canon (canon_lock.md §1.1); kill_list.md captures overflow ideas for potential Season 2; showrunner enforces at story break stage. | showrunner + writers_room_agent | Open |
| R-CRE-007 | **Psychoanalytic terminology alienates general audience** | 2 | 3 | 6 | Show uses psychological concepts through behavior, not exposition; no character lectures the audience on theory; jargon is deployed ironically or as character defense; test with non-clinical audience in table reads. | showrunner + script_agent | Open |

---

## §2 — Financial Risks

| ID | Risk | L | I | Score | Mitigation | Owner | Status |
|---|---|---|---|---|---|---|---|
| R-FIN-001 | **Funding gap — unable to close full financing before production start** | 4 | 5 | 20 | Begin investor outreach in Wave 2; model three budget tiers (micro $800K, indie $1.5M, lower-mid $3M); identify bridge financing options; proof-of-concept/pilot as financing tool; maintain relationships with multiple funding sources simultaneously. | finance_agent + EP | Open |
| R-FIN-002 | **Budget overrun during production** | 3 | 4 | 12 | 10% contingency held in budget; daily cost reporting on set; line producer empowered to flag overspend immediately; pre-negotiated overtime caps; identify non-essential line items that can be cut mid-production if needed. | finance_agent + production_agent | Open |
| R-FIN-003 | **Cash flow crunch — expenses due before revenue or investor funds arrive** | 4 | 4 | 16 | Cash flow projection modeled in Wave 2; establish line of credit or bridge loan pre-production; stagger vendor payments where possible; negotiate 30/60/90-day terms with key vendors; maintain 4-week operating runway at all times. | finance_agent | Open |
| R-FIN-004 | **Tax incentive fails to materialize or is delayed** | 3 | 3 | 9 | Apply early in process; have backup location plan that doesn't depend on incentive; model budget both with and without incentive; consult production incentive specialist. | finance_agent + production_agent | Open |
| R-FIN-005 | **VFX costs exceed projections due to scope growth in surreal inserts** | 3 | 3 | 9 | Cap surreal insert screen time at 10% in production plan; get VFX bids before finalizing scripts; build VFX budget as a fixed envelope, not open-ended; showrunner has authority to simplify surreal sequences to fit budget. | finance_agent + post_agent | Open |
| R-FIN-006 | **No platform acquisition — show must self-distribute, significantly reducing revenue** | 3 | 4 | 12 | Build festival strategy as a parallel track; budget for self-distribution scenario; explore TVOD/AVOD platforms as fallback; consider hybrid release (free pilot + paid season); maintain realistic revenue expectations in investor communications. | finance_agent + distribution_agent | Open |

---

## §3 — Legal Risks

| ID | Risk | L | I | Score | Mitigation | Owner | Status |
|---|---|---|---|---|---|---|---|
| R-LEG-001 | **IP ownership dispute — contributor claims ownership of creative material** | 2 | 5 | 10 | Execute IP assignment and work-for-hire agreements with ALL contributors before work begins; chain_of_title.md is Wave 1 priority; legal_agent reviews all agreements before execution; no handshake deals. | legal_agent | Open |
| R-LEG-002 | **E&O insurance denial or excessive premium due to satirical content** | 2 | 4 | 8 | Scripts reviewed by entertainment attorney for defamation, trademark, and right-of-publicity risks before E&O application; fictionalize all real-world references; maintain "fictional platform" rule per canon; get E&O broker involved early. | legal_agent | Open |
| R-LEG-003 | **Trade dress claim from Discord, Slack, or similar platform** | 2 | 4 | 8 | Fictional chat platform UI must be sufficiently differentiated; engage IP attorney to review UI designs for trade dress risk; document creative decisions that distinguish the platform; include disclaimer in credits. | legal_agent + brand_agent | Open |
| R-LEG-004 | **Real tech company sends cease-and-desist over satirical depiction** | 2 | 3 | 6 | Use only fictional company names in scripts; avoid specific, identifiable internal processes or trade secrets of real companies; standard satire/parody analysis by legal counsel; E&O insurance covers defense costs. | legal_agent + script_agent | Open |
| R-LEG-005 | **SAG-AFTRA New Media agreement terms change or project does not qualify** | 3 | 3 | 9 | Monitor SAG-AFTRA agreement updates; consult entertainment labor attorney; model budget for both New Media and standard Low Budget agreement; ensure production budget qualifies under current thresholds. | legal_agent + finance_agent | Open |
| R-LEG-006 | **Entity formation delays — LLC not formed before contractor engagement begins** | 3 | 4 | 12 | Prioritize entity formation in Wave 1; engage formation service (e.g., Northwest Registered Agent) immediately; do NOT execute any agreements or spend any project funds until entity exists; EIN application filed same week as formation. | legal_agent + EP | Open |
| R-LEG-007 | **Music licensing clearance failure — desired tracks unavailable or unaffordable** | 3 | 2 | 6 | Prioritize original score and commissioned music; use library music as fallback; never write a scene that depends on a specific licensed track; music supervisor or legal_agent handles clearances well in advance of lock. | legal_agent + post_agent | Open |

---

## §4 — Production Risks

| ID | Risk | L | I | Score | Mitigation | Owner | Status |
|---|---|---|---|---|---|---|---|
| R-PRD-001 | **Location loss — key practical location becomes unavailable during or before shoot** | 3 | 3 | 9 | Scout backup locations for all key practicals; lock locations with signed agreements and deposits well before shoot; build location flexibility into scripts where possible; standing sets as controlled environment fallback. | production_agent | Open |
| R-PRD-002 | **Technical pipeline failure — screenlife capture workflow doesn't integrate with live-action post pipeline** | 3 | 4 | 12 | Prototype the full capture-to-edit pipeline in pre-production with at least one test scene; hire or consult with screenlife-experienced DP or technical supervisor; define pipeline in `13_post/edit_workflow.md` before production begins. | production_agent + post_agent | Open |
| R-PRD-003 | **Schedule overrun — shoot days per episode exceed 5-day estimate** | 3 | 3 | 9 | Build 2 buffer days into overall schedule; block shoot to maximize efficiency; separate screenlife capture days (smaller crew, faster setup) from live-action days; AD empowered to flag schedule risk daily. | production_agent | Open |
| R-PRD-004 | **Key crew member becomes unavailable mid-production** | 2 | 4 | 8 | Identify backup candidates for all department heads in pre-production; cross-train where feasible; maintain updated crew contact list; day-player pool established for below-the-line positions. | hr_agent + production_agent | Open |
| R-PRD-005 | **Set construction delays or cost overruns** | 3 | 3 | 9 | Begin set construction planning in Wave 3; get multiple bids from construction vendors; build schedule buffer for construction; have fallback plan to dress practical locations instead of building from scratch. | production_agent | Open |
| R-PRD-006 | **Weather or force majeure disrupts exterior shooting** | 2 | 3 | 6 | Minimize exterior shooting in schedule; designate cover sets (interior scenes that can be shot on any day); production insurance covers weather delays above deductible threshold. | production_agent | Open |

---

## §5 — Market & Distribution Risks

| ID | Risk | L | I | Score | Mitigation | Owner | Status |
|---|---|---|---|---|---|---|---|
| R-MKT-001 | **Platform rejection — streamers pass on the format as too niche, too experimental, or too similar to existing shows** | 3 | 4 | 12 | Target multiple platforms simultaneously; emphasize unique hybrid format as differentiator; festival premiere as proof-of-concept and press generator; pilot episode as lower-risk entry point for buyers; tailor pitch materials to each platform's brand. | distribution_agent + development_agent | Open |
| R-MKT-002 | **Audience discovery failure — show doesn't find its audience despite quality** | 3 | 4 | 12 | Build audience pre-release through social media, meme-native marketing, and tech/comedy press; festival strategy generates early word-of-mouth; target internet-native communities directly; consider releasing pilot for free to build grassroots audience. | marketing_agent + distribution_agent | Open |
| R-MKT-003 | **Competing show launches with similar premise (tech startup satire, screenlife comedy)** | 2 | 3 | 6 | Monitor competitive landscape; emphasize WE OUT HERE's distinctive elements (psychocomedy angle, defense-mechanism-driven comedy, hybrid format); differentiate aggressively in marketing; a strong show survives competition — focus on quality. | marketing_agent | Open |
| R-MKT-004 | **Festival rejection — pilot/season not selected for target festivals** | 3 | 3 | 9 | Submit to 10+ festivals across narrative, comedy, and TV-specific categories; stagger submission timeline; have backup festival tier; festival rejection doesn't prevent platform sales — maintain parallel outreach. | distribution_agent | Open |
| R-MKT-005 | **Streaming market contraction reduces acquisition budgets and appetite for indie series** | 3 | 4 | 12 | Model conservative revenue expectations; build self-distribution capability as genuine alternative (not just fallback); keep production costs low enough that the project can be profitable at indie-scale acquisition prices; explore FAST channels and AVOD. | distribution_agent + finance_agent | Open |

---

## §6 — Organizational Risks

| ID | Risk | L | I | Score | Mitigation | Owner | Status |
|---|---|---|---|---|---|---|---|
| R-ORG-001 | **Principal burnout — small founding team overextended across too many roles** | 4 | 4 | 16 | Identify role consolidation early and plan workload accordingly; hire/contract key support roles (line producer, production coordinator) before production; enforce reasonable work hours in pre-production; build in recovery time between waves. | ops_agent + EP | Open |
| R-ORG-002 | **Communication breakdown between agents/departments** | 3 | 3 | 9 | Centralized coordination through ops_agent; wave gate reviews ensure alignment; continuity_agent performs cross-document audits; standardized communication formats per studio_manifest.md §6.4; weekly status checks during active waves. | ops_agent | Open |
| R-ORG-003 | **Canon drift — deliverables gradually deviate from canon values without anyone noticing** | 3 | 4 | 12 | canon_lock.md (WOH-ADMIN-000) established as supreme authority; continuity_agent audits all deliverables at wave gates; canon checklist (canon_lock.md §3.2) applied to every document before approval; violation severity framework ensures critical drift is caught immediately. | continuity_agent + ops_agent | Open |
| R-ORG-004 | **Key creative disagreement between principals** | 2 | 4 | 8 | Conflict resolution protocol in studio_manifest.md §6.3; showrunner has final creative authority per canon_lock.md; EP has final business authority; operating agreement should include dispute resolution and deadlock provisions. | showrunner + EP | Open |
| R-ORG-005 | **Staffing gaps — unable to hire qualified crew at indie budget rates** | 3 | 3 | 9 | Begin recruitment early in Wave 3; leverage festival/indie community networks; offer meaningful credits and creative collaboration as non-monetary value; consider emerging talent (recent graduates, career-changers) for junior positions; competitive day rates within budget tier. | hr_agent | Open |

---

## §7 — Risk Summary Dashboard

### By Priority Level

| Priority | Count | Risk IDs |
|---|---|---|
| **Critical (16–25)** | 4 | R-FIN-001, R-CRE-002, R-FIN-003, R-ORG-001 |
| **High (10–15)** | 10 | R-CRE-001, R-CRE-003, R-CRE-004, R-FIN-002, R-FIN-006, R-LEG-001, R-LEG-006, R-PRD-002, R-MKT-001, R-MKT-002, R-MKT-005, R-ORG-003 |
| **Medium (5–9)** | 14 | R-CRE-005, R-CRE-006, R-CRE-007, R-FIN-004, R-FIN-005, R-LEG-002, R-LEG-003, R-LEG-005, R-LEG-007, R-PRD-001, R-PRD-003, R-PRD-005, R-MKT-003, R-MKT-004, R-ORG-002, R-ORG-005 |
| **Low (1–4)** | 3 | R-LEG-004, R-PRD-004, R-PRD-006, R-ORG-004 |

### Top 5 Risks by Score

| Rank | ID | Risk | Score | Owner |
|---|---|---|---|---|
| 1 | R-FIN-001 | Funding gap | 20 | finance_agent + EP |
| 2 | R-CRE-002 | Script delays | 16 | showrunner + writers_room_agent |
| 3 | R-FIN-003 | Cash flow crunch | 16 | finance_agent |
| 4 | R-ORG-001 | Principal burnout | 16 | ops_agent + EP |
| 5 | R-CRE-001 | Tone failure | 15 | showrunner |

### By Category

| Category | Count | Avg Score | Highest Risk |
|---|---|---|---|
| Creative | 7 | 11.7 | R-CRE-002 (16) |
| Financial | 6 | 13.0 | R-FIN-001 (20) |
| Legal | 7 | 8.4 | R-LEG-006 (12) |
| Production | 6 | 8.8 | R-PRD-002 (12) |
| Market | 5 | 10.2 | R-MKT-001 / R-MKT-002 / R-MKT-005 (12) |
| Organizational | 5 | 10.8 | R-ORG-001 (16) |

---

## §8 — Risk Review Schedule

| Review Point | Timing | Focus | Owner |
|---|---|---|---|
| **Wave 1 Gate** | End of Week 3 | Creative risks (tone, canon), legal risks (entity, IP), organizational risks | ops_agent + showrunner |
| **Wave 2 Gate** | End of Week 8 | Financial risks (funding, cash flow), script risks, market risks | ops_agent + EP + finance_agent |
| **Wave 3 Gate (GO/NO-GO)** | End of Week 14 | ALL risks — comprehensive review before production commitment | All principals |
| **Weekly during production** | Production weeks | Production risks, schedule risks, financial burn rate | production_agent + ops_agent |
| **Wave 4 Gate** | Post-production entry | Post risks, distribution risks, market risks | ops_agent + post_agent + distribution_agent |
| **Pre-delivery** | Before final delivery | Remaining legal, market, and organizational risks | ops_agent + legal_agent |

---

## §9 — Retired / Resolved Risks

| ID | Risk | Resolution | Date | Resolved By |
|---|---|---|---|---|
| *(none yet)* | | | | |

---

## Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0.0 | 2026-04-10 | ops_agent | Initial creation — 36 risks across 6 categories, scoring methodology, summary dashboard, review schedule |

---

*Risk is not something to be afraid of. It's something to be mapped. This register exists so that when something goes wrong — and something always goes wrong — we've already thought about it once before it happened.*
