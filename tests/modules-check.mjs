/* Real-browser functional QA for all LAB 02 modules. Run via GitHub Actions. */
import {chromium} from 'playwright';
import {resolve,join} from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
const root=resolve(fileURLToPath(new URL('..',import.meta.url)));
const browser=await chromium.launch({headless:true});
const errors=[];
let completed=0;
async function check(file,run){
  const page=await browser.newPage({viewport:{width:1280,height:900}});
  const jsErrors=[];
  page.on('pageerror',e=>jsErrors.push(e.message));
  try{
    await page.goto(pathToFileURL(join(root,file)).href,{waitUntil:'load'});
    await run(page);
    if(jsErrors.length)throw new Error(jsErrors.join('\n'));
    completed++;
    console.log('PASS:',file);
  }catch(e){errors.push({file,error:String(e.stack||e),jsErrors});console.error('FAIL:',file,String(e));}
  finally{await page.close()}
}
async function assert(page,expr,message){
  const result=await page.evaluate(expr);
  if(!result)throw new Error(message);
}
try{
await check('01_praebiotische_chemie.html',async page=>{
  await page.locator('[data-preset="evaporation"]').click();
  await assert(page,()=>document.querySelector('#concentration-result').textContent==='1,71','Concentration preset');
  await page.locator('[data-answer="double"]').click();
  await assert(page,()=>!document.querySelector('#learning-feedback').hidden,'Recall feedback');
});
await check('02_bausteine.html',async page=>{
  await page.locator('[data-molecule="nucleotide"]').click();
  await assert(page,()=>document.querySelector('#molecule-name').textContent.includes('Ribonukleotid'),'Molecule switch');
  for(const x of ['base','ribose','phosphate'])await page.locator('[data-part="'+x+'"]').click();
  await page.locator('#build-check').click();
  await assert(page,()=>document.querySelector('#build-feedback').dataset.ok==='true','Correct components');
  await page.locator('#build-reset').click();
  await assert(page,()=>[...document.querySelectorAll('[data-part]')].every(x=>x.getAttribute('aria-pressed')==='false'),'Component reset');
  await assert(page,()=>document.querySelectorAll('.lab-memory-card').length===4,'Four mnemonic cards are present');
  await assert(page,()=>['amino','base','nucleoside','nucleotide'].every(k=>document.querySelector('.lab-memory-card[data-concept="'+k+'"]')),'Four expected definitions');
  await assert(page,()=>document.querySelectorAll('.lab-memory-art svg').length===4,'Each definition has a diagram');
  await assert(page,()=>document.querySelectorAll('.lab-memory-equation').length===2,'Two composition mnemonics');
  await assert(page,()=>document.querySelector('.lab-memory-protein .lab-memory-card').dataset.concept==='amino'&&document.querySelectorAll('.lab-memory-nucleic .lab-memory-card').length===3,'Protein and nucleic acid families are separated');
  await page.locator('[data-molecule="nucleoside"]').click();
  await assert(page,()=>document.querySelector('#molecule-formula').textContent.includes('BASE + RIBOSE'),'Nucleoside distinction');
});
await check('03_protocellen.html',async page=>{
  await page.locator('[data-shape="micelle"]').click();
  await assert(page,()=>document.querySelector('#membrane-title-text').textContent==='Mizelle','Micelle diagram');
  await page.locator('[data-shape="vesicle"]').click();
  await page.locator('#membrane-permeability').evaluate(el=>{el.value='0';el.dispatchEvent(new Event('input',{bubbles:true}))});
  await assert(page,()=>document.querySelector('#membrane-inside').textContent==='0,0 %','No transport');
  await page.locator('#membrane-permeability').evaluate(el=>{el.value='100';el.dispatchEvent(new Event('input',{bubbles:true}))});
  await assert(page,()=>document.querySelector('#membrane-inside').textContent==='100,0 %','Complete transport');
});
await check('04_rna_information.html',async page=>{
  await page.locator('#rna-template').fill('AUGC');
  await page.locator('#rna-error').evaluate(el=>{el.value='0';el.dispatchEvent(new Event('input',{bubbles:true}))});
  await page.locator('#rna-copy').click();
  await assert(page,()=>document.querySelector('#rna-observed').textContent==='100 / 100','Error-free copies at p=0');
  await assert(page,()=>[...document.querySelectorAll('#rna-expected .lab-base')].map(x=>x.textContent).join('')==='UACG','RNA base pairing');
  await page.locator('#rna-template').fill('AUT');
  await assert(page,()=>document.querySelector('#rna-feedback').textContent.includes('nur die RNA-Basen'),'Reject DNA T in RNA');
  await page.locator('#rna-reset').click();
  await assert(page,()=>document.querySelector('#rna-length').textContent==='8','RNA reset');
});
await check('05_hypothesen.html',async page=>{
  await page.locator('#model-a').selectOption('compartment');
  await assert(page,()=>document.querySelector('#model-a-name').textContent.includes('Kompartiment'),'Model selection');
  await page.locator('#model-environment').selectOption('vent');
  await assert(page,()=>document.querySelector('#environment-name').textContent.includes('hydrothermale'),'Environment');
  await assert(page,()=>document.querySelector('#environment-art svg')!==null,'Environment illustration');
});
await check('06_evidenzlabor.html',async page=>{
  const answers=[0,1,2,0,1,2];
  for(let i=0;i<answers.length;i++){
    await page.locator('#ev-options button').nth(answers[i]).click();
    await assert(page,()=>document.querySelector('#ev-feedback').dataset.ok==='true','Evidence feedback '+i);
    await page.locator('#ev-next').click();
  }
  await assert(page,()=>document.querySelector('#ev-score').textContent==='6 / 6','All evidence questions');
  await page.locator('#ev-restart').click();
  await assert(page,()=>document.querySelector('#ev-score').textContent==='0 / 6','Evidence reset');
});
}finally{await browser.close()}
if(errors.length){console.error(JSON.stringify(errors,null,2));process.exitCode=1;}
else console.log('PASS:',completed,'interactive labs tested in Chromium.');
