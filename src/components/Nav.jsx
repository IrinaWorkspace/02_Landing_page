// import { hamburger } from "../assets/icons";
// import { logo } from "../assets/images";
// import { navLinks } from "../constants";

// const Nav = () => {
//   return (
//     <header className="padding-x py-8 absolute z-10 w-full">
//       <nav className="flex justify-between items-center max-container">
//         <a href="/">
//           <img
//             src={logo}
//             alt="logo"
//             width={129}
//             height={29}
//             className="m-0 w-[129px] h-[29px]"
//           />
//         </a>
//         <ul className="flex-1 flex justify-center items-center gap-10 max-lg:hidden">
//           {navLinks.map((item) => (
//             <li key={item.label}>
//               <a
//                 href={item.href}
//                 className="font-inter leading-normal font-medium text-base text-nav-links"
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//         <div className="flex gap-4 justify-center items-center text-base leading-normal font-medium font-inter max-lg:hidden wide:mr-24 ">
//           <a href="/">Профил</a>

//           <a
//             href="/"
//             className="font-semibold text-base border-solid border-2 border-nav-links rounded-lg py-3 px-4 "
//           >
//             Заявка за пратка
//           </a>
//         </div>
//         <div className="hidden max-lg:block">
//           <img src={hamburger} alt="hamburger icon" width={25} height={25} />
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Nav;

import { logo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <nav className="flex width-full max-container">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
        <a href="/">
          <img
            src={logo}
            alt="logo"
            width={129}
            height={29}
            className="lg:ms-[-30px] w-[129px] h-[29px]"
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 ms-36 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex-1 flex flex-col gap-3 ms-12  pb-8 justify-center items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
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
            <li>
              <a href="/" className="md:ms-[60px]">
                Профил
              </a>{" "}
            </li>
            <li className="mt-2 lg:mt-0">
              <a
                href="/"
                className="font-semibold text-base border-solid border-2 border-nav-links rounded-lg py-3 px-4 ms-[-15px] "
              >
                Заявка за пратка
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
