// Import victor image....!
import victor from '../assets/victor.png';
// Import Treeshape image....!
import treeShape from '../assets/treeShape.png';


export default function Book() {
    return (
        <section>
            <div className=' container flex flex-col sm:flex-row   relative'>
                <img src={treeShape} alt="" className='absolute ' />
                {/* ...........Headding.......... */}
                <div className='flex flex-col items-center justify-center w-full'>
                    <div className='flex-col items-start py-3'>
                        <p className='capitalize text-[#7a7a7a] mb-1 font-[Plus Jakarta, Sans sarif] font-medium text-xs md:text-base '>some feature books</p>
                        <h2 className='font-[prata,serif] text-3xl sm:text-4xl md:text-5xl '>Features Book</h2>
                    </div>
                    <img src={victor} alt='victor img' className='w-12' />
                </div>
            </div>
        </section>
    )
}
