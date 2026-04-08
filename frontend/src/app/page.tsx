import { HealthResponse, ServiceStatus } from "@/types/health";

async function fetchHealth(): Promise<HealthResponse | null> {
  try {
    const base =
      process.env.BACKEND_INTERNAL_URL ??
      process.env.NEXT_PUBLIC_API_URL ??
      "http://localhost:8000";
    const res = await fetch(`${base}/api/v1/health`, { cache: "no-store" });
    if (!res.ok) return null;
    return res.json() as Promise<HealthResponse>;
  } catch {
    return null;
  }
}

function StatusDot({ status }: { status: ServiceStatus }) {
  const colours: Record<ServiceStatus, string> = {
    ok:       "bg-green-400 shadow-[0_0_8px_2px_rgba(74,222,128,0.5)]",
    degraded: "bg-yellow-400 shadow-[0_0_8px_2px_rgba(250,204,21,0.4)]",
    offline:  "bg-red-500   shadow-[0_0_8px_2px_rgba(239,68,68,0.4)]",
    unknown:  "bg-zinc-500",
  };
  return (
    <span
      className={`inline-block w-2.5 h-2.5 rounded-full ${colours[status]}`}
      style={{ animation: status === "ok" ? "pulse-dot 2s ease-in-out infinite" : undefined }}
    />
  );
}

function ServiceRow({ name, info }: { name: string; info: { status: ServiceStatus } }) {
  const label: Record<ServiceStatus, string> = {
    ok: "Operational", degraded: "Degraded", offline: "Offline", unknown: "Unknown",
  };
  return (
    <div className="flex items-center justify-between py-3 border-b border-[var(--color-border)] last:border-0">
      <span className="font-mono text-sm text-[var(--color-muted)]">{name}</span>
      <span className="flex items-center gap-2 text-sm font-medium">
        <StatusDot status={info.status} />
        {label[info.status]}
      </span>
    </div>
  );
}

function UptimeBadge({ seconds }: { seconds: number }) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const parts = [h > 0 ? `${h}h` : null, m > 0 ? `${m}m` : null, `${s}s`].filter(Boolean);
  return <span className="font-mono text-xs text-[var(--color-muted)]">uptime {parts.join(" ")}</span>;
}

export default async function HomePage() {
  const health = await fetchHealth();
  const overallStatus: ServiceStatus = health?.status ?? "unknown";
  const overallColour: Record<ServiceStatus, string> = {
    ok: "text-green-400", degraded: "text-yellow-400",
    offline: "text-red-400", unknown: "text-zinc-500",
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div aria-hidden className="pointer-events-none fixed inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-green-900/20 blur-[120px]" />
      </div>

      <section className="relative z-10 text-center max-w-2xl animate-fade-up" style={{ animationDelay: "0ms" }}>
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5 text-xs font-mono text-[var(--color-muted)]">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
          Platform Bootstrap — v0.1.0
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
          Find your <span className="animate-shimmer">dream team</span><br />for every hackathon.
        </h1>
        <p className="text-lg text-[var(--color-muted)] leading-relaxed max-w-lg mx-auto">
          Hackathon Matchmaking connects builders, designers, and domain experts — spend less time recruiting, more time shipping.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button className="rounded-lg bg-green-500 hover:bg-green-400 transition-colors text-black font-semibold px-6 py-2.5 text-sm">
            Get Started
          </button>
          <button className="rounded-lg border border-[var(--color-border)] hover:border-green-700 transition-colors text-[var(--color-muted)] hover:text-[var(--color-text)] font-medium px-6 py-2.5 text-sm">
            View API Docs →
          </button>
        </div>
      </section>

      <section className="relative z-10 mt-16 w-full max-w-md animate-fade-up" style={{ animationDelay: "120ms" }}>
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-border)]">
            <span className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-widest">System Status</span>
            <div className="flex items-center gap-2">
              {health && <UptimeBadge seconds={health.uptime_seconds} />}
              <span className={`text-xs font-semibold uppercase tracking-wider ${overallColour[overallStatus]}`}>
                {overallStatus}
              </span>
            </div>
          </div>
          <div className="px-5">
            {health ? (
              <>
                <ServiceRow name="backend / api" info={{ status: health.api === "ok" ? "ok" : "degraded" }} />
                <ServiceRow name="mongodb" info={health.services.mongodb} />
                <ServiceRow name="redis" info={health.services.redis} />
              </>
            ) : (
              <div className="py-6 text-center font-mono text-sm text-red-400">
                ✗ Could not reach the backend. Is it running?
              </div>
            )}
          </div>
          <div className="px-5 py-3 bg-[var(--color-bg)]/50 flex items-center justify-between">
            <span className="font-mono text-[10px] text-[var(--color-muted)]">GET /api/v1/health</span>
            <a
              href={`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000"}/docs`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] text-green-600 hover:text-green-400 transition-colors"
            >
              Open Swagger →
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-10 mt-16 w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
        {[
          { icon: "⚡", title: "Skill Matching",  desc: "Redis-powered matchmaking pairs you with complementary teammates instantly." },
          { icon: "🛠",  title: "Team Builder",   desc: "Define your stack, set your goals, and let the platform fill the gaps." },
          { icon: "🚀", title: "Ship Faster",     desc: "Spend the first hour hacking, not recruiting. Your stack is ready to go." },
        ].map((f) => (
          <div key={f.title} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 hover:border-green-900 transition-colors">
            <span className="text-2xl">{f.icon}</span>
            <h3 className="mt-3 font-semibold text-sm text-[var(--color-text)]">{f.title}</h3>
            <p className="mt-1 text-xs text-[var(--color-muted)] leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </section>

      <footer className="relative z-10 mt-20 text-center font-mono text-[10px] text-[var(--color-muted)]">
        Hackathon Matchmaking Platform — bootstrapped with Next.js + FastAPI + MongoDB + Redis
      </footer>
    </main>
  );
}
