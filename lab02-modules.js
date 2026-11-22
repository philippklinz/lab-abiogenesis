/* LAB 02 / Modules 02-06 — standalone didactic interactions, v0.1.
 * NO chemical dynamics, chemical synthesis, RNA polymerase or simulation of life.
 * Science references are linked on the relevant page.
 */
(() => {
'use strict';
const $ = id => document.getElementById(id);
const module = document.body.dataset.sublab;
const set = (id,value) => {const el=$(id);if(el)el.textContent=String(value)};
const fmt = (n,d=1) => new Intl.NumberFormat('de-DE',{minimumFractionDigits:d,maximumFractionDigits:d}).format(n);
const svg = content => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" aria-hidden="true" focusable="false"><path d="M25 24h20M25 24v20M515 24h20v20M25 278v20h20M515 298h20v-20" stroke="#7bbbac" stroke-width="1.5" fill="none"/>'+content+'</svg>';
const text = (x,y,value,size=13,anchor='middle',color='#d0eee3')=>'<text x="'+x+'" y="'+y+'" fill="'+color+'" font-family="Liberation Mono,monospace" font-size="'+size+'" text-anchor="'+anchor+'">'+value+'</text>';

function moleculeModule(){
  const molecules={
    amino:{name:'Glycin',tag:'AMINOSÄURE',formula:'GLYCIN / NH₂–CH₂–COOH',
      desc:'Glycin ist die einfachste proteinogene α-Aminosäure. Sie besitzt eine Aminogruppe und eine Carboxylgruppe am selben zentralen Kohlenstoffatom; ihre Seitenkette ist ein Wasserstoff.',
      parts:'Aminogruppe (–NH₂), Carboxylgruppe (–COOH), ein zentraler Kohlenstoff und die Seitenkette H. Je nach pH-Wert kann Glycin in geladener Form vorliegen.',
      limit:'Ein struktureller Bauplan beweist nicht, wie Glycin auf der frühen Erde entstand oder wie daraus ein Peptid wurde.',
      art:svg('<path d="M145 164h88m92 0h83M272 164v-52m0 52v54" stroke="#94cbbb" stroke-width="5"/><circle cx="115" cy="164" r="39" fill="#256d75" stroke="#9adcc9" stroke-width="3"/><circle cx="275" cy="164" r="42" fill="#b88665" stroke="#e9c7a0" stroke-width="3"/><circle cx="438" cy="164" r="52" fill="#426e69" stroke="#a7d7c0" stroke-width="3"/>'+text(115,170,'NH₂',20)+text(275,170,'CH₂',18)+text(438,169,'COOH',18)+text(275,95,'H',15)+text(278,245,'H',15)+text(280,294,'EINFACHE AMINOSÄURE',11))},
    nucleotide:{name:'Ribonukleotid',tag:'RNA-BAUSTEIN',formula:'NUKLEOTID / BASE + RIBOSE + PHOSPHAT',
      desc:'Ein Ribonukleotid ist eine Nukleobase, die an Ribose gebunden ist, mit mindestens einer Phosphatgruppe. RNA enthält vier gewöhnliche Basen: A, U, G und C.',
      parts:'Nukleobase, Pentosezucker Ribose und Phosphatgruppe. Der Zucker hat die für RNA charakteristische 2′-OH-Gruppe.',
      limit:'Das Zusammenstellen dreier Begriffe ist keine Syntheseroute. Präbiotische Bildung von (aktivierten) Nukleotiden ist ein eigenes experimentelles Forschungsthema.',
      art:svg('<path d="M147 166h68m120 0h59" stroke="#a4d3c0" stroke-width="5"/><circle cx="99" cy="166" r="48" fill="#426f82" stroke="#a4d6d9" stroke-width="4"/><path d="M272 115l59 44-24 68h-70l-24-68z" fill="#6e8e71" stroke="#c4e4b5" stroke-width="4"/><circle cx="442" cy="166" r="47" fill="#b78563" stroke="#edd0aa" stroke-width="3"/>'+text(99,171,'BASE',16)+text(272,170,'RIBOSE',14)+text(442,170,'PO₄',17)+text(280,290,'SCHEMA / KEINE SYNTHESE',12))},
    fatty:{name:'Fettsäure (schematisch)',tag:'AMPHIPHILES MOLEKÜL',formula:'FETTSÄURE / POLARER KOPF + KOHLENWASSERSTOFFKETTE',
      desc:'Fettsäuren besitzen eine Carboxylgruppe am Ende einer meist unpolaren Kohlenwasserstoffkette. Einige können unter geeigneten Bedingungen Membranaggregate und Vesikel bilden.',
      parts:'Hydrophiler, pH-abhängig geladener Carboxyl-Kopf und hydrophober Kohlenwasserstoff-Schwanz.',
      limit:'Nicht jede Fettsäure bildet bei beliebigem pH-Wert, Salzgehalt und Konzentration stabile Vesikel. Die Grafik sagt nichts über eine tatsächliche präbiotische Synthese.',
      art:svg('<circle cx="120" cy="160" r="48" fill="#408e8b" stroke="#a8e6d0" stroke-width="4"/><path d="M169 160l36-26 36 29 36-31 36 29 36-30 36 29 36-28 37 28" stroke="#e6c292" stroke-width="8" stroke-linejoin="round" fill="none"/>'+text(120,165,'COOH',17)+text(280,96,'HYDROPHOBE KETTE',12)+text(135,247,'POLARER KOPF',12)+text(280,291,'EINFACHES AMPHIPHIL',12))},
    nucleoside:{name:'Ribonukleosid',tag:'NUKLEOSID (OHNE PHOSPHAT)',formula:'NUKLEOSID / BASE + RIBOSE',
      desc:'Ein Ribonukleosid besteht aus einer Nukleobase und Ribose, aber nicht aus einer kovalent daran gebundenen Phosphatgruppe.',
      parts:'Nukleobase und Ribose. Erst durch Phosphorylierung entsteht daraus eine Nukleotid-Form; wie diese chemisch zustande kommt, ist eine separate Frage.',
      limit:'Das einfache Verknüpfen freier Ribose und einer freien Base funktioniert präbiotisch nicht automatisch. Bekannte plausible Synthesewege können andere Zwischenprodukte nutzen.',
      art:svg('<path d="M220 161h48" stroke="#abd7c8" stroke-width="5"/><circle cx="163" cy="161" r="58" fill="#366b82" stroke="#b6dce0" stroke-width="4"/><path d="M345 104l62 47-23 80h-77l-24-80z" fill="#738f75" stroke="#c5deb6" stroke-width="4"/>'+text(163,166,'BASE',17)+text(347,161,'RIBOSE',16)+text(280,272,'OHNE PHOSPHAT',12))},
  };
  const tabs=[...document.querySelectorAll('[data-molecule]')];
  function select(key){
    const m=molecules[key];if(!m)return;
    tabs.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.molecule===key)));
    $('molecule-art').innerHTML=m.art;
    for(const [id,value] of Object.entries({'molecule-name':m.name,'molecule-tag':m.tag,'molecule-formula':m.formula,'molecule-description':m.desc,'molecule-parts':m.parts,'molecule-limit':m.limit}))set(id,value);
    $('molecule-art').setAttribute('aria-label','Symbolisches Strukturdiagramm: '+m.name+'. Eine textliche Beschreibung steht daneben.');
  }
  tabs.forEach(b=>b.addEventListener('click',()=>select(b.dataset.molecule)));
  const parts=[...document.querySelectorAll('[data-part]')];const chosen=new Set;
  parts.forEach(b=>b.addEventListener('click',()=>{
    if(chosen.has(b.dataset.part))chosen.delete(b.dataset.part);else chosen.add(b.dataset.part);
    b.setAttribute('aria-pressed',String(chosen.has(b.dataset.part)));
    set('build-feedback',chosen.size+' von 3 gesuchten Bestandteilen ausgewählt.');
  }));
  $('build-check').addEventListener('click',()=>{
    const correct=['base','ribose','phosphate'];
    const ok=chosen.size===3&&correct.every(x=>chosen.has(x));
    const target=$('build-feedback');target.dataset.ok=String(ok);
    target.textContent=ok?'Richtig: Ein Ribonukleotid umfasst Nukleobase, Ribose und Phosphat. Damit hast du die Zusammensetzung benannt, nicht den chemischen Herstellungsweg.':
      'Noch nicht: Gesucht sind Nukleobase, Ribose und Phosphatgruppe. Vergleiche auch die Definition des Ribonukleosids (ohne Phosphat).';
  });
  $('build-reset').addEventListener('click',()=>{
    chosen.clear();parts.forEach(b=>b.setAttribute('aria-pressed','false'));set('build-feedback','Wähle drei Bestandteile.');delete $('build-feedback').dataset.ok;
  });
  select('amino');
}

