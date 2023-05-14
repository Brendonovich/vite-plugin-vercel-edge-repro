import { get } from "@vercel/edge-config";

export async function GET(
  _: Request,
  {
    params,
  }: {
    params: {
      target: string;
      arch: string;
      currentVersion: string;
    };
  }
) {
  const releases = await get<Record<string, any>>("main");

  return new Response(releases![params.target]);
}
