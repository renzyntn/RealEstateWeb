function Form() {
  return (
    <section className="max-w-screen">
      <div className="lg:h-200 flex flex-col justify-center items-center px-4 py-6 lg:p-8">
        <h2 className="font-cinzel font-light text-3xl md:text-4xl mb-6 lg:mb-12">
          GET IN TOUCH
        </h2>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8">
          <form className="w-full md:w-lg flex flex-col justify-center items-center gap-6 mb-6 lg:pr-8 font-montserrat">
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
            <button
              className="btn btn-md lg:btn-lg rounded-full border-none bg-black text-white font-light"
              type="submit"
            >
              Submit
            </button>
          </form>
          <div className="w-full md:w-lg lg:h-105 flex flex-col justify-center lg:justify-between items-center lg:pl-8 text-center font-montserrat">
            <div className="space-y-6">
              <h3 className="font-medium text-lg lg:text-xl">
                MARCI METZGER – THE RIDGE REALTY GROUP
              </h3>
              <h4 className="text-base lg:text-lg">
                3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
              </h4>
              <a
                className="text-gray-500 text-sm lg:text-base"
                href="tel: (206) 919-6886"
              >
                (206) 919-6886
              </a>
            </div>
            <div className="space-y-6">
              <h5 className="font-medium text-lg lg:text-xl">OFFICE HOURS</h5>
              <div className="flex flex-row gap-4 justify-center items-center text-base lg:text-lg">
                <p>Open Daily</p>
                <span>8:00 AM - 7:00 PM</span>
              </div>
              <p className="text-sm lg:text-base">
                Appointments outside office hours available upon request. Just
                call!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Form;
