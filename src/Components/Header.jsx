/* This installing "swiper" npm i swiper...! */

//Import Header Books Data........!
import { headerBooks } from "../Data/Data";

// Import Swiper React components and Swiper styles.....!
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

//Import Link from react router dom....!
import { Link } from "react-router-dom";

//Import Button.jsx......!
import Button from "./Button";

//Import Header shape svg....!
import headerShape from '../assets/header-shape.svg';

// IMport hooks......!
import { useEffect, useState } from "react";
import axios from "axios";
import { imgUrl } from "../utils/urls";


export default function Header() {

  const [product, setProduct] = useState(headerBooks);

  // useEffect(()=> {
  //   fetchData();
  // }, []);

  // const fetchData = async ()=> {
  //   try {
  //     const res = await axios.get(`https://ecommerce-api-nine-kappa.vercel.app/api/products?category=special`);
  //     setProduct(res.data);
      
  //   } catch (error) {
  //     console.log("error: ",error);
  //   }
  // };


  return (
    <header className="px-5 lg:px-16 overflow-hidden">
        <div className="headear-container max-w-[1440px] w-[90%] my-0 mx-auto h-full flex items-center justify-center relative py-5 lg:py-[80px] ">
            {/* ...........Header Swiper slider............ */}
            <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay = {{delay: 5000}}
            loop={true}
            speed={2000}
            
                
            // onSlideChange={()=> console.log('slide change')}
            // onSwiper={(swiper)=> console.log(swiper)}
            >
                {
                    headerBooks.map(({ id, title, info, img}, index)=> {
                        return(
                        <SwiperSlide key={index}>
                            <div className="header-wrapper container flex flex-col-reverse md:flex-row mt-0 items-center gap-3 md:gap-[70px] xl:gap-[120px] mx-auto h-full w-full">
                            {/* .........Header left.......... */}
                              <div className="Header-left max-w-[1024px] w-full ">
                                <h1 className=" text-xl md:text-2xl lg:text-3xl xl:text-6xl xl:leading-[100px] text-[#222222] font-[prata,serif]">{title}</h1>
                                <p /*dangerouslySetInnerHTML={{__html:info}}*/ className="text-sm md:text-base lg:text-xl md:leading-[25px] lg:leading-[200%] tracking-[4%] font-['Plus Jakarta Sans', sans-serif] mt-2 md:mt-5 mb-7 lg:mb-16 ">{info}</p>
                                <Link to={`book/${id}`} >
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
