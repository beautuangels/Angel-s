/* ═══════════════════════════════════════════
   ANGEL'S BEAUTY — núcleo compartilhado
   carrinho · favoritos · header/footer · imagens SVG
   ═══════════════════════════════════════════ */
(function(){
"use strict";

const WA_NUMBER = "595991843032";
window.AB = window.AB || {};
const AB = window.AB;
AB.WA_NUMBER = WA_NUMBER;

/* ── util ─────────────────────────────── */
const $  = (s,c)=> (c||document).querySelector(s);
const $$ = (s,c)=> Array.from((c||document).querySelectorAll(s));
AB.$ = $; AB.$$ = $$;
AB.esc = s => String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

AB.products = ()=> window.PRODUCTS || [];
AB.byId = id => AB.products().find(p=>p.id===id);

/* ── ícones ───────────────────────────── */
const I = {
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s-7.5-4.7-10-9.3C.4 8.2 2.6 4.5 6.2 4.5c2.2 0 3.9 1.2 4.8 3 1-1.8 2.7-3 4.9-3 3.5 0 5.7 3.7 4.1 7.2C17.5 16.3 12 21 12 21z"/></svg>',
  bag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 7h12l1.2 13H4.8L6 7z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>',
  wa:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 3.4 17.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.7 14.1c-.24.68-1.4 1.3-1.93 1.35-.52.05-1.01.24-3.4-.7-2.87-1.14-4.7-4.06-4.84-4.25-.14-.19-1.16-1.55-1.16-2.96s.74-2.1 1-2.39c.26-.29.57-.36.76-.36l.55.01c.18.01.41-.07.65.5.24.58.82 2 .9 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48l-.44.51c-.14.14-.29.3-.12.58.17.29.74 1.22 1.6 1.98 1.1.98 2.02 1.28 2.31 1.43.29.14.45.12.62-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.64-.14.26.1 1.66.78 1.95.92.29.14.48.22.55.34.07.12.07.68-.17 1.36z"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12.5l5 5L20 6.5"/></svg>',
  share:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="6" r="2.6"/><circle cx="18" cy="18" r="2.6"/><path d="M8.3 10.8l7.4-3.6M8.3 13.2l7.4 3.6"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 5v14M5 12h14"/></svg>',
  trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 7h16M9 7V5h6v2m-8 0l1 13h8l1-13"/></svg>',
  ig:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5 5l2.1 2.1M16.9 16.9L19 19M19 5l-2.1 2.1M7.1 16.9L5 19" stroke-linecap="round"/></svg>',
  moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3l8 3v6c0 4.6-3.2 7.6-8 9-4.8-1.4-8-4.4-8-9V6l8-3z"/><path d="M8.5 12l2.4 2.4 4.6-4.8"/></svg>',
  gem:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M7 4h10l4 5-9 11L3 9l4-5z"/><path d="M3 9h18M9.5 9L12 20 14.5 9M7 4l2.5 5L12 4l2.5 5L17 4"/></svg>',
  chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z"/><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" stroke-linecap="round" stroke-width="2.4"/></svg>',
  truck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 6h12v10H2zM14 10h4l3 3v3h-7"/><circle cx="6.5" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></svg>',
  spark:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/><path d="M18.5 15.5l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6z"/></svg>',
  leaf:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 19C5 9 11 4 20 4c0 9-5 15-15 15z"/><path d="M5 19c3-6 7-9 11-11"/></svg>',
  drop:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3s6.5 7 6.5 11.5a6.5 6.5 0 0 1-13 0C5.5 10 12 3 12 3z"/></svg>',
  zoom:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3M8 11h6M11 8v6"/></svg>',
  arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 12h14m-6-6l6 6-6 6"/></svg>'
};
AB.icons = I;

/* ── logo SVG ─────────────────────────── */
AB.haloSVG = (size)=>`<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" aria-hidden="true">
  <circle cx="20" cy="20" r="7.5" stroke="currentColor" stroke-width="2.4"/>
  <circle cx="20" cy="20" r="2.8" fill="currentColor"/>
  <g stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
    <path d="M20 2.5v5M20 32.5v5M2.5 20h5M32.5 20h5M7.6 7.6l3.5 3.5M28.9 28.9l3.5 3.5M32.4 7.6l-3.5 3.5M11.1 28.9l-3.5 3.5"/>
  </g></svg>`;

AB.logoHTML = (tag)=>`
  <a class="logo" href="index.html" aria-label="Angel's Beauty — página inicial">
    <span class="logo__halo">${AB.haloSVG(20)}</span>
    <span class="logo__word">Angel&rsquo;s Beauty</span>
    ${tag?'<span class="logo__tag">Beauty Curation</span>':''}
  </a>`;

/* ── imagem SVG do produto ────────────── */
function shade(hex, f){
  const n = parseInt(hex.slice(1),16);
  const r = Math.min(255,Math.max(0,(n>>16)+f)),
        g = Math.min(255,Math.max(0,((n>>8)&255)+f)),
        b = Math.min(255,Math.max(0,(n&255)+f));
  return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
}
function labelLines(name){
  const words = name.split(' ');
  const lines = ['']; let li = 0;
  for(const w of words){
    if((lines[li]+' '+w).trim().length > 13 && lines[li]){ li++; lines[li]=w; }
    else lines[li] = (lines[li]+' '+w).trim();
    if(li===2) break;
  }
  return lines.filter(Boolean);
}

/* Frasco (shampoo/condicionador) e pote (máscara) desenhados em SVG,
   com a cor real da linha do produto. */
AB.productImg = function(p, big){
  const c = p.cor || '#C49B4A';
  const cL = shade(c, 34), cD = shade(c, -30);
  const brandSmall = AB.esc((p.marcaCurta || p.marca).toUpperCase());
  const lines = labelLines(p.nomeCurto || p.nome);
  const uid = 'g' + p.id.replace(/[^a-z0-9]/gi,'');
  let svg;
  if(p.tipo === 'jar'){
    const label = lines.map((l,i)=>`<text x="110" y="${156+i*15}" font-size="12.5" font-weight="600" fill="#2A2622" text-anchor="middle" font-family="Georgia,serif">${AB.esc(l)}</text>`).join('');
    svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 240">
      <defs><linearGradient id="${uid}" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="${cD}"/><stop offset=".35" stop-color="${cL}"/><stop offset=".65" stop-color="${c}"/><stop offset="1" stop-color="${cD}"/>
      </linearGradient></defs>
      <ellipse cx="110" cy="222" rx="72" ry="9" fill="#14110F" opacity=".08"/>
      <rect x="38" y="88" width="144" height="132" rx="18" fill="url(#${uid})"/>
      <rect x="30" y="58" width="160" height="34" rx="12" fill="#191512"/>
      <rect x="30" y="58" width="160" height="10" rx="5" fill="#2E2823"/>
      <rect x="52" y="128" width="116" height="62" rx="6" fill="#FDFBF7"/>
      <text x="110" y="142" font-size="7" letter-spacing="1.6" fill="#8F7136" text-anchor="middle" font-family="Poppins,sans-serif">${brandSmall}</text>
      ${label}
      <rect x="82" y="197" width="56" height="1.6" fill="#FDFBF7" opacity=".65"/>
      <path d="M52 96 q10 60 0 116" stroke="#FFFFFF" stroke-width="7" fill="none" opacity=".22"/>
    </svg>`;
  } else {
    const label = lines.map((l,i)=>`<text x="110" y="${124+i*14}" font-size="11.5" font-weight="600" fill="#2A2622" text-anchor="middle" font-family="Georgia,serif">${AB.esc(l)}</text>`).join('');
    svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 240">
      <defs><linearGradient id="${uid}" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="${cD}"/><stop offset=".35" stop-color="${cL}"/><stop offset=".65" stop-color="${c}"/><stop offset="1" stop-color="${cD}"/>
      </linearGradient></defs>
      <ellipse cx="110" cy="226" rx="58" ry="8" fill="#14110F" opacity=".08"/>
      <rect x="88" y="14" width="44" height="26" rx="4" fill="#191512"/>
      <rect x="88" y="14" width="44" height="7" rx="3.5" fill="#2E2823"/>
      <path d="M92 40 h36 l14 22 q4 7 4 16 v128 a18 18 0 0 1 -18 18 h-36 a18 18 0 0 1 -18 -18 v-128 q0 -9 4 -16 z" fill="url(#${uid})"/>
      <rect x="60" y="96" width="100" height="72" rx="5" fill="#FDFBF7"/>
      <text x="110" y="110" font-size="6.6" letter-spacing="1.5" fill="#8F7136" text-anchor="middle" font-family="Poppins,sans-serif">${brandSmall}</text>
      ${label}
      <rect x="86" y="159" width="48" height="1.4" fill="#C49B4A" opacity=".8"/>
      <text x="110" y="200" font-size="8" letter-spacing="1.2" fill="#FDFBF7" text-anchor="middle" font-family="Poppins,sans-serif" opacity=".9">${AB.esc(p.vol||'')}</text>
      <path d="M70 52 q-8 80 0 160" stroke="#FFFFFF" stroke-width="8" fill="none" opacity=".22"/>
    </svg>`;
  }
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
};

/* ── tema claro/escuro ────────────────── */
AB.theme = {
  get(){ return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; },
  set(t){
    document.documentElement.setAttribute('data-theme', t);
    try{ localStorage.setItem('ab_theme', t); }catch(e){}
    const btn = $('#themeBtn');
    if(btn) btn.innerHTML = t === 'dark' ? I.sun : I.moon;
  },
  toggle(){ AB.theme.set(AB.theme.get() === 'dark' ? 'light' : 'dark'); }
};

/* ── foto real do produto (com reserva em SVG) ─
   Coloque o arquivo em img/produtos/<id>.jpg (ou .png/.webp, ajustando a extensão
   abaixo) — enquanto a foto não existir, a ilustração gerada continua aparecendo. */
AB.realImgSrc = function(p){ return 'img/produtos/' + p.id + '.jpg'; };
AB.productImgTag = function(p, extraAttrs){
  const svg = AB.productImg(p);
  const alt = AB.esc(p.nome) + ' — ' + AB.esc(p.marca);
  return `<img src="${AB.realImgSrc(p)}" data-fallback="${svg}" `+
    `onerror="this.onerror=null;this.src=this.dataset.fallback" alt="${alt}"${extraAttrs||''}>`;
};

/* ── carrinho / favoritos ─────────────── */
const store = {
  get(k,d){ try{ return JSON.parse(localStorage.getItem(k)) ?? d; }catch(e){ return d; } },
  set(k,v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
};
AB.cart = {
  all(){ return store.get('ab_cart', []); },
  save(c){ store.set('ab_cart', c); updateBadge(); },
  count(){ return this.all().reduce((s,i)=>s+i.qty,0); },
  add(id, qty){
    qty = qty || 1;
    const c = this.all();
    const it = c.find(i=>i.id===id);
    if(it) it.qty = Math.min(99, it.qty + qty); else c.push({id, qty:Math.min(99,qty)});
    this.save(c);
    const p = AB.byId(id);
    AB.toast((p ? p.nome : 'Produto') + ' adicionado à sacola');
  },
  setQty(id, qty){
    let c = this.all();
    const it = c.find(i=>i.id===id);
    if(!it) return;
    it.qty = qty;
    if(it.qty <= 0) c = c.filter(i=>i.id!==id);
    this.save(c);
  },
  remove(id){ this.save(this.all().filter(i=>i.id!==id)); },
  clear(){ this.save([]); }
};
AB.fav = {
  all(){ return store.get('ab_favs', []); },
  has(id){ return this.all().includes(id); },
  toggle(id){
    let f = this.all();
    const on = !f.includes(id);
    f = on ? f.concat(id) : f.filter(x=>x!==id);
    store.set('ab_favs', f);
    AB.toast(on ? 'Adicionado aos favoritos' : 'Removido dos favoritos');
    return on;
  }
};

/* ── WhatsApp ─────────────────────────── */
AB.waLink = function(text){
  return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text);
};
AB.waOrderLink = function(items){
  let msg = 'Olá!\n\nGostaria de solicitar um orçamento dos seguintes produtos:\n\n';
  items.forEach(it=>{
    const p = AB.byId(it.id);
    if(!p) return;
    msg += '• ' + p.nome + ' — ' + p.marca + ' (' + p.vol + ')\n  Quantidade: ' + it.qty + '\n\n';
  });
  msg += 'Aguardo atendimento.';
  return AB.waLink(msg);
};
AB.waProductLink = function(p, qty){
  return AB.waLink('Olá!\n\nGostaria de solicitar um orçamento:\n\n• ' + p.nome + ' — ' + p.marca + ' (' + p.vol + ')\n  Quantidade: ' + (qty||1) + '\n\nAguardo atendimento.');
};

/* ── toast ────────────────────────────── */
let toastTimer;
AB.toast = function(msg){
  let t = $('.toast');
  if(!t){
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.innerHTML = I.check + '<span>' + AB.esc(msg) + '</span>';
  requestAnimationFrame(()=> t.classList.add('on'));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> t.classList.remove('on'), 2600);
};

/* ── compartilhar ─────────────────────── */
AB.share = function(p){
  const url = location.origin + location.pathname.replace(/[^\/]*$/,'') + 'produto.html?id=' + p.id;
  if(navigator.share){
    navigator.share({title: p.nome + ' — Angel’s Beauty', text: p.desc, url}).catch(()=>{});
  } else {
    navigator.clipboard && navigator.clipboard.writeText(url);
    AB.toast('Link copiado');
  }
};

/* ── avaliações fictícias (ilustrativas) ─ */
function seedRand(seed){
  let h = 0; for(let i=0;i<seed.length;i++){ h = (h*31 + seed.charCodeAt(i)) >>> 0; }
  return function(){ h = (h*1664525 + 1013904223) >>> 0; return h / 4294967296; };
}
const REV_NOMES = ['Mariana S.','Camila R.','Juliana P.','Fernanda L.','Beatriz M.','Larissa T.','Patrícia G.','Renata O.','Aline C.','Vanessa D.','Carolina F.','Daniela B.','Gabriela N.','Paola V.','Rosa E.'];
const REV_FRASES = [
  'Chegou super rápido e é original, lacrado. {b}',
  'Uso no salão e agora em casa também. {b}',
  'Meu cabeleireiro recomendou e não me arrependo. {b}',
  'Já é a segunda vez que compro. {b}',
  'Atendimento pelo WhatsApp foi impecável, me ajudaram a escolher. {b}',
  'Produto de salão de verdade, rende muito. {b}',
  'Notei diferença logo na primeira semana. {b}',
  'A textura e o perfume são maravilhosos. {b}'
];
AB.reviewsFor = function(p){
  const rnd = seedRand(p.id);
  const n = 3;
  const out = [];
  const usedN = [], usedF = [];
  for(let i=0;i<n;i++){
    let ni = Math.floor(rnd()*REV_NOMES.length); while(usedN.indexOf(ni)>-1) ni=(ni+1)%REV_NOMES.length; usedN.push(ni);
    let fi = Math.floor(rnd()*REV_FRASES.length); while(usedF.indexOf(fi)>-1) fi=(fi+1)%REV_FRASES.length; usedF.push(fi);
    const b = p.beneficios[Math.floor(rnd()*p.beneficios.length)];
    out.push({
      nome: REV_NOMES[ni],
      nota: rnd() < .72 ? 5 : 4,
      texto: REV_FRASES[fi].replace('{b}', b.charAt(0) + b.slice(1).toLowerCase() + ' — exatamente o que promete.'),
      quando: ['há 1 semana','há 2 semanas','há 1 mês','há 2 meses'][Math.floor(rnd()*4)]
    });
  }
  return out;
};
AB.starsOf = function(n){ let s=''; for(let i=1;i<=5;i++) s += i<=Math.round(n)?'★':'☆'; return s; };
AB.ratingFor = function(p){
  const revs = AB.reviewsFor(p);
  const media = revs.reduce(function(s,r){return s+r.nota},0)/revs.length;
  return { media: media, count: revs.length, stars: AB.starsOf(media) };
};

/* ── card de produto ──────────────────── */
AB.cardHTML = function(p, tag){
  const fav = AB.fav.has(p.id);
  const badge = tag ? `<span class="pcard__tag ${tag==='Mais vendido'?'pcard__tag--gold':''}">${tag}</span>` : '';
  const r = AB.ratingFor(p);
  return `<article class="pcard rv" data-id="${p.id}">
    <a class="pcard__media" href="produto.html?id=${p.id}" aria-label="${AB.esc(p.nome)}">
      ${AB.productImgTag(p, ' loading="lazy"')}
      ${badge}
    </a>
    <div class="pcard__fav-row">
      <button class="pcard__iico ${fav?'is-fav':''}" data-act="fav" aria-label="Favoritar">${I.heart}</button>
      <button class="pcard__iico" data-act="share" aria-label="Compartilhar">${I.share}</button>
    </div>
    <div class="pcard__body">
      <span class="pcard__brand">${AB.esc(p.marca)}</span>
      <h3 class="pcard__name"><a href="produto.html?id=${p.id}">${AB.esc(p.nome)}</a></h3>
      <span class="pcard__meta">${AB.esc(p.linha)} · ${AB.esc(p.vol)}</span>
      <span class="pcard__rating">${r.stars} <b>${r.media.toFixed(1).replace('.',',')}</b> (${r.count})</span>
      <p class="pcard__desc">${AB.esc(p.desc)}</p>
      <a class="pcard__details" href="produto.html?id=${p.id}">Ver detalhes</a>
      <div class="pcard__foot">
        <div class="qty" data-qty="1">
          <button data-act="minus" aria-label="Diminuir">−</button>
          <span>1</span>
          <button data-act="plus" aria-label="Aumentar">+</button>
        </div>
        <button class="btn btn--dark" data-act="add">${I.bag} Adicionar</button>
      </div>
    </div>
  </article>`;
};

/* delegação de eventos dos cards */
document.addEventListener('click', function(e){
  const btn = e.target.closest('[data-act]');
  if(!btn) return;
  const card = btn.closest('.pcard');
  if(!card) return;
  const p = AB.byId(card.dataset.id);
  if(!p) return;
  const act = btn.dataset.act;
  const qtyEl = card.querySelector('.qty');
  if(act==='plus' || act==='minus'){
    let q = parseInt(qtyEl.dataset.qty,10) || 1;
    q = Math.min(99, Math.max(1, q + (act==='plus'?1:-1)));
    qtyEl.dataset.qty = q;
    qtyEl.querySelector('span').textContent = q;
  } else if(act==='add'){
    AB.cart.add(p.id, parseInt(qtyEl.dataset.qty,10)||1);
  } else if(act==='fav'){
    btn.classList.toggle('is-fav', AB.fav.toggle(p.id));
  } else if(act==='share'){
    AB.share(p);
  }
});

/* ── header / footer ──────────────────── */
function headerHTML(active){
  const links = [
    ['index.html','Início','home'],
    ['produtos.html','Produtos','produtos'],
    ['cronograma.html','Cronograma Capilar','cronograma'],
    ['dicas.html','Dicas da Especialista','dicas'],
    ['instituto.html','Instituto','instituto'],
    ['parceiros.html','Cabeleireiros','parceiros'],
    ['faq.html','FAQ','faq']
  ];
  const nav = links.map(l=>`<a href="${l[0]}" class="${active===l[2]?'active':''}">${l[1]}</a>`).join('');
  return `<header class="header" id="siteHeader"><div class="wrap header__bar">
      ${AB.logoHTML(true)}
      <nav class="nav" aria-label="Navegação principal">${nav}</nav>
      <div class="header__actions">
        <a class="icon-btn" href="produtos.html#buscar" aria-label="Buscar">${I.search}</a>
        <a class="icon-btn" href="produtos.html?fav=1" aria-label="Favoritos">${I.heart}</a>
        <a class="icon-btn" href="carrinho.html" aria-label="Sacola">${I.bag}<span class="cart-badge" id="cartBadge"></span></a>
        <button class="icon-btn" id="themeBtn" aria-label="Alternar modo claro/escuro">${AB.theme.get()==='dark'?I.sun:I.moon}</button>
        <button class="icon-btn burger" id="burgerBtn" aria-label="Abrir menu">${I.menu}</button>
      </div>
    </div></header>
    <div class="mnav" id="mnav">
      <button class="icon-btn mnav__close" id="mnavClose" aria-label="Fechar menu">${I.x}</button>
      ${links.map(l=>`<a href="${l[0]}">${l[1]}</a>`).join('')}
      <a href="carrinho.html">Sacola</a>
    </div>`;
}
function footerHTML(){
  const year = new Date().getFullYear();
  return `<footer class="footer"><div class="wrap">
    <div class="footer__grid">
      <div>
        ${AB.logoHTML(true)}
        <p class="footer__about">Curadoria de cosméticos profissionais para cabelos. Somente produtos originais, das marcas mais respeitadas do mundo, selecionados por quem entende de beleza.</p>
        <div class="social">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">${I.ig}</a>
          <a href="${AB.waLink('Olá! Vim pelo site da Angel’s Beauty e gostaria de mais informações.')}" target="_blank" rel="noopener" aria-label="WhatsApp">${I.wa}</a>
        </div>
      </div>
      <div>
        <h4>Navegação</h4>
        <ul>
          <li><a href="produtos.html">Todos os produtos</a></li>
          <li><a href="cronograma.html">Monte seu cronograma</a></li>
          <li><a href="dicas.html">Dicas da Especialista</a></li>
          <li><a href="instituto.html">Instituto Angel's Beauty</a></li>
          <li><a href="parceiros.html">Área do Cabeleireiro</a></li>
          <li><a href="faq.html">Perguntas frequentes</a></li>
          <li><a href="carrinho.html">Minha sacola</a></li>
        </ul>
      </div>
      <div>
        <h4>Marcas</h4>
        <ul>
          <li><a href="produtos.html?marca=loreal">L'Oréal Professionnel</a></li>
          <li><a href="produtos.html?marca=joico">Joico</a></li>
          <li><a href="produtos.html?marca=wella">Wella Professionals</a></li>
          <li><a href="produtos.html?marca=sebastian">Sebastian Professional</a></li>
          <li><a href="produtos.html?marca=senscience">Senscience</a></li>
        </ul>
      </div>
      <div>
        <h4>Atendimento</h4>
        <ul class="footer__contact">
          <li>${I.wa} <span>+595 991 843 032<br><small style="opacity:.7">Atendimento via WhatsApp</small></span></li>
          <li>${I.ig} <span>@angelsbeauty</span></li>
          <li>${I.pin} <span>Atendemos toda a região<br><small style="opacity:.7">Entrega rápida e segura</small></span></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© ${year} Angel's Beauty · Todos os direitos reservados.</span>
      <span><a href="privacidade.html">Política de Privacidade</a> &nbsp;·&nbsp; <a href="termos.html">Termos de Uso</a></span>
    </div>
  </div></footer>
  <a class="wa-float" href="${AB.waLink('Olá! Vim pelo site da Angel’s Beauty e gostaria de tirar uma dúvida.')}" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">${I.wa}</a>`;
}

function updateBadge(){
  const b = $('#cartBadge');
  if(!b) return;
  const n = AB.cart.count();
  b.textContent = n > 99 ? '99+' : n;
  b.classList.toggle('on', n > 0);
}
AB.updateBadge = updateBadge;

/* ── reveal on scroll ─────────────────── */
AB.reveal = function(){
  const io = new IntersectionObserver((ents)=>{
    ents.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
  },{threshold:.08, rootMargin:'0px 0px -30px 0px'});
  $$('.rv:not(.in)').forEach(el=> io.observe(el));
};

/* ── init ─────────────────────────────── */
document.addEventListener('DOMContentLoaded', function(){
  const body = document.body;
  body.insertAdjacentHTML('afterbegin', headerHTML(body.dataset.page));
  body.insertAdjacentHTML('beforeend', footerHTML());
  updateBadge();

  const header = $('#siteHeader');
  const onScroll = ()=> header.classList.toggle('scrolled', window.scrollY > 12);
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  $('#themeBtn').addEventListener('click', ()=> AB.theme.toggle());

  const mnav = $('#mnav');
  $('#burgerBtn').addEventListener('click', ()=> mnav.classList.add('open'));
  $('#mnavClose').addEventListener('click', ()=> mnav.classList.remove('open'));
  $$('#mnav a').forEach(a=> a.addEventListener('click', ()=> mnav.classList.remove('open')));

  AB.reveal();
  document.dispatchEvent(new CustomEvent('ab:ready'));
});
})();
