# 13_post/editorial_workflow.md

## Purpose

Define the end-to-end editorial workflow for **WE OUT HERE**, with emphasis on a hybrid capture pipeline that combines live-action footage, native screen captures, and graphics-driven interface storytelling. This document is intended to be usable by a post supervisor, editor, assistant editor, VFX producer, and finishing vendor as the operational baseline for picture post.

## Owner/Subagent

post_agent

## Status

Draft v1 - editorial workflow baseline for post prep, turnover, and vendor alignment

## Dependencies

- `00_admin/canon_lock.md`
- `00_admin/assumptions.md`
- Locked script pages, script revisions, and scene numbers for all episodes
- Production sound reports, camera reports, DIT notes, and screen-capture logs
- Agreed acquisition formats for live action and native screen capture
- Show LUT / color pipeline decisions and editorial proxy specs
- UI build package, graphics source files, fonts, and usage permissions
- Final naming convention for episodes, scenes, shots, graphics, and deliverables
- Frame.io or equivalent review platform with version-control discipline

## Workflow Goals

- Protect story clarity across live action, desktop realism, and surreal inserts
- Keep screen-based storytelling editorially flexible without forcing rebuilds late in post
- Separate offline efficiency from finishing accuracy so the online conforms cleanly
- Ensure every VFX, graphics, and sound turnover is traceable to locked editorial decisions
- Preserve festival, streamer, and digital-release delivery options without rebuilding the season later

## Editorial Model

WE OUT HERE should be cut as a hybrid show, not as a standard single-cam show with graphics laid on top at the end.

- Offline editorial must treat the screen language as story-critical picture, not placeholder decoration
- Native screen recordings should enter editorial as first-class media with timecode, naming, and version control
- UI composites that affect timing, readability, and joke rhythm must be temped early enough for editorial review
- Surreal inserts may begin with boards, previs, or rough comps, but must be editorially blocked before picture lock
- The show should maintain one authoritative cut per episode, with linked bins for alt chat beats, alt inserts, and alt graphics states

## Roles And Responsibilities

### Post Supervisor

- Own master post schedule, turnovers, vendor bookings, and delivery calendar
- Approve naming conventions, folder structure, and versioning discipline
- Coordinate editorial, VFX, sound, music, color, captions, and final QC
- Maintain issue log for late script changes, reshoots, missing assets, and delivery risks

### Editor

- Build and maintain the creative cut
- Flag scenes where screen readability, message timing, or UI density are undermining story clarity
- Mark candidate VFX shots, split-screen events, text replacements, and screen rebuild needs during the cut
- Identify picture-lock risks before turnover to sound, music, and finishing

### Assistant Editor

- Ingest, sync, organize, script-sync, and group all live-action and screen-capture media
- Maintain project hygiene: bins, metadata, turnovers, exports, cue sheets, and change notes
- Generate temp comps where approved, prep turnovers, and verify pull lists
- Track all versions of graphics, screen recordings, and VFX shots against the active cut

### Graphics / UI Team

- Deliver production-ready interface assets and update packs tied to editorial notes
- Supply editable source files, exported elements, font packages, and version history
- Distinguish between practical captures, rebuild-required shots, and full-screen graphic sequences

### VFX Vendor

- Handle screen replacements, split comps, cleanup, surreal inserts, and any shot requiring rebuilt interface animation
- Conform to editorial timing and safe-area readability rules established during offline
- Return review media and final renders using agreed shot IDs and color pipeline

## Source Media Categories

The assistant editor should split all incoming material into the following media groups at ingest:

1. Live-action camera original
2. Production sound WAV/polywav
3. Native screen capture original
4. Practical playback / insert plates
5. UI source exports and graphic element renders
6. Stock / archival / licensed media
7. Temp music and reference cues
8. VFX review renders and finals

Each media class should have its own ingest preset, naming rule, and QC checklist.

## Ingest And Project Organization

### Folder Logic

Recommended top-level structure per episode:

```text
S01E0X/
  01_camera_original/
  02_sound_original/
  03_screen_capture_original/
  04_proxies/
  05_project_files/
  06_graphics_ui/
  07_vfx_turnovers/
  08_sound_turnovers/
  09_music_turnovers/
  10_exports_review/
  11_exports_lock/
  12_qc_and_delivery/
```

### Bin Logic

- `00_ADMIN`
- `01_STRINGOUTS`
- `02_SCENES`
- `03_SCREENLIFE`
- `04_ARCHIVE_STOCK`
- `05_TEMP_GFX`
- `06_VFX`
- `07_MUSIC`
- `08_OUTPUTS`

### Naming Rules

Use deterministic names that survive across departments.

- Episode: `WOH_S01E0X`
- Scene sequence: `WOH_S01E0X_SC###`
- VFX shot: `WOH_10X_####`
- Screen capture clip: `WOH_S01E0X_SC###_SCR_A##`
- Graphics version: `WOH_UI_[sequence]_[asset]_v###`
- Cut exports: `WOH_S01E0X_OFFLINE_v###_YYYYMMDD`

