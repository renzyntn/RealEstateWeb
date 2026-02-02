import CardTestimonial from "./CardTestimonial";

function Testimonial() {
  return (
    <section className="max-w-screen">
      <div className="w-full h-full flex flex-col justify-center items-center px-4 py-6 lg:p-8 text-black">
        <h2 className="font-cinzel font-light text-3xl md:text-4xl mb-6 lg:mb-12">
          GET IT SOLD
        </h2>
        <div className="grid grid-cols-1 md:w-full lg:w-5xl md:px-8 gap-6 md:gap-10 justify-center items-center font-montserrat">
          <CardTestimonial />
        </div>
      </div>
    </section>
  );
}
export default Testimonial;
