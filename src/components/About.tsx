import { motion } from "motion/react";
import aboutData from "../data.json";

function About() {
  return (
    <section className="max-w-screen md:h-200">
      <div className="w-full h-full flex flex-col justify-center items-center px-4 py-6 lg:p-8">
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-black font-montserrat"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <div className="flex flex-col justify-center items-center space-y-3 lg:pr-8">
            <div className="size-70 md:size-80 xl:size-100 rounded-full overflow-hidden">
              <img
                src={aboutData.aboutSection.link}
                alt={aboutData.aboutSection.alt}
              />
            </div>
            <h2 className="font-cinzel font-medium text-3xl lg:text-4xl">
              {aboutData.aboutSection.name}
            </h2>
            <h3 className="font-medium text-xl lg:text-2xl">
              {aboutData.aboutSection.title}
            </h3>
          </div>
          <p className="lg:w-xl font-light text-center md:text-justify text-base md:text-xl xl:text-2xl lg:pl-8">
            {aboutData.aboutSection.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
export default About;
