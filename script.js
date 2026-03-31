/* ============================================================
   TECHCULT — script.js
   College: Prof Ram Meghe College of Engineering and Management, Badnera

   FEATURES:
   ✅ Separate Google Form link per event
   ✅ Login required before registering
   ✅ Per-user registrations (xyz and 123 are completely separate)
   ✅ Registration modal with 2-step confirmation
============================================================ */

/* ── EVENT DATA — each event has its own formLink ── */
const EVENTS = [
  {
    id: 1,
    name: 'Coding Competition',
    cat: 'competition',
    emoji: '💻',
    bg: 'linear-gradient(135deg,#1e1b4b,#312e81)',
    desc: 'Showcase your algorithmic thinking in multi-round competitive programming. Solve real-world problems under time pressure.',
    date: '2026-04-04', time: '11:00 AM – 2:00 PM', venue: 'CSE :- Lab 101',
    prize: 'Smart Watch', seats: 50, price: 50,
    formLink: 'https://docs.google.com/forms/d/1STSLmSfwoteJ6DFbSJNvLaQFAZ7MUheXmaz2Hy60gkE'
  },
  {
    id: 2,
    name: 'Web Design Competition',
    cat: 'competition',
    emoji: '🎨',
    bg: 'linear-gradient(135deg,#1e3a5f,#1e40af)',
    desc: 'Design a stunning responsive website in 6 hours. Judges evaluate creativity, UX/UI finesse and technical execution.',
    date: '2026-04-04', time: '11:00 AM – 3:00 PM', venue: 'CSE :- Lab 102',
    prize: 'Wireless Mouse', seats: 40, price: 60,
    formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScpJCizE7Fs1SNDZJUggHuu5CSQu3U3WfGb80bmK2UMh5lFvA/viewform?usp=publish-editor'
  },
  {
    id: 3,
    name: 'Poster Making Competition',
    cat: 'competition',
    emoji: '🖼️',
    bg: 'linear-gradient(135deg,#4a044e,#7e22ce)',
    desc: "Express creativity through visual storytelling. Create impactful posters on this year's theme: 'Tech for Humanity'.",
    date: '2026-04-08', time: '11:00 AM – 2:00 PM', venue: 'CSE :- Lab 201',
    prize: 'Pendrive', seats: 50,price: 40,
    formLink: 'https://docs.google.com/forms/d/1eBf9YtA0Xl2pgzUDJuZR8FIawWzEOP_e1kFQtpLugb4'
  },
  {
    id: 4,
    name: 'Hackathon 2026',
    cat: 'competition',
    emoji: '⚡',
    bg: 'linear-gradient(135deg,#1a1a2e,#7c3aed)',
    desc: '24-hour innovation marathon. Build real-world solutions with mentorship from top tech companies. Teams of 3–4.',
    date: '2026-04-25', time: '9:00 AM (24 hrs)', venue: 'IT :- I space',
    prize: 'Certificate + ₹2000', seats: 100, price: 100,
    formLink: 'https://docs.google.com/forms/d/12tsOLO8g4TxAR1YGkMwz7KIqa4Qyym72m2pyhOIz64k'
  },
  {
    id: 5,
    name: 'Quiz Competition',
    cat: 'competition',
    emoji: '🧠',
    bg: 'linear-gradient(135deg,#14532d,#15803d)',
    desc: 'Test your knowledge across technology, science, current affairs and pop culture in this rapid-fire buzzer battle.',
    date: '2026-04-20', time: '2:00 PM – 5:00 PM', venue: 'CSE :- Lab 202',
    prize: 'Earbuds', seats: 50, price: 50,
    formLink: 'https://docs.google.com/forms/d/15xS-RtJ2iVyxxSZPnLcZFCvoPRGxzwrwRgGe1WBESvY'
  },
  {
    id: 6,
    name: 'Debugging Contest',
    cat: 'competition',
    emoji: '🐛',
    bg: 'linear-gradient(135deg,#450a0a,#b91c1c)',
    desc: 'Hunt and squash deliberately planted bugs in broken codebases. Tests attention to detail and debugging mastery.',
    date: '2026-05-05', time: '1:00 PM – 4:00 PM', venue: 'CSE :- Lab 202',
    prize: 'Bags', seats: 50, price: 50,
    formLink: 'https://docs.google.com/forms/d/1rUXJGI1PMjyV84iTAPy0O8x2efet_DrFgxPOj90efKM'
  },
  {
    id: 7,
    name: 'AI / ML Workshop',
    cat: 'workshop',
    emoji: '🤖',
    bg: 'linear-gradient(135deg,#0f172a,#1e3a5f)',
    desc: 'Hands-on sessions covering ML fundamentals, model building with Python and deploying AI apps — led by industry experts.',
    date: '2026-04-22', time: '9:30 AM – 5:00 PM', venue: 'EXTC Seminar Hall',
    prize: 'Certificate', seats: 45, price: "20",
    formLink: 'https://docs.google.com/forms/d/1mjRzpw7UTyTUHNEZGd2zYs1OJNF0G3bs4R0iRpTHL74'
  },
  {
    id: 8,
    name: 'Tech Seminar',
    cat: 'seminar',
    emoji: '🎙️',
    bg: 'linear-gradient(135deg,#0c1445,#1e3a8a)',
    desc: 'Industry leaders share insights on Quantum Computing, Blockchain, GenAI and the future of software engineering.',
    date: '2026-05-08', time: '10:00 AM – 1:00 PM', venue: 'IT :- I Space',
    prize: 'Certificate', seats: 50, price: "30",
    formLink: 'https://docs.google.com/forms/d/1ShgY5KbCxLGvk0uUaTl_fbtqII6HzG6RyLYY6zxKioo'
  },
  {
    id: 9,
    name: 'Gaming Tournament',
    cat: 'gaming',
    emoji: '🎮',
    bg: 'linear-gradient(135deg,#0f0f2e,#312e81)',
    desc: 'Compete in BGMI, Valorant and FIFA matches. Form your squad and battle your way to the championship crown.',
    date: '2026-05-20', time: '12:00 PM – 8:00 PM', venue: 'CSE :- Lab 201',
    prize: 'Headphones', seats: 40, price: 100,
    formLink: 'https://docs.google.com/forms/d/1M3ZqTI3tt3DMYy_O4dZQPun3RAbEhwFD11lqQAjKwJw'
  },
  {
    id: 10,
    name: 'Startup Pitch Event',
    cat: 'seminar',
    emoji: '💡',
    bg: 'linear-gradient(135deg,#431407,#c2410c)',
    desc: 'Pitch your startup idea to a panel of VCs and entrepreneurs. Winners receive seed funding and 6-month mentorship.',
    date: '2026-05-15', time: '10:00 AM – 4:00 PM', venue: 'CSE :- Lab 203',
    prize: 'Certificate+Trophy', seats: 30, price: 100,
    formLink: 'https://docs.google.com/forms/d/1O3EWW8fu3lwnFN-Te-jCImNq4EBfkIrkZ6tkK6tA_Kw'
  }
];

