// Import victor image....!
import victor from '../assets/victor.png';

// Import Swiper.........!
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';

// Import featureBooks..........!
import {featuredBooksData} from '../Data/Data';

// Link from react.........!
import { Link } from 'react-router-dom';

// Button import........!
import Button from './Button';

// Import react icon.........!
import { BsArrowReturnRight } from "react-icons/bs";


export default function FeaturesBook() {
    return (
        <section className='feature-book container px-5 mx-auto '>
            {/* ...........Headding.......... */}
            <div className='flex flex-col items-center py-14 justify-center w-full md:mt-5'>
                <div className='flex-col items-start py-3'>
                    <p className='capitalize text-[#7a7a7a] mb-1 font-[Plus Jakarta, Sans sarif] font-medium text-xs md:text-base '>some feature books</p>
                    <h2 className='font-[prata,serif] text-3xl sm:text-4xl md:text-5xl '>Features Book</h2>
                </div>
                <img src={victor} alt='victor img' className='w-12' />
            </div>
            <div className=''>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={2}
                    loop ={true}
                    modules={[Pagination]}
                    pagination={{ el: ".swiper-pagination", clickable: true }}
                    breakpoints={{
                        0:{
                            slidesPerView:1,
                            spaceBetween:0,
                        },
                        300: {
                            slidesPerView: 2,
                            spaceBetween:20,
                        },
                        768:{
                            slidesPerView:3,
                            spaceBetween:25,
                        },
                        1024:{
                            slidesPerView:4,
                            spaceBetween:30,
                        },
                    }} >
                    {
                        featuredBooksData.map(({ id, img, imgLlink, name, nameLink, writer, price }, index) => {
                            return(
                                <SwiperSlide key={index}>
                                    <div className='featurebook-box'>
                                        <Link to={`book/${id}`}>
                                            <img src={img} alt="book" />
                                        </Link>
                                        <div className="featurebook-info sm:ps-5">
                                            <Link to={nameLink} >
                                                <h4 className='font-[prata,serif]'>{name}</h4>
                                            </Link>
                                            <p className='my-2'>by {writer}</p>
                                            <h5 className='font-normal font-[prata,serif]'>{price}</h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                    <div className="feature-border container h-[1px] bg-gray-400 my-10 w-[90%] mx-auto"></div>
                    {/* ........swiper pagination */}
                    {/* <div className="swiper-pagination left-0  "></div> */}
                    {/* .......view all product button...... */}
                    <div>
                        <Link to='*' >
                            <Button ><div className='flex gap-2'><span>View all product</span> <span><BsArrowReturnRight /></span></div></Button>
                        </Link>
                    </div>
                </Swiper>
            </div>

        </section>
    )
}
