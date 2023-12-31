import PotraitPageImage from "../assets/portraits-background.jpg";
import P1 from "../assets/potraits/p1-n.jpg";
import P2 from "../assets/potraits/p2-n.jpg";
import P3 from "../assets/potraits/p3.jpg";
import P4 from "../assets/potraits/potrait4.jpg";
import P5 from "../assets/potraits/potrait5.jpg";
import P6 from "../assets/potraits/p6.jpg";
import P7 from "../assets/potraits/p7.jpg";
import P8 from "../assets/potraits/p8.jpg";
import P9 from "../assets/potraits/p9.jpg";

const imagesPotraits = [
  {
    id: 1,
    imagePath: P1,
  },
  {
    id: 2,
    imagePath: P2,
  },
  {
    id: 3,
    imagePath: P3,
  },
  {
    id: 4,
    imagePath: P4,
  },
  {
    id: 5,
    imagePath: P5,
  },
  {
    id: 6,
    imagePath: P6,
  },
  {
    id: 7,
    imagePath: P7,
  },
  {
    id: 8,
    imagePath: P8,
  },
  {
    id: 9,
    imagePath: P9,
  },
];
const Portraits = () => {
  return (
    <>
      <div id="portraits" className="mt-32">
        <div className="flex items-center justify-center my-8">
          <div className="border-t border-gray-300 w-1/4"></div>
          <p className="mx-4 text-gray-500">— PORTRAITS —</p>
          <div className="border-t border-gray-300 w-1/4"></div>
        </div>
        <div className="relative md:h-screen">
          <img
            className="w-screen md:h-screen shadow-xl object-cover"
            src={PotraitPageImage}
            alt=""
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <p className="text-gray-300 text-3xl md:text-7xl font-extrabold font-bungee">
              PORTRAITS
            </p>
          </div>
        </div>
        <div className="mt-10 md:mt-36 text-center text-4xl md:text-6xl font-semibold mb-12">
          <div className="bg-blue-100 p-6 md:p-8 rounded-md shadow-md">
            <p className="text-lg md:text-xl italic font-serif text-blue-800">
              State level Winner in drawing.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Amritsar Art gallery 2018 Exhibition
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 px-4 sm:px-8 md:px-12 m-4 sm:m-6">
          {imagesPotraits.map(({ id, imagePath }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden">
              <img
                src={imagePath}
                alt=""
                className="object-cover w-full h-64 md:h-full duration-200 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portraits;
