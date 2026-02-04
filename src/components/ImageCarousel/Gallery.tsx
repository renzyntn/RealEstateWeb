import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper.css";
import "swiper/swiper-bundle.css";
import carouselData from "../../data.json";

function Gallery() {
  const displaySlide = carouselData.carouselSection.map((data) => {
    return (
      <SwiperSlide>
        <img
          src={data.link}
          alt={data.alt}
          className="object-cover"
          key={data.id}
        />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      speed={2000}
      slidesPerView={1}
      spaceBetween={20}
    >
      {displaySlide}
    </Swiper>
  );
}

export default Gallery;
