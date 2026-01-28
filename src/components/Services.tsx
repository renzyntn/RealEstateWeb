import CardServices from "./CardServices";

function Services() {
  return (
    <section className="max-w-screen">
      <div className="w-full h-full flex flex-col justify-center items-center px-4 py-6 text-black">
        <div className="w-full flex flex-col items-center">
          <h2 className="text-3xl font-light font-cinzel mb-6">OUR SERVICES</h2>
          <div className="grid grid-cols-1 gap-6 justify-center items-center font-montserrat">
            <CardServices />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
