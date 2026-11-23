/* ===== DADOS DO PORTFÓLIO (edite aqui) ===== */
const USER = "theosouzaa";
const TCC_REPO = "GeoSync";

const TIMELINE = [
    { y: "2025", icon: "graduation-cap", t: "Início do curso técnico", d: "Ingressei no Técnico em Desenvolvimento de Sistemas do SENAI e tive os primeiros contatos com lógica de programação, HTML, CSS e JavaScript, além de Git e GitHub para guardar meus projetos." },
    { y: "2025", icon: "browser", t: "Front-end e primeiros projetos", d: "Desenvolvi interfaces e pequenos projetos, como o Mini-Game e os exercícios de front-end, aprendendo a organizar o código e a trabalhar em equipe com a turma." },
    { y: "2026", icon: "database", t: "Back-end, banco de dados e mobile", d: "Avancei para PHP e Laravel, banco de dados MySQL, APIs REST e criação de aplicativos mobile com Flutter." },
    { y: "2026", icon: "map-pin-area", t: "TCC: GeoSync", d: "Em equipe, desenvolvi o GeoSync: plataforma web em Laravel 12, aplicativo Flutter com sincronização offline, QR Code, biometria e rotas otimizadas, integrados a um módulo IoT." },
    { y: "Hoje", icon: "rocket-launch", t: "Próximos passos", d: "Aprofundando Laravel, APIs REST e Flutter, praticando Clean Code e MVC, e buscando meu primeiro estágio na área." }
];

const SENAI_TECH = [
    { g: "Front-end", icon: "browser", items: ["HTML5", "CSS3", "JavaScript", "Vite"] },
    { g: "Back-end", icon: "hard-drives", items: ["PHP", "Laravel", "APIs REST"] },
    { g: "Mobile", icon: "device-mobile", items: ["Flutter", "Dart"] },
    { g: "Banco de dados", icon: "database", items: ["MySQL", "SQL", "Modelagem de dados"] },
    { g: "Ferramentas e práticas", icon: "wrench", items: ["Git", "GitHub", "MVC", "Clean Code", "Metodologias ágeis"] }
];

const TCC_TECH = ["PHP", "Laravel", "Vite", "MySQL", "Flutter", "Dart", "JavaScript", "Laravel Sanctum", "Laravel Socialite", "Filas (queues)", "IoT", "Git", "GitHub"];

// Níveis são uma autoavaliação (0 a 100). Ajuste como achar justo.
const SKILLS = [["HTML5", 80], ["CSS3", 75], ["JavaScript", 65], ["PHP", 65], ["Laravel", 60], ["Flutter", 55], ["MySQL", 60], ["Git", 70]];
const SOFT = [["Trabalho em equipe", "users-three"], ["Resolução de problemas", "puzzle-piece"], ["Organização", "list-checks"], ["Aprendizado contínuo", "books"]];
const INTERESTS = ["Laravel", "APIs REST", "Flutter", "Clean Code", "MVC", "IoT", "Geolocalização", "Metodologias ágeis"];

// Descrições para projetos sem descrição no GitHub
const REPO_INFO = {
    "ppdm_2ids": "Aplicativo mobile em Flutter (geo_sync_mobile) desenvolvido durante o curso.",
    "mini-game": "Mini game desenvolvido durante o curso de Desenvolvimento de Sistemas.",
    "front-end2-2ids": "Projetos de front-end desenvolvidos durante o curso."
};
const FALLBACK_REPOS = ["PPDM_2IDS", "Mini-Game", "Front-End2-2IDS"];
/* ========================================== */

const DEV = {
    html5: "html5-plain colored", html: "html5-plain colored", css3: "css3-plain colored", css: "css3-plain colored",
    javascript: "javascript-plain colored", typescript: "typescript-plain colored", python: "python-plain colored",
    java: "java-plain colored", php: "php-plain colored", laravel: "laravel-original colored", flutter: "flutter-plain colored",
    dart: "dart-plain colored", mysql: "mysql-original colored", vite: "vitejs-original colored", git: "git-plain colored",
    github: "github-original mono", kotlin: "kotlin-plain colored", "c#": "csharp-plain colored", "c++": "cplusplus-plain colored",
    docker: "docker-plain colored", "node.js": "nodejs-plain colored", react: "react-original colored", shell: "bash-plain mono",
    swift: "swift-plain colored", "objective-c": "objectivec-plain colored", cmake: "cmake-plain colored"
};
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const ph = (n) => `<i class="ph-duotone ph-${n}"></i>`;
const FALLBACK_ICON = {
    "laravel sanctum": "shield-check", "laravel socialite": "users-three", "filas (queues)": "queue", "iot": "broadcast",
    "apis rest": "plugs-connected", "mvc": "tree-structure", "clean code": "broom", "metodologias ágeis": "arrows-clockwise",
    "lógica de programação": "brain", "sql": "database", "modelagem de dados": "graph"
};
function tech(name) {
    const k = DEV[name.toLowerCase()];
    const icon = k ? `<i class="devicon-${k.replace(" mono", "")}${k.includes("mono") ? " mono" : ""}"></i>` : ph(FALLBACK_ICON[name.toLowerCase()] || "code");
    return `<span class="t">${icon}${esc(name)}</span>`;
}