/* ── STATE ── */
let pendingEventId = null;
let homeCat        = 'all';
let homeSearch     = '';
let dashCurrentFilter = [];

/* ============================================================
   USER HELPERS
   Registrations are stored PER USER using their email as key.
   Key format: tc_regs_xyz@email.com
   So xyz and 123 never share the same data.
============================================================ */
function getLoggedInUser() {
  return JSON.parse(localStorage.getItem('tc_user') || 'null');
}

/* Get registrations for the currently logged-in user only */
function getUserRegs() {
  const user = getLoggedInUser();
  if (!user) return [];
  const key = 'tc_regs_' + user.email;
  return JSON.parse(localStorage.getItem(key) || '[]');
}

/* Save registrations for the currently logged-in user only */
function saveUserRegs(regs) {
  const user = getLoggedInUser();
  if (!user) return;
  const key = 'tc_regs_' + user.email;
  localStorage.setItem(key, JSON.stringify(regs));
}

/* ============================================================
   DARK MODE
============================================================ */
let isDark = localStorage.getItem('tc_dark') !== 'light';

function initDarkMode() {
  if (!isDark) document.body.classList.add('light');
  syncDarkIcons();
}
function toggleDark() {
  isDark = !isDark;
  document.body.classList.toggle('light', !isDark);
  localStorage.setItem('tc_dark', isDark ? 'dark' : 'light');
  syncDarkIcons();
}
function syncDarkIcons() {
  const icon = isDark ? 'fa-moon' : 'fa-sun';
  ['dm-icon','dm-icon-login','dm-icon-dash','dm-icon-dash2'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.className = 'fa-solid ' + icon;
  });
  const lbl = document.getElementById('dm-label-dash');
  if (lbl) lbl.textContent = isDark ? 'Dark Mode' : 'Light Mode';
}

