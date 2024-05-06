"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ProductCard from "@/components/Product-card";

export default function Sliders(props) {
  const { products } = props;

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 4000 }}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        className="testimonial-slider"
        breakpoints={{
          360: {
            slidesPerView: 1,
            loop: false,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1170: {
            slidesPerView: 3,
          },
        }}
      >
        {products?.results &&
          products?.results.map((singleSlider) => (
            <SwiperSlide className="single-testimonial" key={singleSlider.id}>
              <ProductCard productsDetails={singleSlider} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
