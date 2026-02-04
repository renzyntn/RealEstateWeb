import heroData from "../data.json";
import ClientCount from "./CountUp/ClientCount";
import SalesCount from "./CountUp/SalesCount";

function Hero() {
  const displaySocial = heroData.heroSection.socials.map((data) => {
    return (
      <a
        href={data.link}
        target={"_blank"}
        className="size-6 lg:size-8"
        key={data.id}
        aria-label={data.arialabel}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill={"currentColor"} d={data.svgLink}></path>
        </svg>
      </a>
    );
  });

  return (
    <section className="max-w-screen h-150 md:h-200 mt-20">
      <div className="w-full h-full flex justify-center items-center">
        <img
          className="w-full h-full object-cover brightness-45"
          src={heroData.heroSection.imgBanner}
          alt="Image Banner"
        />
        <div className="absolute flex flex-col justify-center items-center px-4 space-y-6 text-white text-center">
          <h1 className="font-montserrat font-medium text-base md:text-lg">
            {heroData.heroSection.name}
          </h1>
          <h2 className="font-cinzel font-light text-4xl">
            {heroData.heroSection.title}
          </h2>
          <a
            className="w-full h-10 flex justify-center items-center bg-white rounded-full font-montserrat text-black"
            href={heroData.heroSection.calllink}
          >
            <span className="font-medium text-base md:text-lg">
              {heroData.heroSection.calltitle}
            </span>
          </a>
          <div className="w-full grid grid-cols-2 justify-center items-center font-cinzel text-center">
            <div className="stat p-0 md:gap-2">
              <p className="stat-title text-white text-lg md:text-2xl">
                CLIENTS
              </p>
              <ClientCount />
              <p className="stat-desc text-white text-lg md:text-2xl">
                IN 2021
              </p>
            </div>
            <div className="stat p-0 md:gap-2">
              <p className="stat-title text-white text-lg md:text-2xl">SALES</p>
              <SalesCount />
              <p className="stat-desc text-white text-lg md:text-2xl">
                IN TOTAL
              </p>
            </div>
          </div>
          <nav
            className="w-full flex justify-center items-center gap-2"
            aria-label="Social media links"
          >
            {displaySocial}
          </nav>
          <p className="font-cinzel font-medium text-xl">
            {heroData.heroSection.calltext}
          </p>
        </div>
      </div>
    </section>
  );
}
export default Hero;
