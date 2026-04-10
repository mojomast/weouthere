# 12_production/camera_and_capture_plan.md

## Purpose

Define the camera, desktop capture, playback, data, and editorial-facing capture strategy for `WE OUT HERE`.

## Owner/Subagent

production_agent

## Status

Draft v1 - technical plan pending DP hire, editor consultation, and package bids

## Dependencies

- `00_admin/canon_lock.md`
- `00_admin/assumptions.md`
- `12_production/production_plan.md`
- `12_production/stripboard_assumptions.md`
- `12_production/VFX_and_screen_graphics_plan.md`
- `12_production/production_workflows.md`

## Capture Philosophy

`WE OUT HERE` is not a normal live-action show with some screens added later. The screen life is part of principal photography. The capture plan therefore has to treat:

- camera negative
- screen recordings
- practical monitor playback
- reference audio
- metadata

as one integrated acquisition system.

## Live-Action Camera Strategy

### Base Recommendation

- digital cinema single-camera package with compact footprint
- prioritize strong low-light performance, easy monitor integration, and manageable data rates
- maintain a consistent base sensor/look package across the season
- reserve specialty lenses or body changes for story-specific need, not style shopping

### Operational Rules

- primary photography should assume one A-camera package
- B-camera use is occasional and justified, not standard
- handheld, tripod, slider, and simple support should cover most needs
- avoid complex movement packages unless they materially improve the scene

## Resolution / Format Guidance

- acquisition should comfortably finish for platform-standard HD/UHD deliverables
- screen elements should be captured at native or higher-than-delivery resolution
- all departments should avoid ad hoc aspect ratio changes
- frame rate changes only when pre-approved in shot lists and editorial notes

## Desktop Realism Capture Strategy

### Core Rule

If a screen beat is story-critical, capture it as a planned asset with versioning and metadata. Do not rely on memory or reconstruction.

### Screen Capture Types

| Capture Type | Use | Notes |
| --- | --- | --- |
| Native screen record | chat, browser, deck, file system, typing | primary method for desktop realism |
| Live playback to monitor | scenes where cast needs something to react to on set | requires brightness/glare testing |
| Synced remote-call capture | calls, presentations, multi-window interactions | test latency and record clean references |
| Clean UI plate | no cursor/performance layer | used for backup, comp, or extension |
| Performance pass | cursor movement, typing cadence, hesitation | story-critical behavioral layer |

## Camera + Screen Integration

### On Set

- practical monitors must be tested for refresh mismatch and flicker
- playback brightness and color should be tuned to camera, not to operator taste
- whenever a screen is in shot, capture the matching clean source file and version ID
- script supervisor should log the source package used in the take

### Dedicated Screen Days

- use a smaller capture team with clear scene/take ownership
- record cursor choreography and typing rhythm as performance choices
- save every approved pass to editorial-facing naming convention the same day

## Data Management

### Required Media Classes

- camera originals
- production sound originals
- screen recordings
- clean UI elements
- stills / continuity reference
- LUTs / camera reports / metadata exports

### Mandatory Data Rules

- three-copy rule before media leaves set or capture station
- no final-named files created manually by multiple departments in parallel
- one source-of-truth folder structure for screen assets
- checksum-backed offload for camera media and screen media where possible

## Metadata Minimums

Every screen asset should carry or be paired with:

- episode
- scene reference or placeholder ID
- user perspective
- version number
- take or pass number
- clean / performance / playback / reference designation
- approval status

## Editorial Protections

- editor receives screen media in the same daily turnover cadence as camera and sound
- assistant editor or equivalent should not have to decode arbitrary filenames
- if a screen recording is used in camera, editorial still gets the clean matching source package
- any dropped-frame, sync, or cursor-lag issue is flagged the day it is discovered

## Minimal Equipment Logic

Prioritize package simplicity:

- one main body family
- one monitor strategy
- one data wrangling path
- one approved screen capture toolkit

Avoid:

- mixing unrelated recording ecosystems without post approval
- discovering playback limitations during principal photography
- letting graphics teams export ad hoc formats that editorial cannot manage cleanly

## Camera Test Agenda

Before Prep 5, run tests for:

- skin tone and texture in standing environments
- screen reflection and monitor refresh behavior
- webcam / laptop camera simulation if used in-world
- low-light tolerance for practical-heavy scenes
- UI legibility at intended framing distances

## Failure Response

If a screen workflow fails on the day:

1. capture clean plate and reference immediately
2. preserve the actor performance and blocking if possible
3. log the mismatch clearly in camera and script notes
4. schedule replacement capture before assuming post can fix it invisibly

## Next Related Files

- `12_production/VFX_and_screen_graphics_plan.md`
- `12_production/production_workflows.md`
- `12_production/sound_plan.md`
- `13_post/edit_workflow.md`
- `13_post/deliverables_spec.md`
