/* LAB 02 / 01 – concentration model v0.1
 * Educational mass balance only: c = N/V in arbitrary relative units.
 * No chemical kinetics, reactions, precipitation, membrane assembly or real data.
 */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const water=$('water-volume'),solute=$('solute-quantity'),cloud=$('particle-cloud');
  if(!water||!solute||!cloud)return;
  const svgNS='http://www.w3.org/2000/svg',bottom=373,topAt100=103,baseline=.6;
  const format=(number,digits=2)=>new Intl.NumberFormat('de-DE',{minimumFractionDigits:digits,maximumFractionDigits:digits}).format(number);
  const clamp=(number,min,max)=>Math.min(max,Math.max(min,number));
  const hash=n=>{
    const x=Math.sin(n*127.1+78.23)*43758.5453123;
    return x-Math.floor(x);
  };
  function calculate(N,V){
    if(!Number.isFinite(N)||!Number.isFinite(V)||V<=0)throw new RangeError('Positive quantity and volume required');
    const c=N/V;
    return {N,V,c,relative:c/baseline};
  }
  function render(){
    const V=clamp(Number(water.value),20,100),N=clamp(Number(solute.value),10,120);
    const result=calculate(N,V);
    const y=bottom-(bottom-topAt100)*(V/100);
    const height=bottom-y;
    const body=$('fluid-body');
    body.setAttribute('y',y.toFixed(2));
    body.setAttribute('height',height.toFixed(2));
    $('fluid-surface').setAttribute('y1',y.toFixed(2));
    $('fluid-surface').setAttribute('y2',y.toFixed(2));
    $('water-clip-rect').setAttribute('y',y.toFixed(2));
    $('water-clip-rect').setAttribute('height',height.toFixed(2));
    cloud.replaceChildren();
    const color=['#d2eac3','#f3d1aa','#afe0dc','#e8c5ad','#d6eee6'];
    for(let i=0;i<N;i++){
      const point=document.createElementNS(svgNS,'circle');
      const x=182+276*hash(i+1),py=y+10+Math.max(1,height-20)*hash(i+292);
      point.setAttribute('cx',x.toFixed(2));
      point.setAttribute('cy',py.toFixed(2));
      point.setAttribute('r',String(2.5+(i%3)*.52));
      point.setAttribute('fill',color[i%color.length]);
      point.setAttribute('fill-opacity','.89');
      cloud.append(point);
    }
    $('water-value').textContent=V+' VE';
    $('solute-value').textContent=N+' TE';
    $('concentration-result').textContent=format(result.c);
    $('relative-result').textContent=format(result.relative)+' ×';
    $('volume-result').textContent=V+' VE';
    $('lab-beaker').setAttribute('aria-label','Schematisches Gefäß mit '+V+' Volumeneinheiten Flüssigkeit, '+N+' relativen gelösten Teilchen und einer Konzentration von '+format(result.c)+' Teilcheneinheiten pro Volumeneinheit. Keine Darstellung echter Molekülabstände.');
    const message=$('experiment-interpretation');
    message.replaceChildren();
    const strong=document.createElement('strong'),details=document.createElement('span');
    if(Math.abs(result.relative-1)<.005){
      strong.textContent='Ausgangsverhältnis.';
      details.textContent=N+' Teilcheneinheiten auf '+V+' Volumeneinheiten ergeben die relative Konzentration '+format(result.c)+'. Das entspricht unserem Ausgangszustand.';
    }else if(result.relative>1){
      strong.textContent='Höhere Konzentration: '+format(result.relative)+'-fach.';
      details.textContent='Im Modell verteilt sich die Menge von '+N+' Teilcheneinheiten auf '+V+' Volumeneinheiten. Gegenüber dem Ausgangszustand ist die relative Konzentration gestiegen. Ob reale Reaktionen dadurch besser ablaufen, kann die Gleichung allein nicht entscheiden.';
    }else{
      strong.textContent='Niedrigere Konzentration: '+format(result.relative)+'-fach.';
      details.textContent='Im Modell sind '+N+' Teilcheneinheiten auf '+V+' Volumeneinheiten verteilt. Die Konzentration liegt unter dem Ausgangsverhältnis. Reale chemische Systeme können zusätzliche Effekte zeigen.';
    }
    message.append(strong,details);
  }
  for(const el of [water,solute])el.addEventListener('input',render);
  const scenarios={
    baseline:{V:100,N:60},evaporation:{V:35,N:60},
    dilution:{V:100,N:25},more:{V:100,N:120}
  };
  for(const button of document.querySelectorAll('[data-preset]')){
    button.addEventListener('click',()=>{
      const c=scenarios[button.dataset.preset];
      if(!c)return;
      water.value=String(c.V);solute.value=String(c.N);render();
    });
  }
  const answerButtons=[...document.querySelectorAll('[data-answer]')];
  const feedback=$('learning-feedback');
  function resetQuestion(){
    feedback.hidden=true;feedback.replaceChildren();
    for(const b of answerButtons){b.disabled=false;b.classList.remove('correct','wrong');}
  }
  for(const button of answerButtons){
    button.addEventListener('click',()=>{
      if(button.disabled)return;
      const correct=button.dataset.answer==='double';
      for(const b of answerButtons){
        b.disabled=true;
        if(b.dataset.answer==='double')b.classList.add('correct');
        else if(b===button)b.classList.add('wrong');
      }
      const strong=document.createElement('strong'),p=document.createElement('p');
      strong.textContent=correct?'Richtig.':'Noch nicht ganz.';
      p.textContent='Bei gleicher Stoffmenge N und halbem Volumen V/2 gilt c = N / (V/2) = 2N/V. Die Konzentration verdoppelt sich. Das ist eine Aussage über die Mengenverteilung, kein Nachweis einer chemischen Reaktion oder von Lebensentstehung.';
      feedback.replaceChildren();feedback.append(strong,p);feedback.hidden=false;
    });
  }
  $('reset-question').addEventListener('click',resetQuestion);
  render();
  window.AbioChemistryLab=Object.freeze({calculate,render,scenarios});
})();