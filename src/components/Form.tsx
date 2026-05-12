import { motion } from "motion/react";
import formData from "../data.json";
import Location from "./Location";

function Form() {
  return (
    <section className="max-w-screen">
      <motion.div
        className="flex flex-col justify-center items-center px-4 py-6 lg:p-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="font-cinzel font-light text-3xl md:text-4xl mb-6 lg:mb-12">
          GET IN TOUCH
        </h2>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8">
          <form className="w-full md:w-lg flex flex-col justify-center items-center gap-6 mb-6 lg:mb-0 lg:pr-8 font-montserrat">
            <fieldset className="fieldset w-full text-base">
              <legend className="fieldset-legend text-black">Name</legend>
              <input
                className="input input-md w-full bg-white border border-gray-500 rounded-lg placeholder:text-gray-500"
                placeholder="John Doe"
                type="text"
              />
            </fieldset>
            <fieldset className="fieldset w-full text-base">
              <legend className="fieldset-legend text-black">
                Email
                <span className="text-error">*</span>
              </legend>
              <input
                className="input input-md w-full validator bg-white border border-gray-500 rounded-lg placeholder:text-gray-500"
                placeholder="johndoe@example.com"
                type="email"
                required
              />
            </fieldset>
            <fieldset className="fieldset w-full text-base">
              <legend className="fieldset-legend text-black">Message</legend>
              <textarea
                className="textarea w-full h-24 bg-white border border-gray-500 rounded-lg placeholder:text-gray-500 resize-none"
                placeholder="Write something..."
              ></textarea>
            </fieldset>
            <motion.button
              className="btn btn-md lg:btn-lg rounded-full border-none bg-black text-white font-light"
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
            >
              Submit
            </motion.button>
          </form>
          <div className="w-full md:w-lg flex flex-col justify-center lg:justify-between items-center lg:pl-8 text-center font-montserrat">
            <div className="space-y-4 lg:space-y-3">
              <h3 className="font-medium text-lg">
                {formData.formSection.name}
              </h3>
              <h4 className="text-base">{formData.formSection.address}</h4>
              <a
                className="text-gray-500 text-sm"
                href={formData.formSection.contactLink}
              >
                {formData.formSection.contactText}
              </a>
              <h5 className="font-medium text-lg mt-4 lg:mt-3">
                {formData.formSection.officeHours}
              </h5>
              <div className="flex flex-row gap-4 justify-center items-center text-base">
                <p>{formData.formSection.scheduleTitle}</p>
                <span>{formData.formSection.scheduleTime}</span>
              </div>
              <p className="text-sm">{formData.formSection.appointmentText}</p>
              <Location />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
export default Form;
