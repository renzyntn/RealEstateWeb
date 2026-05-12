import { motion } from "motion/react";
import CardTestimonial from "./CardTestimonial";

function Testimonial() {
  return (
    <section className="max-w-screen">
      <div className="w-full h-full flex flex-col justify-center items-center px-4 py-6 lg:p-8 text-black">
        <motion.h2
          className="font-cinzel font-light text-3xl md:text-4xl mb-6 lg:mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          GET IT SOLD
        </motion.h2>
        <CardTestimonial />
      </div>
    </section>
  );
}
export default Testimonial;
