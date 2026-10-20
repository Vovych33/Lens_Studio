/* ============ Тема (localStorage #1) ============ */
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");
if (savedTheme) root.setAttribute("data-theme", savedTheme);

const themeBtn = document.getElementById("themeToggle");
function updateThemeBtn() {
  if (!themeBtn) return;
  themeBtn.textContent = root.getAttribute("data-theme") === "dark" ? "☀️" : "🌙";
}
updateThemeBtn();

themeBtn?.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";
  if (isDark) {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
  updateThemeBtn();
});

/* ============ Бургер-меню ============ */
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
burger?.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav__link").forEach(link =>
  link.addEventListener("click", () => nav?.classList.remove("open"))
);

/* ============ Год в футере ============ */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ============ Анимация появления при скролле ============ */
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));

/* ============ Счётчики на главной ============ */
const counters = document.querySelectorAll(".stat__num[data-count]");
if (counters.length) {
  const countObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = +el.dataset.count;
      let cur = 0;
      const step = Math.max(1, Math.ceil(target / 60));
      const id = setInterval(() => {
        cur += step;
        if (cur >= target) { cur = target; clearInterval(id); }
        el.textContent = cur;
      }, 25);
      countObserver.unobserve(el);
    });
  }, { threshold: 0.4 });
  counters.forEach(c => countObserver.observe(c));
}

/* ============ Избранное в блоге (localStorage #2) ============ */
const FAV_KEY = "favPosts";
let favs = JSON.parse(localStorage.getItem(FAV_KEY) || "[]");

function renderFavs() {
  const list = document.getElementById("favList");
  if (!list) return;
  if (favs.length === 0) {
    list.textContent = "Пока нет сохранённых статей.";
    return;
  }
  const titles = {
    "1": "Как выбрать образ для фотосессии",
    "2": "Свет в портретной съёмке",
    "3": "Плёнка vs цифра в 2025"
  };
  list.innerHTML = favs
    .map(id => `<span class="fav-chip">⭐ ${titles[id] || "Статья " + id}</span>`)
    .join("");
}

document.querySelectorAll(".fav-btn").forEach(btn => {
  const id = btn.dataset.fav;
  if (favs.includes(id)) btn.classList.add("active");
  btn.addEventListener("click", () => {
    if (favs.includes(id)) {
      favs = favs.filter(x => x !== id);
      btn.classList.remove("active");
      btn.textContent = "⭐ В избранное";
    } else {
      favs.push(id);
      btn.classList.add("active");
      btn.textContent = "✅ В избранном";
    }
    localStorage.setItem(FAV_KEY, JSON.stringify(favs));
    renderFavs();
  });
});
renderFavs();

/* ============ Форма контактов ============ */
const form = document.getElementById("contactForm");
form?.addEventListener("submit", e => {
  e.preventDefault();
  const status = document.getElementById("formStatus");
  const data = new FormData(form);
  const name = data.get("name")?.trim();
  const email = data.get("email")?.trim();
  const message = data.get("message")?.trim();

  if (!name || !email || !message) {
    status.textContent = "Пожалуйста, заполните все поля.";
    status.style.color = "#e74c3c";
    return;
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    status.textContent = "Введите корректный email.";
    status.style.color = "#e74c3c";
    return;
  }
  // «Отправка» — сохраняем черновик в localStorage
  localStorage.setItem("lastContact", JSON.stringify({ name, email, message, date: Date.now() }));
  status.textContent = `Спасибо, ${name}! Заявка отправлена, я свяжусь с вами.`;
  status.style.color = "";
  form.reset();
});