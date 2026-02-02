import Marquee from "react-fast-marquee";
import marqueeData from "../data.json";

function Partners() {
  const displayMarquee = marqueeData.marqueeSection.map((data) => {
    return (
      <img
        key={data.id}
        src={data.link}
        alt={data.alt}
        className="w-20 md:w-25 lg:w-30 mx-5 md:mx-10 lg:mx-20"
      />
    );
  });

  return (
    <section className="max-w-screen">
      <div className="w-full md:h-70 py-6 lg:py-8">
        <div className="flex w-full h-full justify-center items-center">
          <Marquee speed={30} autoFill={true} className="h-full">
            {displayMarquee}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
export default Partners;
