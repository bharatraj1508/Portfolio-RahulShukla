import filmmakingBackground from "../assets/filmmaking/film-making-background.jpg";
import antraalIntro from "../assets/filmmaking/Antral/antral-intro.jpg";
import soulEaters from "../assets/filmmaking/souleaters-intro.jpg";
import Bts1 from "../assets/filmmaking/Antral/BTS/bts1.jpg";
import Bts2 from "../assets/filmmaking/Antral/BTS/bts2.jpg";
import Bts3 from "../assets/filmmaking/Antral/BTS/bts3.jpg";
import Bts4 from "../assets/filmmaking/Antral/BTS/bts4.jpg";
import Bts5 from "../assets/filmmaking/Antral/BTS/bts5.jpg";
import Bts6 from "../assets/filmmaking/Antral/BTS/bts6.jpg";
import Bts7 from "../assets/filmmaking/Antral/BTS/bts7.jpg";
import Bts8 from "../assets/filmmaking/Antral/BTS/bts8.jpg";
import Bts9 from "../assets/filmmaking/Antral/BTS/bts9.jpg";
import Bts10 from "../assets/filmmaking/Antral/BTS/bts10.jpg";
import Bts11 from "../assets/filmmaking/Antral/BTS/bts11.jpg";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Afsos from "../assets/filmmaking/Others/afsos.jpg";
import Demands from "../assets/filmmaking/Others/demands.jpg";
import ForYou from "../assets/filmmaking/Others/forYou.jpg";
import SohneLagde from "../assets/filmmaking/Others/kinneSohneLagde.jpg";
import LaageReNaina from "../assets/filmmaking/Others/laageReNaina.jpg";
import TereHathDor from "../assets/filmmaking/Others/tereHathDor.jpg";

const othersImages = [
  {
    id: 1,
    imagePath: Afsos,
    title: "Afsos",
    role: "Screenplay & Writer",
    link: "https://www.youtube.com/watch?v=8Muj60GcYTI",
  },
  {
    id: 2,
    imagePath: Demands,
    title: "Demands",
    role: "Assitant Director",
    link: "https://www.youtube.com/watch?v=a0BSeWxwvlc",
  },
  {
    id: 3,
    imagePath: ForYou,
    title: "For You",
    role: "Assitant Director",
    link: "https://www.youtube.com/watch?v=VO79hljFUwE",
  },
  {
    id: 4,
    imagePath: SohneLagde,
    title: "Kinne Sohne Lagde",
    role: "Director",
    link: "https://www.youtube.com/watch?v=tjp4AswOSk0",
  },
  {
    id: 5,
    imagePath: LaageReNaina,
    title: "Laage Re Naina",
    role: "Director",
    link: "https://youtu.be/RFsBiDr-3I0",
  },
  {
    id: 6,
    imagePath: TereHathDor,
    title: "Tere Hath Dor",
    role: "Art Director",
    link: "https://www.youtube.com/watch?v=fRQmmk4WBiI",
  },
];

const btsImages = [
  {
    id: 1,
    imagePath: Bts1,
  },
  {
    id: 2,
    imagePath: Bts2,
  },
  {
    id: 3,
    imagePath: Bts3,
  },
  {
    id: 4,
    imagePath: Bts4,
  },
  {
    id: 5,
    imagePath: Bts5,
  },
  {
    id: 6,
    imagePath: Bts6,
  },
  {
    id: 7,
    imagePath: Bts7,
  },
  {
    id: 8,
    imagePath: Bts8,
  },
  {
    id: 9,
    imagePath: Bts9,
  },
  {
    id: 10,
    imagePath: Bts10,
  },
  {
    id: 11,
    imagePath: Bts11,
  },
];

