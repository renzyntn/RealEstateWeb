import servicesData from "../data.json";

function CardServices() {
  const displayCard = servicesData.servicesSection.map((data) => {
    return (
      <div className="card md:w-md border border-zinc-300" key={data.id}>
        <div className="card-body">
          <div className="size-6 lg:size-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill={"currentColor"} d={data.svgLink}></path>
            </svg>
          </div>
          <h2 className="card-title text-xl lg:text-2xl">{data.title}</h2>
          <p className="text-base text-justify lg:text-lg">
            {data.description}
          </p>
        </div>
      </div>
    );
  });

  return <>{displayCard}</>;
}
export default CardServices;
