# `16_ops/qa_checklists.md`

**Purpose:** Provide practical QA checklists for document review, wave gates, and final handoff so the package can be checked consistently by any operator or subagent.

**Owner/Subagent:** `qc_agent` with `ops_agent` maintenance

**Status:** Active

**Dependencies:** `00_admin/studio_manifest.md`, `00_admin/canon_lock.md`, `16_ops/repo_structure.md`, `16_ops/file_naming_rules.md`, `16_ops/approval_workflow.md`

## How To Use This File

Use these checklists in three places:

- before a file is marked ready for review
- at each wave gate
- before final partner or principal handoff

If a check fails, record the failure in the owning file or review log and return it for revision. Do not silently fix substantive issues during approval review.

## 1. Single-File QA Checklist

Run this on every deliverable.

- Correct file path and folder
- Filename follows `16_ops/file_naming_rules.md`
- H1 or document title matches the intended file purpose
- Purpose is clear
- Owner/subagent is clear
- Status is explicit
- Dependencies are listed and real
- Cross-references point to existing files
- Content is complete enough to support handoff
- No placeholder text like `TBD`, `lorem ipsum`, `coming soon`, or empty headings without explanation
- No contradictory canon references
- No obvious copy/paste artifacts from another project
- No duplicate sections or accidental template leftovers

## 2. Canon-Sensitive QA Checklist

Run this on development, script, brand, marketing, press, website, casting, and any ops file that names creative facts.

- Show title is `WE OUT HERE` when used as a title
- Character handles are exactly `twinkle.puss`, `bl0ng`, `ariane.emory`
- `twinkle.puss` is male and uses he/him pronouns in narrative, casting, and script-facing materials
- Episode count remains 6 x 30 minutes
- Episode titles match canon when referenced in body text
- Episode 6 title includes `()` in display text
- The platform is named `Backchannel` in canon-facing usage and is never literally Discord
- High-authority canon references do not drift from package canon on locked facts like character identity or platform naming
- Tone stays psychologically sharp, humane, darkly funny
- No invented fourth main character
- No moralizing summary that breaks the show's tonal frame

## 3. Operational QA Checklist

Run this on admin and ops files.

- File explains how another operator can resume work
- Dependencies are actionable, not vague
- Sequence vs parallel work is clear where relevant
- Approval or escalation path is named where relevant
- Checklist steps are concrete enough to execute
- Document helps reduce ambiguity rather than restate the manifest loosely

## 4. Wave Gate Checklist

Use at the end of each wave.

### Wave 1 Gate

- Manifest and core admin controls exist
- Canon-adjacent development files needed for downstream work exist
- File naming rules exist and are in force
- Ops guidance exists for coordination and QA
- Any missing Wave 1 baseline file is explicitly flagged
- Known supplemental files are mapped against baseline deliverables where needed

### Wave 2 Gate

- Script package exists at the expected manifest paths
- Story breaks and room support docs exist
- Brand identity docs exist at baseline paths
- Core finance docs exist
- Core legal docs exist
- Any absent critical-path file is flagged as gate-blocking

### Wave 3 Gate

- Marketing, press, website, casting, HR, finance remainder, legal remainder, and production docs exist
- Critical pre-production docs are present at manifest paths
- Package can support a go/no-go readiness read without guesswork
- Missing items are categorized by severity, not just listed flatly

### Wave 4 Final Gate

- All baseline deliverables exist or have approved substitution notes
- Final ops docs exist
- Distribution, post, and business development files exist
- Handoff package is internally navigable
- No critical gap remains unowned

## 5. Final Handoff Checklist

- All intended package folders `00_admin` through `16_ops` are present
- All baseline deliverables are either present or explicitly listed as missing
- Missing items report is current
- Approval workflow is documented and usable
- QA checklist file itself is current
- File names are standardized
- Canon-sensitive references were spot-checked
- Department owners are clear
- A new operator could tell what still needs to be written next

## 6. Defect Severity Scale

| Severity | Meaning | Action |
|---|---|---|
| Critical | Blocks downstream work, approval, or handoff | Fix before review can pass |
| Major | High confusion or contradiction risk | Fix before approval |
| Minor | Surface issue, formatting issue, weak clarity | Fix in same revision cycle |
| Note | Improvement suggestion only | Optional unless owner requests |

## 7. QA Output Format

Use this format when logging QA results:

```text
QA RESULT
File: [relative path]
Reviewer: [agent]
Status: Pass / Pass with notes / Fail
Findings:
- [severity] [issue]
- [severity] [issue]
Required action:
- [next step]
```

## 8. Minimum Practical Standard For Approval

A file is approval-ready when it is:

- correctly placed
- correctly named
- materially complete
- internally coherent
- consistent with canon and manifest
- usable by the next owner without verbal explanation

## Next Related Files

- `16_ops/approval_workflow.md`
- `16_ops/missing_items_report.md`
- `16_ops/file_naming_rules.md`
- `16_ops/repo_structure.md`
