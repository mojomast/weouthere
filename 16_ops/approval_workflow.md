# `16_ops/approval_workflow.md`

**Purpose:** Define the practical review and approval path for WE OUT HERE deliverables so work can move cleanly from draft to QC to sign-off to handoff without losing ownership or state.

**Owner/Subagent:** `ops_agent`

**Status:** Active

**Dependencies:** `00_admin/studio_manifest.md`, `16_ops/qa_checklists.md`, `16_ops/subagent_orchestration.md`, `00_admin/canon_lock.md`

## Approval Model

WE OUT HERE uses a simple rule: the producing agent owns the draft, QA checks the package quality, continuity/canon review checks creative truth, and the designated approver decides whether the file is accepted.

Do not skip stages just because a file looks good. The point is resumable operations, not heroics.

## Status Ladder

Use these statuses consistently inside documents and tracking notes.

| Status | Meaning |
|---|---|
| Draft | In progress; not ready for formal review |
| Review | Producing owner believes the file is complete enough for checks |
| Revision Requested | Reviewed, but changes are required before approval |
| Approved | Accepted for current wave/package state |
| Final | Locked for handoff or final package release |

## Standard Workflow

1. Producing owner completes the file to practical completeness.
2. Producing owner verifies naming, placement, dependencies, and obvious canon issues.
3. File is marked `Review`.
4. `qc_agent` runs the applicable checklist from `16_ops/qa_checklists.md`.
5. `continuity_agent` reviews canon-sensitive files.
6. Primary approver reviews content suitability.
7. Outcome is one of:
   - `Approved`
   - `Revision Requested`
   - `Final` if the file is now locked for handoff

## Approval Roles By File Type

| File Type | Primary Approver | Required Secondary Review |
|---|---|---|
| Canon and development docs | Showrunner | `continuity_agent`, `qc_agent` |
| Scripts | Showrunner / Head Writer | `continuity_agent`, `qc_agent` |
| Brand docs | Showrunner | `qc_agent` |
| Marketing, press, website | EP or delegated business lead | `qc_agent`, `continuity_agent` if creative claims appear |
| Finance docs | EP | `qc_agent` |
| Legal docs | EP + legal review | `qc_agent` |
| Production docs | EP / production lead | `qc_agent` |
| Post docs | Showrunner + post lead | `qc_agent` |
| Distribution and biz dev | EP | `qc_agent` |
| Admin and ops docs | `ops_agent` | `qc_agent` |

## Revision Rules

- If QA fails, the file returns to the owner with explicit findings.
- If canon fails, the file cannot be approved until corrected.
- If content is substantially incomplete, do not mark it approved with caveats. Keep it in revision.
- Minor wording issues can be approved with notes only if they do not weaken handoff clarity.

## Handoff-Ready Approval Criteria

A file should not reach `Approved` unless:

- the next operator could use it immediately
- dependencies are clear
- no hidden assumptions are required to interpret it
- the file is in the correct location and name
- the file is complete enough for its wave purpose

## Fast-Track Rules

Use only when schedule pressure is real.

- Ops documents may receive provisional operational approval from `ops_agent`.
- Creative documents may receive provisional approval only from the showrunner.
- Provisional approval must be visibly noted and revisited within 5 business days.
- Provisional approval is not the same as final lock.

## Practical Review Queue Order

Review in this order when multiple files compete for attention:

1. Critical-path blockers
2. Wave gate files
3. External-facing files
4. Supporting files
5. Supplemental files

## Review Output Template

```text
APPROVAL RESULT
File: [relative path]
Current Status: Review
Reviewers: [names or agents]
Decision: Approved / Revision Requested / Final
Reasons:
- [short reason]
- [short reason]
Next owner:
- [agent or approver]
```

## Failure Conditions

Do not approve when any of these are true:

- wrong path or wrong filename
- obvious contradiction with manifest or canon
- material missing sections
- unclear ownership
- unusable dependencies list
- duplicate file conflict exists elsewhere in package

## Final Handoff Rule

At final package handoff, `Approved` is not enough for cornerstone files. Critical package files should be either `Final` or explicitly tracked as approved-but-still-open in the missing items report.

## Next Related Files

- `16_ops/qa_checklists.md`
- `16_ops/missing_items_report.md`
- `16_ops/subagent_orchestration.md`
- `00_admin/studio_manifest.md`
