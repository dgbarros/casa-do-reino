const requests = new Map<
  string,
  { count: number; lastRequest: number }
>();

export function rateLimit(
  ip: string,
  limit = 5,
  windowMs = 60_000
) {
  const now = Date.now();
  const entry = requests.get(ip);

  if (!entry) {
    requests.set(ip, { count: 1, lastRequest: now });
    return true;
  }

  if (now - entry.lastRequest > windowMs) {
    requests.set(ip, { count: 1, lastRequest: now });
    return true;
  }

  if (entry.count >= limit) {
    return false;
  }

  entry.count++;
  return true;
}
