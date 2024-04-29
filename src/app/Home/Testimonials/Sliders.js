"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import TestimonialImg1 from "../../../../public/img/testi1.png";
import TestimonialImg2 from "../../../../public/img/testi2.png";
import TestimonialImg3 from "../../../../public/img/testi3.png";
import ProductCard from "@/components/Product-card";

export default function Sliders(props) {
  const {products} = props;

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
        {products?.results && products?.results.map((singleSlider) => (
          <SwiperSlide className="single-testimonial" key={singleSlider.id}>
            <ProductCard 
             productsDetails={singleSlider}
            />
            {/* <Image src={singleSlider.img} alt="#" width={53} height={53} />
            <p>{singleSlider.desc}</p>
            <h4 className="name">{singleSlider.name}</h4> */}
          </SwiperSlide>
          // <ProductCard key={singleSlider.id}/>
        ))}
      </Swiper>
    </>
  );
}