function membraneModule(){
  let shape='vesicle';
  const descriptions={
    free:['Einzelne Amphiphile','Einzelmoleküle sind in der Zeichnung voneinander getrennt. Das Modell beschreibt keine reale Konzentrations- oder Bewegungsverteilung.','Aus einzelnen Amphiphilen lässt sich weder eine kritische Aggregationskonzentration noch eine stabile Membran ableiten.','EINZELMOLEKÜLE / KEIN INNENRAUM'],
    micelle:['Mizelle','Eine Mizelle ordnet hydrophile Köpfe nach außen und unpolare Schwänze nach innen. Sie besitzt keinen abgeschlossenen wässrigen Innenraum wie ein Vesikel.','Die hier gezeigte Anordnung ist eine symbolische Struktur. Tatsächliche Aggregate hängen unter anderem von Molekülgeometrie und Lösungsmittel ab.','MIZELLE / UNPOLARER KERN'],
    vesicle:['Vesikel','Ein Vesikel umschließt einen wässrigen Innenraum mit einer Membran aus Amphiphilen; einige geeignete Fettsäuren können unter kontrollierten Bedingungen solche Hüllen bilden.','Ein Vesikel ist nicht automatisch eine lebende Zelle und kann bei falschem pH oder hohem Salzgehalt destabilisiert werden.','VESIKEL / WÄSSRIGER INNENRAUM']
  };
  const amph=(x,y,dx,dy)=>'<line x1="'+(x+dx*.32).toFixed(1)+'" y1="'+(y+dy*.32).toFixed(1)+'" x2="'+(x+dx).toFixed(1)+'" y2="'+(y+dy).toFixed(1)+'" stroke="#e7c18d" stroke-width="4" stroke-linecap="round"/><circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="6.5" fill="#73cbbb" stroke="#cdf4df" stroke-width="1.4"/>';
  function graphic(type){
    let result='';
    if(type==='free'){
      for(let i=0;i<21;i++){const x=83+(i%7)*64,y=76+Math.floor(i/7)*87;
        result+=amph(x,y,17+(i%3)*4,17+((i*7)%19));}
      result+=text(280,306,'ISOLIERTE AMPHIPHILE',13);
    }else if(type==='micelle'){
      result+='<circle cx="280" cy="162" r="90" fill="#35565c" stroke="#7bb2ad" stroke-width="2" stroke-dasharray="5 8"/>';
      for(let i=0;i<26;i++){const a=2*Math.PI*i/26,r=105,x=280+r*Math.cos(a),y=162+r*Math.sin(a);
        result+=amph(x,y,-53*Math.cos(a),-53*Math.sin(a));}
      result+=text(280,164,'UNPOLARER',15)+text(280,182,'KERN',15)+text(280,305,'KEIN WÄSSRIGER HOHLRAUM',12);
    }else{
      result+='<circle cx="280" cy="157" r="89" fill="#1b5a61" stroke="#86a99d" stroke-width="2"/>';
      for(let i=0;i<36;i++){const a=2*Math.PI*i/36,co=Math.cos(a),si=Math.sin(a);
        result+=amph(280+137*co,157+137*si,-39*co,-39*si);
        result+=amph(280+85*co,157+85*si,37*co,37*si);}
      result+=text(280,158,'WASSER',17)+text(280,178,'INNEN',11)+text(280,313,'MODELL-VESIKEL',12);
    }
    return svg(result);
  }
  const buttons=[...document.querySelectorAll('[data-shape]')];
  function select(key){
    if(!descriptions[key])return;shape=key;
    buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.shape===key)));
    const [name,description,limit,caption]=descriptions[key];
    for(const [id,value] of Object.entries({'membrane-title-text':name,'membrane-description':description,'membrane-caveat':limit,'membrane-art-label':caption}))set(id,value);
    $('membrane-art').innerHTML=graphic(key);
    $('membrane-art').setAttribute('aria-label','Symbolische Darstellung: '+name);
    set('membrane-kind',key==='vesicle'?'KOMPARTIMENTIERUNG':key==='micelle'?'AGGREGATION':'EINZELMOLEKÜLE');
  }
  buttons.forEach(b=>b.addEventListener('click',()=>select(b.dataset.shape)));
  const permeability=$('membrane-permeability'),steps=$('membrane-steps');
  function calculate(p,t){
    if(p<0||p>1||t<0)throw new RangeError('Invalid abstract model parameters');
    return 100*(1-Math.pow(1-p,t));
  }
  function render(){
    const p=Number(permeability.value)/100,t=Number(steps.value),inside=calculate(p,t);
    set('permeability-label',fmt(p*100,0)+' %');
    set('membrane-steps-label',t);
    set('membrane-inside',fmt(inside)+' %');
    set('membrane-diff',fmt(100-inside)+' %');
    set('membrane-result',t===0?'Noch kein Modellschritt vergangen: Innenraum beginnt bei 0 %.':
       p===0?'Im Modell ist die Grenze undurchlässig. Der Innenwert bleibt bei 0 %.':
       'Mit diesem frei gewählten Austauschw ert steigt der Innenwert nach '+t+' Schritten auf '+fmt(inside)+' %. Das ist keine empirische Membranpermeabilität.'.replace('Austauschw ert','Austauschwert'));
  }
  [permeability,steps].forEach(x=>x.addEventListener('input',render));
  select('vesicle');render();
  window.AbioMembraneMath=Object.freeze({calculate});
}

