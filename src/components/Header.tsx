import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const links = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "about",
  },
  {
    id: 3,
    link: "filmmaking",
  },
  {
    id: 4,
    link: "portraits",
  },
  {
    id: 5,
    link: "theatre",
  },
  {
    id: 6,
    link: "contact",
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`md:fixed md:top-0 md:w-full md:z-10 ${
        isScrolled
          ? "md:bg-header-moving-color md:text-white md:delay-100"
          : "md:bg-transparent md:text-fuchsia-300"
      } transition-all`}>
      <div className="flex justify-between p-8">
        <p
          className={`text-2xl font-cinzel ${
            isScrolled ? "md:text-white" : "text-black md:text-orange-100"
          }`}>
          Rahul ShuKla
        </p>
        <ul className="hidden md:flex md:flex-row md:space-x-4 font-extrabold uppercase">
          {links.map(({ id, link }) => (
            <li key={id}>
              <Link
                to={link}
                smooth
                duration={500}
                className="cursor-pointer p-2 rounded">
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
