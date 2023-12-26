// Import Brand Data.......!
import { brandsData } from "../Data/Data"


export default function Brands() {
  return (
    <section className='brands bg-[#edebe4] py-5 px-5'>
        <div className="w-full mx-auto brand container flex items-center justify-center md:gap-3">
            {
                brandsData.map(({img}, index)=>{
                    return(
                        <div key={index}>
                            <img src={img} alt="brand image" />
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}