const Filmaking = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft + 500;
  };

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div id="filmaking" className="mt-10 md:mt-32">
        <div className="flex items-center justify-center my-4 sm:my-8">
          <div className="border-t border-gray-300 w-1/4"></div>
          <p className="mx-2 sm:mx-4 text-gray-500">— FILMMAKING —</p>
          <div className="border-t border-gray-300 w-1/4"></div>
        </div>
        <div className="relative md:h-[80vh] lg:h-screen">
          <img
            className="w-screen h-full md:h-[80vh] lg:h-screen shadow-xl object-cover"
            src={filmmakingBackground}
            alt=""
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <p className="text-gray-300 text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold font-bungee">
              FILMMAKING
            </p>
          </div>
        </div>
        <div className="mt-6 md:mt-16 mx-2 sm:mx-4 md:mx-8">
          <div className="mt-10 md:mt-16 text-center text-4xl md:text-6xl font-semibold mb-12">
            <div className="bg-gray-100 p-6 md:p-8 rounded-md shadow-md">
              <p className="text-lg md:text-xl italic font-serif">
                "A story should have a beginning, a middle and an end, but not
                necessarily in that order."
              </p>
              <p className="text-sm text-gray-600 mt-2">— Jean-Luc Godard</p>
            </div>
          </div>
          <div className="mt-6 md:mt-16 mx-4 md:mx-8">
            <div className="flex items-center justify-center my-8">
              <div className="border-t border-gray-300 w-1/4"></div>
              <p className="mx-4 text-gray-500">— DIRECTION —</p>
              <div className="border-t border-gray-300 w-1/4"></div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg mt-8 md:space-x-8">
              <p className="text-4xl md:text-6xl font-semibold mb-4 md:mb-6">
                Ant-Raal
              </p>
              <div className="flex flex-col-reverse gap-8 md:flex-row">
                <div className="text-black md:w-2/3">
                  <p className="text-base md:text-lg leading-relaxed">
                    "Ant-Raal: The Demon's Revelation" follows ex-cop turned
                    private detective Sanjay on a quest to solve an enigmatic
                    mystery. Striving to extinguish darkness, Sanjay's path
                    veers unexpectedly when a father pleads for help with a
                    cryptic 70-year-old tape recording threatening his daughter.
                    <br />
                    <br />
                    Delving further, Sanjay uncovers unsettling connections
                    between the tape and tragic events spanning decades. The
                    core of the narrative resides in his exploration of
                    Ant-Raal, where reality's fabric bends. Armed with
                    determination and the tape recorder, he must navigate seven
                    episodes, unraveling victims and culprits.
                    <br />
                    <br />
                    "Ant-Raal: The Demon's Revelation" is a psychological
                    thriller transcending good, evil, life, and death. With
                    mystery, suspense, and supernatural intrigue, it captivates,
                    prompting contemplation of the human psyche and the
                    enigmatic beyond.
                  </p>
                </div>

                <div className="flex justify-end items-center md:w-1/3">
                  <img
                    src={antraalIntro}
                    className="rounded-lg shadow-lg max-w-full"
                    alt="Antraal Intro"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center mt-8 md:mt-28 md:mb-10">
                <div className="border-t border-gray-300 w-1/8 md:w-1/4"></div>
                <p className="mx-4 text-gray-500">— BEHIND THE SCENES —</p>
                <div className="border-t border-gray-300 w-1/8 md:w-1/4"></div>
              </div>
              <div className="relative flex items-center">
                <MdChevronLeft
                  onClick={slideLeft}
                  size={40}
                  className="opacity-50 cursor-pointer hover:opacity-100"
                />
                <div
                  id="slider"
                  className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide flex flex-row">
                  {btsImages.map(({ id, imagePath }) => (
                    <img
                      key={id}
                      className="md:w-[300px] rounded-3xl object-cover p-2 hover:scale-105 duration-300"
                      src={imagePath}
                      alt=""
                    />
                  ))}
                </div>
                <MdChevronRight
                  onClick={slideRight}
                  size={40}
                  className="opacity-50 cursor-pointer hover:opacity-100"
                />
              </div>
            </div>
            <div className="bg-gray-100 p-6 md:p-10 rounded-lg shadow-lg mt-8 space-y-6 md:mt-24 md:space-y-0 md:space-x-8">
              <div className="flex flex-col-reverse gap-8 md:flex-row-reverse">
                <div className="text-black flex flex-col justify-center items-center">
                  <p className="text-4xl md:text-6xl font-semibold mb-4 md:mb-6 self-start">
                    Soul Eaters
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    Soul eaters, a film revolving around a women who left her
                    well settled job because of the male dominated culture of
                    that company and now she is looking for another job and
                    giving interviews on a regular basis in a hope that she can
                    feel secure, but in one morning she notice a bruise on her
                    neck which she tries to cover up with makeup.
                    <br />
                    <br />
                    Unfortunately, the bruises on her body starts mushrooming
                    whenever she tries to cover them up with makeup.
                    <br />
                    <br />
                    At last, one night she wakes up from dream and is astonished
                    to witness her absurd and ugly face as these bruises has
                    spread all over her body.She tries hard to erase the
                    disgusting marks on her body but fails. In the end she
                    accepts them.
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src={soulEaters}
                    className="rounded-lg shadow-lg w-full max-w-full md:max-w-md md:h-90 object-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center my-8 mt-20 md:mt-36">
            <div className="border-t border-gray-300 w-1/5"></div>
            <p className="mx-4 text-gray-500">— MY OTHER WORK —</p>
            <div className="border-t border-gray-300 w-1/5"></div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-6 sm:px-0 md:p-10">
            {othersImages.map(({ id, imagePath, title, role, link }) => (
              <div
                key={id}
                onClick={() => handleClick(link)}
                className="flex flex-col bg-gray-100 rounded-lg p-6 shadow-lg space-y-2 md:space-y-0 md:space-x-8 cursor-pointer">
                <img
                  src={imagePath}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 w-full md:h-48 object-cover"
                />
                <p className="md:py-2 self-center duration-200 hover:scale-105 font-bold text-2xl">
                  {title}
                </p>
                <p className="text-gray-500 md:py-2 self-center duration-200 hover:scale-105 font-bold">
                  {role}
                </p>
                <p className="text-gray-500 text-center text-xs italic">
                  Click to watch the video
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filmaking;
