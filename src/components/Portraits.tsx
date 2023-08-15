import PotraitPageImage from "../assets/portraits-background.jpg";

const Portraits = () => {
  return (
    <>
      <div id="portraits" className="h-screen">
        <div className=" md:h-screen flex justify-center items-center">
          <img
            className="rounded shadow-xl w-full h-full md:mt-32 opacity-70"
            src={PotraitPageImage}
            alt=""
          />
          <div className="absolute inset text-black justify-center items-center">
            <p className="text-3xl md:text-7xl font-extrabold font-bungee">
              Portraits
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portraits;