function rnaModule(){
  const map={A:'U',U:'A',G:'C',C:'G'},alphabet='AUGC';
  const field=$('rna-template'),err=$('rna-error'),feedback=$('rna-feedback');
  const makeBases=(id,sequence,expected)=>{
    const target=$(id);target.replaceChildren();
    for(const [i,base] of [...sequence].entries()){
      const e=document.createElement('span');e.className='lab-base'+(expected&&base!==expected[i]?' error':'');
      e.textContent=base;e.title=expected&&base!==expected[i]?'Modellfehler an Position '+(i+1):'Position '+(i+1);
      target.append(e);
    }
  };
  function computeTheory(length,prob){return Math.pow(1-prob,length)}
  let lastInput='',attempt=0;
  function prepare(){
    const s=field.value.trim().toUpperCase(),p=Number(err.value)/100;
    set('rna-error-label',fmt(p*100,0)+' %');
    if(!/^[AUGC]{1,28}$/.test(s)){
      feedback.dataset.ok='false';
      feedback.textContent='Bitte 1 bis 28 Zeichen verwenden – nur die RNA-Basen A, U, G und C. Kein T (das gehört zu DNA).';
      for(const id of ['rna-original','rna-expected','rna-copied'])$(id).replaceChildren();
      set('rna-length','–');set('rna-theory','–');set('rna-observed','–');
      return null;
    }
    if(s!==lastInput){$('rna-copied').replaceChildren();set('rna-observed','–');lastInput=s}
    const target=[...s].map(c=>map[c]).join('');
    makeBases('rna-original',s);
    makeBases('rna-expected',target);
    set('rna-length',s.length);
    set('rna-theory',fmt(100*computeTheory(s.length,p),2)+' %');
    return {s,target,p};
  }
  function experiment(){
    const state=prepare();if(!state)return;
    const {target,p}=state;
    let good=0,show='',errors=0;
    for(let trial=0;trial<100;trial++){
      let copy='',errorCount=0;
      for(const letter of target){
        if(Math.random()<p){
          const variants=[...alphabet].filter(x=>x!==letter);
          copy+=variants[Math.floor(Math.random()*variants.length)];errorCount++;
        }else copy+=letter;
      }
      if(!errorCount)good++;
      if(trial===0){show=copy;errors=errorCount;}
    }
    makeBases('rna-copied',show,target);
    set('rna-observed',good+' / 100');
    feedback.dataset.ok='true';
    feedback.textContent='Einzelversuch: '+errors+' abweichende Positionen. Unter 100 Modellkopien waren '+good+' vollständig korrekt. Die theoretische Chance je Kopie liegt bei '+fmt(100*computeTheory(target.length,p),2)+' %. Zufall kann den beobachteten Anteil schwanken lassen.';
    attempt++;
  }
  field.addEventListener('input',prepare);
  err.addEventListener('input',()=>{prepare();$('rna-copied').replaceChildren();set('rna-observed','–')});
  $('rna-copy').addEventListener('click',experiment);
  $('rna-reset').addEventListener('click',()=>{
    field.value='AUGCCGAU';err.value='5';lastInput='';prepare();
    feedback.dataset.ok='true';
    feedback.textContent='Ausgangszustand wiederhergestellt. Starte die 100 Modellkopien.';
  });
  prepare();
  window.AbioRNAMath=Object.freeze({computeTheory});
}

