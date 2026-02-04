import servicesData from "../data.json";

function CardServices() {
  const displayCard = servicesData.servicesSection.map((data, index) => {
    return (
      <div
        className={`card w-full md:w-lg bg-base-white shadow-xl/20 md:odd:justify-self-start ${index % 2 === 0 ? "md:odd:justify-self-start" : "md:even:justify-self-end"}`}
        key={data.id}
      >
        <figure>
          <img
            src={data.link}
            alt={data.alt}
            className="md:w-lg md:h-91 object-cover"
          />
        </figure>
        <div className="card-body space-y-2">
          <h2 className="card-title text-xl md:text-2xl">{data.title}</h2>
          <p className="text-base text-justify md:text-lg">
            {data.description}
          </p>
        </div>
      </div>
    );
  });

  return <>{displayCard}</>;
}
export default CardServices;
