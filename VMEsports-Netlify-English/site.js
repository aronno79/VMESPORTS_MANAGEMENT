const players = [
 {id:1,name:'VMesNoxxie',role:'Owner + IGL',number:1,photo:'vmesnoxxie.jpg',kd:7.8,matches:250},
 {id:2,name:'VMesOneShoT',role:'Support Player',number:2,photo:'vmesoneshot.jpg',kd:6.5,matches:180},
 {id:3,name:'VMesDivine',role:'Support Entry',number:3,photo:'vmesdivine.jpg',kd:11.6,matches:150},
 {id:4,name:'VMesSpike',role:'PLAYER',number:4,photo:'vmesspike.jpg',kd:8.5,matches:220},
 {id:5,name:'VMesAgguie',role:'Support + IGL',number:5,photo:'vmesagguie.jpg',kd:7.0,matches:200},
 {id:6,name:'VMesOris',role:'Support Player',number:6,photo:'vmesoris.jpg',kd:10.6,matches:190},
 {id:7,name:'VMesFragger1v4',role:'Entry Fragger',number:7,photo:'vmesfragger1v4.jpg',kd:12.4,matches:210},
 {id:8,name:'VMesLady',role:'PLAYER',number:8,photo:'vmeslady.jpg',kd:9.5,matches:195},
 {id:9,name:'VMesYagami',role:'PLAYER',number:9,photo:'vmesyagami.jpg',kd:6.5,matches:225},
 {id:10,name:'VMesJ',role:'PLAYER',number:10,photo:'vmesj.jpg',kd:6.0,matches:185},
 {id:11,name:'VMesASHH',role:'PLAYER',number:11,photo:'vmesash.jpg',kd:7.0,matches:175},
 {id:12,name:'BYE_BYE',role:'Hagu Player',number:12,photo:'bye_bye.jpg',kd:1.2,matches:250}
];
const imageRoot='assets/images/players/';
const initials=name=>name.replace(/^VMes/i,'').slice(0,2).toUpperCase();
const grid=document.getElementById('playerGrid');
if(grid) grid.innerHTML=players.map(p=>`<a class="player-card" href="profile.html?id=${p.id}"><div class="player-card-top"><span class="jersey-number">${String(p.number).padStart(2,'0')}</span><span class="player-initial" aria-hidden="true">${initials(p.name)}</span><img class="player-photo" src="${imageRoot+p.photo}" alt="${p.name} profile photo" onerror="this.style.display='none'"></div><div class="player-card-info"><p class="player-role">${p.role}</p><h3>${p.name}</h3><p class="player-stats">K/D: ${p.kd.toFixed(1)} <span>·</span> Matches: ${p.matches}</p><span class="profile-link">VIEW PROFILE ↗</span></div></a>`).join('');
const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
const menuToggle=document.getElementById('menuToggle'), mainNav=document.getElementById('mainNav');
if(menuToggle&&mainNav){menuToggle.addEventListener('click',()=>{const open=mainNav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open);menuToggle.textContent=open?'×':'☰';});mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mainNav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='☰';}));}
const profile=document.getElementById('profileContent');
if(profile){const id=Number(new URLSearchParams(location.search).get('id')), p=players.find(x=>x.id===id);if(!p){profile.innerHTML='<p>Player not found. <a href="index.html#roster">Back to squad</a></p>';document.title='Player not found - VM Esports';}else{document.title=`${p.name} - VM Esports`;profile.innerHTML=`<section class="profile-page"><a class="profile-back" href="index.html#roster">← Back to the squad</a><div class="profile-card"><div class="profile-jersey"><span class="profile-initial" aria-hidden="true">${initials(p.name)}</span><img src="${imageRoot+p.photo}" alt="${p.name} profile photo" onerror="this.style.display='none'"><span>JERSEY #${String(p.number).padStart(2,'0')}</span></div><div class="profile-info"><p class="eyebrow">VM ESPORTS · PLAYER PROFILE</p><h1>${p.name}</h1><p class="profile-role">${p.role}</p><div class="profile-stats"><div><span>CAREER K/D</span><strong>${p.kd.toFixed(1)}</strong></div><div><span>MATCHES</span><strong>${p.matches}</strong></div></div></div></div></section>`;}}

