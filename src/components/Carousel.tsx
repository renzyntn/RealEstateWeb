import Gallery from "./ImageCarousel/Gallery";

function Carousel() {
  return (
    <section className="max-w-screen">
      <div className="flex flex-col w-full justify-center items-center px-4 py-6">
        <span className="flex justify-center items-center mb-6">
          <h2 className="font-cinzel text-3xl text- font-light">
            PHOTO GALLERY
          </h2>
        </span>
        <div className="w-full">
          <Gallery />
        </div>
      </div>
    </section>
  );
}
export default Carousel;