/* ============================================================
   NAVBAR
============================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}
function toggleMobile() { document.getElementById('mobile-menu')?.classList.toggle('open'); }
function closeMobile()  { document.getElementById('mobile-menu')?.classList.remove('open'); }
function scrollSec(id) {
  closeMobile();
  if (id === 0) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

/* ============================================================
   SCROLL REVEAL
============================================================ */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ============================================================
   HELPERS
============================================================ */
function fmtDate(s) {
  return new Date(s).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}
function countdown(dateStr) {
  const diff = new Date(dateStr + 'T09:00:00') - new Date();
  if (diff <= 0) return { over: true, text: 'Event Ended' };
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  return { over: false, text: d > 0 ? `${d}d ${h}h left` : `${h}h left!` };
}
function setText(id, v) { const el = document.getElementById(id); if (el) el.textContent = v; }

/* ============================================================
   LOGIN REQUIRED POPUP
   Shows when a user tries to register without logging in
============================================================ */
function showLoginPopup() {
  document.getElementById('login-required-modal')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLoginPopup() {
  document.getElementById('login-required-modal')?.classList.remove('open');
  document.body.style.overflow = '';
}
function goToLogin() {
  closeLoginPopup();
  window.location.href = 'login.html';
}

/* ============================================================
   REGISTRATION MODAL
   Step 1 → Show event info + Open Google Form button
   Step 2 → User confirms they submitted the form
   Only THEN mark as Registered (for THIS user only)
============================================================ */
function openRegModal(eventId) {
  /* ── Check if user is logged in first ── */
  const user = getLoggedInUser();
  if (!user) {
    showLoginPopup(); /* show "please login" popup */
    return;
  }

  const ev = getAllEvents().find(e => e.id === eventId);
  if (!ev) return;
  pendingEventId = eventId;

  /* Fill modal with event details */
  setText('modal-event-name',  ev.name);
  setText('modal-event-emoji', ev.emoji);
  setText('modal-event-date',  fmtDate(ev.date));
  setText('modal-event-time',  ev.time);
  setText('modal-event-venue', ev.venue);
  setText('modal-event-prize', ev.prize);
  setText('modal-event-price', (ev.price || "Free"));

  /* Reset to step 1 */
  document.getElementById('modal-step-1').style.display = 'block';
  document.getElementById('modal-step-2').style.display = 'none';

  /* Show modal */
  document.getElementById('reg-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* Step 1 → Open this event's specific Google Form in new tab */
function openGoogleForm() {
  const ev = getAllEvents().find(e => e.id === pendingEventId);
  if (!ev) return;

  /* Open THIS event's own Google Form link */
  window.open(ev.formLink, '_blank', 'noopener,noreferrer');

  /* Advance to step 2 */
  document.getElementById('modal-step-1').style.display = 'none';
  document.getElementById('modal-step-2').style.display = 'block';
}

/* Step 2 → User confirms they submitted → save for THIS user only */
function confirmRegistration() {
  if (!pendingEventId) return;
  const ev = getAllEvents().find(e => e.id === pendingEventId);

  /* Get THIS user's registrations */
  let regs = getUserRegs();

  if (!regs.includes(pendingEventId)) {
    regs.push(pendingEventId);
    saveUserRegs(regs); /* saved under this user's email key */
  }

  const evName = ev?.name;
  pendingEventId = null;

  /* Close modal first, then show toast so it is always visible */
  closeRegModal();
  refreshAllGrids();

  /* Slight delay ensures modal is gone before toast appears */
  setTimeout(() => {
    showToast(`🎉 Registered for ${evName}! See you there.`);
  }, 350);
}

function closeRegModal() {
  document.getElementById('reg-modal')?.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => {
    const s1 = document.getElementById('modal-step-1');
    const s2 = document.getElementById('modal-step-2');
    if (s1) s1.style.display = 'block';
    if (s2) s2.style.display = 'none';
  }, 300);
}

function backdropClick(e) {
  if (e.target.id === 'reg-modal') closeRegModal();
}

/* Refresh all event grids after registration */
function refreshAllGrids() {
  applyHomeFilter();
  if (document.getElementById('dash-overview-grid')) renderGrid('dash-overview-grid', getAllEvents().slice(0, 4));
  if (document.getElementById('dash-events-grid'))   renderGrid('dash-events-grid', dashCurrentFilter);
  /* Update registered count stat */
  setText('reg-count-stat', getUserRegs().length);
}

/* ============================================================
   BUILD EVENT CARD
============================================================ */
function buildCard(ev) {
  const cd    = countdown(ev.date);
  /* Check if THIS logged-in user has registered for this event */
  const isReg = getUserRegs().includes(ev.id);

  const cdHtml = cd.over
    ? `<span class="card-countdown" style="color:var(--txt3)"><i class="fa-solid fa-clock"></i> ${cd.text}</span>`
    : `<span class="card-countdown"><i class="fa-solid fa-fire"></i> ${cd.text}</span>`;

  const regBtn = isReg
    ? `<button class="btn-register done" disabled>
        <i class="fa-solid fa-circle-check"></i><span>Registered</span>
       </button>`
    : `<button class="btn-register" onclick="openRegModal(${ev.id})">
        <i class="fa-solid fa-pen-to-square"></i><span>Register Now</span>
       </button>`;

  /* Only show delete button on dashboard pages */
  const isDash = typeof showDashSection === 'function' &&
    document.getElementById('dash-overview');
  const deleteBtn = isDash
    ? `<button class="btn-delete-event" onclick="confirmDeleteEvent(${ev.id})" title="Delete Event">
        <i class="fa-solid fa-trash"></i>
       </button>`
    : '';

  return `
    <div class="event-card reveal" data-cat="${ev.cat}" data-name="${ev.name.toLowerCase()}">
      <div class="card-img">
        <div class="card-img-inner" style="background:${ev.bg}">
          <span style="filter:drop-shadow(0 4px 12px rgba(0,0,0,0.3))">${ev.emoji}</span>
        </div>
        <div class="card-img-overlay"></div>
        <span class="card-cat-badge">${ev.cat}</span>
        ${deleteBtn}
      </div>
      <div class="card-body">
        <div class="card-title">${ev.name}</div>
        <div class="card-desc">${ev.desc}</div>
        <div class="card-meta">
          <div class="card-meta-item"><i class="fa-solid fa-calendar"></i>${fmtDate(ev.date)}</div>
          <div class="card-meta-item"><i class="fa-solid fa-clock"></i>${ev.time}</div>
          <div class="card-meta-item"><i class="fa-solid fa-location-dot"></i>${ev.venue}</div>
          <div class="card-meta-item">
            <i class="fa-solid fa-trophy"></i>${ev.prize}
            &nbsp;·&nbsp;<i class="fa-solid fa-users" style="margin-left:4px"></i>${ev.seats} seats
          </div>
          <div class="card-meta-item">
        <i class="fa-solid fa-indian-rupee-sign"></i> ${ev.price}
        </div>
        </div>
        ${cdHtml}
      </div>
      <div class="card-footer">${regBtn}</div>
    </div>`;
}

function renderGrid(gridId, list) {
  const el = document.getElementById(gridId);
  if (!el) return;
  el.innerHTML = list.map(ev => buildCard(ev)).join('');
  setTimeout(initReveal, 60);
}

/* ============================================================
   HOME EVENTS + FILTER
============================================================ */
function initHomeEvents() { renderGrid('home-events-grid', EVENTS); }

function filterEvents() {
  homeSearch = document.getElementById('ev-search')?.value.toLowerCase() || '';
  applyHomeFilter();
}
function filterCat(cat, btn) {
  document.querySelectorAll('.filter-bar .pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  homeCat = cat;
  applyHomeFilter();
}
function applyHomeFilter() {
  const filtered = EVENTS.filter(ev => {
    const catOk = homeCat === 'all' || ev.cat === homeCat;
    const srOk  = !homeSearch || ev.name.toLowerCase().includes(homeSearch) ||
                  ev.cat.includes(homeSearch) || ev.venue.toLowerCase().includes(homeSearch);
    return catOk && srOk;
  });
  renderGrid('home-events-grid', filtered);
  const ne = document.getElementById('no-events');
  if (ne) ne.style.display = filtered.length ? 'none' : 'block';
}

/* ============================================================
   LOGIN
============================================================ */
function initLoginPage() {
  ['login-pwd','login-email'].forEach(id => {
    document.getElementById(id)?.addEventListener('keydown', e => {
      if (e.key === 'Enter') doLogin();
    });
  });
}
function togglePwd() {
  const inp = document.getElementById('login-pwd');
  const ico = document.getElementById('pwd-toggle');
  if (!inp || !ico) return;
  const show = inp.type === 'password';
  inp.type = show ? 'text' : 'password';
  ico.className = `fa-solid fa-eye${show ? '-slash' : ''} field-icon`;
}
function doLogin() {
  const em  = document.getElementById('login-email')?.value.trim();
  const pw  = document.getElementById('login-pwd')?.value.trim();
  const err = document.getElementById('login-error');
  const btn = document.getElementById('login-btn');

  if (!em || !pw) {
    if (err) err.style.display = 'flex';
    setText('error-text', 'Please enter your email and password.');
    return;
  }

  btn.innerHTML = '<i class="fa-solid fa-spinner" style="animation:spin 1s linear infinite"></i><span>Signing in…</span>';
  btn.disabled = true;

  setTimeout(() => {
    /* Each user identified by their unique email */
    const name = em.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    localStorage.setItem('tc_user', JSON.stringify({ email: em, name }));
    if (err) err.style.display = 'none';
    btn.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i><span>Sign In to Dashboard</span>';
    btn.disabled = false;
    window.location.href = 'dashboard.html';
  }, 900);
}

/* ============================================================
   DASHBOARD
============================================================ */
function initDashboard() {
  const user = getLoggedInUser();
  if (!user) { window.location.href = 'login.html'; return; }

  const fn      = user.name.split(' ')[0];
  const initials = user.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  setText('welcome-msg',    `Welcome back, ${fn}! 👋`);
  setText('sidebar-name',   user.name);
  setText('sidebar-avatar', initials);
  setText('header-avatar',  initials);
  /* Show only THIS user's registration count */
  setText('reg-count-stat', getUserRegs().length);

  setText('total-events-stat', getAllEvents().length);
  renderGrid('dash-overview-grid', getAllEvents().slice(0, 4));
  renderGrid('dash-events-grid',   getAllEvents());
}

function showDashSection(sec) {
  ['overview','events','registered'].forEach(id => {
    const el = document.getElementById('dash-' + id);
    if (el) el.style.display = id === sec ? 'block' : 'none';
  });
  document.querySelectorAll('.sidebar-item:not(.logout)').forEach((item, i) => {
    item.classList.remove('active');
    if ((sec==='overview'&&i===0)||(sec==='events'&&i===1)||(sec==='registered'&&i===2)) {
      item.classList.add('active');
    }
  });
  if (sec === 'registered') renderRegistered();
  if (window.innerWidth < 768) document.getElementById('sidebar')?.classList.remove('open');
}

function dashSearch() {
  const q = document.getElementById('dash-search')?.value.toLowerCase() || '';
  dashCurrentFilter = q
    ? getAllEvents().filter(e => e.name.toLowerCase().includes(q) || e.cat.includes(q) ||
        e.venue.toLowerCase().includes(q) || e.desc.toLowerCase().includes(q))
    : [...getAllEvents()];
  const nr = document.getElementById('dash-no-results');
  if (nr) nr.style.display = dashCurrentFilter.length ? 'none' : 'block';
  renderGrid('dash-events-grid', dashCurrentFilter);
  if (q) showDashSection('events');
}

function dashFilterCat(cat, btn) {
  document.querySelectorAll('#dash-events .pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  dashCurrentFilter = cat === 'all' ? [...getAllEvents()] : getAllEvents().filter(e => e.cat === cat);
  const nr = document.getElementById('dash-no-results');
  if (nr) nr.style.display = dashCurrentFilter.length ? 'none' : 'block';
  renderGrid('dash-events-grid', dashCurrentFilter);
}

/* Show only THIS user's registered events */
function renderRegistered() {
  const myRegs = getUserRegs();
  const myEvs  = getAllEvents().filter(e => myRegs.includes(e.id));
  const noReg  = document.getElementById('dash-no-reg');
  const grid   = document.getElementById('dash-reg-grid');

  if (myEvs.length === 0) {
    if (grid)  grid.innerHTML = '';
    if (noReg) noReg.style.display = 'block';
  } else {
    if (noReg) noReg.style.display = 'none';
    renderGrid('dash-reg-grid', myEvs);
  }
}

function toggleSidebar() { document.getElementById('sidebar')?.classList.toggle('open'); }

function doLogout() {
  if (confirm('Are you sure you want to logout?')) {
    /* Only remove the session — registrations are kept per user */
    localStorage.removeItem('tc_user');
    window.location.href = 'index.html';
  }
}

/* ============================================================
   TOAST — always visible, centered bottom, above all modals
============================================================ */
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toast-msg');
  if (!t) return;

  /* If already showing, reset it */
  t.classList.remove('show');

  if (m) m.textContent = msg;

  /* Small delay so animation is clean */
  clearTimeout(t._timer);
  setTimeout(() => {
    t.classList.add('show');
    t._timer = setTimeout(() => t.classList.remove('show'), 4000);
  }, 80);
}
function submitContact() { showToast("✉️ Message sent! We'll respond within 24 hours."); }

/* ============================================================
   DYNAMIC EVENTS — stored in localStorage, merged with hardcoded EVENTS
============================================================ */
function getCustomEvents() {
  return JSON.parse(localStorage.getItem('tc_custom_events') || '[]');
}
function saveCustomEvents(evs) {
  localStorage.setItem('tc_custom_events', JSON.stringify(evs));
}
function getAllEvents() {
  const deleted = JSON.parse(localStorage.getItem('tc_deleted_events') || '[]');
  const builtIn = EVENTS.filter(e => !deleted.includes(e.id));
  return [...builtIn, ...getCustomEvents()];
}

/* Patch every function that reads EVENTS to use getAllEvents() */
function refreshAllEventData() {
  dashCurrentFilter = getAllEvents();
}

/* ============================================================
   ADMIN AUTH MODAL
============================================================ */
const ADMIN_USER = 'ADMIN';
const ADMIN_PASS = 'ADMIN@246';

function openAdminAuthModal() {
  pendingDeleteId = null;
  resetAdminAuthModal();
  const u = document.getElementById('admin-username');
  const p = document.getElementById('admin-password');
  const e = document.getElementById('admin-auth-error');
  if (u) u.value = '';
  if (p) p.value = '';
  if (e) e.style.display = 'none';
  document.getElementById('admin-auth-modal')?.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    u?.focus();
    [u, p].forEach(inp => {
      if (inp) inp.onkeydown = ev => { if (ev.key === 'Enter') verifyAdmin(); };
    });
  }, 200);
}
function closeAdminAuthModal() {
  document.getElementById('admin-auth-modal')?.classList.remove('open');
  document.body.style.overflow = '';
}
function toggleAdminPwd() {
  const inp = document.getElementById('admin-password');
  const ico = document.getElementById('admin-pwd-toggle');
  if (!inp || !ico) return;
  const show = inp.type === 'password';
  inp.type = show ? 'text' : 'password';
  ico.className = `fa-solid fa-eye${show ? '-slash' : ''} field-icon`;
}
function verifyAdmin() {
  const u = document.getElementById('admin-username')?.value.trim();
  const p = document.getElementById('admin-password')?.value.trim();
  const errEl  = document.getElementById('admin-auth-error');
  const errTxt = document.getElementById('admin-auth-error-text');

  if (!u || !p) {
    errTxt.textContent = 'Please enter username and password.';
    errEl.style.display = 'flex'; return;
  }
  if (u !== ADMIN_USER || p !== ADMIN_PASS) {
    errTxt.textContent = 'Invalid admin credentials. Please try again.';
    errEl.style.display = 'flex'; return;
  }
  /* Correct — open create event modal */
  closeAdminAuthModal();
  setTimeout(openCreateEventModal, 250);
}

/* ============================================================
   CREATE EVENT MODAL
============================================================ */
function openCreateEventModal() {
  /* Clear form */
  ['ce-name','ce-emoji','ce-date','ce-time','ce-venue','ce-prize','ce-seats','ce-desc','ce-form'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const ceErr = document.getElementById('ce-error');
  if (ceErr) ceErr.style.display = 'none';
  document.getElementById('create-event-modal')?.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('ce-name')?.focus(), 200);
}
function closeCreateEventModal() {
  document.getElementById('create-event-modal')?.classList.remove('open');
  document.body.style.overflow = '';
}
function saveNewEvent() {
  const name  = document.getElementById('ce-name')?.value.trim();
  const cat   = document.getElementById('ce-cat')?.value;
  const emoji = document.getElementById('ce-emoji')?.value.trim() || '🎉';
  const date  = document.getElementById('ce-date')?.value;
  const time  = document.getElementById('ce-time')?.value.trim();
  const venue = document.getElementById('ce-venue')?.value.trim();
  const prize = document.getElementById('ce-prize')?.value.trim() || 'Certificate';
  const seats = parseInt(document.getElementById('ce-seats')?.value) || 0;
  const price = document.getElementById('ce-price')?.value.trim() || 'Free';
  const desc  = document.getElementById('ce-desc')?.value.trim();
  const form  = document.getElementById('ce-form')?.value.trim() || '#';

  const errEl  = document.getElementById('ce-error');
  const errTxt = document.getElementById('ce-error-text');

  /* Validation */
  if (!name || !date || !time || !venue || !desc || seats < 1) {
    errTxt.textContent = 'Please fill all required fields (marked *).';
    errEl.style.display = 'flex'; return;
  }
  errEl.style.display = 'none';

  const existing = getAllEvents();
  const newId = existing.reduce((max, e) => Math.max(max, e.id), 0) + 1;

  const gradients = [
    'linear-gradient(135deg,#1e1b4b,#312e81)',
    'linear-gradient(135deg,#0f172a,#1e3a5f)',
    'linear-gradient(135deg,#14532d,#15803d)',
    'linear-gradient(135deg,#450a0a,#b91c1c)',
    'linear-gradient(135deg,#4a044e,#7e22ce)',
    'linear-gradient(135deg,#1a1a2e,#7c3aed)',
    'linear-gradient(135deg,#431407,#c2410c)',
  ];
  const bg = gradients[newId % gradients.length];

  const newEvent = { id: newId, name, cat, emoji, bg, desc, date, time, venue, prize, seats,price, formLink: form };

  const customs = getCustomEvents();
  customs.push(newEvent);
  saveCustomEvents(customs);

  closeCreateEventModal();

  /* Refresh all grids */
  dashCurrentFilter = getAllEvents();
  if (document.getElementById('dash-overview-grid')) renderGrid('dash-overview-grid', getAllEvents().slice(0, 4));
  if (document.getElementById('dash-events-grid'))   renderGrid('dash-events-grid', getAllEvents());
  setText('reg-count-stat', getUserRegs().length);

  setTimeout(() => showToast(`✅ Event "${name}" created successfully!`), 300);
}

/* ============================================================
   DELETE EVENT — Admin protected
============================================================ */
let pendingDeleteId = null;

function confirmDeleteEvent(eventId) {
  pendingDeleteId = eventId;
  /* Reuse admin auth modal but set delete mode */
  const u = document.getElementById('admin-username');
  const p = document.getElementById('admin-password');
  const e = document.getElementById('admin-auth-error');
  const title = document.getElementById('admin-auth-title');
  const desc  = document.getElementById('admin-auth-desc');
  if (u) u.value = '';
  if (p) p.value = '';
  if (e) e.style.display = 'none';
  if (title) title.textContent = 'Admin Verification';
  if (desc)  desc.textContent  = 'Enter admin credentials to delete this event.';
  /* Switch verify button to delete mode */
  const btn = document.getElementById('admin-auth-verify-btn');
  if (btn) {
    btn.innerHTML = '<i class="fa-solid fa-trash"></i><span>Verify &amp; Delete</span>';
    btn.onclick = verifyAdminForDelete;
  }
  document.getElementById('admin-auth-modal')?.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    u?.focus();
    [u, p].forEach(inp => {
      if (inp) inp.onkeydown = ev => { if (ev.key === 'Enter') verifyAdminForDelete(); };
    });
  }, 200);
}

