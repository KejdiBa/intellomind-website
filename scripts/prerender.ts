import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const ROUTES = [
  "/",
  "/preise",
  "/impressum",
  "/datenschutz",
  "/datenschutz-webapp",
  "/agb",
  "/leistungsbeschreibung",
  "/ki-telefonassistent",
  "/ki-chatbot",
  "/ki-mailbot",
  "/ki-workflow-automation",
];

export async function prerender() {
  const templatePath = path.join(root, "dist/public/index.html");
  const template = await readFile(templatePath, "utf-8");

  const ssrEntryPath = path.join(root, "dist/server/entry-server.js");
  const { render } = (await import(ssrEntryPath)) as {
    render: (url: string) => string;
  };

  for (const route of ROUTES) {
    console.log(`  prerendering ${route}...`);

    let html = "";
    try {
      html = render(route);
    } catch (err) {
      console.warn(`  ⚠ render failed for ${route}, using empty shell:`, (err as Error).message);
    }

    const fullHtml = template.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );

    let outPath: string;
    if (route === "/") {
      outPath = path.join(root, "dist/public/index.html");
    } else {
      outPath = path.join(root, "dist/public", route, "index.html");
    }

    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, fullHtml, "utf-8");
    console.log(`  ✓ written → ${path.relative(root, outPath)}`);
  }
}
