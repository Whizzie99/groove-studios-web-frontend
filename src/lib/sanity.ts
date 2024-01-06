import { createClient } from "next-sanity";

const projectId = "0l4ywqyd";
const dataset = "production";
const apiVersion = "2023-01-06";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
