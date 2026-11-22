/**
 * Layout regression suite for all current and future standalone LAB 02 pages.
 * Usage: npm install --no-save playwright; npx playwright install chromium;
 *        node tests/layout-check.mjs
 *
 * Tests actual layout in headless Chromium. A fixed viewport must never gain
 * document-level horizontal scrolling, and combined .abio-wrap.abio-lower
 * sections must preserve the normal page gutters at every breakpoint.
 * Does not modify the standalone static site or its runtime.
 */
import { chromium } from 'playwright';
import { readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const pages = readdirSync(root).filter(name => name === 'index.html' || /^\d{2}_[\w-]+\.html$/.test(name));
const widths = [320, 360, 375, 390, 480, 650, 768, 850, 1024, 1180, 1440, 1600];
const failures = [];
if (pages.length < 2) throw new Error('Expected index.html and at least one sublab.');
const browser = await chromium.launch({headless: true});
try {
  for (const file of pages) {
    const page = await browser.newPage({viewport:{width:widths[0],height:900},deviceScaleFactor:1});
    const pageErrors = [];
    page.on('pageerror', e => pageErrors.push(e.message));
    await page.goto(pathToFileURL(join(root, file)).href, {waitUntil:'load'});
    await page.evaluate(() => document.fonts.ready);
    for (const width of widths) {
      await page.setViewportSize({width,height:900});
      const result = await page.evaluate(() => {
        const viewport = document.documentElement.clientWidth;
        const scrollWidth = document.documentElement.scrollWidth;
        const items = [...document.body.querySelectorAll('*')];
        const offenders = items.flatMap(el => {
          if (getComputedStyle(el).position === 'fixed') return [];
          const r = el.getBoundingClientRect();
          return r.width > 0 && (r.right > viewport + 1.1 || r.left < -1.1)
            ? [{tag:el.tagName.toLowerCase(),className: typeof el.className === 'string' ? el.className.slice(0,95) : '',left:Math.round(r.left),right:Math.round(r.right)}]
            : [];
        }).slice(0,7);
        const combined = [...document.querySelectorAll('.abio-wrap.abio-lower')].map(el => {
          const style = getComputedStyle(el);
          const bounds = el.getBoundingClientRect();
          return {left:parseFloat(style.paddingLeft),right:parseFloat(style.paddingRight),
                  boxLeft:bounds.left,boxRight:bounds.right};
        });
        return {viewport,scrollWidth,offenders,combined};
      });
      if (result.scrollWidth > width + 1) {
        failures.push({page:file,width,kind:'horizontal overflow',scrollWidth:result.scrollWidth,offenders:result.offenders});
      }
      if (result.combined.some(el => el.left < 17 || el.right < 17 || el.boxLeft < -1 || el.boxRight > width + 1)) {
        failures.push({page:file,width,kind:'lost container gutters',sections:result.combined});
      }
      if (!Number.isFinite(result.scrollWidth) || result.viewport !== width) {
        failures.push({page:file,width,kind:'viewport measurement mismatch',measurement:result});
      }
    }
    if (pageErrors.length) failures.push({page:file,kind:'JavaScript errors',errors:pageErrors});
    console.log('Checked',file,'at',widths.join(', '),'px');
    await page.close();
  }
} finally {
  await browser.close();
}
if (failures.length) {
  console.error('\nLayout regression failures:\n'+JSON.stringify(failures,null,2));
  process.exitCode=1;
} else {
  console.log('\nPASS:',pages.length,'pages ×',widths.length,'viewport sizes; no horizontal overflow; section gutters preserved.');
}
