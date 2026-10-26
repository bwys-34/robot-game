// Real browser check: original archive layout, contained images, years and app navigation.
const { chromium } = require(process.env.PLAYWRIGHT_CORE_PATH || 'playwright-core');
const assert = require('node:assert/strict');
const path = require('node:path');
(async () => {
  const browser = await chromium.launch({executablePath:process.env.BROWSER_PATH,headless:true});
  try {
    for (const viewport of [{width:1080,height:1920},{width:720,height:1280},{width:1920,height:1080}]) {
      const page = await browser.newPage({viewport});
      const errors=[];
      page.on('pageerror',e=>errors.push(e.message));
      await page.goto('http://127.0.0.1:8765/index.html#archive');
      await page.waitForLoadState('networkidle');
      const archive = page.frames().find(f=>f.url().includes('/archive.html')) || page.mainFrame();
      assert.equal(await archive.locator('.catalog').count(),1,'Restore the original catalog instead of the replacement card layout');
      assert.equal(await archive.locator('.catalog-item').count(),12);
      assert.equal(await archive.locator('.catalog-year').first().innerText(),'2015');
      assert(await archive.locator('.catalog-photo').evaluateAll(nodes=>nodes.every(node=>{
        const p=node.getBoundingClientRect(),i=node.querySelector('img').getBoundingClientRect();
        return i.height>30&&i.left>=p.left&&i.right<=p.right+1&&i.top>=p.top&&i.bottom<=p.bottom+1;
      })),'Robot images must fit inside their photo areas');
      if(process.env.QA_SCREENSHOT_DIR) await page.screenshot({path:path.join(process.env.QA_SCREENSHOT_DIR,`restored-list-${viewport.width}.png`),fullPage:true});
      await archive.locator('#archive-year').selectOption('2024');
      assert(await archive.locator('.catalog-year').evaluateAll(nodes=>nodes.every(n=>n.textContent==='2024')));
      await archive.locator('.catalog-item').first().click();
      await archive.locator('.detail-view').waitFor();
      assert.match(page.url(),/#robot\//);
      assert(await archive.locator('.facts').innerText().then(t=>t.includes('2024')));
      await archive.locator('[aria-label="原始照片"]').click();
      await archive.locator('dialog[open]').waitFor();
      await archive.locator('[aria-label="关闭原图"]').click();
      assert.equal(await archive.locator('dialog[open]').count(),0);
      if(process.env.QA_SCREENSHOT_DIR) await page.screenshot({path:path.join(process.env.QA_SCREENSHOT_DIR,`restored-detail-${viewport.width}.png`),fullPage:true});
      await page.goBack();
      await archive.locator('.catalog').waitFor();
      assert.equal(await archive.locator('#archive-year').inputValue(),'2024');
      await archive.locator('#archive-start').click();
      await page.locator('.answer:not(:disabled)').first().waitFor();
      assert.deepEqual(errors,[]);
      console.log(`PASS original archive ${viewport.width}x${viewport.height}`);
      await page.close();
    }
    const direct = await browser.newPage({viewport:{width:1080,height:1920}});
    await direct.goto('http://127.0.0.1:8765/index.html#robot/15');
    const detail = direct.frameLocator('#original-archive');
    await detail.locator('.detail-view').waitFor();
    assert.match(await detail.locator('.visual img').getAttribute('src'), /photos\/15\.jpg$/);
    await direct.reload();
    await detail.locator('.detail-view').waitFor();
    assert.match(await detail.locator('.visual img').getAttribute('src'), /photos\/15\.jpg$/);
    await direct.goto('http://127.0.0.1:8765/index.html#robot/invalid');
    await detail.locator('.catalog').waitFor();
    assert.match(direct.url(), /#archive$/);
    console.log('PASS direct detail URL, refresh and invalid ID');
    await direct.close();
  } finally {await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
