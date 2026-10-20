# 📷 Lens Studio — сайт-визитка фотографа

Статический сайт-визитка на чистом HTML, CSS и JavaScript. Тема — фотограф-портретист. Сайт разворачивается на GitHub Pages.

## 🚀 Функциональность
- ✅ Адаптивный дизайн (mobile-first, breakpoint 768px)
- ✅ Тёмная / светлая тема с сохранением в `localStorage`
- ✅ Избранные статьи блога (`localStorage`)
- ✅ Анимация появления секций при скролле (IntersectionObserver)
- ✅ Анимированные счётчики статистики
- ✅ Бургер-меню на мобильных
- ✅ Форма обратной связи с валидацией
- ✅ Единый header и footer на всех страницах
- ✅ Активные ссылки навигации

## 📁 Структура проекта
```mermaid
graph TD
    ROOT["📦 my-web-site/"]

    ROOT --> HTML["📄 HTML-страницы"]
    ROOT --> CSS["🎨 css/"]
    ROOT --> JS["⚙️ js/"]
    ROOT --> IMG["🖼️ img/"]
    ROOT --> README["📘 README.md"]

    HTML --> INDEX["index.html<br/>Главная"]
    HTML --> ABOUT["about.html<br/>О проекте"]
    HTML --> BLOG["blog.html<br/>Блог"]
    HTML --> CONTACT["contact.html<br/>Контакты"]

    CSS --> STYLE["style.css<br/>адаптив + темы"]
    JS --> SCRIPT["script.js<br/>логика + localStorage"]

    IMG --> LOGO["logo.png"]
    IMG --> FAVICON["favicon.ico"]
    IMG --> SHOTS["screenshots/"]

    style ROOT fill:#e8763a,color:#fff,stroke:#c25a24
    style HTML fill:#f6f4ef,stroke:#e8763a
    style CSS fill:#f6f4ef,stroke:#e8763a
    style JS fill:#f6f4ef,stroke:#e8763a
    style IMG fill:#f6f4ef,stroke:#e8763a
    style README fill:#f6f4ef,stroke:#e8763a
```

## 🌐 GitHub Pages
Сайт доступен по адресу: `https://vovych33.github.io/Lens_Studio/`

## 👥 Разработчик
- **Vovych33** — верстка, стили, JS, документация.

## 📄 Лицензия
MIT