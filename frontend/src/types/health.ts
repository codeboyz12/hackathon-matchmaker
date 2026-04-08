export type ServiceStatus = "ok" | "degraded" | "offline" | "unknown";

export interface ServiceInfo {
  status: ServiceStatus;
  detail?: unknown;
}

export interface HealthResponse {
  status: ServiceStatus;
  api: string;
  uptime_seconds: number;
  services: {
    mongodb: ServiceInfo;
    redis: ServiceInfo;
  };
}
