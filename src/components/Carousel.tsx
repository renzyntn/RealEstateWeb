import Gallery from "./ImageCarousel/Gallery";

function Carousel() {
  return (
    <section className="max-w-screen">
      <div className="lg:h-200 flex flex-col w-full justify-center items-center px-4 py-6 lg:p-8">
        <h2 className="font-cinzel text-3xl md:text-4xl font-light mb-6 lg:mb-12">
          PHOTO GALLERY
        </h2>
        <div className="w-full md:w-2xl lg:w-4xl">
          <Gallery />
        </div>
      </div>
    </section>
  );
}
export default Carousel;
