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
                    spaceBetween={30}
                    slidesPerView={4}
                    loop ={true}
                    modules={[Pagination]}
                    pagination={{ el: ".swiper-pagination", clickable: true }} >
                    {
                        featuredBooksData.map(({img, imgLlink, name, nameLink, writer, price}, index)=>{
                            return(
                                <SwiperSlide key={index}>
                                    <div className='featurebook-box'>
                                        <Link to={imgLlink}>
                                            <img src={img} alt="book" />
                                        </Link>
                                        <div className="featurebook-info">
                                            <Link to={nameLink} >
                                                {name}
                                            </Link>
                                            <br />
                                            <small>{writer}</small>
                                            <h5>{price}</h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                    <div className="feature-border container"></div>
                    {/* ........swiper pagination */}
                    <div className="swiper-pagination"></div>
                    {/* .......view all product button...... */}
                    <Link to='*' >
                        <Button><div className='flex gap-1'><span>View all product</span> <span><BsArrowReturnRight /></span></div></Button>
                    </Link>
                </Swiper>
            </div>

        </section>
    )
}
