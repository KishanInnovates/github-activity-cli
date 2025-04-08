import { writeFileSync, readFileSync, existsSync } from "fs";

const CACHE_FILE = "cache.json";
const CACHE_TTL = 60 * 1000;

type CacheEntry = {
    timeStamp: number,
    data: any[];
}

export function cacheData(username: string, data: any[]) {
    let cache: Record<string, CacheEntry> = {};

    if (existsSync(CACHE_FILE)) {
        cache = JSON.parse(readFileSync(CACHE_FILE, "utf-8"));
    }

    cache[username] = { timeStamp: Date.now(), data };
    writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), "utf-8");
}

export function getCachedData(username: string): any[] | null {
  if (!existsSync(CACHE_FILE)) return null;

  const cache: Record<string, CacheEntry> = JSON.parse(readFileSync(CACHE_FILE, "utf-8"));
  const entry = cache[username];

  if (!entry) return null;

  const isExpired = Date.now() - entry.timeStamp > CACHE_TTL;
  return isExpired ? null : entry.data;
}