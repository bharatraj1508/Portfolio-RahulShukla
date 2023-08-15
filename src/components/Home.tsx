import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Home = () => {
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
    <>
      <div id="home" className="relative hidden md:block">
        <img
          className="rounded shadow-xl md:w-screen md:h-screen"
          src="/src/assets/landing-page-background.jpg"
          alt=""
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-orange-300 to-purple-500 opacity-40">
          <div
            className={`${
              isScrolled
                ? `hidden`
                : ` text-purple-800 flex flex-col justify-center items-end space-y-52`
            }`}>
            <p className="text-7xl font-extrabold font-bungee">
              From Pencil to Stage
            </p>
            <Link
              to="portraits"
              smooth
              duration={500}
              className="text-white w-fit px-6 py-3 mt-2 text-3xl rounded-md font-bold bg-purple-600 cursor-pointer self-center">
              MY WORK
            </Link>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div id="home" className="flex items-center justify-center h-screen">
          <div className="flex flex-col space-y-10 px-10">
            <h2 className="text-4xl sm:text-7xl font-bold text-black">
              From Pencil to Stage
            </h2>
            <p>
              As a versatile pencil portrait artist, theatre enthusiast, and
              filmmaker, my journey unveils a rich creative odyssey. Each role
              requires distinct skill sets, contributing to diverse artistic
              expressions. My adeptness across artistic disciplines showcases my
              fervor for creative exploration, fostering deep connections with
              audiences through various mediums
            </p>
            <img
              className="rounded shadow-xl md:w-screen md:h-screen opacity-90"
              src="/src/assets/landing-page-background.jpg"
              alt=""
            />
            <Link
              to="portraits"
              smooth
              duration={500}
              className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-400 to-purple-600 cursor-pointe">
              MY WORK
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
