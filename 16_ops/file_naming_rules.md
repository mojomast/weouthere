# `16_ops/file_naming_rules.md`

**Purpose:** Define file naming rules that keep the WE OUT HERE package predictable, machine-searchable, QC-friendly, and safe for parallel handoffs.

**Owner/Subagent:** `ops_agent`

**Status:** Active

**Dependencies:** `00_admin/studio_manifest.md`, `00_admin/canon_lock.md`, `16_ops/repo_structure.md`

## Core Rule

Use lowercase snake_case filenames ending in `.md`.

Correct pattern:

```text
lowercase_words_separated_by_underscores.md
```

## Required Rules

1. Use lowercase only.
2. Use underscores, not spaces or hyphens, between words.
3. Use `.md` for project documents.
4. Keep names short, literal, and stable.
5. Match the manifest filename exactly when the file is a baseline deliverable.
6. Do not encode status words like `draft`, `final`, `approved`, `new`, or `v2` into filenames.
7. Do not encode dates into filenames unless the file is a log or tracker designed around date entries.
8. Do not use punctuation other than underscores and the final file extension period.

## Why These Rules Exist

- Easier grep/glob searches
- Fewer broken cross-references
- Cleaner agent handoffs
- Lower risk of duplicate near-match files
- Cleaner final archive packaging

## Allowed Patterns

### Standard documents

```text
series_bible.md
marketing_strategy.md
insurance_plan.md
```

### Episode scripts

Use the exact season/episode prefix from the manifest.

```text
s01e01_dont_send_that.md
s01e06_let_him_cook.md
```

Rules:

- `s` + two-digit season + `e` + two-digit episode
- Use the canonical episode title converted to snake_case
- Remove apostrophes and title punctuation from filenames
- Keep meaning intact

### Templates and trackers

```text
call_sheet_template.md
festival_submission_tracker.md
rights_clearance_tracker.md
```

## Disallowed Patterns

```text
File Naming Rules.md
file-naming-rules.md
fileNamingRules.md
file_naming_rules_FINAL.md
file_naming_rules_v2.md
04_brand_guide.md
brand guide.md
```

## Mapping Canon Titles To Filenames

When source titles include punctuation or display styling, convert only for the filename.

| Display Title | Correct Filename |
|---|---|
| `Don't Send That` | `s01e01_dont_send_that.md` |
| `Terms of Abuse` | `s01e02_terms_of_abuse.md` |
| `The Manic Defense` | `s01e03_the_manic_defense.md` |
| `Contain Me Daddy` | `s01e04_contain_me_daddy.md` |
| `The Superego Collapse` | `s01e05_the_superego_collapse.md` |
| `Let Him Cook()` | `s01e06_let_him_cook.md` |

Important:

- Preserve canon exactly in document content.
- Sanitize only for the filename.

## Naming For Supplemental Files

Supplemental docs should still follow the same naming scheme.

Good examples:

- `canon_lock.md`
- `risk_register.md`
- `subagent_orchestration.md`
- `missing_items_report.md`

Before creating a supplemental file, check:

- Does a baseline manifest file already cover this exact need?
- Is this file temporary, or should its contents live in an existing deliverable?
- Will another operator understand its purpose from the name alone?

## Rename Rules

Rename a file only when one of these is true:

1. It violates the naming standard.
2. It conflicts with the manifest baseline.
3. It duplicates another file under a vague or misleading name.

Before renaming:

- Update inbound and outbound references.
- Update QC trackers and missing-items reporting.
- Verify the replacement path is the new source of truth.

## QA Naming Checklist

- Is the filename all lowercase?
- Are words separated only by underscores?
- Does the file end in `.md`?
- Does the name match the manifest path if baseline?
- Is the name free of version/status clutter?
- Would a new operator understand the file purpose immediately?

## Quick Reference

| Use Case | Pattern |
|---|---|
| Standard file | `descriptive_name.md` |
| Episode script | `s01e##_episode_title.md` |
| Tracker | `subject_tracker.md` |
| Template | `subject_template.md` |
| Plan | `subject_plan.md` |
| Strategy | `subject_strategy.md` |

## Next Related Files

- `16_ops/repo_structure.md`
- `16_ops/qa_checklists.md`
- `16_ops/approval_workflow.md`
- `00_admin/studio_manifest.md`
