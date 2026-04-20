import { chromium, devices } from "playwright";
import fs from "node:fs";
import path from "node:path";

const OUT = "test-screenshots";
const URL = process.env.SITE_URL || "http://localhost:3001";

fs.mkdirSync(OUT, { recursive: true });

const viewports = [
  { name: "iphone-se", device: devices["iPhone SE"] },
  { name: "iphone-13", device: devices["iPhone 13"] },
  { name: "pixel-7", device: devices["Pixel 7"] },
  {
    name: "desktop",
    device: {
      viewport: { width: 1440, height: 900 },
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
    },
  },
];

const sections = [
  { id: "topo", label: "01-hero" },
  { id: "sobre", label: "02-sobre" },
  { id: "estatisticas", label: "03-stats" },
  { id: "lances", label: "04-lances" },
  { id: "times", label: "05-times" },
  { id: "contato", label: "06-contato" },
];

const browser = await chromium.launch();
const consoleErrors = [];

for (const vp of viewports) {
  const ctx = await browser.newContext(vp.device);
  const page = await ctx.newPage();

  page.on("pageerror", (e) => consoleErrors.push(`[${vp.name}] ${e.message}`));
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      consoleErrors.push(`[${vp.name} console] ${msg.text()}`);
    }
  });

  await page.goto(URL, { waitUntil: "networkidle", timeout: 30000 });

  await page.screenshot({
    path: path.join(OUT, `${vp.name}-fullpage.png`),
    fullPage: true,
  });

  for (const s of sections) {
    await page.locator(`#${s.id}`).scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await page.screenshot({
      path: path.join(OUT, `${vp.name}-${s.label}.png`),
      fullPage: false,
    });
  }

  await ctx.close();
  console.log(`✓ ${vp.name}`);
}

await browser.close();

if (consoleErrors.length) {
  console.log("\n--- ERROS ---");
  for (const err of consoleErrors) console.log(err);
} else {
  console.log("\n✓ Sem erros de console");
}
