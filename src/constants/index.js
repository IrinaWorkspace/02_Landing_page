import { Icon } from "../assets/icons";
import { first, second, third } from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Начало" },
  { href: "#about-us", label: "За нас" },
  { href: "#products", label: "Услуги" },
  { href: "#prices", label: "Цени" },
  { href: "#how-to", label: "Как работи" },
  { href: "#contact-us", label: "Контакти" },
];

export const products = [
  {
    imgURL: first,
    name: "Опасни товари (ADR)",
  },
  {
    imgURL: second,
    name: "Хладилен транспорт",
  },
  {
    imgURL: third,
    name: "Извънгабаритни товари",
  },
];
export const icons = [{ src: Icon, alt: "envelope" }];
