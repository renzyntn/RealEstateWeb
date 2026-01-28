import imgSearch from "../assets/images/search/search-image.png";
import iconImg1 from "../assets/images/search/3d-image1.png";
import iconImg2 from "../assets/images/search/3d-image2.png";
import iconImg3 from "../assets/images/search/3d-image3.png";
import iconImg4 from "../assets/images/search/3d-image4.png";

function Search() {
  return (
    <section className="max-w-screen h-150">
      <div className="w-full h-full relative flex justify-center">
        <img
          className="w-full h-full object-cover brightness-45"
          src={imgSearch}
          alt="Image Banner"
        />
        <div className="absolute flex flex-col items-center justify-center px-4 py-6">
          <div className="flex justify-center items-center mb-6">
            <h2 className="text-3xl text-center font-cinzel font-light text-white">
              FIND YOUR DREAM HOME
            </h2>
          </div>
          <div className="min-w-full flex justify-center items-center gap-1">
            <label className="input input-md bg-white outline-none rounded-full shadow-lg/25">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="black"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="text-black font-sans"
              />
            </label>
            <button className="btn btn-md rounded-full bg-black text-white font-light border-none">
              Search
            </button>
          </div>
        </div>
        <div className="absolute w-full grid grid-cols-2 justify-items-center bottom-0 px-4 py-6 gap-2 text-center">
          <div className="flex flex-col justify-center items-center">
            <img src={iconImg1} alt="3D Image 1" className="w-30" />
            <h3 className="text-white text-base font-montserrat font-medium">
              Browse Available Properties
            </h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={iconImg2} alt="3D Image 1" className="w-30" />
            <h3 className="text-white text-base font-montserrat font-medium">
              Prime Locations Nearby
            </h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={iconImg3} alt="3D Image 1" className="w-30" />
            <h3 className="text-white text-base font-montserrat font-medium">
              Trusted Properties
            </h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={iconImg4} alt="3D Image 1" className="w-30" />
            <h3 className="text-white text-base font-montserrat font-medium">
              Best Market Prices
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Search;
