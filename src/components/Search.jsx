import imgSearch from "../assets/images/search/search-image.png"

function Search() {
    return (
        <section className="max-w-screen h-[80vh]">
            <div className="relative w-full h-full">
                <img className="w-full h-full object-cover brightness-45" src={imgSearch} alt="Image Banner"/>
                <div className="w-full flex flex-col justify-center items-center p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex flex-col justify-center items-center p-4 space-y-4 text-black text-center font-montserrat bg-white rounded-md">
                        {/* {<h2 className="text-3xl font-cinzel font-medium">
                            Find Your Dream Home
                        </h2>} */}
                        <h3 className="text-3xl font-cinzel font-medium">
                            Search Listings
                        </h3>
                        <form className="w-full flex flex-col justify-center items-center space-y-2">
                            <div className="w-full flex flex-col justify-center items-start space-y-2">
                                <label>Location</label>
                                <select className="w-full p-2 outline-none text-start text-base border border-zinc-400 rounded-md">
                                    <option value={"#"} disabled selected>Choose Location</option>
                                    <option value={"Lorem"}>Lorem</option>
                                    <option value={"Lorem"}>Lorem</option>
                                    <option value={"Lorem"}>Lorem</option>
                                </select>
                            </div>
                            <div className="w-full flex flex-col justify-center items-start space-y-2">
                                <label>Type</label>
                                <select className="w-full p-2 outline-none text-start text-base border border-zinc-400 rounded-md">
                                    <option value={"#"} disabled selected>Choose Location</option>
                                    <option value={"Lorem"}>Lorem</option>
                                    <option value={"Lorem"}>Lorem</option>
                                    <option value={"Lorem"}>Lorem</option>
                                </select>
                            </div>
                            <div className="w-full flex flex-col justify-center items-start space-y-2">
                                <label>Sort By</label>
                                <select className="w-full p-2 outline-none text-start text-base border border-zinc-400 rounded-md">
                                    <option value={"#"} disabled selected>Choose Location</option>
                                    <option value={"Lorem"}>Lorem</option>
                                    <option value={"Lorem"}>Lorem</option>
                                    <option value={"Lorem"}>Lorem</option>
                                </select>
                            </div>
                            <div className="w-full flex flex-col justify-center items-start space-y-2">
                                <label>Bedrooms</label>
                                <select className="w-full p-2 outline-none text-start text-base border border-zinc-400 rounded-md">
                                    <option value={"#"} disabled selected>Choose Location</option>
                                    <option value={"Lorem"}>Lorem</option>
                                    <option value={"Lorem"}>Lorem</option>
                                    <option value={"Lorem"}>Lorem</option>
                                </select>
                            </div>
                            <div className="w-full flex flex-col justify-center items-start space-y-2">
                                <label>Baths</label>
                                <select className="w-full p-2 outline-none text-start text-base border border-zinc-400 rounded-md">
                                    <option value={"#"} disabled selected>Choose Location</option>
                                    <option value={"Lorem"}>Lorem</option>
                                    <option value={"Lorem"}>Lorem</option>
                                    <option value={"Lorem"}>Lorem</option>
                                </select>
                            </div>
                            <label>Min. Price</label>
                            <input />
                            <label>Max Price</label>
                            <input />
                            <button>
                                <span>
                                    Search Now
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Search;