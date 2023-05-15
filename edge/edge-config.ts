import { get } from "@vercel/edge-config";

export default async function () {
  const data = await get("config");

  return new Response(JSON.stringify(data));
}
