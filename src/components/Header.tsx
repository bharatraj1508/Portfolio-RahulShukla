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
    link: "filmaking",
  },
  {
    id: 4,
    link: "portraits",
  },
  {
    id: 5,
    link: "theatre",
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
          className={`text-4xl font-montez font-extrabold ${
            isScrolled ? "md:text-white" : "text-black md:text-orange-100"
          }`}>
          RAHUL SHUKLA
        </p>
        <ul className="hidden md:flex md:flex-row md:space-x-10 md:text-2xl font-extrabold uppercase">
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
