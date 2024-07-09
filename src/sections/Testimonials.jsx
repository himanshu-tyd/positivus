import React, { useRef } from "react";
import { testimonials } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

const Testimonials = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
      <header className="flex w-full lg:flex-row flex-col items-center gap-5 ">
        <h1 className="lg:text-[48px] text-[38px] font-bold bg-green px-4 text-kanit ">
          Testimonials
        </h1>
        <p className="text-xl lg:max-w-[50%] lg:text-start text-center font-normal">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </header>
      <div className="mt-10 w-full ">
        <Swiper
          modules={[ Pagination, Navigation, Autoplay ]}
          spaceBetween={30}
          slidesPerView={1}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          Pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper flex bg-dark rounded-[50px] w-full h-[450px] items-center justify-center"
        >
          {testimonials.map((items, index) => (
            <SwiperSlide key={index} className="px-[30px] py-[40px] ">
              <article className="text-white w-full h-[240px]  lg:w-[380px] border border-green px-[30px]  lg:px-[40px] py-[10px] rounded-[40px] font-light ">
                {items.review}
              </article>
              <div className="mt-8 text-white flex justify-center items-end flex-col w-full leading-6">
                <h1 className="text-[24px] lg:text-[28px]  text-green ">
                  {items.name}
                </h1>
                <span className="tracking-[1px] font-light">
                  {items.position}
                </span>
              </div>
              <div className="autoplay-progres" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle} >
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
