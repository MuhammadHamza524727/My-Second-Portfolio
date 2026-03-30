---
title: Portfolio Backend API
emoji: 🚀
colorFrom: blue
colorTo: yellow
sdk: docker
pinned: false
---

# Portfolio Backend API

FastAPI backend for Muhammad Hamza's portfolio contact form.

## Endpoints

- `GET /` — Health check
- `POST /api/contact` — Submit contact form (stored in Neon DB)
- `GET /api/contacts` — View all submissions

## Environment Variables (set in HF Spaces Settings)

- `DATABASE_URL` — Neon PostgreSQL connection string
- `FRONTEND_URL` — Your portfolio frontend URL (for CORS)
