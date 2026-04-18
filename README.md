# 🚀 Hackathon Team Matchmaking Platform

Connect builders, designers, and innovators — find your perfect hackathon team.

## Tech Stack

| Layer       | Technology                                        |
|-------------|---------------------------------------------------|
| Frontend    | Next.js 14 (App Router, TypeScript, Tailwind CSS) |
| Backend     | Python 3.12, FastAPI (async)                      |
| Database    | MongoDB 7                                         |
| Cache/Queue | Redis 7                                           |
| Infra       | Docker & Docker Compose                           |

## Quick Start


*1. Clone the repository**
```bash
git clone https://github.com/codeboyz12/hackathon-matchmaker.git
cd hackathon-matchmaking
```

```bash
cp .env.example .env
docker-compose up --build
```

| Service            | URL                          |
|--------------------|------------------------------|
| Frontend           | http://localhost:3000        |
| Backend API        | http://localhost:8000        |
| Swagger UI         | http://localhost:8000/docs   |
| ReDoc              | http://localhost:8000/redoc  |

## Commands

```bash
# Rebuild a single service
docker-compose up --build backend

# Tail logs
docker-compose logs -f backend
docker-compose logs -f frontend

# Stop and remove volumes (wipes DB)
docker-compose down -v
```

## Project Structure

```
hackathon-matchmaking/
├── docker-compose.yml
├── .env.example
├── .gitignore
├── README.md
├── backend/
│   ├── Dockerfile
│   ├── requirements.txt
│   └── app/
│       ├── main.py
│       ├── core/
│       │   ├── config.py
│       │   └── db.py
│       ├── api/v1/
│       │   └── health.py
│       └── models/
└── frontend/
    ├── Dockerfile
    ├── package.json
    ├── next.config.mjs
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── postcss.config.mjs
    └── src/
        ├── app/
        │   ├── globals.css
        │   ├── layout.tsx              # Root layout (dark theme)
        │   ├── page.tsx                # Health-check landing
        │   ├── (app)/                  # Authenticated pages (sidebar layout)
        │   │   ├── layout.tsx          # Header + Sidebar + Footer (light theme)
        │   │   ├── profile/
        │   │   │   ├── page.tsx        # Profile view
        │   │   │   └── edit/
        │   │   │       └── page.tsx    # Edit Profile form
        │   │   ├── find-team/
        │   │   │   ├── page.tsx        # Search teams / people
        │   │   │   └── create/
        │   │   │       └── page.tsx    # Create Team form
        │   │   ├── skill-bank/
        │   │   │   └── page.tsx        # Skill Bank dashboard
        │   │   └── saved/
        │   │       └── page.tsx        # Bookmarked items
        │   └── (auth)/                 # Auth pages (centered card layout)
        │       ├── layout.tsx
        │       ├── login/
        │       │   └── page.tsx
        │       └── signup/
        │           └── page.tsx
        ├── components/
        │   ├── layout/
        │   │   ├── Header.tsx          # Sticky header, hamburger (mobile)
        │   │   ├── Sidebar.tsx         # Fixed sidebar / mobile drawer
        │   │   └── Footer.tsx          # Gradient footer
        │   ├── shared/
        │   │   ├── Logo.tsx
        │   │   ├── AvatarPlaceholder.tsx
        │   │   └── TagBadge.tsx
        │   ├── profile/
        │   │   ├── ActiveTeamCard.tsx
        │   │   ├── CompetitionSection.tsx
        │   │   ├── MyRoleSection.tsx
        │   │   └── SkillRankSection.tsx
        │   └── team/
        │       ├── TeamCard.tsx
        │       └── PersonCard.tsx
        └── types/
            ├── health.ts
            ├── auth.ts
            ├── profile.ts
            ├── skill.ts
            └── team.ts
```

## License

MIT