function verifyAdminForDelete() {
  const u = document.getElementById('admin-username')?.value.trim();
  const p = document.getElementById('admin-password')?.value.trim();
  const errEl  = document.getElementById('admin-auth-error');
  const errTxt = document.getElementById('admin-auth-error-text');

  if (!u || !p) {
    errTxt.textContent = 'Please enter username and password.';
    errEl.style.display = 'flex'; return;
  }
  if (u !== ADMIN_USER || p !== ADMIN_PASS) {
    errTxt.textContent = 'Invalid admin credentials. Please try again.';
    errEl.style.display = 'flex'; return;
  }

  const evName = getAllEvents().find(e => e.id === pendingDeleteId)?.name || 'Event';

  /* Remove from custom events if it's there */
  let customs = getCustomEvents().filter(e => e.id !== pendingDeleteId);
  saveCustomEvents(customs);

  /* If it's a built-in event, track it in a deleted list */
  const isBuiltIn = EVENTS.find(e => e.id === pendingDeleteId);
  if (isBuiltIn) {
    const deleted = JSON.parse(localStorage.getItem('tc_deleted_events') || '[]');
    if (!deleted.includes(pendingDeleteId)) deleted.push(pendingDeleteId);
    localStorage.setItem('tc_deleted_events', JSON.stringify(deleted));
  }

  pendingDeleteId = null;
  closeAdminAuthModal();
  resetAdminAuthModal();

  /* Refresh all grids */
  dashCurrentFilter = getAllEvents();
  if (document.getElementById('dash-overview-grid')) renderGrid('dash-overview-grid', getAllEvents().slice(0, 4));
  if (document.getElementById('dash-events-grid'))   renderGrid('dash-events-grid', getAllEvents());
  setText('total-events-stat', getAllEvents().length);
  setText('reg-count-stat', getUserRegs().length);

  setTimeout(() => showToast(`🗑️ "${evName}" has been deleted.`), 300);
}

function resetAdminAuthModal() {
  const title = document.getElementById('admin-auth-title');
  const desc  = document.getElementById('admin-auth-desc');
  const btn   = document.getElementById('admin-auth-verify-btn');
  if (title) title.textContent = 'Admin Access';
  if (desc)  desc.textContent  = 'Enter admin credentials to create a new event.';
  if (btn) {
    btn.innerHTML = '<i class="fa-solid fa-unlock"></i><span>Verify &amp; Continue</span>';
    btn.onclick = verifyAdmin;
  }
}

/* ============================================================
   ADMIN AUTH — INIT
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();

  const page = window.location.pathname.split('/').pop() || 'index.html';

  if (page === 'index.html' || page === '' || page === '/') {
    initNavbar();
    initReveal();
    initHomeEvents();
  }
  if (page === 'login.html') {
    initLoginPage();
    if (getLoggedInUser()) window.location.href = 'dashboard.html';
  }
  if (page === 'dashboard.html') {
    initDashboard();
  }

  /* Close modals on Escape key */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeRegModal();
      closeLoginPopup();
      closeAdminAuthModal();
      closeCreateEventModal();
    }
  });
});
