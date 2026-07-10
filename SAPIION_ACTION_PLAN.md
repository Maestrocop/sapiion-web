# Sapiion — Action Plan
> Created: 2026-07-10
> Purpose: Turn Sapiion from an idea into a credible software company.
> Rule: No going back into exploration. Execution only from here.

---

## The Goal

> **Make Sapiion credible enough that a school director who visits sapiion.ai requests a demo.**

Everything on this list serves that goal. If a task does not serve it, it waits.

---

## Phase 1 — Protect and Secure the Brand

| # | Task | Status | Notes |
|---|---|---|---|
| 1.1 | Create SAPIION_BRAND.md | ✅ Done | Single source of truth for brand |
| 1.2 | Trademark search — EUIPO | ✅ Done 2026-07-10 | No conflicts found |
| 1.3 | Trademark search — BOIP | ✅ Done 2026-07-10 | 0 results found |
| 1.4 | Register domains | ✅ Done 2026-07-10 | sapiion.ai + sapiion.com + sapiion.nl |
| 1.5 | File trademark application | ⬜ Next | Class 41 (education) + Class 42 (SaaS) via BOIP or EUIPO — consider a trademark attorney |

---

## Phase 2 — Company Infrastructure

| # | Task | Status | Notes |
|---|---|---|---|
| 2.1 | Configure DNS — sapiion.ai as primary | ⬜ Next | Set sapiion.com + sapiion.nl to redirect → sapiion.ai |
| 2.2 | SSL certificates | ⬜ Next | Automatic with most hosts |
| 2.3 | Enable domain protection | ⬜ Next | Prevent unauthorized transfers |
| 2.4 | Set up Google Workspace | ⬜ Next | Gmail on sapiion.ai — €6/month |
| 2.5 | Create email addresses | ⬜ Next | khalid@sapiion.ai · info@sapiion.ai · hello@sapiion.ai |

---

## Phase 3 — Product Story

| # | Task | Status | Notes |
|---|---|---|---|
| 3.1 | PRODUCT_VISION.md | ✅ Done | Why Sapiion exists, 10-year vision |
| 3.2 | EDUCATIONAL_MODEL.md | ✅ Done | 8-step learning cycle, declared vs derived |
| 3.3 | PRODUCT_POSITIONING.md | ✅ Done | Messaging, elevator pitches, homepage copy |
| 3.4 | CUSTOMER_PERSONAS.md | ✅ Done | 6 personas: Sandra, Martijn, Lena, Amir, Fatima, Peter |
| 3.5 | COMPETITIVE_ANALYSIS.md | ✅ Done | Canvas, Moodle, Brightspace, Osiris, EduArte, Teams |
| 3.6 | COMPANY_STRUCTURE.md | ⬜ Next | Noor B.V. → Sapiion → Education Intelligence Platform |

---

## Phase 4 — Visual Identity

| # | Task | Status | Notes |
|---|---|---|---|
| 4.1 | Define brand direction | ⬜ Next | Colors: trust, intelligence, modern SaaS. Not corporate blue. |
| 4.2 | Logo design | ⬜ Next | Hire designer or use Looka/Brandmark for V1 |
| 4.3 | Icon + favicon | ⬜ Next | Needed before website goes live |
| 4.4 | Typography choice | ⬜ Next | Heading + body font |
| 4.5 | Social media assets | ⬜ Next | LinkedIn banner + profile image |
| 4.6 | Save all assets to brand-assets/ | ⬜ Next | SVG, PNG, favicon.ico |

---

## Phase 5 — Marketing Website

| # | Task | Status | Notes |
|---|---|---|---|
| 5.1 | Choose tech stack | ⬜ Next | Static site: Astro / Next.js / plain HTML. Fast to ship. |
| 5.2 | Build Home page | ⬜ Next | Hero → Problem → Solution → Audiences → CTA |
| 5.3 | Build Why Sapiion page | ⬜ Next | vs LMS, vs SIS, vs Excel |
| 5.4 | Build Solutions page | ⬜ Next | Per audience: Teacher / Coordinator / Curriculum / Institution |
| 5.5 | Build About page | ⬜ Next | The story. Why Khalid built this. |
| 5.6 | Build Contact / Request Demo page | ⬜ Next | Form → email to hello@sapiion.ai |
| 5.7 | Launch sapiion.ai | ⬜ Next | V1 does not need to be perfect — it needs to exist |

**V1 homepage hero copy (from PRODUCT_POSITIONING.md):**
> **Turn educational data into institutional wisdom.**
> One platform. Better educational decisions.

---

## Phase 6 — Demo Readiness

| # | Task | Status | Notes |
|---|---|---|---|
| 6.1 | Create demo institution | ⬜ Next | "Sapiion Demo Academy" — realistic data |
| 6.2 | Create demo accounts | ⬜ Next | Admin / Coordinator / Teacher / Student |
| 6.3 | Seed demo data | ⬜ Next | Curriculum, modules, assessments, attendance, analytics |
| 6.4 | Prepare Teacher demo script | ⬜ Next | How a teacher manages a class end-to-end |
| 6.5 | Prepare Coordinator demo script | ⬜ Next | How a coordinator spots student risk early |
| 6.6 | Prepare Director demo script | ⬜ Next | Programme health + accreditation readiness |
| 6.7 | Take product screenshots | ⬜ Next | For website and sales materials |

---

## Phase 7 — Documentation

| # | Task | Status | Notes |
|---|---|---|---|
| 7.1 | Set up docs.sapiion.ai | ⬜ Later | MkDocs or similar |
| 7.2 | Write Getting Started guide | ⬜ Later | First thing a new user reads |
| 7.3 | Write Teacher Guide | ⬜ Later | |
| 7.4 | Write Coordinator Guide | ⬜ Later | |
| 7.5 | Write Administrator Guide | ⬜ Later | |
| 7.6 | Write Implementation Guide | ⬜ Later | 90-day onboarding story |

---

## Phase 8 — First Customers

| # | Task | Status | Notes |
|---|---|---|---|
| 8.1 | Define Early Adopter Programme | ⬜ Later | 1–2 institutions. Goal: learn, not sell. |
| 8.2 | Identify target institutions | ⬜ Later | HBO programmes in Netherlands |
| 8.3 | First outreach | ⬜ Later | Only after sapiion.ai is live |
| 8.4 | Run pilot | ⬜ Later | Validate workflows, collect feedback, gather testimonials |
| 8.5 | Write first case study | ⬜ Later | After pilot completes |

---

## Immediate Next 5 Actions

Stop planning. Do these in order:

| # | Action | Time needed |
|---|---|---|
| 1 | Set up Google Workspace on sapiion.ai | 30 min |
| 2 | Configure DNS redirects | 30 min |
| 3 | File trademark application (or book attorney) | 1 hour |
| 4 | Create visual identity — V1 logo | 1–2 days |
| 5 | Build sapiion.ai V1 landing page | 3–5 days |

---

## The Rule

> Do not touch ILS-dev application code for non-critical tasks until sapiion.ai is live.
> The engine exists. Build the front door.

---

*Updated: 2026-07-10*
