import TheatreBackground from "../assets/theatre/theatre-background.jpg";
import T1 from "../assets/theatre/t1.jpg";
import T2 from "../assets/theatre/theatre2.jpg";
import T3 from "../assets/theatre/theatre3.jpg";
import T4 from "../assets/theatre/theatre4.jpg";
import R1 from "../assets/theatre/recognition/reco1.jpg";
import R2 from "../assets/theatre/recognition/reco2.jpg";
import R3 from "../assets/theatre/recognition/reco3.jpg";
import R4 from "../assets/theatre/recognition/reco4.jpg";

const imagesTheatre = [
  {
    id: 1,
    imagePath: T1,
  },
  {
    id: 2,
    imagePath: T2,
  },
  {
    id: 3,
    imagePath: T3,
  },
  {
    id: 4,
    imagePath: T4,
  },
];

const imagesRecognition = [
  {
    id: 1,
    imagePath: R1,
  },
  {
    id: 2,
    imagePath: R2,
  },
  {
    id: 3,
    imagePath: R3,
  },
  {
    id: 4,
    imagePath: R4,
  },
];

const Theatre = () => {
  return (
    <>
      <div id="theatre" className="h-screen mt-32">
        <div className=" md:h-screen flex justify-center items-center overflow-hidden">
          <img
            className="rounded shadow-xl w-screen md:h-screen opacity-80 object-cover"
            src={TheatreBackground}
            alt=""
          />
          <div className="absolute inset text-black justify-center items-center">
            <p className="text-3xl md:text-7xl font-extrabold font-bungee">
              THEATRE
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-36 text-center text-4xl md:text-6xl font-semibold mb-12">
          <div className="bg-gray-100 p-6 md:p-8 rounded-md shadow-md">
            <p className="text-lg md:text-xl italic font-serif">
              "Creativity is the greatest rebellion in existence"
            </p>
            <p className="text-sm text-gray-600 mt-2">— Osho</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 px-8 md:px-12 m-6">
          {imagesTheatre.map(({ id, imagePath }) => (
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

        <div className="mt-10 md:mt-36 text-center text-4xl md:text-6xl font-semibold mb-12">
          <div className="bg-blue-100 p-6 md:p-8 rounded-md shadow-md">
            <p className="text-lg md:text-xl italic font-serif text-blue-800">
              Proud participant of the 8th World Olympics Theatre
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Recognitions and Achievements that shape my journey
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-8 md:px-12 m-6">
          {imagesRecognition.map(({ id, imagePath }) => (
            <div
              key={id}
              className="relative shadow-md rounded-lg overflow-hidden border-2 border-gray-300">
              <a
                href={imagePath}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full">
                <img
                  src={imagePath}
                  alt=""
                  className="object-cover w-full h-64 lg:h-full duration-200 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity flex items-center justify-center">
                  <button className="px-6 py-3 bg-white rounded-md text-gray-800 text-xl font-semibold">
                    Read Newsletter
                  </button>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Theatre;
