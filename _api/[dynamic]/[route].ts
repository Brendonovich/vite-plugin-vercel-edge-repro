export default function (
  _: Request,
  { params }: { params: { dynamic: string; route: string } }
) {
  return new Response(`Dynamic: ${params.dynamic}, Route: ${params.route}`);
}
