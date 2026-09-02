import { createClient, type Client } from "@libsql/client";

let clientInstance: Client | null = null;

export function getBlogDb(): Client {
  if (clientInstance) {
    return clientInstance;
  }

  const url = process.env.BLOG_URL;
  const authToken = process.env.BLOG_API_KEY;

  if (!url) {
    throw new Error("BLOG_URL environment variable is missing in .env");
  }

  clientInstance = createClient({
    url,
    authToken,
  });

  return clientInstance;
}
