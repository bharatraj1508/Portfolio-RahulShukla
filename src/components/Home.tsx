import HomeImage from "../assets/landing-page-background.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import instLogo from "../assets/instagram.png";
import fbLogo from "../assets/facebook.png";
import redditLogo from "../assets/reddit.png";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  const handleSubmit = (url: string) => {
    window.open(url, "_blank");
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
          className="rounded shadow-xl md:w-screen md:h-full"
          src={HomeImage}
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
              My Artistic Voyage
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
              My Artistic Voyage
            </h2>
            <p>
              As a versatile pencil portrait artist, theatre enthusiast, and
              filmmaker, my journey unveils a rich creative odyssey. Each role
              requires distinct skill sets, contributing to diverse artistic
              expressions. My adeptness across artistic disciplines showcases my
              fervor for creative exploration, fostering deep connections with
              audiences through various mediums
            </p>
            <div className="shadow-lg shadow-purple-600 rounded-lg overflow-hidden">
              <img
                className="rounded shadow-xl md:w-screen md:h-screen opacity-90 object-cover w-full h-64"
                src={HomeImage}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-row justify-between">
                <Link
                  to="filmaking"
                  smooth
                  duration={500}
                  className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-400 to-purple-600 cursor-pointer">
                  MY WORK
                </Link>
                <Link
                  to=""
                  smooth
                  duration={500}
                  className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-purple-600 to-purple-400 cursor-pointer">
                  COMTACT ME
                </Link>
              </div>
              <div className="flex flex-row justify-around">
                <img
                  src={instLogo}
                  className="cursor-pointer w-12 h-auto my-2"
                  onClick={() =>
                    handleSubmit(
                      "https://instagram.com/raahulgraphite?igshid=MzRlODBiNWFlZA=="
                    )
                  }
                  alt=""
                />
                <img
                  src={fbLogo}
                  className="cursor-pointer w-12 h-auto my-2"
                  onClick={() =>
                    handleSubmit(
                      "https://www.facebook.com/profile.php?id=100091306322347&mibextid=ZbWKwL"
                    )
                  }
                  alt=""
                />
                <img
                  src={redditLogo}
                  className="cursor-pointer w-12 h-auto my-2"
                  onClick={() =>
                    handleSubmit(
                      "https://www.reddit.com/u/Rahulgraphite?utm_source=share&utm_medium=android_app&utm_name=androidcss&utm_term=1&utm_content=1"
                    )
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