function hypothesisModule(){
  const models={
    rna:{name:'RNA-zentrierte Modelle',focus:'Wie könnten Moleküle sowohl Information tragen als auch chemische Reaktionen katalysieren?',evidence:'RNA kann heute als Ribozym wirken; unter geeigneten Laborbedingungen sind Schritte nichtenzymatischer Vorlagenkopie möglich.',limit:'Vollständige, robuste Entstehung und wiederholte Replikation komplexer RNA unter plausibel präbiotischen Bedingungen bleiben schwer zu erklären.'},
    metabolism:{name:'Stoffwechsel-zuerst-Modelle',focus:'Könnten geochemische Energiegradienten zuerst sich selbst erhaltende Reaktionsnetze ermöglicht haben?',evidence:'Mineraloberflächen, Metallkatalyse und hydrothermale chemische Gradienten können bestimmte organische Umsetzungen ermöglichen.',limit:'Der Weg von solchen Reaktionen zu stabilen Netzen mit Vererbung und evolvierender Individualität ist nicht geschlossen.'},
    compartment:{name:'Kompartiment-zentrierte Modelle',focus:'Könnte die Bildung abgegrenzter Mikroräume entscheidende Reaktionen und Stoffaustausch gefördert haben?',evidence:'Geeignete Amphiphile können Vesikel bilden; in Labors wurden Wachstum und einfache Teilungsprozesse von Modellhüllen beobachtet.',limit:'Kompartimente allein erklären weder Information noch chemischen Energiehaushalt oder stabile Vererbung.'},
    coupled:{name:'Gekoppelte Systeme',focus:'Wie könnten Membran, Reaktionschemie, Umweltflüsse und Informationsmoleküle schrittweise voneinander abhängig geworden sein?',evidence:'Labore untersuchen Wechselwirkungen zwischen Fettsäurevesikeln, RNA und nass-trocken-getriebenen Reaktionen.',limit:'Eine vollständig autonome und historisch plausible Übergangsfolge zu lebenden Zellen ist nicht demonstriert.'}
  };
  const environments={
    pond:{name:'Nass-trocken-Zyklen',story:'Vorübergehend trocknende Wasserstellen und geothermale Felder erzeugen wechselnde Wasseraktivität, Konzentration und chemische Bedingungen.',pro:'Lokale Konzentration, Phasenwechsel, wiederholte Dehydratation und Rehydratation sind experimentell untersuchbare Einflüsse auf Synthesen.',con:'Austrocknen kann Moleküle auch schädigen; Stoffnachschub, Temperatur, Nebenprodukte und geologische Plausibilität müssen stimmen.',caption:'WASSER ↔ TROCKENHEIT',
      art:'<path d="M35 220q110-75 205 0t290-25v93H35Z" fill="#a77d60"/><path d="M25 236q108-62 212-11t300-30" fill="none" stroke="#d9af82" stroke-width="8"/><path d="M55 245q130-32 245 0t209-16" fill="none" stroke="#65b9c1" stroke-width="9"/><circle cx="449" cy="80" r="32" fill="#d9c184"/><path d="M155 93v46m-12-12 12 12 12-12" stroke="#a9e2d5" stroke-width="4"/>'},
    vent:{name:'Alkalische hydrothermale Quellen',story:'Poröse mineralische Strukturen am Meeresboden können geochemische Gradienten zwischen hydrothermalen Flüssigkeiten und Meerwasser erzeugen.',pro:'Kontinuierliche Energie- und Stoffflüsse sowie Mineraloberflächen bieten Bedingungen für bestimmte katalytische Reaktionen.',con:'Einige organische Stoffe sind in der Umgebung instabil; Verdünnung, Salz, Temperatur und die Kopplung an Informationschemie sind offene Aufgaben.',caption:'PORÖSE QUELLE / GRADIENT',
      art:'<path d="M0 258q125-42 258-10t302-9v61H0Z" fill="#587a84"/><path d="M195 260l22-119 48-37 33 46 26 111" fill="#617f6e" stroke="#b2bfa7" stroke-width="4"/><path d="M242 215l-6-68m47 71-10-73" stroke="#debe91" stroke-width="8"/><path d="M248 100q-25-20 2-42m30 54q22-27-8-48" stroke="#79d0c8" stroke-width="4" fill="none"/><path d="M45 77q120-32 240 0t230-10" stroke="#5599ac" stroke-width="6" fill="none"/>'},
    ice:{name:'Eis und Gefrier-Konzentration',story:'Beim Gefrieren kann gelöstes Material in verbleibenden flüssigen Zwischenräumen konzentriert werden. Das ist nicht dasselbe wie eine Welt aus massivem, homogenem Eis.',pro:'Kleine Flüssigkeitskanäle und reduzierte Reaktions- beziehungsweise Abbaugeschwindigkeiten können bestimmte chemische Schritte beeinflussen.',con:'Nicht alle Reaktionen laufen bei Kälte ausreichend schnell ab; Salzverteilung und Eisstruktur sind variabel.',caption:'EIS / MIKROFLÜSSIGKEIT',
      art:'<path d="M15 240L122 77l93 128 99-150 99 143 80-99 67 138v57H15Z" fill="#8abfce"/><path d="M122 77l-38 84 39-16 30 42 62 18M314 55l-40 89 42-21 35 39 62 36" fill="#d8eee6"/><path d="M35 252q130-33 260 0t230-14" stroke="#65bbc7" stroke-width="5" fill="none"/>'},
    mineral:{name:'Mineralische Oberflächen',story:'Kristall- und Mineraloberflächen können Moleküle adsorbieren, lokal konzentrieren oder unter bestimmten Voraussetzungen chemische Reaktionen katalysieren.',pro:'Grenzflächen schaffen Reaktionsräume und können die Ausrichtung oder Selektivität ausgewählter chemischer Prozesse verändern.',con:'Starke Bindung kann Produkte blockieren; welche Minerale und Reaktionen in der Frühzeit tatsächlich zusammenkamen, ist ungeklärt.',caption:'OBERFLÄCHE / ADSORPTION',
      art:'<path d="M30 235l65-59 80 40 92-100 76 75 84-62 101 104v49H30Z" fill="#587e7c"/><path d="M95 176l80 40 92-100 76 75 84-62" stroke="#aac7b6" stroke-width="4" fill="none"/><g fill="#a6dec7"><circle cx="95" cy="149" r="10"/><circle cx="174" cy="189" r="9"/><circle cx="267" cy="92" r="9"/><circle cx="342" cy="163" r="10"/><circle cx="426" cy="99" r="9"/></g><g stroke="#aad5bf" stroke-dasharray="3 6" stroke-width="2"><path d="M95 160v16M174 198v18M267 102v14M342 173v18M426 110v19"/></g>'}
  };
  function render(){
    const a=models[$('model-a').value],b=models[$('model-b').value],e=environments[$('model-environment').value];
    if(!a||!b||!e)return;
    for(const [prefix,m] of [['model-a',a],['model-b',b]]){
      set(prefix+'-name',m.name);set(prefix+'-focus',m.focus);set(prefix+'-evidence',m.evidence);set(prefix+'-limit',m.limit);
    }
    set('model-compare-note',$('model-a').value===$('model-b').value?'Beide Seiten zeigen denselben Ansatz. Wähle zwei unterschiedliche Modelle, um Schwerpunkte und offene Probleme zu vergleichen.':
      'Es gibt kein wissenschaftlich fundiertes Punktesystem, das einen Ansatz hier zum Gewinner macht. Beide beantworten unterschiedliche Fragen, und ihre Teilmechanismen können zusammenwirken.');
    set('environment-name',e.name);set('environment-story',e.story);set('environment-pro',e.pro);set('environment-con',e.con);set('environment-caption',e.caption);
    $('environment-art').innerHTML=svg(e.art+text(280,299,e.caption,12));
    $('environment-art').setAttribute('aria-label','Symbolische Umgebung: '+e.name+'. Kein Nachweis eines tatsächlichen Ursprungsorts.');
  }
  for(const id of ['model-a','model-b','model-environment'])$(id).addEventListener('change',render);
  render();
  window.AbioModels=Object.freeze({modelIds:Object.keys(models),environmentIds:Object.keys(environments)});
}

