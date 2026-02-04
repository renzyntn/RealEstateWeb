import CardServices from "./CardServices";

function Services() {
  return (
    <section className="max-w-screen">
      <div className="w-full h-full flex flex-col justify-center items-center px-4 py-6 lg:p-8 text-black">
        <h2 className="font-cinzel font-light text-3xl md:text-4xl mb-6 lg:mb-12">
          OUR SERVICES
        </h2>
        <div className="flex flex-wrap md:px-8 gap-6 md:gap-8 justify-center items-center font-montserrat">
          <CardServices />
        </div>
      </div>
    </section>
  );
}
export default Services;
