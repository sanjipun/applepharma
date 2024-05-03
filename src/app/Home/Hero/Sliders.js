"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import HeroBg1 from "../../../../public/img/slider2.jpg";
import HeroBg2 from "../../../../public/img/slider.jpg";
import HeroBg3 from "../../../../public/img/slider3.jpg";
import HeroBg4 from "../../../../public/img/heroImg1.jpg";
import HeroBg5 from "../../../../public/img/heroImg2.jpg";
import HeroBg6 from "../../../../public/img/heroImg3.jpg";
import HeaderTwo from "@/components/Header/HeaderTwo";
import HeroBgMain1 from "../../../../public/Factory/heroImageFactory.jpg";
import HeroImage1 from "../../../../public/img/hero/hero_image_1.webp";
import HeroImage2 from "../../../../public/img/hero/hero_image_2.webp";
import HeroBgMain2 from "../../../../public/Factory/heroImageFactory1.jpg";
import HeroBgMain from "../../../../public/img/heroImgMain1.jpg";

import FlippingTextComponent from "@/components/BlogSidebar/flipping-text";
export default function Sliders(props) {
    const { sectionName } = props;
    const text = ['Health', 'Life'];

    const [heroSliders, setheroSliders] = useState([
        {
            id: "slider1",
            bgImg: HeroImage1,
            title:
                "Setting New Healthcare <br> Standards",
            subTitle:
                "For Better Health",
            subAnotherTitle: "A <span> WHO-GMP </span> Certified, Medicine manufactorinf Company.",
            button: {
                text: "About Us",
                link: "/about",
            },
            button2: {
                text: "Contact Us",
                link: "/contact",
            },
        },
        {
            id: "slider2",
            bgImg: HeroImage2,
            title:
                "Quality Medicine for <br> Improved Lives",
            subTitle:
                "For Better Life",
            subAnotherTitle: "A <span> WHO-GMP </span> Certified, Medicine manufactorinf Company.",
            button: {
                text: "About Us",
                link: "/about",
            },
            button2: {
                text: "Contact Us",
                link: "/contact",
            },
        }
        // {
        //   id: "slider2",
        //   bgImg: HeroBg5,
        //   title:
        //     "We Provide <span>Medical</span> Services <br/> That You Can <span>Trust!</span>",
        //   subTitle:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque,<br/>faucibus libero eu, gravida quam. ",
        //   button: {
        //     text: "Get Appointment",
        //     link: "/appoinment",
        //   },
        //   button2: {
        //     text: "About Us",
        //     link: "/about",
        //   },
        // },
        // {
        //   id: "slider3",
        //   bgImg: HeroBg3,
        //   title:
        //     "We Provide <span>Medical</span> Services <br/> That You Can <span>Trust!</span>",
        //   subTitle:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque,<br/>faucibus libero eu, gravida quam. ",
        //   button: {
        //     text: "Get Appointment",
        //     link: "/appoinment",
        //   },
        //   button2: {
        //     text: "Conatct Now",
        //     link: "/contact",
        //   },
        // },
    ]);


    return (
        <>
            {/* <!-- Slider Area --> */}
            <section className={sectionName ? sectionName : "slider"} >
                <Swiper
                    autoplay={{ delay: 5000 }}
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    className="hero-slider"
                >

                    {heroSliders.map((singleSlider) => (
                        <SwiperSlide
                            className="single-slider"
                            style={{
                                backgroundImage: `url(${singleSlider.bgImg.src})`,
                            }}
                            key={singleSlider.id}
                        >
                            {/* <div className="blue-layer"></div> */}
                            <div className="container" style={{ zIndex: '1066', position: 'relative' }}>
                                <div className="row hero-row">
                                    <div className="col-12">
                                        <div className="text">
                                            <h1
                                                dangerouslySetInnerHTML={{
                                                    __html: singleSlider.title,
                                                }}
                                            ></h1>
                                            <div className="flipping-text">
                                                <div className="flipping-inner">
                                                    <p
                                                        dangerouslySetInnerHTML={{
                                                            __html: singleSlider.subTitle,
                                                        }}
                                                        style={{ marginTop: "0px" }}
                                                    ></p>
                                                    {/* <FlippingTextComponent texts={text} intervalTime={2500} /> */}
                                                    {/* <div className="flipping-text-inner">
                          <span>Health</span>
                          <span>Life</span>
                        </div> */}
                                                </div>
                                            </div>


                                            {/* <!-- Slider Button --> */}
                                            <div className="button">
                                                <a href={singleSlider?.button.link} className="btn">
                                                    {singleSlider?.button.text}
                                                </a>
                                                <a
                                                    href={singleSlider?.button2.link}
                                                    className="btn primary"
                                                >
                                                    {singleSlider?.button2.text}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </section>
        </>
    );
}
