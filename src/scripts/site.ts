// Page behaviour that needs script: menu close, details-on-anchor, directions frame, rail marker, mobile dock.
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Anchors into closed <details> open them first.
function openTarget(id: string): void {
  const target = document.getElementById(id);
  if (target instanceof HTMLDetailsElement) target.open = true;
}
document.addEventListener("click", (event) => {
  const link = (event.target as Element | null)?.closest?.('a[href^="#zone-"]');
  if (link) openTarget(link.getAttribute("href")!.slice(1));
});
window.addEventListener("hashchange", () => openTarget(location.hash.slice(1)));
if (location.hash) openTarget(location.hash.slice(1));

// Mobile menu: close after picking a section, on Escape, on outside click.
const menu = document.querySelector<HTMLDetailsElement>("details.menu");
if (menu) {
  const close = () => { menu.open = false; };
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && menu.open) { close(); menu.querySelector("summary")?.focus(); } });
  document.addEventListener("click", (e) => { if (menu.open && !menu.contains(e.target as Node)) close(); });
}

// Rail marker follows hover and focus along the axis.
const rail = document.querySelector<HTMLElement>(".rail");
const marker = rail?.querySelector<HTMLElement>(".rail__marker");
if (rail && marker) {
  const place = (link: HTMLElement) => {
    const item = link.closest("li") as HTMLElement;
    marker.style.setProperty("--y", `${item.offsetTop - rail.clientHeight * 0.125}px`);
  };
  rail.querySelectorAll<HTMLElement>(".rail__link").forEach((link) => {
    link.addEventListener("pointerenter", () => place(link));
    link.addEventListener("focus", () => place(link));
  });
  if (reduce) marker.style.transitionDuration = "0s";
}

// Directions: hover or focus on a row shows its photograph in the frame.
const frame = document.querySelector<HTMLElement>(".dir__frame");
if (frame) {
  const show = (key: string) => {
    frame.querySelectorAll("img").forEach((img) => img.classList.toggle("is-active", img.dataset.key === key));
  };
  document.querySelectorAll<HTMLElement>(".dir__row[data-photo]").forEach((row) => {
    const key = row.dataset.photo!;
    row.addEventListener("pointerenter", () => show(key));
    row.addEventListener("focusin", () => show(key));
  });
}

// Mobile dock: visible once the hero call button has left the screen, hidden from #contact down.
const dock = document.querySelector<HTMLElement>("[data-dock]");
const heroCall = document.querySelector<HTMLElement>(".hero__call");
const contact = document.getElementById("contact");
if (dock && heroCall && contact && "IntersectionObserver" in window) {
  let heroGone = false;
  let reached = false;
  const update = () => dock.classList.toggle("is-on", heroGone && !reached);
  new IntersectionObserver(([entry]) => {
    heroGone = !entry.isIntersecting && entry.boundingClientRect.top < 0;
    update();
  }).observe(heroCall);
  new IntersectionObserver(([entry]) => {
    reached = entry.isIntersecting || entry.boundingClientRect.top < 0;
    update();
  }).observe(contact);
}
