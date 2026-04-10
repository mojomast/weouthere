# HANDOFF.md

## Purpose
Provide a concise production handoff for `WE OUT HERE`, including package status, repository details, live website information, deployment notes, and the key files a new operator should read first.

## Owner/Subagent
ops_agent

## Status
Current handoff prepared after live deployment of `weouthere.ussyco.de`

## Dependencies
- `README.md`
- `00_admin/studio_manifest.md`
- `00_admin/canon_lock.md`
- `16_ops/missing_items_report.md`
- `deploy/DEPLOYMENT.md`

## Project Summary
`WE OUT HERE` is a 6 x 30 minute single-camera dark sitcom / tech psychocomedy built around desktop realism, live action, and surreal insert sequences.

Premise: three burned-out technologists launch a chaotic AI consultancy from `Backchannel` and try to bootstrap legitimacy through manic hustle, irony, pseudo-legal improvisation, and memes. Their friendship becomes the failed holding environment that keeps the company alive while making everyone less stable.

## Canon Locks
- Title: `WE OUT HERE`
- Format: `6 x 30 min`
- Main characters: `twinkle.puss`, `bl0ng`, `ariane.emory`
- `twinkle.puss` is male and uses he/him pronouns
- In-world platform: `Backchannel`
- Soft-lock company name used across package: `Cataclysm Consulting`

If anything conflicts with `00_admin/canon_lock.md`, `canon_lock.md` wins.

## Package Status
- Full package completed
- Manifest baseline reflects complete package state
- Missing-items report reflects final reconciled status
- Table-read edition packets created for all six episodes
- Static website expanded and deployed live

## Repo
- GitHub: `https://github.com/mojomast/weouthere`
- Default branch: `main`
- Local path: `/home/mojo/projects/show/we-out-here`

## Website

### Live URL
- `https://weouthere.ussyco.de`

### Hosting Model
- Served by `nginx` on the `ussyco.de` machine
- Static site root:
  - `/home/mojo/projects/show/we-out-here/site`
- Nginx vhost source:
  - `/home/mojo/projects/show/we-out-here/deploy/nginx/weouthere.ussyco.de.conf`

### TLS
- Uses the existing wildcard Let's Encrypt certificate already active on the host
- SANs include:
  - `DNS:*.ussyco.de`
  - `DNS:ussyco.de`
- No self-signed certificate is in use

### Website Contents
The live site is a multi-page static dossier with:
- `site/index.html` — home / project front door
- `site/about.html` — premise, tone, season arc, form
- `site/episodes.html` — six-episode public guide
- `site/characters.html` — trio summaries and group dynamic
- `site/press.html` — press-facing project snapshot
- `site/casting.html` — casting-facing overview and role summaries
- `site/jobs.html` — jobs / production collaboration overview
- `site/partners.html` — investor and partner framing
- `site/faq.html` — public FAQ
- `site/community.html` — Discord/community strategy summary
- `site/updates.html` — project milestones / update log
- `site/assets/styles.css` — shared styling
- `site/assets/app.js` — light interaction for signup UI state

### Website Notes
- The site is static HTML/CSS/JS with no framework dependency
- It is intentionally lightweight and easy to host under nginx
- Internal content is derived from the package docs, especially press, casting, finance, marketing, and website strategy materials

## First Files To Read

### Creative
- `01_development/season_bible.md`
- `01_development/character_bible.md`
- `03_writers_room/episode_beat_sheets.md`
- `02_scripts/`

### Operations
- `00_admin/studio_manifest.md`
- `00_admin/canon_lock.md`
- `16_ops/missing_items_report.md`
- `16_ops/qa_checklists.md`

### External-Facing
- `00_admin/partner_materials_index.md`
- `01_development/partner_shortlist.md`
- `06_press_kit/press_kit.md`
- `07_website/website_strategy.md`

## Deployment Notes
- Current deployment instructions and host findings live in `deploy/DEPLOYMENT.md`
- The live nginx vhost is installed and verified
- `http://weouthere.ussyco.de` redirects to HTTPS
- `https://weouthere.ussyco.de` returns `200 OK`

## Suggested Next Steps
1. Add richer page-specific metadata and social preview assets for the website.
2. If desired, convert the static site into a more fully designed multi-section publication layer.
3. Add screenshots or key art assets once visual materials are finalized.
4. If outreach begins, add real contact endpoints and form handling to the site.

## Next related files
- `README.md`
- `deploy/DEPLOYMENT.md`
- `00_admin/studio_manifest.md`
- `00_admin/canon_lock.md`
