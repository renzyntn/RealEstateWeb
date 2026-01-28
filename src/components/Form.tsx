function Form() {
  return (
    <section className="max-w-screen">
      <div className="flex flex-col justify-center items-center px-4 py-6">
        <h2 className="text-3xl font-light font-cinzel mb-6">GET IN TOUCH</h2>
        <form className="w-full flex flex-col justify-center items-center gap-6 mb-6 font-montserrat">
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
            className="btn btn-md rounded-full bg-black text-white font-light border-none"
            type="submit"
          >
            Submit
          </button>
        </form>
        <div className="flex flex-col justify-center items-center gap-6 text-center font-montserrat">
          <div className="space-y-6">
            <h3 className="text-lg font-medium">
              MARCI METZGER – THE RIDGE REALTY GROUP
            </h3>
            <h4 className="text-base">
              3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
            </h4>
            <a className="text-sm text-gray-500" href="tel: (206) 919-6886">
              (206) 919-6886
            </a>
          </div>
          <div className="space-y-6">
            <h5 className="text-lg font-medium">OFFICE HOURS</h5>
            <div className="flex flex-row gap-4 justify-center items-center text-base">
              <p>Open Daily</p>
              <span>8:00 AM - 7:00 PM</span>
            </div>
            <p className="text-sm">
              Appointments outside office hours available upon request. Just
              call!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Form;
