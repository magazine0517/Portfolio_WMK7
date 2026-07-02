import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "dubig5fl",
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION || "2026-06-15",
  token: import.meta.env.SANITY_API_TOKEN || undefined,
  useCdn: import.meta.env.SANITY_USE_CDN === "true",
});
