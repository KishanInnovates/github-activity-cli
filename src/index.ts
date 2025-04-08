#!/usr/bin/env node

import { fetchGithubActivity } from "./github";
import { formatActivity } from "./utils";
import { cacheData, getCachedData } from "./cache";

const args = process.argv.slice(2);

if (args.length < 1) {
    console.error("Usage: github-activity <username> [--filter <type>] [--limit <num>]");
    process.exit(1);
}

const username = args[0];
let filterType = ""
let limit = 5;

for (let i = 1; i < args.length; i++) {
    if (args[i] === "--filter" && args[i + 1]) {
        filterType = args[i + 1];
    } else if (args[i] === "--limit" && args[i + 1]) {
        limit = parseInt(args[i + 1], 10) || 5;

    }
}

const cachedData = getCachedData(username);
if (cachedData) {
  console.log("Using cached data:");
  console.log(formatActivity(cachedData, filterType, limit));
  process.exit(0);
}

fetchGithubActivity(username)
    .then((events) => {
        cacheData(username, events);
        console.log(formatActivity(events, filterType, limit));
    })
    .catch((error) => {
        console.log("Error:", error.message);
    })