function evidenceModule(){
  const cases=[
    {title:'Miller (1953): Entladungen und Aminosäuren',
     q:'Welche Aussage trägt Millers klassisches Experiment?',
     opts:['Unter bestimmten gewählten Gas- und Entladungsbedingungen entstanden im Labor Aminosäuren.','Die Atmosphäre der frühen Erde bestand nachweislich exakt aus Millers Gasgemisch.','Die erste lebende Zelle wurde erzeugt.'],correct:0,
     observation:'Eine zirkulierende Mischung unter elektrischen Entladungen lieferte nachweisbare organische Produkte, darunter Aminosäuren.',
     interpretation:'Einige biochemisch relevante Moleküle können unter geeigneten anorganischen Ausgangsbedingungen entstehen.',
     limit:'Weder die genaue frühe Atmosphäre noch eine vollständige Biogenese oder eine lebende Zelle wurden damit nachgewiesen.',
     source:'https://pubmed.ncbi.nlm.nih.gov/13056598/'},
    {title:'Powner et al. (2009): Ribonukleotid-Bausteine',
     q:'Was zeigte der veröffentlichte chemische Syntheseweg?',
     opts:['Es entstand eine autonome replizierende RNA-Zelle.','Unter gezielt kontrollierten Bedingungen gelang eine Syntheseroute zu aktivierten Pyrimidin-Ribonukleotiden.','Freie Nukleobase und Ribose kombinieren sich unter allen Umweltbedingungen direkt zu RNA.'],correct:1,
     observation:'Eine abgestimmte Reaktionsfolge mit präbiotisch plausiblen Ausgangsstoffen lieferte aktivierte Pyrimidin-Ribonukleotide.',
     interpretation:'Die bekannten Schwierigkeiten der einfachen Base-plus-Ribose-Route können auf bestimmten alternativen chemischen Wegen umgangen werden.',
     limit:'Kein Beweis einer vollständigen RNA-Welt, einer einfachen Ein-Schritt-Synthese oder eines historischen Ablaufs auf der Erde.',
     source:'https://doi.org/10.1038/nature08013'},
    {title:'Chen & Szostak (2004): Membranen und pH-Gradienten',
     q:'Was wurde in den Fettsäurevesikel-Experimenten untersucht?',
     opts:['Eine lebende Zelle entstand ohne weitere Stoffe.','Jede beliebige Membran hält einen pH-Gradienten ewig stabil.','Unter bestimmten Bedingungen können beim Membranwachstum Protonengradienten entstehen.'],correct:2,
     observation:'In kontrollierten Fettsäurevesikel-Systemen wurden pH-Gradienten und deren Abhängigkeit von Ionentransport und Membranwachstum untersucht.',
     interpretation:'Einfache Hüllen können unter passenden Bedingungen elektrochemisch relevante Unterschiede aufbauen.',
     limit:'Keine generell stabile Zelle und kein vollständiger Stoffwechsel wurden erzeugt.',
     source:'https://pmc.ncbi.nlm.nih.gov/articles/PMC419540/'},
    {title:'Zhu & Szostak (2009): Wachstum und Teilung',
     q:'Was stützt diese Untersuchung zu Modellprotocellen?',
     opts:['Fettsäurevesikel konnten unter kontrollierten Bedingungen wachsen und einen physikalischen Teilungsprozess zeigen.','Ihre Nachkommen besaßen bereits autonom vererbte genetische Programme.','Die ersten Zellen auf der Erde entstanden erwiesenermaßen durch diesen exakten Prozess.'],correct:0,
     observation:'In Modellsystemen wurden durch Fettsäurezufuhr Wachstum, Verformung und Teilungseffekte an Vesikeln untersucht.',
     interpretation:'Elementare physikalische Vorgänge könnten zur Vermehrung membranbegrenzter Strukturen beitragen.',
     limit:'Weder eigenständige chemische Replikation noch eine komplette lebende Zelle wurde demonstriert.',
     source:'https://pmc.ncbi.nlm.nih.gov/articles/PMC2669828/'},
    {title:'Becker et al. (2018): Nass-trocken-Zyklen',
     q:'Welche chemische Beobachtung wurde beschrieben?',
     opts:['Die Herkunft sämtlicher RNA-Moleküle auf der Erde wurde nachgewiesen.','Unter wechselnden experimentellen Bedingungen gelang die Synthese verschiedener kanonischer und nichtkanonischer Purin-Nukleoside.','Geothermale Tümpel waren zwingend der einzige Ursprung des Lebens.'],correct:1,
     observation:'Eine Reaktionsfolge mit Nass-trocken- und weiteren physikochemischen Schwankungen erzeugte verschiedene Purin-Nukleoside.',
     interpretation:'Umweltzyklen können unter geeigneten Bedingungen Synthese und Aufarbeitung von Zwischenprodukten unterstützen.',
     limit:'Keine vollständige RNA-Synthese und kein Nachweis eines bestimmten frühen geologischen Fundorts.',
     source:'https://www.nature.com/articles/s41467-017-02639-1'},
    {title:'Nucleic Acids Research (2024): RNA-Vorlagenkopie',
     q:'Was zeigte die Arbeit zur nichtenzymatischen Kopie?',
     opts:['RNA kopierte sich ohne Aktivierung beliebig oft zu funktionierenden Zellen.','Es ist nun bewiesen, dass das erste Erbgut ausschließlich RNA war.','Unter speziell gewählten Aktivierungs- und Reaktionsbedingungen wurde die Kopie auch schwierig zu kopierender RNA-Vorlagen verbessert.'],correct:2,
     observation:'Mit chemisch aktivierten Vorstufen und passenden Reaktionspartnern ließ sich die Vorlagenkopie auch für A- und U-haltige RNA-Sequenzen verbessern.',
     interpretation:'Ein langjähriges experimentelles Hindernis bei der nichtenzymatischen RNA-Kopie kann unter definierten Laborbedingungen teilweise überwunden werden.',
     limit:'Es wurde kein autonomer vollständiger präbiotischer Replikationszyklus oder eine lebende Zelle nachgewiesen.',
     source:'https://doi.org/10.1093/nar/gkae982'}
  ];
  let at=0,score=0,answered=false,finished=false;
  const options=$('ev-options'),feedback=$('ev-feedback'),next=$('ev-next');
  function draw(){
    finished=false;answered=false;next.disabled=true;
    const c=cases[at];
    set('ev-number','STUDIE '+(at+1)+' / '+cases.length);
    set('ev-heading',c.title);set('ev-question',c.q);
    set('ev-paper-title',c.title);set('ev-observation',c.observation);
    set('ev-interpretation',c.interpretation);set('ev-limit',c.limit);
    $('ev-source').href=c.source;
    options.replaceChildren();feedback.replaceChildren();
    next.textContent=at===cases.length-1?'Ergebnis anzeigen →':'Nächste Forschungsarbeit →';
    c.opts.forEach((label,i)=>{
      const b=document.createElement('button');
      b.type='button';b.textContent=label;
      b.addEventListener('click',()=>{
        if(answered)return;
        answered=true;
        if(i===c.correct)score++;
        [...options.children].forEach((button,j)=>{
          button.disabled=true;
          if(j===c.correct)button.classList.add('correct');else if(j===i)button.classList.add('wrong');
        });
        feedback.dataset.ok=String(i===c.correct);
        feedback.textContent=(i===c.correct?'Richtig. ':'Noch nicht. ')+c.observation+' Wichtig: '+c.limit;
        next.disabled=false;
        set('ev-score',score+' / '+cases.length);
        set('ev-count',(at+1)+' / '+cases.length);
        $('ev-progress').setAttribute('aria-valuenow',String(at+1));
        $('ev-progress-fill').style.width=((at+1)/cases.length*100)+'%';
      });
      options.append(b);
    });
  }
  function finish(){
    finished=true;next.disabled=true;options.replaceChildren();
    set('ev-heading','Sechs Studien abgeschlossen.');
    set('ev-question','Du hast '+score+' von '+cases.length+' Fragen korrekt beantwortet.');
    feedback.dataset.ok='true';
    feedback.textContent='Ein wissenschaftlicher Befund ist wichtig, ohne den gesamten Ursprung des Lebens zu erklären. Du kannst das Quiz beliebig wiederholen und die Quellen selbst lesen.';
  }
  next.addEventListener('click',()=>{
    if(next.disabled)return;
    if(at===cases.length-1){finish();return}
    at++;draw();
  });
  $('ev-restart').addEventListener('click',()=>{
    at=0;score=0;set('ev-score','0 / 6');set('ev-count','0 / 6');
    $('ev-progress').setAttribute('aria-valuenow','0');$('ev-progress-fill').style.width='0%';
    draw();
  });
  draw();
  window.AbioEvidence=Object.freeze({get count(){return cases.length}});
}

switch(module){
  case '02':moleculeModule();break;
  case '03':membraneModule();break;
  case '04':rnaModule();break;
  case '05':hypothesisModule();break;
  case '06':evidenceModule();break;
}
})();
