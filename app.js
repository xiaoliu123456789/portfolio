const projects=[
  ['FORMA','Graphic Design','2026.02','assets/work/work-01.jpg'],
  ['Serein','UI Design','2026.01','assets/work/work-02.jpg'],
  ['Between spaces','Visual Poster','2025.11','assets/work/work-03.jpg'],
  ['NOT / ORDINARY','Visual Poster','2025.09','assets/work/work-04.jpg'],
  ['MONO','UI Design','2025.06','assets/work/work-05.jpg'],
  ['Objects of stillness','Graphic Design','2025.03','assets/work/work-06.jpg']
];
const grid=document.querySelector('#grid');projects.forEach(([name,type,date,image])=>{const b=document.createElement('button');b.className='project';b.innerHTML=`<img src="${image}" alt="${name} concept visual" loading="lazy"><span class="caption"><strong class="project-name">${name}</strong><span class="project-type">${type}</span><time class="project-date" datetime="${date.replace('.', '-')}">${date}</time></span>`;b.onclick=()=>{document.querySelector('#dt').textContent=name;document.querySelector('#di').src=image;document.querySelector('#detail').showModal()};grid.append(b)});
const contactHeading=document.querySelector('#contact h2');
contactHeading.insertAdjacentHTML('afterend',`<div class="contact-overview"><p>Available for selected collaborations across brand identity, UI design, and visual communication.</p><div class="contact-details"><div class="contact-detail"><span>FOCUS</span><strong>Brand identity / UI design / Visual posters</strong></div><div class="contact-detail"><span>APPROACH</span><strong>Clear systems / Distinctive character /<wbr> Thoughtful detail</strong></div></div></div>`);
document.querySelector('#contact .bottom span:nth-child(2)').textContent='AVAILABLE FOR SELECTED PROJECTS / 2026';
const trailImages=[
  'assets/trail/trail-v2-01.jpg',
  'assets/trail/trail-v2-02.jpg',
  'assets/trail/trail-v2-03.jpg',
  'assets/trail/trail-v2-04.jpg',
  'assets/trail/trail-v2-05.jpg',
  'assets/trail/trail-v2-06.jpg',
  'assets/trail/trail-v2-07.jpg',
  'assets/trail/trail-v2-08.jpg',
  'assets/trail/trail-v2-09.jpg'
];
trailImages.forEach(src=>{const preload=new Image();preload.src=src});
const hero=document.querySelector('#hero');
let last={x:-999,y:-999},n=0;
hero.addEventListener('pointermove',e=>{
  if(e.pointerType==='touch'||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const r=hero.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
  if(Math.hypot(x-last.x,y-last.y)<85)return;
  last={x,y};
  hero.classList.add('moved');
  const im=new Image();
  im.src=trailImages[n%trailImages.length];
  im.alt='';
  im.decoding='async';
  im.className='trail';
  n+=1;
  im.style.cssText=`left:${x}px;top:${y}px;--r:${(n%5-2)*6}deg`;
  hero.append(im);
  im.addEventListener('animationend',()=>im.remove());
});
document.querySelector('#detail').addEventListener('click',e=>{if(e.target===e.currentTarget)e.currentTarget.close()});
