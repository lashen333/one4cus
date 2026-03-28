import type { HomeMode } from "@/types/home";

export function normalizeMode(value?: string): HomeMode {
  return value === "deals" ? "deals" : "services";
}

export function normalizeQuery(value?: string): string {
  return (value ?? "").trim().toLowerCase();
}