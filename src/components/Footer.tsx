import { Link } from "react-scroll";
import instLogo from "../assets/footer-instagram.png";
import fbLogo from "../assets/footer-facebook.png";
import redditLogo from "../assets/footer-reddit.png";

const Footer = () => {
  const handleSubmit = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex md:space-x-4 space-x-10">
          <img
            src={instLogo}
            className="cursor-pointer w-12 h-auto my-2 "
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
        <nav className="text-white mt-4">
          <ul className="flex space-x-4">
            <li className="cursor-pointer">
              <Link to="home" smooth duration={500}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link smooth duration={500} to="about">
                About
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link smooth duration={500} to="filmmaking">
                Filmmaking
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link smooth duration={500} to="portraits">
                Portraits
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link smooth duration={500} to="theatre">
                Theatre
              </Link>
            </li>
          </ul>
        </nav>
        <p className="text-white mt-6">Developed by Bharat Raj Verma</p>
        <p className="text-white mt-3">
          © {new Date().getFullYear()} Rahul Shukla | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
