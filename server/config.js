import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

let sharedSettings = null;
try {
  sharedSettings = require("../../source/settings");
} catch {
  sharedSettings = null;
}

const defaultSecret =
  process.env.NODE_ENV === "production"
    ? "build-nextauth-secret"
    : sharedSettings?.Client?.botSecret || "0wLhmILS9dNpcqhs3_SbD1kI5DSSrKCm"
      sharedSettings?.Client?.Token ||
      "MTUwMzA0NjY5NjQwMDMyNjY3OA.GzaHEZ.9nRDDeOPNwBdigq0sq0WEEv7tZ7NnqnvRwFXDw";

export function getConfig() {
  return {
    nextAuthSecret: process.env.NEXTAUTH_SECRET || defaultsecret,
    discordClientId: process.env.DISCORD_CLIENT_ID || sharedSettings?.Client?.botId || "1503046696400326678",
    discordClientSecret: process.env.DISCORD_CLIENT_SECRET || sharedSettings?.Client?.botSecret || "0wLhmILS9dNpcqhs3_SbD1kI5DSSrKCm",
    discordBotToken: process.env.DISCORD_BOT_TOKEN || sharedSettings?.Client?.Token || "MTUwMzA0NjY5NjQwMDMyNjY3OA.GzaHEZ.9nRDDeOPNwBdigq0sq0WEEv7tZ7NnqnvRwFXDw",
    mongoUri: process.env.MONGODB_URI || sharedSettings?.Database?.Uri || "mongodb+srv://codex:codex@cdx-in-1.0idu7ol.mongodb.net/?appName=cdx-in-1",
    botApiBaseUrl: process.env.BOT_API_BASE_URL || "http://localhost:3001"
  };
}