Do not use spaces, vague labels like `final_final`, or vendor-specific aliases as master names.

## Editorial Timeline By Episode

Recommended cadence per episode:

1. Editor's assembly: 5 business days after all principal footage and scripted screen captures are ingested
2. Director/showrunner cut: 5-7 business days
3. Producer/networking review cut if applicable: 3-5 business days
4. Fine cut: 5 business days
5. VFX and graphics spotting review: concurrent with fine cut
6. Picture lock: only after screen readability, insert timing, and structural notes are resolved

Because the show is graphics-heavy, picture lock should not be called until:

- all critical chat beats are represented accurately in the cut
- any screen replacement affecting timing is temped or boarded precisely
- all split comps affecting performance rhythm are identified
- text readability has been checked on both desktop and smaller review monitors

## Hybrid Capture Rules

### Native Screen Capture

- Capture at or above final raster wherever possible
- Preserve native frame rate and record capture settings in logs
- Record operator notes for cursor moves, typing cadence, scroll timing, and alt takes
- Treat screen capture as coverage; multiple timing passes are expected

### Practical Device Content

- If a phone or laptop screen is photographed in camera, editorial must track whether the final image will remain practical, receive cleanup, or be fully replaced
- Shots with moire, refresh conflict, clipped highlights, or legal/trade-dress concerns should be flagged for likely replacement immediately

### Graphics-Driven Scenes

- Scenes built primarily from chat, browser, or desktop action need a beat sheet before edit assembly
- The beat sheet should log: message order, reaction timing, edits/deletes, notification cues, and any hidden off-screen actions needed for story comprehension

## Temp Graphics Policy

Temp graphics are required in offline wherever message timing, UI density, or comedic clarity depend on what is seen on screen.

- Temp graphics may be rough in finish quality
- Temp graphics may not be vague in timing or content
- Any line of on-screen text that drives plot, joke, or emotional meaning must be represented accurately enough for review
- The AE should maintain a temp-to-final asset map so nothing is lost during online

## VFX And Graphics Spotting

Hold formal spotting sessions at fine cut with editor, post supervisor, VFX lead, graphics lead, and sound lead.

For each shot, classify as one of the following:

- No VFX
- Cleanup only
- Screen replacement
- 2D comp
- UI rebuild / motion graphics
- Surreal insert / heavy comp
- Split-screen or multi-layer composite

Every flagged shot should receive:

- shot ID
- brief description
- source plate reference
- frame range from current cut
- temp reference export
- final intended behavior
- dependency note if tied to sound or music timing

## Turnover Requirements

### To VFX

- Locked or near-locked reference export with burn-ins
- EDL/XML/AAF as required by vendor
- shot list with frame handles
- source pulls or access path to camera original / capture original
- temp comps and UI references
- LUT / color notes
- text and legal clearances for any on-screen branded material

### To Sound

- Locked AAF from picture editorial
- guide QuickTime with source TC and 2-pop
- change notes if turnover is post-temp lock
- line-by-line note of intentional UI sounds, message timings, and silence beats
- list of practical playback that should not be rebuilt in sound

### To Music

- current locked cut with burn-ins
- scene timing notes for start/stop points
- list of source cues, temp licenses, and must-clear references
- cue brief for montage, chat escalation, dread build, and surreal inserts

## Picture Lock Criteria

Picture is not locked until the following are true:

- Scene order and duration are approved
- All editorial trims affecting dialogue sync or score timing are complete
- All story-critical screen text has approved wording
- UI timing and insert cadence are approved in representative form
- VFX scope is frozen except for execution details
- Sound, music, captions, and finishing teams have been notified formally

Late editorial changes after picture lock should require a documented change order from post supervision because they ripple across VFX, mix, score, captions, and delivery.

## Review And Notes Discipline

- Use one review platform with frame-accurate comments
- Notes should be logged by department and severity: creative, technical, legal, readability, continuity
- Editorial exports should include version number, runtime, date, and watermark state
- Only one cut per episode should be designated as current review cut at any time

## Editorial Risks Specific To WE OUT HERE

- Chat scenes becoming unreadable when cut for pace instead of comprehension
- Temp graphics understating final density and creating false confidence at review
- Native screen captures arriving without sufficient alt timing coverage
- Surreal inserts staying conceptual too long and then destabilizing lock
- Late legal notes on interface similarity or visible third-party marks forcing replacements

## Operational Recommendations

- Budget at least one additional AE-intensive pass per episode for screen and graphics continuity
- Run a pre-lock readability review on calibrated desktop and consumer laptop displays
- Maintain a live turnover matrix that tracks every shot across editorial, VFX, sound, and finishing
- Reserve online time early; hybrid shows often slip if conform bookings assume a standard comedy workload

## Next related files

- `13_post/finishing_workflow.md`
- `13_post/sound_post_plan.md`
- `13_post/music_strategy.md`
- `13_post/captions_and_accessibility.md`
- `13_post/deliverables_spec.md`
