# 10_finance/cash_flow_schedule.md

## Purpose

Model the timing of cash needs for `WE OUT HERE` so financing is structured around when money must actually hit the bank, not just around total budget commitments.

## Owner/Subagent

finance_agent

## Status

Draft v1 - working cash flow model for financing close planning and bridge-facility sizing

## Dependencies

- `00_admin/assumptions.md`
- `00_admin/risk_register.md`
- `10_finance/top_sheet_budget.md`
- `10_finance/episodic_budget.md`
- `10_finance/financing_strategy.md`
- `11_legal/entity_structure.md`
- `12_production/shooting_schedule.md`
- `13_post/deliverables_spec.md`

## Content

### Core Assumptions

- Control budget: **`$2,250,000`**
- Development budget already raised or separately covered: see `10_finance/dev_budget.md`
- Target production start: `Q3 2026`
- Principal photography duration: `5-6 weeks` including buffer and pickup days
- Post duration: `4-5 months` overlapping by episode
- Delivery target: `Q1-Q2 2027`

### Cash Flow Principle

The project will not spend money in a straight line. It will spend heavily during prep and principal, then continue with a meaningful but lower post tail. That means financing must prioritize timing certainty, not just headline coverage.

### Monthly Outflow Schedule

| Period | Phase | Cash Outflow | % of Total | Notes |
| --- | --- | ---: | ---: | --- |
| May 2026 | Final development / packaging | $90,000 | 4.0% | Legal, packaging close costs, final prep hires, deposits |
| Jun 2026 | Pre-production month 1 | $225,000 | 10.0% | Key hires, casting, design, tech tests, location holds |
| Jul 2026 | Pre-production month 2 | $315,000 | 14.0% | Set build/dressing, rentals, payroll setup, insurance, final prep |
| Aug 2026 | Principal photography block 1 | $540,000 | 24.0% | Largest cash burn month |
| Sep 2026 | Principal photography block 2 / wrap | $405,000 | 18.0% | Remaining production labor, rentals, wrap, turnover |
| Oct 2026 | Editorial / post start | $180,000 | 8.0% | Editor, AE, turnover, sound prep, graphics continuation |
| Nov 2026 | Post month 2 | $157,500 | 7.0% | Edit, VFX/UI, music, post producer |
| Dec 2026 | Post month 3 | $135,000 | 6.0% | Sound, color prep, graphics, fixes |
| Jan 2027 | Final post / delivery prep | $112,500 | 5.0% | Mix, color, online, captions, legal deliverables |
| Feb 2027 | Delivery / festival submissions | $67,500 | 3.0% | Masters, QC, submissions, launch materials |
| Mar 2027 | Held contingency release or closeout | $22,500 | 1.0% | Only if required; otherwise remains unused |
| **Total** |  | **$2,250,000** | **100.0%** |  |

### Cumulative Spend Curve

| End of Period | Cumulative Spend | % of Total |
| --- | ---: | ---: |
| May 2026 | $90,000 | 4.0% |
| Jun 2026 | $315,000 | 14.0% |
| Jul 2026 | $630,000 | 28.0% |
| Aug 2026 | $1,170,000 | 52.0% |
| Sep 2026 | $1,575,000 | 70.0% |
| Oct 2026 | $1,755,000 | 78.0% |
| Nov 2026 | $1,912,500 | 85.0% |
| Dec 2026 | $2,047,500 | 91.0% |
| Jan 2027 | $2,160,000 | 96.0% |
| Feb 2027 | $2,227,500 | 99.0% |
| Mar 2027 | $2,250,000 | 100.0% |

### Recommended Funding Timing

| Source | Target Amount | Target Availability | Cash Use |
| --- | ---: | --- | --- |
| Equity first close | $750,000 | By Jun 2026 | Unlock prep and vendor commitments |
| Equity second close | $450,000 | By Jul 2026 | Protect principal photography liquidity |
| Tax credit loan / advance | $300,000 | By Aug 2026 | Support production burn pending tax-credit monetization |
| Soft money / grants / sponsorship | $150,000 | Jun-Sep 2026 | Offset prep and post costs |
| Distribution MG or licensed advance | $300,000-$400,000 | Sep 2026-Jan 2027 | Reduce backend pressure and repay bridge exposure |
| Tax credit monetization remainder | $60,000-$120,000 | After qualified-spend audit | Post-delivery recovery |

### Bridge Requirement

Even with a well-structured financing stack, `WE OUT HERE` should assume a **peak bridge need of approximately `$250,000-$400,000`**.

Reason:

- Production cash burn peaks before tax credits are monetized.
- Any MG or acquisition proceeds likely arrive after a material portion of production spend.
- Vendor terms help, but payroll, rentals, insurance, and location deposits remain time-sensitive.

### Minimum Cash-on-Hand Policy

- Maintain at least `4 weeks` of forecasted burn in accessible cash through the end of principal photography.
- Do not enter principal with less than `85%` of the production-period cash requirements either funded or contractually committed.
- Hold contingency as true reserve until picture lock unless a principal-approved exception is documented.

### Payment Discipline

| Spend Type | Preferred Terms | Finance Rule |
| --- | --- | --- |
| Cast and crew payroll | Weekly / union-compliant | Never finance with informal founder float |
| Equipment and locations | 50% deposit / balance on use | Tie deposits to signed schedule lock |
| Post vendors | Milestone-based | Match milestone invoices to actual turnover and approvals |
| Legal and accounting | Monthly or milestone | Keep current; late payment risks deal friction |
| Festival and delivery costs | As incurred | Budget small but do not ignore |

### Cash Flow Risks

The main cash risks remain the ones already identified in `00_admin/risk_register.md`:

- `R-FIN-001` Funding gap
- `R-FIN-003` Cash flow crunch
- `R-FIN-004` Tax incentive delay or failure

This schedule is designed to reduce those risks by forcing financing close deadlines before prep and principal.

### Working Recommendation

Greenlight should require:

- at least **`$1.2M`** of firmly committed equity/soft money before full prep
- signed path to tax incentive financing before principal
- bridge facility sized to at least **`$300,000`**
- no dependence on speculative festival revenue to finish post

## Next related files

- `10_finance/financing_strategy.md`
- `10_finance/recoupment_waterfall.md`
- `10_finance/scenario_models.md`
- `11_legal/entity_structure.md`
- `12_production/production_plan.md`
