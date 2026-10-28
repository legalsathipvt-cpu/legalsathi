/* Shared script: builds nav + footer, scroll reveal, 3D tilt, counters */
(function(){
var P={menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',pin:'<path d="M12 21s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="m9 12 2 2 4-4"/>',file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',scale:'<path d="M12 3v18M7 21h10M5 7h14M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z"/>',home:'<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10M10 20v-6h4v6"/>',heart:'<path d="M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 10c0 6-8 11-8 11z"/>',check:'<path d="m5 12 5 5 9-10"/>',chat:'<path d="M21 12a8 8 0 0 1-12 7l-5 1.5L5 16a8 8 0 1 1 16-4z"/>',cap:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5M22 9v6"/>',eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',track:'<path d="M3 12h4l3-8 4 16 3-8h4"/>'};
window.ic=function(n){return '<svg class="i" viewBox="0 0 24 24">'+(P[n]||"")+'</svg>'};
var path=location.pathname;
function cur(p){return path.indexOf(p)>-1?' class="cur"':''}
var nav='<nav><a class="brand" href="/"><img src="/legalsathilogo.webp" alt="LegalSaathi logo" onerror="this.style.display=\'none\'"><span>Legal<b>Saathi</b></span></a><button class="burger" id="bg" aria-label="Menu">'+ic('menu')+'</button><div class="links" id="lk"><a href="/">Home</a><a href="/about/"'+cur('/about')+'>About</a><a href="/contact/"'+cur('/contact')+'>Contact</a><a href="/terms-&amp;-conditions/"'+cur('/terms')+'>Terms &amp; Privacy</a><a class="btn sm" href="/#services">Get a Document</a></div></nav>';
var foot='<footer><div class="fgrid"><div><a class="brand" href="/"><img src="/legalsathilogo.webp" alt="LegalSaathi logo" onerror="this.style.display=\'none\'">Legal<b>Saathi</b></a><p style="margin-top:12px;line-height:1.6">LegalSaathi makes legal documentation simple, fast, and convenient. Disclaimer: LegalSaathi provides legal documentation assistance and is not a law firm. Our services do not replace professional legal advice.</p></div><div><h4>Quick Links</h4><a href="/">Home</a><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/terms-&amp;-conditions/">Terms &amp; Privacy</a></div><div><h4>Contact</h4><a href="tel:+918881333921">'+ic('phone')+' +91 88813 33921</a><a href="mailto:hello@legalsathi.co.in">'+ic('mail')+' hello@legalsathi.co.in</a><a href="https://legalsathi.co.in">'+ic('globe')+' legalsathi.co.in</a><a href="#">'+ic('pin')+' Lucknow, UP</a></div></div><p class="copy">&copy; 2026 LegalSaathi. All rights reserved. Information on this site is not a substitute for legal advice.</p></footer>';
document.body.insertAdjacentHTML('afterbegin',nav);
document.body.insertAdjacentHTML('beforeend',foot);
document.querySelectorAll('[data-i]').forEach(function(e){e.innerHTML=ic(e.dataset.i)});
document.getElementById('bg').onclick=function(){document.getElementById('lk').classList.toggle('on')};
document.getElementById('lk').onclick=function(e){if(e.target.tagName=='A')this.classList.remove('on')};
/* reveal */
var io=new IntersectionObserver(function(a){a.forEach(function(x){if(x.isIntersecting)x.target.classList.add('in')})},{threshold:.08});
document.querySelectorAll('.rv').forEach(function(r){io.observe(r)});
/* 3D tilt (mouse only) */
var still=matchMedia('(prefers-reduced-motion:reduce)').matches;
if(!still)document.querySelectorAll('.tilt').forEach(function(c){
 c.addEventListener('pointermove',function(e){if(e.pointerType!='mouse')return;var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='rotateY('+(x*14)+'deg) rotateX('+(-y*14)+'deg) translateY(-4px)'});
 c.addEventListener('pointerleave',function(){c.style.transform=''});
});
/* counters */
var co=new IntersectionObserver(function(a){a.forEach(function(x){if(!x.isIntersecting)return;co.unobserve(x.target);var el=x.target,end=+el.dataset.count,pre=el.dataset.pre||'',suf=el.dataset.suf||'',t0=null;
 if(still){el.textContent=pre+end+suf;return}
 (function s(t){if(!t0)t0=t;var p=Math.min((t-t0)/1200,1);el.textContent=pre+Math.round(end*(1-Math.pow(1-p,3)))+suf;if(p<1)requestAnimationFrame(s)})(performance.now())})},{threshold:.4});
document.querySelectorAll('[data-count]').forEach(function(e){co.observe(e)});
})();
