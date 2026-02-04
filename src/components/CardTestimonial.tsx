import testimonialData from "../data.json";

function CardTestimonial() {
  const displayCard = testimonialData.testimonialSection.map((data, index) => {
    return (
      <div
        className={`card w-full md:w-lg bg-base-white shadow-xl/20 ${index % 2 === 0 ? "md:odd:justify-self-start" : "md:even:justify-self-end"}`}
        key={data.id}
      >
        <figure>
          <img src={data.link} alt={data.alt} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl md:text-2xl">{data.title}</h2>
          <p className="text-base md:text-lg text-justify">
            {data.description}
          </p>
        </div>
      </div>
    );
  });

  return <>{displayCard}</>;
}
export default CardTestimonial;
