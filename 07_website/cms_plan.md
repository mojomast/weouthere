# 07_website/cms_plan.md

## Purpose

Recommend a practical CMS and publishing workflow for the **WE OUT HERE** website that supports editorial flexibility, operational updates, and high-design implementation without forcing generic templates.

## Owner/Subagent

cms_agent

## Status

Draft v1 - implementation recommendation

## Dependencies

- `07_website/structured_content_model.md`
- `07_website/component_inventory.md`
- Final frontend stack decision
- Team staffing for editorial ownership

## Content

## CMS Requirements

The CMS must support:

- Structured content for News, FAQ, Casting, Jobs, and Press assets
- Draft and publish workflow
- Low-friction editing by non-developers
- Media management
- Reference fields between content types
- API access for static or hybrid frontend rendering
- Minimal template lock-in

## Recommended Approach

Recommended baseline:

- Frontend: static-first or hybrid framework
- CMS: headless CMS with strong structured content support
- Forms: dedicated form service or server action layer
- Assets: CDN-backed media storage

Recommended CMS profile:

- Sanity or equivalent headless structured CMS

Why this shape fits:

- Strong schema control for operational content
- Good editorial experience for mixed page and collection content
- Flexible enough to support art-directed frontend layouts
- Easy to model reusable project facts and content references

## Content Ownership Model

- Web / creative lead: homepage and design-critical static pages
- Content / editorial lead: About, FAQ, News
- Press lead: Press Kit assets, bios, updates
- Recruiting lead: Casting and Jobs
- Biz dev lead: Investors page updates
- Ops lead: Contact routing and community status

## Publishing Workflow

### Stable Pages

- Home, About, Contact, Investors, and Community are primarily code-managed with selected CMS fields for copy and status.
- Design-sensitive layout changes should go through design and frontend review.

### Operational Content

- Casting calls, job posts, FAQ items, and updates should be fully CMS-managed.
- Editors should be able to publish and expire these without developer support.

### Press Assets

- Asset uploads should be managed in CMS with metadata fields.
- Downloads should map cleanly to frontend asset grids.

## Environment Plan

- Local development dataset / environment
- Staging preview environment
- Production environment

Preview requirements:

- Draft preview for content editors
- Shareable preview URLs for review

## Governance Rules

- Canonical project facts live in one shared model.
- No page should hardcode facts that also live in CMS unless there is a deliberate reason.
- High-risk content categories require approval before publish: investors, casting, jobs, press facts.
- Date-sensitive content should be reviewed weekly while active.

## Launch Scope

### Phase 1 Launch

- Site settings
- Project profile
- Press assets
- News posts
- FAQ items
- Contact routing settings

### Phase 2

- Casting calls
- Job postings
- Community settings
- Episode and character collections if those pages become dynamic

## Technical Integration Notes

- Prefer static generation with incremental revalidation or equivalent.
- Cache stable content aggressively.
- Revalidate on publish for News, FAQ, Casting, Jobs, and Press changes.
- Keep form submission data outside the CMS unless there is a secure reason to store it there.

## Operational Risks

- Over-CMSing art-directed pages and flattening design quality
- Allowing too many editors to modify canonical facts
- Failing to archive stale job or casting posts
- Weak asset naming causing Press page confusion

## Implementation Checklist

1. Finalize content model.
2. Choose CMS and set up environments.
3. Implement schema for MVP content types.
4. Connect frontend data layer.
5. Build preview workflow.
6. Assign editorial owners.
7. Document publish rules.

## Success Criteria

- Editors can update dynamic content without engineering help.
- Core brand pages retain full design control.
- Press, recruiting, and update workflows stay reliable under real use.

## Next related files

- `07_website/structured_content_model.md`
- `07_website/component_inventory.md`
- `07_website/homepage_wireframe.md`
- `07_website/seo_metadata.md`
- `07_website/website_strategy.md`
