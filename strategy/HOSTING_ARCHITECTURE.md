# Sapiion — Hosting Architecture Decision
> Documented: 2026-07-11
> Context: Pre-launch infrastructure planning

---

## The Question

> "Where are we going to host the ILS application — on Hostnet or somewhere else?"

---

## Two Separate Things to Host

The marketing website and the ILS application are completely different and need different hosting:

| | Marketing website | ILS application |
|---|---|---|
| What | Static React website | Express backend + PostgreSQL + file uploads |
| Complexity | Simple | Requires Node.js runtime + database |
| Hosting | Vercel ✅ already connected | Needs a real server |

**Hostnet is not a good fit for ILS.** Hostnet is primarily a domain registrar and shared hosting provider. Their VPS options exist but are not optimized for running Node.js applications with PostgreSQL. It would require fighting the tool.

---

## Hosting Options Evaluated

### Railway
- Deploy directly from GitHub — no server configuration
- Managed PostgreSQL included
- EU region available (Frankfurt)
- ~€15/month for demo + small production
- **Best for: getting a demo live fast**

### Hetzner
- German company, servers in Nuremberg/Helsinki
- Strongest GDPR story for Dutch schools — *"Your data is hosted in Germany, EU"*
- €5/month for a VPS that comfortably runs ILS
- Full control over environment
- Requires manual setup (Nginx + PM2 + PostgreSQL + backups)
- **Best for: production with paying schools**

### DigitalOcean / Render / AWS
- Not ideal — US-based companies, weaker GDPR narrative for Dutch schools

### Vercel (for ILS backend)
- Does not work — Vercel is designed for static/serverless, not long-running Express servers with databases

---

## Recommended Two-Stage Strategy

```
Stage 1 — Demo (now)
  → Railway
  → Goal: get a live demo this week
  → Zero server management
  → Show prospects a real working system

Stage 2 — First paying school
  → Hetzner VPS
  → Proper EU production environment
  → Migrate from Railway when first contract is signed
  → Tell schools: "Your data is hosted in the EU"
```

---

## Data Isolation Decision

> "Will each school get their own isolated environment, or will all schools share one ILS instance?"

**Decision: Full isolation — each school is treated as a single entity. No mixing of data.**

This is the correct decision for a B2B educational product. Dutch schools will require it for GDPR and data ownership reasons.

---

## What This Means Architecturally

**The current ILS codebase is single-tenant.**

ILS is currently hardwired to one database (`curriculum_v2`). There is no tenant routing logic, no tenant identification, no provisioning system. It was built for one institution. This is fine for Phase 1 — it needs to be understood before scaling.

---

## Three Implementation Options

### Option A — Separate deployment per school ✅ Recommended for Phase 1

- Each school gets their own server + database + subdomain
- Example: `roc-amsterdam.sapiion.ai`, `fontys.sapiion.ai`
- Zero code changes to ILS required
- Works today with the current codebase
- Downside: managing 10 schools = managing 10 servers

### Option B — One server, separate database per school ✅ Recommended for Phase 2

- One Hetzner VPS
- PostgreSQL with one database per school
- Backend reads the subdomain → connects to the correct database
- Requires subdomain routing logic in the backend (~1 week of development work)
- Scales cleanly to 20–30 schools on one server

### Option C — Full multi-tenancy (add `org_id` to all tables) — Phase 4+

- One database, all schools share the same tables
- Requires adding `org_id` to every table, every query, every API route
- Months of architectural work
- Not appropriate until the product is proven and customer base justifies it

---

## Phased Rollout Plan

| Phase | Schools | Approach | Infrastructure |
|---|---|---|---|
| Demo | 0 (prospects) | Option A | Railway — one demo instance |
| First school | 1 | Option A | Hetzner — dedicated deployment |
| Early adopters | 2–5 | Option A | Hetzner — one VPS per school |
| Growth | 5+ | Option B | Hetzner — one VPS, separate databases, subdomain routing |
| Scale | 20+ | Option B → C | Re-evaluate based on load and revenue |

---

## URL Structure

```
sapiion.ai                  → Marketing website (Vercel)
app.sapiion.ai              → Demo environment (Railway)
[school-name].sapiion.ai    → Per-school production instance (Hetzner)
docs.sapiion.ai             → Documentation (future)
```

---

## Key Decisions Recorded

| Decision | Choice | Reason |
|---|---|---|
| Marketing hosting | Vercel | Already connected, free, fast |
| Demo hosting | Railway | Zero setup, EU region, managed DB |
| Production hosting | Hetzner | EU/GDPR, cost, control |
| Data isolation | Database per school | GDPR, trust, clean boundaries |
| Multi-tenancy approach | Option A now → Option B at 5+ schools | No code changes needed to get to revenue |

---

## Related Documents

- [PRODUCT_VISION.md](../PRODUCT_VISION.md)
- [SAPIION_ACTION_PLAN.md](../SAPIION_ACTION_PLAN.md) — Phase 2 infrastructure tasks
