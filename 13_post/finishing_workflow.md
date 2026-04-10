# 13_post/finishing_workflow.md

## Purpose

Define the online, color, VFX-finaling, QC, and mastering workflow for **WE OUT HERE** after picture lock. This document is written so a finishing producer, online editor, colorist, and post supervisor can align on conform method, review gates, and final master preparation for festivals, streamers, and digital release.

## Owner/Subagent

post_agent

## Status

Draft v1 - finishing workflow baseline for online conform, grade, QC, and final master creation

## Dependencies

- `13_post/editorial_workflow.md`
- Locked picture AAF/XML/EDL and approved reference exports
- Final VFX shot list with delivery dates and handle policy
- Final graphics/UI source package and approved type/render rules
- Color pipeline agreement: camera color science, working space, LUTs, and deliverable color targets
- Final sound mix schedule and expected turnover dates
- Captions/subtitles schedule and final text approval process
- Distributor, festival, and platform spec targets from `13_post/deliverables_spec.md`

## Finishing Objectives

- Rebuild the locked episode accurately from source-resolution media
- Preserve the designed relationship between live action, screen capture, and interface graphics
- Deliver a stable, legal, platform-ready master without last-minute spec surprises
- Generate a master package that can branch efficiently into festival, streamer, and direct digital outputs

## Online Strategy

WE OUT HERE should be finished from a single hero conform per episode, then versioned outward.

- Do not create separate creative finishes for festival and platform unless required by a buyer
- Conform from locked editorial timelines only
- Replace all temp graphics, temp screen comps, and offline-only composites with final approved elements
- Validate every screen insert at 100% scale before grade sign-off

## Conform Inputs

Required incoming materials for each episode:

- locked reference QuickTime with visible timecode and audio guide
- AAF/XML from editorial
- camera-original relink path or pull list
- native screen-capture masters
- VFX finals with alpha where required
- final graphics renders and source package
- mix review file and final stems schedule
- caption reference text for spot-checking burned visible text against accessibility outputs

## Conform Checklist

The online editor should verify the following before the conform is considered complete:

1. Runtime matches locked reference exactly
2. Head sync, 2-pop, and tail sync are correct
3. All shots are relinked to correct source resolution and frame rate
4. Reframing, speed effects, resizes, and split comps match offline intent
5. All screen replacements use approved final text and graphics versions
6. No temp watermarks, offline placeholders, or old VFX versions remain in timeline
7. Sequence color management is set correctly for the chosen finishing pipeline

## Graphics And Screen Integration Standards

- UI text must remain readable without looking oversized or artificial within the shot
- Notification elements, cursors, typing indicators, and chat reactions must preserve editorial timing exactly
- If screen content is shown within live-action devices, finishing must check for edge treatment, reflections, perspective, glow, and exposure integration
- If any interface element risks legal confusion with a real platform, legal-approved differentiation notes must be applied before master sign-off

## Color Workflow

### General Approach

- Grade live action, native screen material, and surreal inserts as intentionally different image classes inside one coherent show language
- Do not normalize native screens until they look like generic TV overlays; preserve the desktop-realism feel
- Balance readability against mood in dark scenes and dense interfaces

### Recommended Grading Passes

1. Technical balance pass
2. Creative look pass
3. Screen integration pass
4. Scene-to-scene continuity pass
5. Deliverable trim pass if required for SDR/HDR branching

### Specific Concerns

- White UI panels and message bubbles can spike perceived brightness and need separate attention
- Blue-heavy chat interfaces and night interiors should be checked for compression robustness on digital platforms
- Surreal inserts may warrant controlled departures in contrast, saturation, or texture, but should not break episode continuity by accident

## VFX Finaling

- All final VFX should be QC'd before insertion into hero timeline
- Any shot delivered after color starts must be tracked as a late insert and checked against neighboring graded shots
- Do not assume final VFX text is correct because motion looks correct; verify wording, punctuation, and timing
- Shot version history must remain visible in the turnover log through final delivery

## Finishing Schedule Gates

Recommended gate sequence per episode:

1. Online conform complete
2. VFX finals inserted and checked
3. First color pass complete
4. Internal finishing review
5. Final mix married to picture
6. Caption/subtitle sync check against final master
7. Technical QC pass
8. Producer/showrunner final approval
9. Distribution export and checksum generation

## Audio Marriage And Layback

- Lay back final full mix only after confirming final picture runtime and frame boundaries
- Also receive and archive split stems for future versioning
- Verify sync through dialogue-heavy scenes, notification-heavy scenes, and surreal insert transitions
- If there are multiple deliverable variants, all exports should be traced back to the same approved audio layback source unless a platform spec requires a distinct mix version

## Quality Control

### Internal QC

- dropped frames
- flash frames
- black holes / missing media
- mismatched screen replacements
- dead pixels or comp edges
- spelling, punctuation, and continuity errors in visible on-screen text
- subtitle/caption sync drift
- audio pops, clipped transients, or unexpected silence

### External / Final QC

- file wrapper and codec validation
- channel assignment validation
- loudness / true peak validation
- textless element verification where required
- legal safe-area and title safe review for platform variants
- PSE / flash-pattern review if requested by distributor or broadcaster

## Mastering Policy

Create one archival-quality picture master and derive downstream versions from it.

Recommended hero assets per episode:

- ProRes 4444 or ProRes 422 HQ picture master, depending on graphics/VFX requirements
- final texted master
- textless elements package where feasible
- full mix plus stems
- approved captions and subtitles
- signed-off QC report

If a streamer later requests IMF or additional package variants, build from the approved hero master and conformed source timeline rather than recutting from offline media.

## Versioning Strategy

Plan for the following possible versions even if only one is delivered initially:

- festival exhibition master
- buyer screening file
- domestic digital release master
- streamer textless / M&E variant
- trailer and promo cutdowns derived from approved finals

Version tracking should distinguish between editorially different versions and purely technical encodes. Most downstream files should be encode variants, not new masters.

## Approval Chain

- Online editor signs off conform accuracy
- Colorist and post supervisor sign off image continuity and legal readability
- Sound team signs off layback and channel mapping
- Showrunner / lead producer signs off creative final
- Post supervisor signs off delivery completeness against the spec sheet

## Known Finishing Risks

- Screen text approved in offline but changed informally in graphics finals
- Grade making interface text unreadable on lower-brightness displays
- Mixed frame rates between native captures and live-action timeline causing cadence issues
- Buyer requests arriving after wrap that require M&E, textless, or alternate masters not budgeted early

## Vendor Notes

- Finishing vendor should be briefed that this is not a standard comedy conform; screen-image behavior is narrative material
- Any automatic cleanup, sharpening, noise treatment, or motion interpolation on screen-capture sources should be disabled unless specifically approved
- Vendor should allocate review time for text detail and UI timing, not only broad image polish

## Next related files

- `13_post/editorial_workflow.md`
- `13_post/deliverables_spec.md`
- `13_post/captions_and_accessibility.md`
- `13_post/sound_post_plan.md`
- `13_post/music_strategy.md`
