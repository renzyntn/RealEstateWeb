import CardServices from "./CardServices";

function Services() {
  return (
    <section className="max-w-screen">
      <div className="w-full h-full flex flex-col justify-center items-center px-4 py-6 lg:p-8 text-black">
        <div className="w-full flex flex-col items-center">
          <h2 className="font-cinzel font-light text-3xl md:text-4xl mb-6 lg:mb-12">
            OUR SERVICES
          </h2>
          <div className="grid grid-cols-1 md:w-full lg:w-5xl md:px-8 gap-6 md:gap-10 justify-center items-center font-montserrat">
            <CardServices />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
