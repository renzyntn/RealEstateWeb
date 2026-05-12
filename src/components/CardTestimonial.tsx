import { motion } from "motion/react";
import testimonialData from "../data.json";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 1 } },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function CardTestimonial() {
  const displayCard = testimonialData.testimonialSection.map((data, index) => {
    return (
      <motion.div
        className={`card w-full md:w-lg bg-base-white shadow-xl/20 ${index % 2 === 0 ? "md:odd:justify-self-start" : "md:even:justify-self-end"}`}
        key={data.id}
        variants={item}
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
      </motion.div>
    );
  });

  return (
    <motion.div
      className="grid grid-cols-1 md:w-full lg:w-5xl md:px-8 gap-6 md:gap-10 justify-center items-center font-montserrat"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {displayCard}
    </motion.div>
  );
}
export default CardTestimonial;