/* Tema claro/escuro */
const root = document.documentElement;
function setTheme(t) {
    root.dataset.theme = t;
    $("#themeIcon").className = "ph-duotone " + (t === "dark" ? "ph-sun" : "ph-moon");
    try { localStorage.setItem("theme", t); } catch (e) { }
}
let saved = null; try { saved = localStorage.getItem("theme"); } catch (e) { }
setTheme(saved || "dark");
$("#themeBtn").onclick = () => setTheme(root.dataset.theme === "dark" ? "light" : "dark");

/* Menu mobile */
$("#menuBtn").onclick = () => $("#menuBtn").setAttribute("aria-expanded", $("#menu").classList.toggle("open"));
document.querySelectorAll("#menu a").forEach(a => a.onclick = () => $("#menu").classList.remove("open"));

/* Linha do tempo */
$("#timeline").innerHTML = TIMELINE.map((s, i) =>
    `<div class="step reveal${i === 0 ? " open" : ""}"><span class="step-ico">${ph(s.icon)}</span>
   <button aria-expanded="${i === 0}"><span class="yr">${esc(s.y)}</span><span class="tt">${esc(s.t)}</span>${ph("caret-down")}</button>
   <div class="body">${esc(s.d)}</div></div>`).join("");
document.querySelectorAll(".step button").forEach(b => b.onclick = () =>
    b.setAttribute("aria-expanded", b.parentElement.classList.toggle("open")));

/* Tecnologias, habilidades, interesses */
$("#senaiTech").innerHTML = SENAI_TECH.map(x =>
    `<div class="group reveal"><h4>${ph(x.icon)}${esc(x.g)}</h4><div class="tech-icons">${x.items.map(tech).join("")}</div></div>`).join("");
$("#tccTech").innerHTML = TCC_TECH.map(tech).join("");
$("#skills").innerHTML = SKILLS.map(([n, v]) =>
    `<div class="skill reveal"><b>${tech(n).replace('class="t"', 'style="display:inline-flex;align-items:center;gap:.6rem"')}<em>${v}%</em></b><div class="bar"><i data-w="${v}"></i></div></div>`).join("");
$("#soft").innerHTML = SOFT.map(([n, i]) => `<div class="icard reveal">${ph(i)}<b>${n}</b></div>`).join("");
$("#interests").innerHTML = INTERESTS.map(n => `<span class="chip">${ph("sparkle")}${esc(n)}</span>`).join("");

/* Repositórios do GitHub */
function repoCard(name, url, desc, lang) {
    return `<article class="card reveal"><h4>${ph("folder-open")}<a href="${esc(url)}" target="_blank" rel="noopener">${esc(name)}</a></h4>
    <p>${esc(desc)}</p><div class="foot">${lang ? tech(lang) : "<span></span>"}<a href="${esc(url)}" target="_blank" rel="noopener">Ver código ${ph("arrow-up-right")}</a></div></article>`;
}
async function loadRepos() {
    const box = $("#repos");
    try {
        const res = await fetch(`https://api.github.com/users/${USER}/repos?sort=updated&per_page=30`);
        if (!res.ok) throw new Error(res.status);
        const list = await res.json();
        $("#repoCount").dataset.count = list.length; countUp($("#repoCount"));
        const repos = list.filter(r => r.name.toLowerCase() !== TCC_REPO.toLowerCase() && r.name.toLowerCase() !== USER.toLowerCase()).slice(0, 6);
        box.innerHTML = repos.map(r => repoCard(r.name, r.html_url, r.description || REPO_INFO[r.name.toLowerCase()] || "Projeto desenvolvido durante o curso.", r.language)).join("");
    } catch (e) {
        $("#repoCount").dataset.count = 5; countUp($("#repoCount"));
        box.innerHTML = FALLBACK_REPOS.map(n => repoCard(n, `https://github.com/${USER}/${n}`, REPO_INFO[n.toLowerCase()], "")).join("");
    }
    observe();
}

/* Contadores */
function countUp(el) {
    const end = +el.dataset.count, t0 = performance.now();
    (function f(t) { const p = Math.min((t - t0) / 1200, 1); el.textContent = Math.round(end * p); if (p < 1) requestAnimationFrame(f); })(t0);
}
document.querySelectorAll("[data-count]").forEach(el => { if (el.id !== "repoCount") countUp(el); });

/* Revelar ao rolar */
function observe() {
    const io = new IntersectionObserver(es => es.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add("show");
        e.target.querySelectorAll(".bar i").forEach(i => i.style.width = i.dataset.w + "%");
        io.unobserve(e.target);
    }), { threshold: .1 });
    document.querySelectorAll(".reveal, .icard, .goal, .f-box, .panel, .sec-head").forEach(el => { el.classList.add("reveal"); io.observe(el); });
}

/* Progresso, topo e menu ativo */
const links = [...document.querySelectorAll("#menu a")];
const secs = links.map(a => $(a.getAttribute("href")));
addEventListener("scroll", () => {
    const h = document.documentElement, y = h.scrollTop;
    $("#progress").style.width = (y / (h.scrollHeight - h.clientHeight) * 100) + "%";
    $("#toTop").classList.toggle("show", y > 500);
    let cur = -1; secs.forEach((s, i) => { if (s.offsetTop - 140 <= y) cur = i; });
    links.forEach((a, i) => a.classList.toggle("active", i === cur));
}, { passive: true });
$("#toTop").onclick = () => scrollTo({ top: 0, behavior: "smooth" });

loadRepos(); observe();
