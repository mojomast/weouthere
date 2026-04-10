# 13_post/deliverables_spec.md

## Purpose

Define the master deliverables package for **WE OUT HERE** across festival submission/screening, streamer acquisition, and direct digital release scenarios. This document is not a substitute for buyer specs, but it establishes the baseline package the post team should build toward so the series is commercially credible and does not require avoidable rebuilds.

## Owner/Subagent

post_agent

## Status

Draft v1 - baseline delivery specification for mastering, versioning, and handoff readiness

## Dependencies

- `13_post/editorial_workflow.md`
- `13_post/finishing_workflow.md`
- `13_post/sound_post_plan.md`
- `13_post/music_strategy.md`
- `13_post/captions_and_accessibility.md`
- final buyer, festival, or aggregator specification sheets when available
- legal clearance package, music licenses, and chain-of-title support documents
- final approved QC reports and checksum workflow

## Delivery Philosophy

- Build one robust master package that can service multiple downstream paths
- Preserve the option for festival exhibition, buyer screening, streamer onboarding, and direct digital exploitation from the same approved season finish
- Separate hero masters from transcode derivatives and keep all file lineage documented

## Core Per-Episode Deliverables

Every completed episode should have the following baseline package.

### Picture Masters

- texted picture master, high-quality mezzanine codec
- textless elements package where feasible for titles, credits, and replaceable graphics layers
- buyer screening file, high-quality review encode
- digital-distribution encode as needed for internal review or direct release prep

### Audio Masters

- final full mix stereo
- final full mix 5.1 if available / required
- split stems: DX, FX, Foley, UI/design, MX
- M&E mix if streamer or international path remains active

### Accessibility Files

- English closed captions
- English subtitles / SDH variant if required
- audio description files and scripts if commissioned

### Documentation

- final as-run runtime sheet
- cue sheet
- final QC report
- caption/subtitle QC report
- music license summary
- VFX final shot manifest
- checksum manifest for all delivery files

## Recommended Technical Baseline

Use this as the planning target until a buyer issues tighter specs.

### Image

- Final raster: plan around full HD minimum, with finishing path that can support buyer-required UHD uprez/versioning only if justified early
- Frame rate: maintain consistent project master frame rate across season
- Color: SDR Rec.709 as baseline unless a commissioned buyer requires an HDR path
- Codec for hero master: ProRes 422 HQ minimum, or ProRes 4444 when alpha-bearing or graphics-intensive archival value justifies it

### Audio

- 24-bit PCM WAV for final audio deliverables
- consistent sample rate across all final assets
- loudness and true-peak validated against likely streamer/digital targets before release

### Captions/Subtitles

- sidecar caption formats prepared according to distributor needs
- preserve frame-rate consistency between master and caption exports

## Festival Package

Plan for a festival-ready package that can be assembled quickly:

- high-quality screening file
- backup screening file in alternate approved wrapper if requested
- captions enabled or sidecar per festival instructions
- synopsis, runtime, episode metadata, and screening notes

If a DCP is requested for premiere screenings, treat it as a derived exhibition asset and schedule dedicated QC. Do not assume a last-minute automatic DCP from a review file is acceptable.

## Streamer / Buyer Package

Common buyer expectations to anticipate even before formal acquisition:

- high-quality texted master
- textless elements or textless master components
- full audio stem package
- M&E, especially if international or localization options matter
- captions/subtitles passing validation
- music cue sheet and license support
- legal documents supporting clean chain of title and clearance

Some buyers may also require:

- IMF or house-wrapped packages
- trailer and promo derivatives
- key art and metadata bundles
- audio description
- PSE report or additional compliance documentation

## Direct Digital Release Package

If the season is self-released or aggregator-delivered, prepare:

- platform-approved mezzanine master
- final consumer encodes in required wrappers/bitrates
- stereo mix baseline, plus 5.1 where supported
- closed captions in accepted sidecar format
- poster art, episode stills, synopsis, ratings/advisory metadata, and credits

Direct-release QC should prioritize how the show survives consumer devices, compressed playback, and caption-overlay interactions.

## Textless Strategy

For WE OUT HERE, fully textless masters may not be realistic for every shot because on-screen interface text is often the story. Instead, define textless deliverables pragmatically:

- clean opening/end titles where possible
- layered graphics elements or rebuild-ready packages for replaceable titles/cards
- textless background plates for repeatable interface shells where available
- documentation of non-removable story text embedded in final image

This should be discussed with buyers early so no one assumes a conventional textless workflow applies to every screen-heavy sequence.

## File Naming And Version Control

Recommended pattern:

- `WOH_S01E0X_TX_MASTER_v###`
- `WOH_S01E0X_STEREO_PM_v###`
- `WOH_S01E0X_51_PM_v###`
- `WOH_S01E0X_CC_EN_v###`
- `WOH_S01E0X_MNE_v###`
- `WOH_S01E0X_QC_REPORT_v###`

Increment versions only when file content changes. Re-delivery of the same file should not create false new masters.

## Delivery QC Gate

No episode should ship until the post supervisor verifies:

1. picture and audio versions match approved final
2. captions/subtitles match the exact release runtime
3. all required documents are present
4. checksums generated and archived
5. destination-specific wrapper/codec validated
6. any buyer-specific exceptions are documented clearly

## Archive Package

In addition to release deliverables, maintain a long-term archive set:

- hero picture master
- final audio masters and stems
- caption/subtitle masters
- final conformed project/timeline export
- VFX finals and manifests
- graphics source package and fonts with license notes
- music documentation
- final QC and delivery reports

This archive package protects future recuts, remasters, sales, and clip licensing.

## Common Delivery Risks

- captions approved against an old runtime
- missing M&E or stems after a buyer request arrives
- undocumented font or UI asset restrictions blocking future localization
- review files mistaken for masters
- inconsistent frame-rate handling between picture and subtitle outputs

## Next related files

- `13_post/finishing_workflow.md`
- `13_post/captions_and_accessibility.md`
- `13_post/sound_post_plan.md`
- `13_post/music_strategy.md`
- `13_post/editorial_workflow.md`
