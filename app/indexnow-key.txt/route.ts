const key = process.env.INDEXNOW_KEY ?? "";
const isValidKey = /^[a-zA-Z0-9-]{8,128}$/.test(key);

export const dynamic = "force-static";

export function GET() {
  if (!isValidKey) {
    return new Response("Not found", { status: 404 });
  }
  return new Response(key, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
