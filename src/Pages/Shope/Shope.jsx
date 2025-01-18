// Import css file.........!
import './Shope.css';

// Import victor image....!
import victor from '../../assets/victor.png';
import bg_book from '../../assets/book_bg.png';

 // Import Popular Books Data...............
import { galleryData } from '../../Data/Data';
import { categories } from '../../Data/Data';

// Import hooks ..........!
import { useState, useEffect } from 'react';
import axios from 'axios';
import { imgUrl } from '../../utils/urls';
import { Link } from 'react-router-dom';


export default function Shope() {

  const [products, setProduct] = useState(galleryData);

  // useEffect(()=> {
  //   fetchData();
  // }, []);

  // const fetchData = async ()=> {
  //   try {
  //     const res = await axios.get("http://localhost:5000/api/products");
  //     setProduct(res.data);
      
  //   } catch (error) {
  //     console.log("error: ",error);
  //   }
  // };
  // console.log(products);


  const [activeButton, setActiveButton] = useState('All');

  const handleFilterChange = (category)=> {
    setActiveButton(category);
  }

  // console.log({ activeButton });

  const filterItems = activeButton === 'All' ? products : products.filter((item) => {
    return(
      item.categories.includes(activeButton) 
  )});

  return (
    <section className='px-7 md:px-20 lg:px-52 mx-auto'>
        <div className='w-full h-full border-b-[1px] pb-10 border-gray-400 relative'>
          {/* ........heading.......... */}
          <div className='flex flex-col items-center py-14 justify-center w-full md:mt-5'>
              <div className='flex-col items-start py-3'>
                <p className='capitalize text-[#7a7a7a] mb-1 font-[Plus Jakarta, Sans sarif] font-medium text-xs md:text-base '>some quality books</p>
                <h2 className='font-[prata,serif] text-3xl sm:text-4xl md:text-5xl '>quality books</h2>
              </div>
              <img src={victor} alt='victor img' className='w-12' />
          </div>
          {/* ..........Filter-buttons............... */}
          <div className='filter-btn mt-10 mb-20 flex justify-center items-center gap-4 flex-wrap text-lg font-[Plus Jakarta Sans, sans serif] '>
            { categories.map(({category}, index) => {
              return(
                <button key={index} onClick={()=>handleFilterChange(category)} className={activeButton === category ? 'active' : ''} >
                {category}
                </button>
              )
            })}
            {/* <button onClick={()=>handleFilterChange('Adventure')} className={activeButton === 'Adventure' ? 'active' : ''}>
              Adventure
            </button>
            <button onClick={()=>handleFilterChange('Romantic')} className={activeButton === 'Romantic' ? 'active' : ''}>
              Romantic
            </button>
            <button onClick={()=>handleFilterChange('Technology')} className={activeButton === 'Technology' ? 'active' : ''}>
              Technology
            </button>
            <button onClick={()=>handleFilterChange('Business')} className={activeButton === 'Business' ? 'active' : ''}>
              Business
            </button>
            <button onClick={()=>handleFilterChange('Fictional')} className={activeButton === 'Fictional' ? 'active' : ''}>
              Fictional
            </button> */}
          </div>
          {/* ............filter-book-content............ */}
          <div className='header-content grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 text-center'>
            {
              filterItems.map(({ id, name, writer, price, image}, index)=> {
                return(
                  <div className='content-item mb-5' key={index}>
                    <div className='content-image'>
                      <Link to={`/book/${id}`}>
                        <img src={image} className='w-full h-auto aspect-square object-contain' />
                      </Link>
                    </div>
                    <div className='content-info '>
                      <Link to={`/book/${id}`}>
                      <h3 className='font-[prata,serif] text-sm sm:text-base md:text-lg'>{name}</h3>
                      </Link>
                      <p className='text-xs md:text-sm py-2'>by {writer}</p>
                      <h5 className='font-[prata,serif] text-xs md:text-sm'>$ {price}</h5>
                    </div>
                  </div>
                )
              })
            }
          <div className='absolute opacity-20 -z-10 w-full h-full'>
           <img src={bg_book} className=' w-full sm:w-1/2 mx-auto' />
          </div>
          </div>
        </div>
    </section>
  )
}
