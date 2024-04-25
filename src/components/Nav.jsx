import { hamburger } from "../assets/icons";
import { logo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={logo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-10 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-inter leading-normal font-medium text-base text-nav-links"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 justify-center items-center text-base leading-normal font-medium font-inter max-lg:hidden wide:mr-24 ">
          <a href="/">Профил</a>

          <a
            href="/"
            className="font-semibold text-base border-solid border-2 border-nav-links rounded-lg py-3 px-4 "
          >
            Заявка за пратка
          </a>
        </div>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
