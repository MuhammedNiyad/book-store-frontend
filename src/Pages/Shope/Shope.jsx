// Import css file.........!
import './Shope.css';

// Import victor image....!
import victor from '../../assets/victor.png';
import bg_book from '../../assets/book_bg.png';

 // Import Popular Books Data...............
import { galleryData } from '../../Data/Data';

// Import useState ..........!
import { useState } from 'react';
import { fromJSON } from 'postcss';



export default function Shope() {


  const [activeButton, setActiveButton] = useState('all');

  const handleFilterChange = (category)=> {
    setActiveButton(category);
  }


  const filterItems = activeButton === 'all' ? galleryData : galleryData.filter((item)=> {
    return(
    item.category === activeButton
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
            <button onClick={()=>handleFilterChange('all')} className={activeButton === 'all' ? 'active' : ''} >
              All
            </button>
            <button onClick={()=>handleFilterChange('Adventure')} className={activeButton === 'Adventure' ? 'active' : ''}>
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
            </button>
          </div>
          {/* ............filter-book-content............ */}
          <div className='header-content grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 text-center'>
            {
              filterItems.map(({name, writer, price, image}, index)=> {
                return(
                  <div className='content-item mb-5' key={index}>
                    <div className='content-image'>
                      <img src={image} />
                    </div>
                    <div className='content-info '>
                      <h3 className='font-[prata,serif] text-sm sm:text-base md:text-lg'>{name}</h3>
                      <p className='text-xs md:text-sm py-2'>by {writer}</p>
                      <h5 className='font-[prata,serif] text-xs md:text-sm'>{price}</h5>
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
