# 13_post/captions_and_accessibility.md

## Purpose

Define the captioning, subtitle, accessibility-audio, and readable-on-screen-information standards for **WE OUT HERE**. This document is intended to keep the series accessible despite heavy use of screen graphics, chat text, and layered digital interactions, while also aligning with typical festival, streamer, and platform accessibility expectations.

## Owner/Subagent

post_agent

## Status

Draft v1 - accessibility and captioning baseline for post, QC, and distribution planning

## Dependencies

- `13_post/editorial_workflow.md`
- `13_post/finishing_workflow.md`
- `13_post/sound_post_plan.md`
- `13_post/deliverables_spec.md`
- final dialogue list / spotting list per episode
- approved text of all critical on-screen messages, notifications, titles, and labels
- final runtime-locked masters for caption timing
- distributor or buyer-specific accessibility specs if acquired

## Accessibility Position

Accessibility for WE OUT HERE cannot be treated as a late compliance pass. The show's story is often carried by visible text, message timing, UI behavior, and silence. That means accessibility planning must begin during editorial and continue through finishing and QC.

## Core Accessibility Deliverables

At minimum, plan for:

- English closed captions for all final episodes
- English subtitles if separately required by platform
- SDH-style subtitle variant if requested by buyer
- Accessible review files for internal and buyer screenings
- Caption and subtitle QC reports

If the budget and release path support it, plan optional downstream accessibility assets:

- audio description
- translated subtitle packages
- alternate text metadata for key art and platform listings

## Captioning Principles

- Dialogue must be accurate, speaker-clear, and timed to final locked picture
- Non-speech elements should be captioned when they convey story, tone, or plot pressure
- UI sounds should be captioned when they carry narrative meaning, not simply whenever a device makes a noise
- Captions must not become so dense that they compete destructively with the show's visible screen text

## Screen-Text Accessibility Challenge

WE OUT HERE has a recurring accessibility problem that standard caption workflows often miss: important information may exist inside chats, DMs, browser windows, alerts, and edited/deleted message behavior.

That means every episode needs a screen-text review that classifies visible text into three groups:

1. decorative or ambient text
2. useful but non-critical text
3. story-critical text

Story-critical visible text must be accounted for in accessibility planning through one or more of the following:

- sufficient on-screen legibility and dwell time
- caption treatment if appropriate
- subtitle adaptation if platform allows
- audio description note if AD is commissioned
- editorial adjustment if the information is otherwise too easy to miss

## Closed Caption Rules

- Use closed captions as the baseline accessibility file for English-language release
- Include relevant sound cues such as `[typing stops]`, `[message ping]`, `[video call ringing]`, or `[crowd outside]` when they materially affect understanding
- Avoid over-captioning repeated low-value UI noise
- Identify speakers clearly where off-screen dialogue or overlapping chat audio could confuse attribution

## Subtitle Rules

- If separate subtitles are required, they should prioritize spoken dialogue readability and generally exclude non-speech cues unless an SDH file is requested
- Subtitle line breaks should respect reading speed on both television and laptop viewing
- Subtitle styling and placement should be tested against frequent lower-third interface activity

## Audio Description Considerations

If audio description is commissioned, the AD writer must receive more than a final master. They need:

- list of critical on-screen text events
- context for the fictional platform's UX behavior
- guidance on when a deleted, edited, or unread message is story-relevant
- note of surreal inserts where image logic is psychological rather than literal

For this show, AD should prioritize:

- message content that materially changes stakes
- visually significant interface actions that are otherwise silent or ambiguous
- key transitions between live action, desktop realism, and surreal inserts

## Editorial And Finishing Requirements For Accessibility

- Review dense chat scenes for minimum readable dwell time before picture lock
- Avoid placing critical visible text behind caption regions when possible
- When key information is compressed into a single fast graphic beat, consider extending duration rather than expecting captions to solve the issue
- During final online, confirm that text placement remains legible on smaller screens and with caption overlays enabled

## QC Workflow

Accessibility QC should happen in three phases:

1. editorial readability review
2. final caption/subtitle sync and text review
3. final platform-style playback review on consumer devices

QC should specifically test:

- reading speed
- overlap between captions and graphic text
- speaker attribution
- treatment of UI sounds and silence beats
- spelling consistency for handles, episode titles, and repeated interface terminology

## Canon-Sensitive Terms

Caption vendors must receive a terminology sheet. At minimum include:

- `WE OUT HERE`
- `twinkle.puss`
- `bl0ng`
- `ariane.emory`
- exact episode titles
- final fictional platform name once locked
- any recurring in-world channels, bots, or branded interface terms

Do not rely on automated transcription to resolve these correctly.

## Platform Awareness

- Some buyers require separate caption and subtitle file types, different line-length limits, or specific frame-rate rules
- Streamers may reject files for timing drift, CPS violations, unsupported characters, or overlap issues even when captions look fine in editorial review
- Broadcaster or platform compliance may also require audio description on a different schedule than captions; budget and schedule for that early if the sales path points that way

## Vendor Briefing Notes

- Caption vendor must be told explicitly that visible text is often part of the narrative payload
- Provide a reference screener plus a visible-text spotting list, not just an audio export
- Require human review of all main- and recurring-character handles
- If machine-first captioning is used, mandate full editorial pass by a trained caption editor before approval

## Minimum Acceptance Criteria

- captions match locked picture and approved dialogue
- all story-critical sound cues are represented appropriately
- no systematic misspelling of character handles or show-specific terms
- caption placement does not cover recurring critical interface zones where avoidable
- final files pass buyer or distributor validation checks

## Next related files

- `13_post/deliverables_spec.md`
- `13_post/finishing_workflow.md`
- `13_post/sound_post_plan.md`
- `13_post/editorial_workflow.md`
- `00_admin/canon_lock.md`
