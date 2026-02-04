import searchData from "../data.json";

function Search() {
  const displayGrid = searchData.searchSection.iconImg.map((data) => {
    return (
      <div className="flex flex-col justify-center items-center" key={data.id}>
        <img src={data.link} alt={data.alt} className="w-30 md:w-50" />
        <h3 className="text-white text-base md:text-lg font-montserrat font-medium lg:font-semibold">
          {data.title}
        </h3>
      </div>
    );
  });
  return (
    <section className="max-w-screen h-150 md:h-200">
      <div className="w-full h-full relative flex justify-center">
        <img
          className="w-full h-full object-cover brightness-45"
          src={searchData.searchSection.imgBanner}
          alt="Image Banner"
        />
        <div className="absolute flex flex-col items-center justify-center px-4 py-6 lg:py-12">
          <div className="flex justify-center items-center mb-6">
            <h2 className="text-center font-cinzel font-light text-white text-3xl md:text-4xl">
              FIND YOUR DREAM HOME
            </h2>
          </div>
          <div className="min-w-full flex justify-center items-center gap-2">
            <label className="lg:w-full input input-md lg:input-lg bg-white outline-none rounded-full shadow-lg/25">
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
            <button className="btn btn-md lg:btn-lg rounded-full border-none bg-black text-white font-light">
              Search
            </button>
          </div>
        </div>
        <div className="absolute w-full grid grid-cols-2 justify-items-center bottom-0 px-4 py-6 lg:py-16 gap-2 text-center">
          {displayGrid}
        </div>
      </div>
    </section>
  );
}
export default Search;
