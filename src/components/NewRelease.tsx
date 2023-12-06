import ReactPlayer from "react-player";

const NewRelease = () => {
  return (
    <div>
        <h1 className="text-4xl md:text-6xl font-semibold mb-12 text-center font-anton mt-10">
          Upcoming Project
        </h1>

        <div className="flex items-center justify-center my-4 sm:my-8">
          <div className="border-t border-gray-300 w-1/4"></div>
          <p className="mx-2 sm:mx-4 text-gray-500">— ANTRAAL —</p>
          <div className="border-t border-gray-300 w-1/4"></div>
        </div>

        <div className='player-wrapper flex justify-center rounded-lg shadow-lg overflow-hidden backdrop-blur-lg bg-gray-100 '>
    <ReactPlayer
        className='react-player fixed-bottom rounded-lg object-cover'
        url='videos/FilmTrailer.mp4'
        width="full"    // Set width to 50% on large screens (PC)
        height="full" // Use "full" for full height on small screens
        playing={true}
        muted={true}
        controls={true}
    />
</div>





    </div>
  )
}

export default NewRelease ;