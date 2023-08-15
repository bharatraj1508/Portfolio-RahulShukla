import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-10 rounded-md ${
        isScrolled
          ? "bg-header-moving-color transition-all text-white"
          : "bg-header-static-color"
      }`}>
      <div className=" flex justify-between p-8">
        <p className="text-4xl font-montez font-extrabold">RAHUL</p>
        <ul className="hidden md:flex md:flex-row md:space-x-10 text-2xl">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Work</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
