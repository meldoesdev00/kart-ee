import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "1e1lkrrw",
  dataset: "production",
  apiVersion: "2026-05-11",
  useCdn: true,
});
