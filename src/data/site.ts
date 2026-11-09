// Client facts for the homepage. Source: veon/client.json and /cziny/ only (design/concept.md, 8.1).
export const phones = {
  main: { label: "095 208 41 99", href: "tel:+380952084199" },
  second: { label: "096 208 41 99", href: "tel:+380962084199" },
};
export const email = { label: "correctaua@gmail.com", href: "mailto:correctaua@gmail.com" };
export const instagram = "https://www.instagram.com/correctaua/";
export const address = "вул. Закревського, 95В";
export const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("вул. Закревського, 95В, Київ")}`;
export const SOON = "Розділ у розробці";

export const nav = [
  { href: "#symptoms", label: "Що болить" },
  { href: "#first-visit", label: "З чого почати" },
  { href: "#directions", label: "Напрями" },
  { href: "#prices", label: "Ціни" },
  { href: "#center", label: "Центр" },
  { href: "#contact", label: "Контакти" },
];

export const zones = [
  { id: "all", name: "Увесь хребет і суглоби", text: "Біль у спині; біль у верхній та нижній частині спини; міжхребцеві грижі та протрузії; остеохондроз; спондилоартроз; спондилолістез; радикуліт; простріли; міофасціальний біль; біль у суглобах; остеоартроз." },
  { id: "neck", name: "Шия", short: "Шия", text: "Біль у шиї." },
  { id: "shoulder", name: "Плече й лікоть", short: "Плече", text: "Біль у плечі; адгезивний капсуліт; плечолопатковий періартрит; синдром ротаторної манжети; епікондиліт." },
  { id: "thoracic", name: "Грудний відділ", short: "Грудний відділ", text: "Біль у грудному відділі; порушення постави (гіперкіфоз, гіперлордоз); сколіоз; сутулість." },
  { id: "lumbar", name: "Поперек", short: "Поперек", text: "Біль у попереку; болі в спині під час сидіння." },
  { id: "hip", name: "Кульшовий суглоб", short: "Кульшовий суглоб", text: "Біль у кульшовому суглобі; коксартроз." },
  { id: "knee", name: "Коліно", short: "Коліно", text: "Ушкодження зв’язок колінного суглоба." },
  { id: "foot", name: "Стопа", short: "Стопа", text: "Плоскостопість; п’яткова шпора." },
];

export const consultations = [
  { name: "Невролога-вертебролога", minutes: 60, price: 900 },
  { name: "Головного фізичного терапевта", minutes: 60, price: 1000 },
  { name: "Фізичного терапевта", minutes: 60, price: 700 },
  { name: "Фізичного терапевта та вправи додому", minutes: 90, price: 1000 },
  { name: "Фізичного терапевта та пробне заняття", minutes: 90, price: 1000 },
];

export type DirectionKey = "kinesio" | "hernia" | "massage" | "redcord" | "laser" | "shock" | "rehab";
export const directions: { key: DirectionKey; name: string; text: string; price: string; href?: string; photo?: string; alt?: string }[] = [
  { key: "kinesio", name: "Кінезіотерапія", text: "Система фізичних вправ для відновлення рухових функцій.", price: "45 хв, 900 / 1100 грн", photo: "kinesio", alt: "Фізичний терапевт поруч із пацієнткою, яка виконує вправу на тренажері" },
  { key: "hernia", name: "Лікування грижі спини без операції", text: "Шлях починається з консультації.", price: "консультація від 700 грн", href: "#first-visit" },
  { key: "massage", name: "Масаж", text: "Фізичний вплив на тіло: натискання, розтирання, легке постукування.", price: "від 600 грн, 20 хв", photo: "massage", alt: "Фізичний терапевт масажує спину пацієнтки на кушетці" },
  { key: "redcord", name: "Redcord neurac", text: "Вправи з підвішуванням на мотузках для певних м’язів і суглобів.", price: "до 60 хв, 1200 грн", photo: "redcord", alt: "Червоні підвіси Redcord підтримують ноги пацієнтки на кушетці" },
  { key: "laser", name: "Лазер HIL", text: "Лазерний промінь подають на ділянку ручним аплікатором.", price: "7–15 хв, 600 грн" },
  { key: "shock", name: "Ударно-хвильова терапія", text: "Низькочастотна акустична хвиля, сеанси проходять амбулаторно.", price: "до 3000 імпульсів, 700 грн", photo: "shock", alt: "Фізичний терапевт прикладає аплікатор ударно-хвильової терапії до тіла пацієнта" },
  { key: "rehab", name: "Реабілітація після травм і операцій", text: "Коли після травми, операції або хвороби треба повернути рухомість і силу.", price: "післяопераційна: до 60 хв, 1200 грн" },
];

const pr = (name: string, dur: string, price: string) => ({ name, dur, price });
export const priceGroups = [
  { title: "Заняття", open: true, rows: [
    pr("Кінезіотерапія", "45 хв", "900 / 1100"),
    pr("Фізична терапія сколіозу", "до 60 хв", "1000"),
    pr("Redcord neurac", "до 60 хв", "1200"),
    pr("Індивідуальне заняття з головним фізичним терапевтом", "до 60 хв", "1200"),
    pr("Післяопераційна реабілітація", "до 60 хв", "1200"),
    pr("Кінезіотейпування (сегмент)", "", "400"),
  ] },
  { title: "Масаж", rows: [
    pr("Шия, плече, стопа або коліно", "20 хв", "600 / 800"),
    pr("Спини й ніг", "30 хв", "800 / 1000"),
    pr("Загальний", "60 хв", "1300 / 1500"),
  ] },
  { title: "Апаратні процедури", rows: [
    pr("Лазер високої інтенсивності HIL", "7–15 хв", "600"),
    pr("Ударно-хвильова терапія", "до 3000 імпульсів", "700"),
  ] },
];

const course = (qty: number, days: number, price: string) => pr(`${qty} процедур`, `${days} днів`, price);
export const courses = [
  { title: "Масаж спини, 30 хв", rows: [course(5, 20, "3500 / 4600"), course(10, 30, "6900 / 9000"), course(12, 40, "8200 / 10600"), course(20, 60, "13500 / 17500")] },
  { title: "Масаж загальний, 60 хв", rows: [course(5, 20, "6000 / 7000"), course(10, 30, "11500 / 13500")] },
  { title: "Масаж сегментарний, 20 хв", rows: [course(5, 20, "3000 / 3750"), course(10, 30, "5900 / 7300")] },
  { title: "Кінезіотерапія, 45 хв", rows: [course(12, 40, "9600 / 11000"), course(24, 80, "18000 / 21500"), course(36, 105, "25200 / 31700")] },
  { title: "Фізична терапія сколіозу, 55 хв", rows: [course(10, 40, "9000"), course(20, 80, "17000")] },
  { title: "Redcord neurac, індивідуальне заняття з головним фізичним терапевтом або післяопераційна реабілітація", rows: [course(10, 40, "11500"), course(20, 80, "22000")] },
];
