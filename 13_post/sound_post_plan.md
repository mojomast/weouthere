# 13_post/sound_post_plan.md

## Purpose

Set the operational sound-post plan for **WE OUT HERE**, including dialogue editorial, sound design, Foley, ADR policy, premix/final mix workflow, deliverable stems, and QC. The plan assumes a hybrid series where digital interaction sounds and silence patterns are structurally important, not ornamental.

## Owner/Subagent

post_agent

## Status

Draft v1 - sound-post baseline for editorial turnover, design scope, mix planning, and delivery readiness

## Dependencies

- `13_post/editorial_workflow.md`
- Locked or near-locked picture turnovers per episode
- Production sound reports, mic maps, and ADR flags from set
- UI behavior map for each episode: typing, reactions, message sends, calls, browser actions, and alerts
- Music strategy and composer schedule from `13_post/music_strategy.md`
- Delivery requirements from `13_post/deliverables_spec.md`
- Accessibility requirements from `13_post/captions_and_accessibility.md`

## Sound Design Principles

- Treat the group chat and screen environment as an acoustic space with its own logic
- Build sonic differentiation between live-action world, desktop realism, and surreal inserts
- Avoid novelty-tech cliches; sounds should feel authored, specific, and legible without becoming cartoonish
- Preserve silence, hesitation, and unread replies as dramatic beats
- Keep dialogue intelligibility ahead of density in busy UI sequences

## Department Scope

### Dialogue Editorial

- Clean and organize production dialogue
- Select best boom/lav combinations per scene
- Remove technical distractions while preserving performance texture
- Flag ADR only where story clarity, legal risk, or technical failure makes replacement unavoidable

### ADR

ADR should be limited and strategic.

- Prioritize production sound wherever usable
- Use ADR for unusable lines, legal text changes that affect spoken words, and lines obscured by production issues
- Avoid replacing messy but emotionally alive dialogue unless clarity truly fails

### Sound Design / Effects

- Build the sound identity of chat interactions, OS events, browser shifts, notification layers, cursor behaviors, and call transitions
- Design device sounds that feel specific to the fictional platform rather than copied from a known real-world app
- Create escalation systems for message storms, typing dread, silence gaps, and deleted-message beats

### Foley

- Cover performance-critical cloth and prop detail where production tracks are thin
- Support laptop handling, desk contact, chair movement, room business, and tactile tech behavior
- Do not over-Foley keyboard and device actions if native capture or design layers already tell the story cleanly

### Re-Recording Mix

- Balance dialogue, music, effects, and UI events for both nearfield review and larger playback environments
- Protect intelligibility of spoken and on-screen narrative information
- Prepare full mix plus split stems for future versioning and international/digital needs

## Episode-Level Sound Build

Each episode should receive a sound-spotting pass that identifies:

1. dialogue risk scenes
2. UI-driven story scenes
3. surreal insert sequences
4. montage or transition passages needing score/effects integration
5. silence-sensitive scenes where restraint is the design choice

The spotting session should output a cue map, ADR shortlist, and stem priorities.

## WE OUT HERE-Specific Sound Priorities

### Chat And UI Language

The show needs a controlled library of interface behaviors.

- message sent
- message received
- typing start / stop
- reaction added
- reaction pile-up
- delete / edit event
- mention / priority ping
- voice/video call connect states
- notification overflow states

Each sound family should have intensity variants so the mix can scale from subtle checking behavior to panic escalation without repeating one stock ping.

### Silence As Action

- A read-without-reply moment should often play as a designed absence, not as a missing effect
- Unfinished typing can be a cue point
- In some scenes, the lack of expected notification should be more meaningful than a sound hit

### Surreal Inserts

- These sequences should be built from manipulated elements that grow out of the base acoustic world when possible
- The sound should feel psychologically motivated, not like an unrelated horror short dropped into the episode

## Dialogue Workflow

Recommended order:

1. Production dialogue assembly
2. Noise reduction and repair
3. Fill and room-tone build
4. ADR decision pass
5. Dialogue premix

Dialogue editorial should receive notes on overlapping on-screen text because viewers may be reading while listening. If a line is crucial while dense text is on screen, either the mix or the picture timing may need adjustment.

## ADR Decision Rules

Replace only when one or more of the following apply:

- line is materially unintelligible
- legal or story revision changes required spoken content
- production noise blocks emotional comprehension
- sync against visible device/screen action is broken beyond repair

ADR records should track line ID, original TC, reason for replacement, and caption impact.

## Mix Format Strategy

Baseline assumption:

- main nearfield stereo mix for editorial review and digital release
- 5.1 final mix where budget and distributor requirements justify it
- M&E stem package prepared if streamer or international path remains live

If budget forces prioritization, the order should be:

1. strong stereo full mix
2. clean split stems
3. 5.1 printmaster
4. M&E, if commercially required

## Stem Package

Recommended stem outputs per episode:

- DX stem
- FX stem
- Foley stem
- UI / design stem if separated from general FX
- MX stem
- full mix stereo
- full mix 5.1 if required
- M&E mix if required

Channel mapping must be documented in the delivery spec and checked in QC.

## Loudness And Platform Awareness

- Mix should be checked against likely streamer and digital loudness requirements before final printmaster
- Leave room for alternate encodes and transcodes; do not master aggressively for perceived loudness
- Dialogue clarity should survive laptop speakers, headphones, and festival screening rooms

## Cueing And Music Interaction

- UI sounds must not mask score intent during escalation sequences
- If score carries anxiety while notifications carry plot, determine which layer owns the beat in each moment
- Sound and music teams should share cue maps before final mix to prevent frequency and rhythm fights

## Turnovers And Milestones

Recommended milestones per episode:

1. first AAF to dialogue edit
2. spotting session
3. ADR record if needed
4. FX/UI design pass
5. Foley record and cut
6. dialogue/effects premix
7. final mix review
8. printmaster and stems

## QC Checklist

- dialogue clicks, pops, clipped breaths, and abrupt noise floor shifts
- unintended duplicate UI cues
- sync drift on message/event sounds
- over-designed keyboard/device tracks that feel fake
- buried dialogue under score or effects
- missing tails at act outs, scene transitions, or credits
- correct channel assignments on all stems and printmasters

## Resource Notes

- Budget for early sound-design exploration on one representative chat-heavy scene before full episodic mixing begins
- Maintain a show sound library so recurring interface behaviors stay consistent across episodes
- Archive all custom UI cues with metadata and usage notes; they are part of the show's identity and future versioning needs

## Next related files

- `13_post/music_strategy.md`
- `13_post/editorial_workflow.md`
- `13_post/finishing_workflow.md`
- `13_post/captions_and_accessibility.md`
- `13_post/deliverables_spec.md`
