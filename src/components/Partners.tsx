import { motion } from "motion/react";
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
      <motion.div
        className="w-full md:h-70 py-6 lg:py-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="flex w-full h-full justify-center items-center">
          <Marquee speed={30} autoFill={true} className="h-full">
            {displayMarquee}
          </Marquee>
        </div>
      </motion.div>
    </section>
  );
}
export default Partners;
