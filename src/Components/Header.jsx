/* This installing "swiper" npm i swiper...! */

//Import Header Books Data........!
import { headerBooks } from "../Data/Data";

// Import Swiper React components and Swiper styles.....!
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//Import Link from react router dom....!
import { Link } from "react-router-dom";

//Import Button.jsx......!
import Button from "./Button";

//Import Header shape svg....!
import headerShape from '../assets/header-shape.svg';


export default function Header() {
  return (
    <header className="px-5 lg:px-16 overflow-hidden">
        <div className="headear-container max-w-[1440px] w-[90%] my-0 mx-auto h-full flex items-center justify-center relative py-5 lg:py-[80px] ">
            {/* ...........Header Swiper slider............ */}
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            onSlideChange={()=> console.log('slide change')}
            onSwiper={(swiper)=> console.log(swiper)}
            >
                {
                    headerBooks.map(({title, info, img, btnLink}, index)=> {
                        return(
                        <SwiperSlide key={index}>
                            <div className="header-wrapper container flex flex-col-reverse md:flex-row mt-0 items-center gap-3 md:gap-[70px] xl:gap-[120px] mx-auto h-full w-full">
                            {/* .........Header left.......... */}
                              <div className="Header-left max-w-[1024px] w-full ">
                                <h1 className=" text-xl md:text-2xl lg:text-3xl xl:text-6xl xl:leading-[100px] text-[#222222] font-[prata,serif]">{title}</h1>
                                <p /*dangerouslySetInnerHTML={{__html:info}}*/ className="text-sm md:text-base lg:text-xl md:leading-[25px] lg:leading-[200%] tracking-[4%] font-['Plus Jakarta Sans', sans-serif] mt-2 md:mt-5 mb-7 lg:mb-16 ">{info}</p>
                                <Link to={btnLink}>
                                    <Button>Learn More</Button>
                                </Link>
                              </div>
                            {/* ...........Header right....... */}
                              <div className="heared-right w-full h-full mx-7 my-5 md:m-10 lg:m-0 xl:m-14 max-w-[768px]  ">
                                <img src={img} className="w-full h-full object-cover" />
                              </div>
                            </div>
                        </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            {/* ..........Header shepe.......... */}
            <div className="header-shape absolute top-0 right-0 -z-10">
                <img src={headerShape} alt="" />
            </div>
        </div>
    </header>
  )
}
