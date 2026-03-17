// CURSOR
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mx=0, my=0, rx=0, ry=0;
document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });
(function anim() {
  cursor.style.left = mx+'px'; cursor.style.top = my+'px';
  rx += (mx-rx)*0.12; ry += (my-ry)*0.12;
  ring.style.left = rx+'px'; ring.style.top = ry+'px';
  requestAnimationFrame(anim);
})();
document.querySelectorAll('a,button,.cv-block,.skill-group,.interest-item,.soft-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width='18px'; cursor.style.height='18px'; cursor.style.background='#7c3aed';
    ring.style.borderColor='#7c3aed'; ring.style.width='44px'; ring.style.height='44px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width='10px'; cursor.style.height='10px'; cursor.style.background='#2563eb';
    ring.style.borderColor='#2563eb'; ring.style.width='32px'; ring.style.height='32px';
  });
});

// SCROLL REVEAL
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(r => obs.observe(r));

// NAV ACTIVE
const navLinks = document.querySelectorAll('.nav-links a');
const currentFile = window.location.pathname.split('/').pop() || 'accueil.html';
navLinks.forEach(a => {
  if (a.getAttribute('href') === currentFile) a.classList.add('active');
});
