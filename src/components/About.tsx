import PotraitImage from "../assets/pencil-potrait-artist.jpeg";
import TheatreImage from "../assets/theatre-artist.jpg";
import FilmImage from "../assets/filmaking-artist.jpg";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div id="about" className="md:mt-10 ">
      <div className="mt-10 md:mt-36 text-center text-4xl md:text-6xl font-semibold mb-12">
        <div className="bg-gray-100 p-6 md:p-8 rounded-md shadow-md">
          <p className="text-lg md:text-xl italic font-serif">
            "Creativity is the greatest rebellion in existence"
          </p>
          <p className="text-sm text-gray-600 mt-2">— Osho</p>
        </div>
      </div>
      <div className="flex flex-col h-full p-8 justify-center">
        <h1 className="text-4xl md:text-6xl font-semibold mb-12 text-center font-anton">
          About Me
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className=" rounded-lg shadow-md flex flex-col justify-between p-6 bg-white">
            <Link
              to="portraits"
              smooth
              duration={500}
              className="cursor-pointer ">
              <div className="space-y-4">
                <img
                  src={PotraitImage}
                  className="h-56 md:h-80 w-full object-cover rounded-lg"
                  alt=""
                />
                <p className="text-3xl text-center">PORTRAITS</p>
                <p>
                  I specialize in creating exquisite and lifelike portraits
                  using pencil as my primary medium. My artistry revolves around
                  capturing the distinct features, emotions, and expressions of
                  my subjects with meticulous attention to detail.
                </p>
              </div>
            </Link>
          </div>
          <div className=" rounded-lg shadow-md flex flex-col justify-between p-6 bg-white">
            <div className="space-y-4">
              <img
                src={TheatreImage}
                className="h-56 md:h-80 w-full object-cover rounded-lg"
                alt=""
              />
              <p className="text-3xl text-center">THEATRE</p>
              <p>
                My contributions to the world of performing arts take shape
                through my involvement in theatrical productions. Within this
                realm, I take on multifaceted roles, which can encompass acting,
                directing, set design, costume design, lighting, sound, and
                beyond.
              </p>
            </div>
          </div>
          <div className=" rounded-lg shadow-md flex flex-col justify-between p-6 bg-white">
            <div className="space-y-4">
              <img
                src={FilmImage}
                className="h-56 md:h-80 w-full object-cover rounded-lg"
                alt=""
              />
              <p className="text-3xl text-center">FILMMAKING</p>
              <p>
                My role as a filmmaker revolves around the conception,
                direction, and realization of cinematic projects. This entails a
                wide spectrum of responsibilities, ranging from conceptualizing
                narratives and scripting to filming, editing, and often
                overseeing the entirety of the directing process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
