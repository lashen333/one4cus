//Pages changing functions

export function toArray(value?: string | string[]): string[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

export function toNumber(value?: string, fallback = 1): number {
  const num = Number(value);
  return Number.isNaN(num) || num < 1 ? fallback : num;
}