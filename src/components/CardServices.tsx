import { motion } from "motion/react";
import servicesData from "../data.json";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.8 } },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function CardServices() {
  const displayCard = servicesData.servicesSection.map((data) => {
    return (
      <motion.div
        className="card md:w-md border border-zinc-300"
        key={data.id}
        variants={item}
      >
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
      </motion.div>
    );
  });

  return (
    <motion.div
      className="flex flex-wrap md:px-8 gap-6 md:gap-8 justify-center items-center font-montserrat"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {displayCard}
    </motion.div>
  );
}
export default CardServices;
