import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper.css";
import "swiper/swiper-bundle.css";

import CarouselImg1 from "../../assets/images/carousel/carousel-image1.png";
import CarouselImg2 from "../../assets/images/carousel/carousel-image2.png";
import CarouselImg3 from "../../assets/images/carousel/carousel-image3.png";
import CarouselImg4 from "../../assets/images/carousel/carousel-image4.png";
import CarouselImg5 from "../../assets/images/carousel/carousel-image5.png";
import CarouselImg6 from "../../assets/images/carousel/carousel-image6.png";
import CarouselImg7 from "../../assets/images/carousel/carousel-image7.png";

function Gallery() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      speed={2000}
      slidesPerView={1}
      spaceBetween={20}
    >
      <SwiperSlide>
        <img
          src={CarouselImg1}
          alt="Carousel Image 1"
          className="object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={CarouselImg2}
          alt="Carousel Image 2"
          className="object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={CarouselImg3}
          alt="Carousel Image 3"
          className="object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={CarouselImg4}
          alt="Carousel Image 4"
          className="object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={CarouselImg5}
          alt="Carousel Image 5"
          className="object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={CarouselImg6}
          alt="Carousel Image 6"
          className="object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={CarouselImg7}
          alt="Carousel Image 7"
          className="object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Gallery;
