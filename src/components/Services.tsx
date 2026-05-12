import { motion } from "motion/react";
import CardServices from "./CardServices";

function Services() {
  return (
    <section className="max-w-screen">
      <motion.div
        className="w-full h-full flex flex-col justify-center items-center px-4 py-6 lg:p-8 text-black"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="font-cinzel font-light text-3xl md:text-4xl mb-6 lg:mb-12">
          OUR SERVICES
        </h2>
        <CardServices />
      </motion.div>
    </section>
  );
}
export default Services;
