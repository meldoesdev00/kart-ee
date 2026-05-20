import { createClient } from "next-sanity";

export const writeClient = createClient({
  projectId: "1e1lkrrw",
  dataset: "production",
  apiVersion: "2026-05-11",
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});
