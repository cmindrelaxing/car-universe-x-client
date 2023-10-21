// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function Slider() {

    const hero_style = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://i.ibb.co/yfs2RVH/slider-2.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0, 0, 0, 1.9)",
        width: "100%",
        hight: "100%",
        opacity: "10"
    };
    const hero_style1 = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://i.ibb.co/PCWrjtM/slider-3.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0, 0, 0, 1.9)",
        width: "100%",
        hight: "100%",
        opacity: "10"
    };
    const hero_style2 = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://i.ibb.co/vqJLm3n/slider-1.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0, 0, 0, 1.9)",
        width: "100%",
        hight: "100%",
        opacity: "10"
    };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        // modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div style={hero_style} className='w-full h-full py-20 lg:py-40'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-4 px-2 md:px-5 lg:px-10 xl:px-20'>
                    <div data-aos="fade-right">
                        <h2 className="text-[#FF444A] font-semibold uppercase mb-5">Welcome to Car Universe X</h2>
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl mb-5 text-white">
                            Best Way To Find <br /> Your <span className="text-[#FF444A]">Dream</span> Car
                        </h1>
                        <p className="text-sm lg:text-base text-white">
                            There are many variations of passages orem psum available but the majority
                            have suffered alteration in some form by injected humour.
                        </p>

                        <div className="flex gap-4 mt-5">
                        <Link to={'/about'}>
                        <button className="bg-[#FF444A] text-white py-1 font-semibold hover:bg-black hover:text-white px-8 rounded-full">About <i className='font-semibold text-base bx bx-right-arrow-alt'></i></button>
                        </Link>
                        <button className="bg-[#FF444A] text-white py-1 font-semibold hover:bg-black hover:text-white px-8 rounded-full">Login <i className='font-semibold text-base bx bx-right-arrow-alt'></i></button>
                        </div>
                    </div>
                    <div>
                        <img className='w-full mx-auto' src="https://i.ibb.co/2v58gRB/hero-2.png" alt="" data-aos="fade-left" />
                    </div>
                </div>
            </div>
        </SwiperSlide>
        
        
        <SwiperSlide>
            <div style={hero_style1} className='w-full h-full py-20 lg:py-40'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-4 px-2 md:px-5 lg:px-10 xl:px-20'>
                    <div data-aos="fade-right">
                        <h2 className="text-[#FF444A] font-semibold uppercase mb-5">Welcome to Car Universe X</h2>
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl mb-5 text-white">
                            Best Way To Find <br /> Your <span className="text-[#FF444A]">Dream</span> Car
                        </h1>
                        <p className="text-sm lg:text-base text-white">
                            There are many variations of passages orem psum available but the majority
                            have suffered alteration in some form by injected humour.
                        </p>

                        <div className="flex gap-4 mt-5">
                        <Link to={'/about'}>
                        <button className="bg-[#FF444A] text-white py-1 font-semibold hover:bg-black hover:text-white px-8 rounded-full">About <i className='font-semibold text-base bx bx-right-arrow-alt'></i></button>
                        </Link>
                        <button className="bg-[#FF444A] text-white py-1 font-semibold hover:bg-black hover:text-white px-8 rounded-full">Login <i className='font-semibold text-base bx bx-right-arrow-alt'></i></button>
                        </div>
                    </div>
                    <div>
                        <img className='w-full mx-auto' src="https://i.ibb.co/0CCq7RW/hero-4.png" alt="" data-aos="fade-left" />
                    </div>
                </div>
            </div>
        </SwiperSlide>
        
        
        <SwiperSlide>
            <div style={hero_style2} className='w-full h-full py-20 lg:py-40'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-4 px-2 md:px-5 lg:px-10 xl:px-20'>
                    <div data-aos="fade-right">
                        <h2 className="text-[#FF444A] font-semibold uppercase mb-5">Welcome to Car Universe X</h2>
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl mb-5 text-white">
                            Best Way To Find <br /> Your <span className="text-[#FF444A]">Dream</span> Car
                        </h1>
                        <p className="text-sm lg:text-base text-white">
                            There are many variations of passages orem psum available but the majority
                            have suffered alteration in some form by injected humour.
                        </p>

                        <div className="flex gap-4 mt-5">
                        <Link to={'/about'}>
                        <button className="bg-[#FF444A] text-white py-1 font-semibold hover:bg-black hover:text-white px-8 rounded-full">About <i className='font-semibold text-base bx bx-right-arrow-alt'></i></button>
                        </Link>
                        <button className="bg-[#FF444A] text-white py-1 font-semibold hover:bg-black hover:text-white px-8 rounded-full">Login <i className='font-semibold text-base bx bx-right-arrow-alt'></i></button>
                        </div>
                    </div>
                    <div>
                        <img className='w-full mx-auto' src="https://i.ibb.co/DgQDSXP/hero-1.png" alt="" data-aos="fade-left" />
                    </div>
                </div>
            </div>
        </SwiperSlide>
        
        

      </Swiper>
    </>
  );
}
