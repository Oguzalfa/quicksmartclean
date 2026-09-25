// Notify IndexNow (Bing, Yandex, etc.) about specific public URLs that were added, updated or removed.
// Usage:
//   node scripts/indexnow.mjs /sektorler/restoranlar /hizmetler/kurumsal-tesis-temizligi   (dry run)
//   node scripts/indexnow.mjs --submit /sektorler/restoranlar                              (sends)
// Requires INDEXNOW_KEY to be set here and deployed, so that /indexnow-key.txt serves the same key.

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.quicksmartclean.com").replace(/\/$/, "");
const ENDPOINT = "https://api.indexnow.org/indexnow";
const MAX_URLS = 100;

const args = process.argv.slice(2);
const submit = args.includes("--submit");
const inputs = args.filter((arg) => !arg.startsWith("--"));

function fail(message) {
  console.error(`indexnow: ${message}`);
  process.exit(1);
}

const key = process.env.INDEXNOW_KEY ?? "";
if (!/^[a-zA-Z0-9-]{8,128}$/.test(key)) {
  fail("INDEXNOW_KEY is missing or invalid (8-128 characters: letters, digits, '-').");
}
if (inputs.length === 0) {
  fail("Pass the changed public URLs or paths explicitly. Bulk submission of every URL is intentionally not supported.");
}
if (inputs.length > MAX_URLS) {
  fail(`Refusing to submit more than ${MAX_URLS} URLs at once.`);
}

const site = new URL(SITE_URL);
const urlList = [...new Set(inputs.map((input) => {
  const url = new URL(input, `${SITE_URL}/`);
  if (url.host !== site.host || url.protocol !== "https:") {
    fail(`${input} is not on ${site.origin}.`);
  }
  if (url.pathname.startsWith("/api/")) {
    fail(`${input} is not a public page.`);
  }
  url.hash = "";
  return url.toString();
}))];

const keyLocation = `${site.origin}/indexnow-key.txt`;
const payload = { host: site.host, key, keyLocation, urlList };

if (!submit) {
  console.log("Dry run — nothing sent. Add --submit to notify IndexNow.");
  console.log(JSON.stringify({ ...payload, key: `${key.slice(0, 4)}…` }, null, 2));
  process.exit(0);
}

const keyCheck = await fetch(keyLocation);
const servedKey = keyCheck.ok ? (await keyCheck.text()).trim() : "";
if (servedKey !== key) {
  fail(`${keyLocation} does not serve INDEXNOW_KEY yet (HTTP ${keyCheck.status}). Deploy with the key first.`);
}

const response = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

const meaning = {
  200: "accepted",
  202: "received; key validation pending",
  400: "bad request",
  403: "key not valid for this host",
  422: "URLs do not match the host or key",
  429: "too many requests",
}[response.status] ?? "unexpected response";

console.log(`IndexNow HTTP ${response.status}: ${meaning}. ${urlList.length} URL(s).`);
if (!response.ok) process.exit(1);
