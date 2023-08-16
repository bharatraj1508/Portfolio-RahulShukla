import filmmakingBackground from "../assets/filmmaking/film-making-background.jpg";

const Filmaking = () => {
  return (
    <>
      <div id="filmaking">
        <div className="flex items-center justify-center my-8">
          <div className="border-t border-gray-300 w-1/4"></div>
          <p className="mx-4 text-gray-500">— FILMMAKING —</p>
          <div className="border-t border-gray-300 w-1/4"></div>
        </div>
        <div className="relative md:h-screen">
          <img
            className="w-screen md:h-screen shadow-xl object-cover"
            src={filmmakingBackground}
            alt=""
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <p className="text-gray-300 text-3xl md:text-7xl font-extrabold font-bungee">
              FILMMAKING
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filmaking;
