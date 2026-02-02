import aboutData from "../data.json";

function About() {
  const displayAbout = aboutData.aboutSection.map((data) => {
    return (
      <div
        className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-black font-montserrat"
        key={data.id}
      >
        <div
          className="flex flex-col justify-center items-center space-y-3 lg:pr-8"
          key={data.id}
        >
          <div className="size-70 md:size-80 xl:size-100 rounded-full overflow-hidden">
            <img src={data.link} alt={data.alt} />
          </div>
          <h2 className="font-cinzel font-medium text-3xl lg:text-4xl">
            {data.name}
          </h2>
          <h3 className="font-medium text-xl lg:text-2xl">{data.title}</h3>
        </div>
        <p className="lg:w-xl font-light text-center md:text-justify text-base md:text-xl xl:text-2xl lg:pl-8">
          {data.description}
        </p>
      </div>
    );
  });
  return (
    <section className="max-w-screen md:h-200">
      <div className="w-full h-full flex flex-col justify-center items-center px-4 py-6 lg:p-8">
        {displayAbout}
      </div>
    </section>
  );
}
export default About;
