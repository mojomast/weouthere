# WE OUT HERE — Subagent Orchestration Protocol

**Document ID:** WOH-OPS-002  
**Version:** 1.0.0  
**Created:** 2026-04-10  
**Last Updated:** 2026-04-10  
**Responsible Agent:** ops_agent  
**Status:** Draft  
**Classification:** Internal — All Agents  
**Canonical Reference:** `00_admin/studio_manifest.md` v1.0.0

---

## Table of Contents

1. [Purpose & Scope](#1-purpose--scope)
2. [Agent Dependency Graph](#2-agent-dependency-graph)
3. [Wave Assignments](#3-wave-assignments)
4. [Inter-Agent Communication Protocol](#4-inter-agent-communication-protocol)
5. [Canon Enforcement](#5-canon-enforcement)
6. [Conflict Resolution Matrix](#6-conflict-resolution-matrix)
7. [Parallel Execution Map](#7-parallel-execution-map)
8. [Handoff Specifications](#8-handoff-specifications)
9. [Quality Gates](#9-quality-gates)
10. [Failure Modes](#10-failure-modes)
11. [Coordination Timeline](#11-coordination-timeline)

---

## 1. Purpose & Scope

This document defines the operational choreography for all 19 subagents working on **WE OUT HERE** Season 1. It specifies who depends on whom, what runs in parallel vs. sequence, how canon is enforced, and what happens when things break.

The studio manifest (`00_admin/studio_manifest.md`) defines *what* must be built. This document defines *how the agents coordinate to build it*.

### 1.1 The 19 Agents

| # | Agent | Core Mission |
|---|---|---|
| 1 | **showrunner_agent** | Series bible, tone, canon, arcs, script oversight — the creative authority |
| 2 | **writers_room_agent** | Episode outlines, beats, story breaks, joke bank, B-stories |
| 3 | **script_editor_agent** | Continuity polish, punch-up, formatting compliance, table read prep |
| 4 | **development_agent** | Pitch deck, synopsis, comps, market positioning |
| 5 | **finance_agent** | Budget, cash flow, cap table, financing strategy |
| 6 | **legal_agent** | Rights, IP, entity formation, contracts, risk memos, clearance |
| 7 | **hr_recruiting_agent** | Staffing plan, job posts, onboarding, crew hiring, casting admin |
| 8 | **casting_agent** | Character breakdowns, audition sides, casting notices, talent strategy |
| 9 | **production_agent** | Schedule, stripboard, locations, departments, production workflow |
| 10 | **post_agent** | Editing, motion graphics, sound, online finishing, delivery specs |
| 11 | **marketing_agent** | Positioning, social strategy, publicity, audience, launch campaign |
| 12 | **press_agent** | Press kit, media outreach, festival copy, Q&A prep |
| 13 | **brand_agent** | Logo direction, tagline bank, show identity, visual voice |
| 14 | **web_agent** | Website spec, sitemap, page copy, components, CMS planning |
| 15 | **social_content_agent** | Rollout calendar, platform-native copy, meme strategy |
| 16 | **bizdev_agent** | Partnerships, sponsorship, merch, community, distribution deals |
| 17 | **ops_agent** | Repo structure, file naming, task graph, QA, coordination (this agent) |
| 18 | **publicity_recruiting_agent** | Crew recruitment copy, casting call copy, hiring outreach materials |
| 19 | **deliverables_agent** | Completeness tracking, missing docs, versioning, handoff readiness |

### 1.2 Agent Clusters

Agents are organized into four functional clusters for coordination purposes:

| Cluster | Agents | Cluster Lead |
|---|---|---|
| **Creative** | showrunner_agent, writers_room_agent, script_editor_agent, development_agent, brand_agent | showrunner_agent |
| **Business** | finance_agent, legal_agent, bizdev_agent, marketing_agent, press_agent | finance_agent |
| **Production** | casting_agent, hr_recruiting_agent, production_agent, post_agent | production_agent |
| **Outreach & Platform** | web_agent, social_content_agent, publicity_recruiting_agent | marketing_agent |
| **Cross-Cutting (Oversight)** | ops_agent, deliverables_agent | ops_agent |

---

## 2. Agent Dependency Graph

### 2.1 DAG — Directed Acyclic Graph (Text Description)

The dependency graph flows top-to-bottom. An arrow `A → B` means "B requires completed output from A before it can begin its primary work."

```
LAYER 0 — FOUNDATION (no dependencies)
├── ops_agent
└── showrunner_agent

LAYER 1 — CANON & IDENTITY (depends on Layer 0)
├── brand_agent ← showrunner_agent (tone guide, series bible)
├── legal_agent ← ops_agent (entity plan), showrunner_agent (IP scope)
└── writers_room_agent ← showrunner_agent (series bible, season arc, character bible)

LAYER 2 — CREATIVE BUILD (depends on Layers 0-1)
├── development_agent ← showrunner_agent (bible, arc), brand_agent (visual identity)
├── script_editor_agent ← writers_room_agent (story breaks), showrunner_agent (tone guide)
├── finance_agent ← legal_agent (entity structure), showrunner_agent (format spec)
└── social_content_agent ← brand_agent (identity), showrunner_agent (tone guide)

LAYER 3 — PRE-PRODUCTION (depends on Layers 0-2)
├── casting_agent ← showrunner_agent (character bible), writers_room_agent (outlines), script_editor_agent (audition sides from scripts)
├── hr_recruiting_agent ← finance_agent (budget), production_agent (dept needs), legal_agent (contract templates)
├── production_agent ← writers_room_agent (story breaks), finance_agent (budget), legal_agent (location/insurance)
├── marketing_agent ← brand_agent (identity), development_agent (positioning), showrunner_agent (tone)
├── press_agent ← marketing_agent (positioning), brand_agent (identity), development_agent (pitch materials)
├── web_agent ← brand_agent (visual identity), marketing_agent (strategy), social_content_agent (content plan)
├── publicity_recruiting_agent ← hr_recruiting_agent (job specs), casting_agent (breakdowns), brand_agent (voice)
└── bizdev_agent ← marketing_agent (audience), finance_agent (budget), legal_agent (deal structures)

LAYER 4 — POST & DELIVERY (depends on Layers 0-3)
├── post_agent ← production_agent (schedule, format), showrunner_agent (creative standards), finance_agent (post budget)
└── deliverables_agent ← ALL AGENTS (tracks completeness across entire project)
```

### 2.2 Full Dependency Matrix

Each row shows what the agent **requires** from the column agent before it can begin primary work. `R` = Required, `O` = Optional/enhancing, `—` = No dependency.

| Receiving Agent ↓ / Providing Agent → | showrunner | writers_room | script_editor | development | finance | legal | hr_recruiting | casting | production | post | marketing | press | brand | web | social_content | bizdev | ops | publicity_recruiting | deliverables |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **showrunner_agent** | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — |
| **writers_room_agent** | R | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — |
| **script_editor_agent** | R | R | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — |
| **development_agent** | R | O | — | — | — | — | — | — | — | — | — | — | R | — | — | — | — | — | — |
| **finance_agent** | R | — | — | — | — | R | — | — | — | — | — | — | — | — | — | — | — | — | — |
| **legal_agent** | R | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | R | — | — |
| **hr_recruiting_agent** | — | — | — | — | R | R | — | — | R | — | — | — | — | — | — | — | — | — | — |
| **casting_agent** | R | R | R | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — |
| **production_agent** | O | R | — | — | R | R | — | — | — | — | — | — | — | — | — | — | — | — | — |
| **post_agent** | R | — | — | — | R | — | — | — | R | — | — | — | — | — | — | — | — | — | — |
| **marketing_agent** | R | — | — | R | — | — | — | — | — | — | — | — | R | — | — | — | — | — | — |
| **press_agent** | O | — | — | R | — | — | — | — | — | — | R | — | R | — | — | — | — | — | — |
| **brand_agent** | R | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — |
| **web_agent** | — | — | — | — | — | — | — | — | — | — | R | — | R | — | R | — | — | — | — |
| **social_content_agent** | R | — | — | — | — | — | — | — | — | — | — | — | R | — | — | — | — | — | — |
| **bizdev_agent** | — | — | — | — | R | R | — | — | — | — | R | — | — | — | — | — | — | — | — |
| **ops_agent** | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — |
| **publicity_recruiting_agent** | — | — | — | — | — | — | R | R | — | — | — | — | R | — | — | — | — | — | — |
| **deliverables_agent** | R | R | R | R | R | R | R | R | R | R | R | R | R | R | R | R | R | R | — |

### 2.3 Critical Path

The longest sequential dependency chain determines the minimum time to completion:

```
showrunner_agent → writers_room_agent → script_editor_agent → casting_agent
                                      → production_agent → post_agent → deliverables_agent
```

This chain (showrunner → writers_room → production → post → deliverables) is **7 layers deep** and represents the critical path. Delays at any node on this path delay the entire project.

**Critical path protection rules:**
1. showrunner_agent outputs are ALWAYS highest priority
2. writers_room_agent may not be blocked by any non-showrunner dependency
3. production_agent blockers escalate to ops_agent within 24 hours
4. post_agent receives provisional inputs if production_agent is delayed

---

## 3. Wave Assignments

Work is organized into four waves aligned with the studio manifest (`00_admin/studio_manifest.md`, §5). Each wave has entry criteria, active agents, expected outputs, and gate requirements.

### Wave 1 — Foundation (Weeks 1-3)

**Objective:** Establish canon, creative identity, legal foundation, and operational infrastructure.

| Agent | Active? | Key Outputs | Gate Requirement |
|---|---|---|---|
| **ops_agent** | YES | `studio_manifest.md`, `devplan.md`, `ops_manual.md`, `file_naming_conventions.md`, `agent_playbook.md`, `subagent_orchestration.md` | All ops docs at v1.0, repo structure live |
| **showrunner_agent** | YES | `series_bible.md`, `world_bible.md`, `character_bible.md`, `tone_guide.md`, `season_arc.md`, `theme_document.md`, `reference_deck.md` | Series bible approved by principals; tone guide locked |
| **writers_room_agent** | YES (late) | `room_rules.md`, begin `episode_outlines.md` | Room rules finalized; outline work started |
| **brand_agent** | YES | `brand_guide.md`, `moodboard.md` | Brand guide at v1.0; visual direction approved |
| **legal_agent** | YES | `legal_strategy.md`, `chain_of_title.md` | Entity plan confirmed; chain of title documented |
| **development_agent** | YES (late) | `show_format_spec.md` | Format spec aligned with series bible |
| **deliverables_agent** | YES | Tracking spreadsheet initialized | All Wave 1 outputs catalogued |
| script_editor_agent | STANDBY | — | — |
| finance_agent | STANDBY | — | — |
| hr_recruiting_agent | STANDBY | — | — |
| casting_agent | STANDBY | — | — |
| production_agent | STANDBY | — | — |
| post_agent | STANDBY | — | — |
| marketing_agent | STANDBY | — | — |
| press_agent | STANDBY | — | — |
| web_agent | STANDBY | — | — |
| social_content_agent | STANDBY | — | — |
| bizdev_agent | STANDBY | — | — |
| publicity_recruiting_agent | STANDBY | — | — |

**Wave 1 Gate Criteria:**
- [ ] Series bible v1.0 approved by showrunner
- [ ] Tone guide locked
- [ ] Character bible complete for all 3 leads (twinkle.puss, bl0ng, ariane.emory)
- [ ] Brand guide v1.0 approved
- [ ] Legal strategy and chain of title at v1.0
- [ ] Ops infrastructure complete (manifest, naming conventions, playbook)
- [ ] All Wave 1 documents pass QC formatting check (deliverables_agent confirms)

### Wave 2 — Creative Build (Weeks 4-8)

**Objective:** Complete all scripts, story breaks, pitch materials, visual identity, and core legal/financial infrastructure.

| Agent | Active? | Key Outputs | Gate Requirement |
|---|---|---|---|
| **showrunner_agent** | YES | Script oversight, canon arbitration | All scripts reviewed at least once |
| **writers_room_agent** | YES | All 6 story breaks, `joke_bank.md`, `b_story_tracker.md`, `recurring_bits.md`, `kill_list.md` | All 6 story breaks at v1.0 |
| **script_editor_agent** | YES | All 6 episode scripts (continuity pass + punch-up), `cold_opens.md`, `dialogue_style_guide.md` | All 6 scripts at first-draft quality; dialogue guide locked |
| **development_agent** | YES | `pitch_deck.md`, `treatment.md` | Pitch deck presentation-ready |
| **brand_agent** | YES | `logo_spec.md`, `color_palette.md`, `typography_spec.md`, `art_direction_deck.md`, `ui_screen_design_spec.md` | Full visual identity system locked |
| **finance_agent** | YES | `master_budget.md`, `funding_strategy.md`, `cashflow_projection.md`, `investor_deck.md` | Budget framework approved by EP |
| **legal_agent** | YES | `operating_agreement.md`, `ip_assignment_template.md`, `nda_template.md`, `insurance_plan.md` | Operating agreement executed; IP assignment template ready |
| **social_content_agent** | YES (late) | Begin rollout calendar planning | Platform strategy drafted |
| **deliverables_agent** | YES | Mid-project audit | All Wave 2 outputs tracked; gap report issued |
| **ops_agent** | YES | Coordination, blocker resolution | No unresolved blockers older than 48 hours |
| hr_recruiting_agent | STANDBY | — | — |
| casting_agent | STANDBY | — | — |
| production_agent | STANDBY | — | — |
| post_agent | STANDBY | — | — |
| marketing_agent | STANDBY | — | — |
| press_agent | STANDBY | — | — |
| web_agent | STANDBY | — | — |
| bizdev_agent | STANDBY | — | — |
| publicity_recruiting_agent | STANDBY | — | — |

**Wave 2 Gate Criteria:**
- [ ] All 6 story breaks at v1.0
- [ ] All 6 scripts at first-draft status (v1.0), reviewed by showrunner_agent
- [ ] Pitch deck and treatment presentation-ready
- [ ] Visual identity system (logo, color, type, art direction) locked
- [ ] Master budget approved; funding strategy at v1.0
- [ ] Operating agreement and IP assignment template finalized
- [ ] No open canon contradictions (deliverables_agent confirms)

### Wave 3 — Pre-Production (Weeks 9-14)

**Objective:** Complete all hiring, casting, production logistics, marketing strategy, website, press materials, and remaining legal/financial docs. Achieve production-ready state.

| Agent | Active? | Key Outputs | Gate Requirement |
|---|---|---|---|
| **showrunner_agent** | YES | Final script approvals, creative oversight | All scripts at final-lock status |
| **script_editor_agent** | YES | Final polish pass on all scripts, table read prep | Scripts formatted for production |
| **casting_agent** | YES | `casting_plan.md`, `character_breakdown.md`, `audition_sides.md`, `casting_wishlist.md`, `extras_plan.md`, `casting_call_templates.md` | All 3 leads cast; breakdowns complete |
| **hr_recruiting_agent** | YES | `crew_plan.md`, `org_chart.md`, `job_descriptions.md`, `onboarding_guide.md`, `contractor_agreements_checklist.md`, `department_head_briefs.md` | Key department heads hired |
| **production_agent** | YES | `production_plan.md`, `shooting_schedule.md`, `location_plan.md`, `equipment_list.md`, `call_sheet_template.md`, `production_design_brief.md`, `stunt_vfx_plan.md`, safety + catering docs | Shooting schedule locked; locations confirmed |
| **marketing_agent** | YES | `marketing_strategy.md`, `audience_profile.md`, `social_media_plan.md`, `trailer_brief.md`, `launch_calendar.md`, `influencer_strategy.md`, `festival_submission_tracker.md`, `taglines_and_copy.md` | Marketing strategy approved by EP |
| **press_agent** | YES | `press_kit.md`, `press_release_template.md`, `faq.md`, `media_contacts.md`, `interview_talking_points.md`, `key_art_descriptions.md` | Press kit at v1.0 |
| **web_agent** | YES | `website_spec.md`, `sitemap.md`, `landing_page_copy.md`, `seo_strategy.md`, `analytics_plan.md` | Website spec approved; landing page copy finalized |
| **social_content_agent** | YES | Rollout calendar, platform-native copy, meme strategy docs | Rollout calendar covering pre-launch through premiere |
| **publicity_recruiting_agent** | YES | Crew recruitment copy, casting call copy, hiring outreach materials | All outreach materials ready for distribution |
| **finance_agent** | YES | `cost_report_template.md`, `tax_strategy.md`, `payment_schedule.md` | Payment schedule aligned with production schedule |
| **legal_agent** | YES | `talent_agreement_template.md`, `location_release_template.md`, `music_licensing_plan.md`, `rights_clearance_tracker.md` | All contract templates execution-ready |
| **bizdev_agent** | YES (early) | Begin `biz_dev_strategy.md`, `partnership_targets.md` | Strategy direction confirmed |
| **ops_agent** | YES | `master_timeline.md`, `contact_sheet.md`, `meeting_log.md` | Master timeline locked; all contacts current |
| **deliverables_agent** | YES | Pre-production completeness audit | All Wave 3 docs tracked; no critical gaps |
| post_agent | STANDBY | — | Begin pipeline planning |

**Wave 3 Gate Criteria (this is the GO / NO-GO decision point):**
- [ ] All 6 scripts at final-lock (v F1.0)
- [ ] Full crew attached (department heads confirmed)
- [ ] All 3 lead roles cast
- [ ] Locations locked and released
- [ ] Shooting schedule approved (2+ weeks before production start)
- [ ] All legal templates execution-ready
- [ ] Marketing strategy and press kit approved
- [ ] Website landing page live or ready to deploy
- [ ] Budget reconciled against actuals; cash flow positive through production
- [ ] Insurance bound
- [ ] ops_agent confirms: no unresolved blockers, all critical docs at v1.0+

### Wave 4 — Post-Production & Release (Weeks 15-22)

**Objective:** Complete post-production pipeline, distribution strategy, business development, and all remaining operational docs. Deliver the complete Season 1 package.

| Agent | Active? | Key Outputs | Gate Requirement |
|---|---|---|---|
| **showrunner_agent** | YES | Final cut approvals, creative oversight of post | Signed off on all 6 final cuts |
| **post_agent** | YES | `post_production_plan.md`, `edit_workflow.md`, `vfx_breakdown.md`, `sound_design_brief.md`, `music_brief.md`, `color_grade_spec.md`, `deliverables_spec.md`, `qc_checklist.md` | All post docs at v1.0; delivery spec meets platform requirements |
| **bizdev_agent** | YES | `biz_dev_strategy.md`, `partnership_targets.md`, `sponsorship_plan.md`, `merchandise_plan.md`, `franchise_roadmap.md`, `ip_extension_plan.md` | All bizdev docs at v1.0 |
| **marketing_agent** | YES | Launch execution, festival submissions | Launch campaign active |
| **press_agent** | YES | Media outreach execution | Press cycle active |
| **social_content_agent** | YES | Launch content deployment | Content calendar executing |
| **web_agent** | YES | Website live with full content | Site launched |
| **ops_agent** | YES | `tool_stack.md`, `backup_plan.md`, `security_protocol.md` | All ops docs complete |
| **deliverables_agent** | YES | **Final completeness audit** — the definitive readiness check | All 125 deliverables at v1.0+; handoff package complete |
| **finance_agent** | YES | Final cost reconciliation | Books closed or closing |
| **legal_agent** | YES | Final rights clearance confirmation | All clearances documented |
| script_editor_agent | STANDBY | Available for post-production script notes | — |
| writers_room_agent | STANDBY | Available for additional content | — |
| casting_agent | COMPLETE | — | — |
| hr_recruiting_agent | COMPLETE | — | — |
| production_agent | COMPLETE | Available for post-production coordination | — |
| publicity_recruiting_agent | COMPLETE | — | — |

**Wave 4 Gate Criteria (FINAL GATE — Package Complete):**
- [ ] All 125 deliverables at v1.0 or higher
- [ ] deliverables_agent final audit: zero critical gaps
- [ ] All scripts at final-lock
- [ ] Post-production pipeline documented and platform-compliant
- [ ] Distribution strategy and platform targets confirmed
- [ ] All legal clearances complete
- [ ] Budget reconciled
- [ ] Handoff package ready for external partners / investors / platforms

---

## 4. Inter-Agent Communication Protocol

### 4.1 Communication Architecture

All agent coordination flows through **ops_agent** as the central dispatcher. There is no unsupervised direct agent-to-agent communication.

```
                        ┌───────────────────┐
                        │   SHOWRUNNER_AGENT │  ← Creative authority (canon disputes)
                        └─────────┬─────────┘
                                  │
                        ┌─────────┴─────────┐
                        │     OPS_AGENT      │  ← Coordination hub (all routing)
                        └─────────┬─────────┘
                                  │
            ┌─────────────────────┼─────────────────────┐
            │                     │                     │
   ┌────────┴────────┐  ┌────────┴────────┐  ┌────────┴────────┐
   │ Creative Cluster │  │ Business Cluster│  │Production Cluster│
   │                  │  │                 │  │                  │
   │ writers_room     │  │ finance         │  │ casting          │
   │ script_editor    │  │ legal           │  │ hr_recruiting    │
   │ development      │  │ bizdev          │  │ production       │
   │ brand            │  │ marketing       │  │ post             │
   │                  │  │ press           │  │                  │
   └──────────────────┘  └─────────────────┘  └──────────────────┘
                                  │
                     ┌────────────┼────────────┐
                     │            │            │
              ┌──────┴───┐ ┌─────┴────┐ ┌─────┴──────────────┐
              │ web      │ │ social_  │ │ publicity_          │
              │          │ │ content  │ │ recruiting          │
              └──────────┘ └──────────┘ └─────────────────────┘
                                  │
                        ┌─────────┴─────────┐
                        │ DELIVERABLES_AGENT │  ← Final audit (reads all)
                        └───────────────────┘
```

### 4.2 Communication Message Types

All inter-agent communication uses structured message formats. Every message is logged by ops_agent.

#### REQUEST — Asking another agent for input

```
REQUEST
From: [requesting_agent]
To: [target_agent]
Via: ops_agent
Subject: [brief description]
Required-By: [date or wave gate]
Context: [what the requesting agent needs and why]
Deliverable-Affected: [file path of deliverable that's blocked]
Priority: [Critical | High | Medium | Low]
```

#### HANDOFF — Delivering completed output to a downstream agent

```
HANDOFF
From: [producing_agent]
To: [receiving_agent(s)]
Via: ops_agent
Deliverable: [file path]
Version: [X.Y.Z]
Status: [Draft | Review | Approved | Final]
Dependencies-Satisfied: [list of downstream agents now unblocked]
Notes: [any caveats, known issues, or incomplete sections]
```

#### FLAG — Reporting a problem

```
FLAG
From: [detecting_agent]
Severity: [Critical | Warning | Info]
Type: [Canon Conflict | Missing Dependency | Scope Creep | Timeline Risk | Quality Issue]
Description: [what's wrong]
Affected-Deliverables: [list]
Suggested-Resolution: [optional]
```

#### BLOCKED — Agent cannot proceed

```
BLOCKED
Agent: [blocked_agent]
Deliverable: [what they're trying to produce]
Blocked-By: [agent_name] — [deliverable or decision needed]
Since: [date]
Impact: [what downstream work is now delayed]
Escalation-Requested: [Yes/No]
```

### 4.3 Communication Rules

1. **No direct agent-to-agent messages.** All communication routes through ops_agent, which logs it, checks it against the dependency graph, and routes it appropriately.
2. **Cluster leads may coordinate within their cluster** for low-stakes alignment (e.g., brand_agent clarifying a color question with marketing_agent), but ops_agent must be CC'd and any decision affecting canon or scope must be formally routed.
3. **Response SLAs:**
   - Critical requests: 24 hours
   - High requests: 48 hours
   - Medium requests: 1 week
   - Low requests: best effort within current wave
4. **Canon questions always route to showrunner_agent.** No agent may invent or modify canon values. If you need a creative decision that isn't in the series bible, file a REQUEST to showrunner_agent.
5. **All HANDOFF messages trigger a deliverables_agent log entry.** This is how completeness tracking works.

### 4.4 Shared Canon Access

All agents have **read access** to the following canonical documents at all times:

| Document | Path | Purpose |
|---|---|---|
| Studio Manifest | `00_admin/studio_manifest.md` | Project structure, agent registry, wave schedule |
| Series Bible | `01_development/series_bible.md` | World, characters, tone, rules |
| Character Bible | `01_development/character_bible.md` | Detailed character profiles |
| Tone Guide | `01_development/tone_guide.md` | Voice, register, what's in/out of bounds |
| Season Arc | `01_development/season_arc.md` | Episode-by-episode arc trajectory |
| Brand Guide | `04_brand/brand_guide.md` | Visual identity, logo usage, color, typography |
| This Document | `16_ops/subagent_orchestration.md` | Coordination protocol |

**Write access** to canon documents is restricted to the producing agent + showrunner_agent approval.

---

## 5. Canon Enforcement

Canon is the set of immutable creative facts about WE OUT HERE. Violating canon is a production defect.

### 5.1 Canon Values (Immutable Unless Showrunner Amends)

| Canon Element | Canonical Value | Source |
|---|---|---|
| **Show Title** | WE OUT HERE (always all-caps in titles; lowercase only in informal/in-universe contexts) | studio_manifest.md §1 |
| **Format** | 6 x 30 min, single-camera | studio_manifest.md §1 |
| **Genre** | Dark sitcom / tech psychocomedy | studio_manifest.md §1 |
| **Hybrid Style** | Desktop realism + live action + surreal insert sequences | studio_manifest.md §1 |
| **Character: twinkle.puss** | Always lowercase, always with period. The impulsive visionary. | character_bible.md |
| **Character: bl0ng** | Always lowercase, zero not O. The failed superego. | character_bible.md |
| **Character: ariane.emory** | Always lowercase, always with period. The detached meta-observer. | character_bible.md |
| **Season Arc** | Mania → fragile success → ethical drift → containment failure → ironic collapse → exposure to consequences | studio_manifest.md §1 |
| **Ep 1 Title** | Don't Send That | studio_manifest.md §1 |
| **Ep 2 Title** | Terms of Abuse | studio_manifest.md §1 |
| **Ep 3 Title** | The Manic Defense | studio_manifest.md §1 |
| **Ep 4 Title** | Contain Me Daddy | studio_manifest.md §1 |
| **Ep 5 Title** | The Superego Collapse | studio_manifest.md §1 |
| **Ep 6 Title** | Let Him Cook() | studio_manifest.md §1 (note: parentheses are part of the title) |
| **Tone** | Smart, internet-literate, psychologically sharp, humane, darkly funny. Absurdist but emotionally grounded. | tone_guide.md |
| **Entity** | Out Here Productions LLC (provisional) | studio_manifest.md §2 |

### 5.2 Canon Enforcement Rules

1. **Read before you write.** Every agent must read the relevant canon documents before producing any deliverable. Ignorance of canon is not a defense.
2. **Quote, don't paraphrase.** When referencing canon values in deliverables, use the exact canonical form. Do not "improve" character names, episode titles, or the show title.
3. **No invention without authorization.** If your deliverable requires a creative fact that doesn't exist in canon (e.g., a supporting character name, a location, a plot point), file a REQUEST to showrunner_agent. Do not invent and hope.
4. **Contradiction = immediate FLAG.** If you discover that your deliverable contradicts an existing canon document, stop work on that section and file a FLAG to ops_agent immediately.
5. **Canon amendments require formal process.** Only showrunner_agent can amend canon. Amendments are documented with a version bump to the affected canon document and a HANDOFF message to all agents.
6. **deliverables_agent audits canon compliance** at every wave gate. Any deliverable with a canon violation is rejected and returned to its producing agent.

### 5.3 Common Canon Mistakes to Avoid

| Mistake | Example | Correct Form |
|---|---|---|
| Capitalizing character handles | "Twinkle.Puss" or "BLONG" | `twinkle.puss`, `bl0ng` |
| Using O instead of 0 in bl0ng | "blong" | `bl0ng` |
| Dropping punctuation from handles | "twinklepuss" or "ariane emory" | `twinkle.puss`, `ariane.emory` |
| Lowercasing show title in headings | "We Out Here" or "we out here" | WE OUT HERE |
| Omitting parentheses from Ep 6 title | "Let Him Cook" | Let Him Cook() |
| Calling it a "comedy" without qualifier | "comedy series" | "dark sitcom" or "tech psychocomedy" |
| Wrong episode count | "8-episode season" | 6 episodes |
| Wrong episode length | "1-hour episodes" | 30-minute episodes |
| Inventing a 4th main character | "twinkle.puss, bl0ng, ariane.emory, and Max" | Only 3 leads exist in canon |
| Altering the arc order | "collapse → mania → success" | Mania → fragile success → ethical drift → containment failure → ironic collapse → exposure to consequences |

---

## 6. Conflict Resolution Matrix

When two agents produce contradictory outputs, the following matrix determines resolution authority and process.

### 6.1 Conflict Types & Resolution

| Conflict Type | Example | Detection Method | Resolution Authority | Process |
|---|---|---|---|---|
| **Canon contradiction** | Script says "Bl0ng" while character bible says "bl0ng" | deliverables_agent audit, script_editor_agent review | showrunner_agent | FLAG → ops_agent routes to showrunner → showrunner rules → losing doc is revised |
| **Creative direction disagreement** | writers_room wants a dark B-plot; marketing_agent says it'll hurt positioning | Agent-to-agent REQUEST | showrunner_agent | Both agents present cases via ops_agent → showrunner decides → decision logged |
| **Budget vs. creative ambition** | production_agent needs $X for locations; finance_agent says budget is $X/2 | finance_agent budget review | EP + showrunner_agent jointly | finance_agent models 3 options → ops_agent convenes → principals decide |
| **Scope overlap** | marketing_agent and social_content_agent both produce social strategy | ops_agent review | ops_agent | Refer to this document's agent definitions → ops_agent assigns ownership → duplicate is retired |
| **Legal risk in creative content** | Script references a real company; legal_agent flags defamation risk | legal_agent script review | legal_agent (advisory) → showrunner_agent (final) | legal_agent issues risk memo → showrunner decides to modify or accept risk |
| **Timeline conflict** | production_agent needs scripts by Week 10; script_editor_agent can't deliver until Week 12 | ops_agent timeline review | ops_agent | ops_agent assesses critical path → proposes schedule adjustment or scope reduction → principals approve |
| **Tone inconsistency** | press_agent press kit is too corporate; doesn't match show's voice | deliverables_agent audit, brand_agent review | showrunner_agent | FLAG → brand_agent advises on tone alignment → showrunner approves revision |
| **Factual disagreement** | finance_agent and legal_agent disagree on entity structure implications | Agent-to-agent FLAG | EP + external counsel | Both agents present analysis → EP decides with external advisor input |
| **Format/spec conflict** | post_agent delivery spec conflicts with production_agent shooting format | ops_agent coordination | production_agent (production phase) / post_agent (post phase) | Earlier-phase agent's spec takes precedence; later-phase agent adapts |
| **Priority conflict** | Two agents need the same resource (e.g., showrunner review time) | ops_agent queue management | ops_agent | Critical path tasks take priority → ops_agent sequences the queue |

### 6.2 Escalation Ladder

```
Level 0: Agent self-corrects (typo, formatting error, minor inconsistency)
    ↓ (if unresolvable)
Level 1: Cluster lead mediates within cluster
    ↓ (if cross-cluster or unresolvable)
Level 2: ops_agent mediates, proposes resolution
    ↓ (if creative dispute or high-stakes)
Level 3: showrunner_agent decides (creative) or EP decides (business)
    ↓ (if both principals disagree)
Level 4: External advisor / counsel consulted; principals negotiate
```

### 6.3 Conflict Resolution SLAs

| Severity | Resolution Deadline | Escalation Trigger |
|---|---|---|
| **Critical** (blocks critical path) | 24 hours | Auto-escalates to Level 2 immediately |
| **High** (blocks a deliverable) | 48 hours | Escalates if unresolved at 24 hours |
| **Medium** (inconsistency, non-blocking) | 1 week | Escalates if unresolved at 48 hours |
| **Low** (style preference, minor) | End of current wave | Resolved at wave gate review |

---

## 7. Parallel Execution Map

### 7.1 What Can Run Simultaneously

Within each wave, certain agents can work in parallel because they have no mutual dependencies. Others must be sequenced.

#### Wave 1 Parallel Groups

```
PARALLEL GROUP 1A (can start immediately):
├── ops_agent (manifest, devplan, ops infrastructure)
└── showrunner_agent (series bible, character bible, tone guide)

PARALLEL GROUP 1B (starts when showrunner_agent delivers series bible):
├── brand_agent (brand guide, moodboard) [needs: tone guide]
├── writers_room_agent (room rules, begin outlines) [needs: series bible, arc]
├── legal_agent (legal strategy, chain of title) [needs: entity plan from ops]
└── development_agent (show format spec) [needs: series bible]

Note: 1A and 1B have a sequential gate between them. Within each group, work is parallel.
```

#### Wave 2 Parallel Groups

```
PARALLEL GROUP 2A (can start at Wave 2 open):
├── writers_room_agent (all 6 story breaks) [needs: W1 bible outputs]
├── brand_agent (logo, color, type, art direction, UI) [needs: W1 brand guide]
├── finance_agent (budget, funding, cashflow, investor deck) [needs: W1 legal strategy]
├── legal_agent (operating agreement, IP assignment, NDA, insurance) [needs: W1 chain of title]
└── social_content_agent (begin platform planning) [needs: W1 brand guide, tone guide]

PARALLEL GROUP 2B (starts when writers_room delivers story breaks):
├── script_editor_agent (all 6 scripts, punch-up, cold opens) [needs: story breaks]
└── development_agent (pitch deck, treatment) [needs: bible + brand outputs]

Note: 2A and 2B overlap. script_editor_agent can begin on Ep 1 as soon as that
story break is complete — doesn't need to wait for all 6.
```

#### Wave 3 Parallel Groups

```
PARALLEL GROUP 3A (can start at Wave 3 open):
├── casting_agent [needs: character bible, scripts]
├── hr_recruiting_agent [needs: budget, production dept needs]
├── marketing_agent [needs: brand identity, positioning]
├── press_agent [needs: marketing positioning, brand identity]
├── web_agent [needs: brand identity, marketing strategy]
├── social_content_agent [needs: brand, tone, marketing strategy]
├── publicity_recruiting_agent [needs: job specs, casting breakdowns, brand voice]
├── finance_agent (remaining docs) [needs: W2 budget approved]
├── legal_agent (remaining templates) [needs: W2 legal docs]
└── ops_agent (master timeline, contact sheet) [needs: all W2 outputs]

PARALLEL GROUP 3B (starts when budget + legal templates ready):
├── production_agent (full production logistics) [needs: scripts, budget, legal, locations]
└── bizdev_agent (begin strategy) [needs: marketing, budget, legal]

Note: Most Wave 3 agents run in parallel. production_agent has the densest
dependency set and is the primary bottleneck to watch.
```

#### Wave 4 Parallel Groups

```
PARALLEL GROUP 4A (can start at Wave 4 open):
├── post_agent (all post-production docs) [needs: production plan, format specs]
├── bizdev_agent (all remaining docs) [needs: W3 strategy confirmed]
├── marketing_agent (launch execution) [needs: W3 strategy approved]
├── press_agent (media outreach) [needs: W3 press kit]
├── web_agent (site launch) [needs: W3 spec + copy]
├── social_content_agent (content deployment) [needs: W3 calendar]
├── ops_agent (remaining ops docs) [needs: nothing]
├── finance_agent (final reconciliation) [needs: production actuals]
└── legal_agent (final clearances) [needs: all rights tracked]

PARALLEL GROUP 4B (starts when all agents report v1.0):
└── deliverables_agent (final completeness audit) [needs: ALL agent outputs]
```

### 7.2 Sequential Dependencies (Must Not Parallelize)

These pairs represent hard sequential dependencies where the downstream agent **cannot begin meaningful work** until the upstream agent delivers:

| Step | Upstream | Downstream | What Must Be Delivered First |
|---|---|---|---|
| 1 | showrunner_agent | writers_room_agent | Series bible, character bible, season arc |
| 2 | writers_room_agent | script_editor_agent | Story breaks for each episode |
| 3 | script_editor_agent | casting_agent | Final scripts (for audition sides extraction) |
| 4 | showrunner_agent | brand_agent | Tone guide (for visual voice alignment) |
| 5 | brand_agent | development_agent | Brand guide (for pitch deck visual alignment) |
| 6 | finance_agent | production_agent | Approved budget (for production planning) |
| 7 | legal_agent | hr_recruiting_agent | Contract templates (for crew hiring) |
| 8 | production_agent | post_agent | Production plan, shooting schedule, format specs |
| 9 | marketing_agent | press_agent | Positioning strategy (for press kit framing) |
| 10 | hr_recruiting_agent + casting_agent | publicity_recruiting_agent | Job specs + casting breakdowns (for outreach copy) |
| 11 | ALL agents | deliverables_agent | All deliverables at v1.0 (for final audit) |

### 7.3 Pipeline Optimization: Rolling Starts

To avoid idle time, agents should use **rolling starts** where possible:

- **script_editor_agent** can begin Episode 1 script as soon as writers_room_agent delivers the Episode 1 story break. It does not need to wait for all 6 story breaks.
- **casting_agent** can begin character breakdowns from the character bible before final scripts are available. Audition sides require scripts, but breakdowns and wishlists do not.
- **production_agent** can begin location scouting and equipment planning before the final budget is approved, using the draft budget as a guide.
- **marketing_agent** can begin audience profiling from the series bible before brand identity is fully locked.
- **web_agent** can begin sitemap and CMS architecture before final page copy is available.

---

## 8. Handoff Specifications

Every agent produces deliverables in a defined format. Downstream agents depend on these specifications.

### 8.1 Master Handoff Table

| Producing Agent | Deliverable(s) | Format Spec | Receiving Agent(s) | Handoff Trigger |
|---|---|---|---|---|
| **showrunner_agent** | Series bible, character bible, tone guide, season arc, world bible, theme doc, reference deck | Markdown, standard header, cross-referenced, approved by principals | ALL agents (canon foundation) | Wave 1 gate passed |
| **writers_room_agent** | 6 story breaks, episode outlines, joke bank, B-story tracker, recurring bits, kill list, room rules | Markdown; story breaks must include: act structure, beat sheet, scene list, A/B/C story tracking per episode | script_editor_agent, casting_agent, production_agent | Each story break handed off individually as completed |
| **script_editor_agent** | 6 episode scripts, cold opens, dialogue style guide | Markdown in modified screenplay format (see §8.2); includes scene headers, dialogue, action lines, parentheticals | casting_agent (sides), production_agent (breakdown), post_agent (editorial reference), showrunner_agent (review) | Each script handed off individually; dialogue guide at Wave 2 gate |
| **development_agent** | Pitch deck, treatment, show format spec | Markdown (deck also as presentable format — PDF-ready structure); treatment 3-8 pages | finance_agent (for investor deck alignment), marketing_agent (positioning), bizdev_agent (partnership pitch) | Wave 2 gate |
| **brand_agent** | Brand guide, logo spec, color palette, typography spec, art direction deck, UI screen design spec, moodboard | Markdown with embedded hex codes, font names, and detailed visual descriptions (no binary assets — specs only) | ALL public-facing agents (marketing, press, web, social_content, publicity_recruiting), development_agent | Brand guide at Wave 1 gate; full system at Wave 2 gate |
| **finance_agent** | Master budget, funding strategy, cashflow projection, cost report template, investor deck, tax strategy, payment schedule | Markdown with tables; budget in line-item format; cashflow in monthly projection table | production_agent (budget constraints), hr_recruiting_agent (comp benchmarks), legal_agent (entity financials), bizdev_agent (deal modeling) | Budget at Wave 2 gate; remaining docs by Wave 3 gate |
| **legal_agent** | Legal strategy, operating agreement, IP assignment, NDA, talent agreement, location release, music licensing plan, chain of title, rights clearance tracker, insurance plan | Markdown (templates in blockquote format for distinction from commentary); legal analysis in memo format | hr_recruiting_agent (contract templates), production_agent (releases, insurance), casting_agent (talent deal structure), bizdev_agent (deal frameworks) | Strategy + chain of title at Wave 1 gate; templates by Wave 2/3 gates |
| **casting_agent** | Casting plan, character breakdown, audition sides, casting wishlist, extras plan, casting call templates | Markdown; breakdowns include: role name, age range, type, key traits, arc summary, scenes count; sides are scene excerpts formatted for audition use | publicity_recruiting_agent (for casting call copy), hr_recruiting_agent (for talent admin), production_agent (cast availability for scheduling) | Breakdowns at Wave 3 open; full package by Wave 3 mid-point |
| **hr_recruiting_agent** | Crew plan, org chart, job descriptions, onboarding guide, contractor agreements checklist, department head briefs | Markdown; org chart as text hierarchy; job descriptions include: title, department, rate range, responsibilities, qualifications | publicity_recruiting_agent (for recruitment copy), production_agent (for department coordination), legal_agent (for agreement execution) | Crew plan at Wave 3 open; full package by Wave 3 gate |
| **production_agent** | Production plan, shooting schedule, location plan, equipment list, call sheet template, production design brief, stunt/VFX plan, safety protocol, catering/transport plan | Markdown; schedule in day-by-day table format; location plan includes address, permit status, contact; equipment as categorized list with quantities | post_agent (format, schedule for editorial planning), hr_recruiting_agent (department needs), finance_agent (actuals tracking) | Full package at Wave 3 gate |
| **post_agent** | Post-production plan, edit workflow, VFX breakdown, sound design brief, music brief, color grade spec, deliverables spec, QC checklist | Markdown; deliverables spec includes codec, resolution, frame rate, audio config per platform; QC checklist as checkable list | deliverables_agent (completion tracking), bizdev_agent (platform delivery requirements) | Full package at Wave 4 mid-point |
| **marketing_agent** | Marketing strategy, audience profile, social media plan, trailer brief, launch calendar, influencer strategy, festival submission tracker, taglines and copy | Markdown; audience profile includes demographics, psychographics, platform habits; calendar in week-by-week table | press_agent (positioning for press kit), web_agent (messaging for site), social_content_agent (strategy for content calendar), bizdev_agent (audience data for partnerships) | Strategy docs at Wave 3 open; full package at Wave 3 gate |
| **press_agent** | Press kit, press release template, FAQ, media contacts, interview talking points, key art descriptions | Markdown; press kit structured as: logline, synopsis, character descriptions, creator bios, production notes, quotes, image descriptions | web_agent (for press page content), social_content_agent (for announcement copy) | Full package at Wave 3 gate |
| **web_agent** | Website spec, sitemap, landing page copy, SEO strategy, analytics plan | Markdown; spec includes wireframe descriptions, component list, CMS requirements; sitemap as hierarchical list; copy ready for implementation | social_content_agent (for link destinations), marketing_agent (for campaign landing pages) | Spec at Wave 3 mid-point; full package at Wave 3 gate |
| **social_content_agent** | Rollout calendar, platform-native copy, meme strategy | Markdown; calendar in week-by-week table with platform columns (TikTok, Instagram, X/Twitter, YouTube, etc.); copy tagged by platform | marketing_agent (execution alignment), web_agent (content embeds) | Calendar at Wave 3 gate; content at Wave 4 ongoing |
| **bizdev_agent** | Biz dev strategy, partnership targets, sponsorship plan, merchandise plan, franchise roadmap, IP extension plan | Markdown; targets as ranked list with contact info, fit rationale, deal type; sponsorship plan includes tiers and deliverables | finance_agent (revenue projections), legal_agent (deal structures) | Strategy at Wave 3 late; full package at Wave 4 gate |
| **ops_agent** | All admin + ops docs, this orchestration doc, coordination logs | Markdown; all standard formatting per file naming conventions | ALL agents (infrastructure), deliverables_agent (tracking) | Ongoing through all waves |
| **publicity_recruiting_agent** | Crew recruitment copy, casting call copy, hiring outreach materials | Markdown; copy formatted for direct posting on job boards, social media, industry listings | hr_recruiting_agent (for distribution), casting_agent (for posting) | Wave 3 mid-point |
| **deliverables_agent** | Completeness tracking reports, gap analyses, version audit, handoff readiness assessment | Markdown; tracking as table with columns: deliverable, agent, version, status, gaps, notes | ops_agent (for coordination decisions), ALL agents (for gap remediation) | Reports at each wave gate; final audit at Wave 4 gate |

### 8.2 Script Format Specification

Since scripts are the most heavily cross-referenced deliverable, their format must be precise:

```markdown
# S01E01 — Don't Send That

**Episode:** 1 of 6  
**Version:** 1.0.0  
**Writer:** [name]  
**Story by:** [writers_room_agent credits]  
**Draft date:** [YYYY-MM-DD]

---

## COLD OPEN

### INT. TWINKLE.PUSS'S APARTMENT — LAPTOP SCREEN — NIGHT

[Desktop realism format: we see the character's screen]

**twinkle.puss** (typing in `Backchannel` chat)
> [dialogue as chat message]

### TITLE CARD: WE OUT HERE

---

## ACT ONE

### Scene 1

**INT. GROUP CHAT — CONTINUOUS**

[Action lines in plain text]

**bl0ng**
> [dialogue]

*[Parenthetical/direction in italics]*
```

### 8.3 Handoff Acceptance Criteria

A handoff is only valid if:

1. **Document has standard header** (title, document ID, version, date, responsible agent, status)
2. **Version is at least v1.0.0** (complete first draft; no 0.x handoffs for gate-required deliverables)
3. **No known canon violations** (producing agent self-certifies canon compliance)
4. **Cross-references are valid** (all cited documents exist and section references are accurate)
5. **Format complies with file naming conventions** (`16_ops/file_naming_conventions.md`)
6. **HANDOFF message filed with ops_agent** (no informal handoffs)

---

## 9. Quality Gates

### 9.1 Gate Structure

Each wave ends with a formal quality gate. No agent may begin Wave N+1 priority work until the Wave N gate is cleared.

```
Wave N agents produce deliverables
         │
         ▼
deliverables_agent: Completeness check
    "Are all expected Wave N deliverables at v1.0?"
         │
         ├── NO → Gap report issued → agents remediate → re-check
         │
         ▼ YES
ops_agent: Coordination check
    "Are all handoffs logged? Any unresolved blockers?"
         │
         ├── NO → Blocker resolution → re-check
         │
         ▼ YES
QC Review (formatting + cross-references)
    deliverables_agent checks:
    - Standard headers present
    - File naming compliant
    - Cross-references valid
    - No orphaned documents
         │
         ├── FAIL → Agents fix formatting → re-check
         │
         ▼ PASS
Canon Compliance Review (creative docs only)
    showrunner_agent + deliverables_agent check:
    - Character names correct
    - Episode titles correct
    - Tone alignment
    - Arc consistency
    - No unauthorized canon invention
         │
         ├── FAIL → Canon violations documented → agents revise → re-check
         │
         ▼ PASS
Principal Approval
    Showrunner (creative docs) + EP (business docs) review
         │
         ├── REVISION REQUESTED → Agents revise → re-enter at QC Review
         │
         ▼ APPROVED
GATE CLEARED — Wave N+1 may begin
    ops_agent logs gate clearance
    deliverables_agent updates tracking
    All agents receive Wave N+1 activation notice
```

### 9.2 Gate Review Assignments

| Gate | Reviewer | What They Check |
|---|---|---|
| **Wave 1 Gate** | | |
| | deliverables_agent | All 20 Wave 1 deliverables present and at v1.0 |
| | showrunner_agent | Series bible, character bible, tone guide — creative quality and completeness |
| | ops_agent | Ops docs functional; repo structure correct; no blockers |
| | legal_agent (self-review) | Legal strategy and chain of title — accuracy and completeness |
| **Wave 2 Gate** | | |
| | deliverables_agent | All 32 Wave 2 deliverables present and at v1.0 |
| | showrunner_agent | All 6 scripts reviewed; tone and canon compliance confirmed |
| | script_editor_agent | Scripts properly formatted; dialogue style guide enforced |
| | finance_agent (self-review) | Budget internally consistent; cashflow realistic |
| | ops_agent | No unresolved blockers; all handoffs logged |
| **Wave 3 Gate** | | |
| | deliverables_agent | All 50 Wave 3 deliverables present and at v1.0 |
| | showrunner_agent | Scripts at final-lock quality; all creative docs tonally consistent |
| | production_agent (self-review) | Production logistics feasible within budget and timeline |
| | legal_agent (self-review) | All templates execution-ready; no outstanding legal risks |
| | ops_agent | **GO / NO-GO decision preparation** — full status report to principals |
| | EP (principal) | Budget approved; crew attached; insurance bound |
| **Wave 4 Gate (FINAL)** | | |
| | deliverables_agent | **All 125 deliverables** at v1.0+; zero critical gaps |
| | showrunner_agent | Final creative sign-off on entire package |
| | EP (principal) | Final business sign-off |
| | ops_agent | Handoff package assembled; all logs closed |

### 9.3 Gate Failure Protocol

If a gate cannot be cleared:

1. **deliverables_agent** issues a **Gate Failure Report** listing all deficiencies
2. **ops_agent** categorizes each deficiency as:
   - **Blocking** — must be resolved before gate clears
   - **Conditional** — can proceed with documented risk acceptance
   - **Deferrable** — can be resolved in the next wave without blocking
3. **Principals decide** whether to:
   - **Hold the gate** until all blocking items are resolved
   - **Conditional pass** — advance with accepted risks documented
   - **Partial advance** — allow non-blocked agents to proceed while blocked agents remediate
4. All gate decisions are logged by ops_agent with rationale

---

## 10. Failure Modes

### 10.1 Agent Output Failures

| Failure Mode | Symptoms | Detection | Impact | Response Protocol |
|---|---|---|---|---|
| **Incomplete deliverable** | Missing sections, placeholder text, v0.x at gate time | deliverables_agent gate review | Downstream agents lack inputs; gate blocked | ops_agent issues remediation deadline (24-48 hrs); if agent cannot deliver, ops_agent reassigns or descopes |
| **Canon violation** | Wrong character names, episode titles, tone, arc references | deliverables_agent canon audit; any agent can FLAG | Inconsistency propagates to downstream docs | Immediate FLAG; deliverable returned to agent; cannot pass gate until fixed |
| **Contradictory outputs** | Two deliverables assert incompatible facts (e.g., budget says $X, production plan assumes $2X) | Cross-document review at gate; deliverables_agent or downstream agent detects | Decision paralysis; downstream agents don't know which to trust | ops_agent convenes both producing agents; resolution authority per Conflict Matrix (§6); losing doc is revised |
| **Agent non-responsive** | Agent produces no output; no status updates; misses deadlines | ops_agent monitoring; BLOCKED messages from downstream agents | Critical path delay; wave gate blocked | ops_agent escalates at 24 hrs; at 48 hrs, ops_agent may reassign deliverables to backup agent or principal |
| **Scope creep** | Agent produces more than assigned scope; invents new deliverables; expands mandate | ops_agent review; deliverables_agent tracking | Wasted effort; potential canon conflicts; schedule delay | ops_agent redirects agent to assigned scope; excess work is tagged for future evaluation (not discarded, but not canonical) |
| **Quality below threshold** | Deliverable is complete but poorly written, internally inconsistent, or unhelpful | Gate review; downstream agent rejection | Downstream agent cannot use the input effectively | Returned for revision with specific feedback; ops_agent sets revision deadline |
| **Circular dependency** | Agent A waits for Agent B who waits for Agent A | ops_agent dependency graph analysis; mutual BLOCKED messages | Both agents stalled; potential cascade | ops_agent breaks the cycle by identifying which agent can produce a provisional output; provisional work is flagged for revision |
| **Late-breaking canon change** | Showrunner amends canon mid-wave | showrunner_agent issues canon amendment notice | Multiple deliverables now inconsistent with updated canon | ops_agent assesses blast radius; issues revision requests to all affected agents; deliverables_agent re-audits at next gate |

### 10.2 Systemic Failure Modes

| Failure Mode | Description | Detection | Response |
|---|---|---|---|
| **Wave gate never clears** | Persistent deficiencies prevent gate clearance | Gate failure report shows same issues across multiple attempts | ops_agent convenes principals for scope reduction or timeline extension decision |
| **Critical path collapse** | Multiple critical-path agents fail simultaneously | ops_agent monitoring; multiple BLOCKED messages on critical path | Emergency protocol: principals intervene directly; scope may be reduced to pilot episode (Ep 1) only |
| **Canon drift** | Gradual inconsistency accumulates across many documents without a single FLAG | deliverables_agent comprehensive audit reveals widespread issues | Full canon re-alignment sprint: all agents re-read canon docs and self-audit; deliverables_agent performs exhaustive cross-reference check |
| **Agent overload** | Single agent (usually showrunner_agent) becomes bottleneck due to review requests from all agents | ops_agent queue length monitoring; SLA breaches | ops_agent implements review batching; delegates non-critical reviews to cluster leads; restricts REQUEST volume per wave |
| **Funding collapse** | Finance cannot close funding; budget assumptions invalidated | finance_agent FLAG | All agents pause non-essential work; principals convene; scope reduced to minimum viable package (pilot + pitch deck) |

### 10.3 Recovery Priorities

When resources are constrained and not everything can be saved, prioritize recovery in this order:

1. **Canon documents** (series bible, character bible, tone guide) — without these, nothing else is consistent
2. **Scripts** (all 6 episodes) — these are the primary creative asset
3. **Legal foundation** (entity, IP, chain of title) — without these, the project has no legal standing
4. **Budget + funding strategy** — without these, nothing gets produced
5. **Production plan + schedule** — without these, production can't start
6. **Pitch deck + treatment** — needed for any external engagement
7. **Everything else** — important but survivable if delayed

---

## 11. Coordination Timeline

### 11.1 Master Timeline (22 Weeks)

| Week | Wave | Key Milestones | Active Agents | Gate Events |
|---|---|---|---|---|
| **1** | W1 | Project kickoff; ops infrastructure deployed; showrunner begins canon docs | ops_agent, showrunner_agent | — |
| **2** | W1 | Series bible first draft; character bible in progress; brand_agent and legal_agent activate | ops_agent, showrunner_agent, brand_agent, legal_agent | — |
| **3** | W1 | All Wave 1 docs at v1.0; writers_room_agent activated; development_agent activated | All W1 agents + writers_room_agent, development_agent, deliverables_agent | **WAVE 1 GATE REVIEW** |
| **4** | W2 | Story breaks begin (Ep 1-2); brand system expansion; budget modeling starts | writers_room_agent, script_editor_agent (prep), brand_agent, finance_agent, legal_agent, social_content_agent | — |
| **5** | W2 | Story breaks Ep 3-4; Ep 1 script first draft; pitch deck in progress | writers_room_agent, script_editor_agent, development_agent, finance_agent | — |
| **6** | W2 | Story breaks Ep 5-6; Ep 2-3 scripts; brand system complete; operating agreement | writers_room_agent, script_editor_agent, brand_agent, legal_agent | — |
| **7** | W2 | All story breaks complete; Ep 4-5 scripts; investor deck; funding strategy | script_editor_agent, finance_agent, development_agent | — |
| **8** | W2 | All 6 scripts at v1.0; pitch deck complete; budget approved | All W2 agents, deliverables_agent | **WAVE 2 GATE REVIEW** |
| **9** | W3 | Casting begins; HR begins; marketing strategy; production planning starts | casting_agent, hr_recruiting_agent, marketing_agent, production_agent, press_agent, web_agent, social_content_agent, publicity_recruiting_agent | — |
| **10** | W3 | Auditions; crew hiring; location scouting; press kit drafting; website spec | All W3 agents | — |
| **11** | W3 | Leads cast; department heads hired; locations shortlisted; script final polish | All W3 agents, script_editor_agent | — |
| **12** | W3 | Locations locked; shooting schedule first draft; all contract templates ready | production_agent, legal_agent, hr_recruiting_agent | — |
| **13** | W3 | Shooting schedule locked; insurance bound; website ready; marketing materials complete | All W3 agents | — |
| **14** | W3 | All Wave 3 docs at v1.0; GO/NO-GO decision | All W3 agents, deliverables_agent, principals | **WAVE 3 GATE REVIEW (GO/NO-GO)** |
| **15** | W4 | Post-production planning begins; distribution strategy; bizdev activation | post_agent, bizdev_agent, marketing_agent, ops_agent | — |
| **16** | W4 | Edit workflow defined; VFX breakdown; partnership targets identified | post_agent, bizdev_agent | — |
| **17** | W4 | Sound design brief; music brief; sponsorship plan; franchise roadmap | post_agent, bizdev_agent | — |
| **18** | W4 | All post docs at v1.0; website live; social content deploying | post_agent, web_agent, social_content_agent, marketing_agent, press_agent | — |
| **19** | W4 | All bizdev docs at v1.0; remaining ops docs complete | bizdev_agent, ops_agent | — |
| **20** | W4 | deliverables_agent begins final audit; all agents in remediation mode | deliverables_agent, ALL agents as needed | — |
| **21** | W4 | Final audit complete; gap remediation; principal reviews | deliverables_agent, ops_agent, principals | **WAVE 4 GATE REVIEW (FINAL)** |
| **22** | W4 | Handoff package assembled; project package complete | ops_agent, deliverables_agent | **PACKAGE DELIVERY** |

### 11.2 Timeline Buffer & Risk Windows

| Window | Weeks | Buffer | Risk Level | Notes |
|---|---|---|---|---|
| Wave 1 | 1-3 | +1 week built-in | Low | Canon docs are the foundation; getting them right is worth extra time |
| Wave 2 | 4-8 | +1 week built-in | Medium | 6 scripts in 5 weeks is aggressive; rolling starts mitigate |
| Wave 3 | 9-14 | +2 weeks built-in | High | Most agents active simultaneously; highest coordination complexity |
| Wave 4 | 15-22 | +2 weeks built-in | Medium | Post docs + final audit; deliverables_agent needs time for thoroughness |
| **Total** | 22 weeks | 6 weeks of buffer across project | — | Actual critical-path work is ~16 weeks; 6 weeks for iteration and recovery |

### 11.3 Timeline Acceleration Options

If the project needs to compress timeline:

1. **Reduce to pilot** — Produce only Episode 1 (Don't Send That) + pitch deck + series bible. Cuts timeline to ~10 weeks.
2. **Parallel script writing** — Assign multiple writers to scripts simultaneously (requires more human resources but reduces the script bottleneck from 5 weeks to ~3 weeks).
3. **Defer Wave 4 non-essentials** — Franchise roadmap, IP extension plan, merchandise plan, and some ops docs can be deferred past the initial package deadline.
4. **Provisional gate passes** — Allow agents to proceed with documented risk rather than waiting for perfect gate clearance. Increases risk of rework but accelerates timeline.

### 11.4 Weekly Coordination Rhythm

| Day | Activity | Participants |
|---|---|---|
| **Monday** | Weekly status check — all active agents report status, blockers, ETA | ops_agent (facilitates), all active agents |
| **Wednesday** | Mid-week blocker resolution — ops_agent addresses any FLAGS or BLOCKED messages | ops_agent, affected agents |
| **Friday** | deliverables_agent weekly snapshot — updated tracking report | deliverables_agent, ops_agent |
| **Wave Gate Day** | Full gate review (see §9.1) | deliverables_agent, ops_agent, showrunner_agent, EP |

---

## Appendix A: Quick Reference — Agent Activation by Wave

| Agent | Wave 1 | Wave 2 | Wave 3 | Wave 4 |
|---|---|---|---|---|
| showrunner_agent | ACTIVE | ACTIVE | ACTIVE | ACTIVE |
| writers_room_agent | LATE START | ACTIVE | STANDBY | STANDBY |
| script_editor_agent | STANDBY | ACTIVE | ACTIVE | STANDBY |
| development_agent | LATE START | ACTIVE | — | — |
| finance_agent | STANDBY | ACTIVE | ACTIVE | ACTIVE |
| legal_agent | ACTIVE | ACTIVE | ACTIVE | ACTIVE |
| hr_recruiting_agent | STANDBY | STANDBY | ACTIVE | — |
| casting_agent | STANDBY | STANDBY | ACTIVE | — |
| production_agent | STANDBY | STANDBY | ACTIVE | — |
| post_agent | STANDBY | STANDBY | STANDBY | ACTIVE |
| marketing_agent | STANDBY | STANDBY | ACTIVE | ACTIVE |
| press_agent | STANDBY | STANDBY | ACTIVE | ACTIVE |
| brand_agent | ACTIVE | ACTIVE | — | — |
| web_agent | STANDBY | STANDBY | ACTIVE | ACTIVE |
| social_content_agent | STANDBY | LATE START | ACTIVE | ACTIVE |
| bizdev_agent | STANDBY | STANDBY | LATE START | ACTIVE |
| ops_agent | ACTIVE | ACTIVE | ACTIVE | ACTIVE |
| publicity_recruiting_agent | STANDBY | STANDBY | ACTIVE | — |
| deliverables_agent | ACTIVE | ACTIVE | ACTIVE | ACTIVE |

## Appendix B: Glossary of Orchestration Terms

| Term | Definition |
|---|---|
| **Wave** | A phase of deliverable production with defined entry criteria, active agents, and a gate review. |
| **Gate** | A checkpoint between waves where all deliverables are reviewed and approved before the next wave begins. |
| **DAG** | Directed Acyclic Graph — the dependency structure showing which agents must complete work before others can begin. |
| **Critical Path** | The longest sequential dependency chain in the project. Delays on the critical path delay the entire project. |
| **Rolling Start** | Starting downstream work on a partial input (e.g., scripting Episode 1 while Episode 2-6 story breaks are still in progress). |
| **Canon** | The authoritative set of facts about the show's world, characters, and tone. Defined in the series bible and enforced project-wide. |
| **FLAG** | A structured message reporting a problem (canon conflict, missing dependency, quality issue, etc.). |
| **HANDOFF** | A structured message confirming delivery of a completed output from one agent to another. |
| **BLOCKED** | A structured message indicating an agent cannot proceed due to a missing dependency. |
| **Blast Radius** | The set of deliverables affected by a change (e.g., a canon amendment's blast radius is all docs that reference the changed value). |
| **Provisional Output** | Work product delivered before full approval to unblock a downstream agent. Flagged for revision. |
| **Cluster** | A functional grouping of agents with related responsibilities (Creative, Business, Production, Outreach & Platform). |
| **Cluster Lead** | The agent within a cluster responsible for intra-cluster coordination (still routes through ops_agent for cross-cluster). |

---

## Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0.0 | 2026-04-10 | ops_agent | Initial creation — complete orchestration protocol with all 11 sections |

---

*This document governs how the 19 subagents of WE OUT HERE coordinate to produce the complete Season 1 project package. It is authoritative for dependency resolution, wave scheduling, communication protocol, and failure recovery. Creative canon is governed by the series bible; project structure is governed by the studio manifest; this document governs everything about how agents work together.*
