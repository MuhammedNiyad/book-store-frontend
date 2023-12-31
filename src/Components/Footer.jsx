//Import footer link data..............!
import { FootersLinksData } from "../Data/Data";

// Import Link........!
import { Link } from "react-router-dom";



export default function Footer() {
  return (
    <footer className="px-7 md:px-20 lg:px-52 mx-auto bg-[#edebe4] mt-10">
        <div className="container footer-container w-full h-full flex justify-around gap-1 flex-wrap py-10">
            {/* ........about params............ */}
            <div className="mb-7">
              <h4 className="font-[Prata,sarif] text-base border-b-[1px] border-gray-500 mb-4 md:text-lg">About Us</h4>
              <ul className="about-params param-links flex flex-col gap-2 font-[Plus Jakarta Sans,sans-serif] uppercase text-sm md:text-base ">
                {
                  FootersLinksData.Aboutus.map(({link, linkname}, index)=>{
                    return(
                      <li key={index} className="hover:text-amber-900"><Link to={link}>{linkname}</Link></li>
                    )
                  })
                }
              </ul>
            </div>
            {/* ........Discover params............ */}
            <div className="mb-7">
              <h4 className="font-[Prata,sarif] text-base border-b-[1px] border-gray-500 mb-4 md:text-lg">Discover</h4>
              <ul className="discover-params param-links flex flex-col gap-2 font-[Plus Jakarta Sans,sans-serif] uppercase text-sm md:text-base">
                {
                  FootersLinksData.Discover.map(({link, linkname}, index)=>{
                    return(
                      <li key={index} className="hover:text-amber-900"><Link to={link}>{linkname}</Link></li>
                    )
                  })
                }
              </ul>
            </div>
            {/* ........Myaccount params............ */}
            <div className="mb-7">
              <h4 className="font-[Prata,sarif] text-base border-b-[1px] border-gray-500 mb-4 md:text-lg">My Account</h4>
              <ul className="Myaccount-params param-links flex flex-col gap-2 font-[Plus Jakarta Sans,sans-serif] uppercase text-sm md:text-base ">
                {
                  FootersLinksData.Myaccount.map(({link, linkname}, index)=>{
                    return(
                      <li key={index} className="hover:text-amber-900"><Link to={link}>{linkname}</Link></li>
                    )
                  })
                }
              </ul>
            </div>
            {/* ........Help params............ */}
            <div className="mb-7">
              <h4 className="font-[Prata,sarif] text-base border-b-[1px] border-gray-500 mb-4 md:text-lg">Help</h4>
              <ul className="Help-params param-links flex flex-col gap-2 font-[Plus Jakarta Sans,sans-serif] uppercase text-sm md:text-base ">
                {
                  FootersLinksData.Help.map(({link, linkname}, index)=>{
                    return(
                      <li key={index} className="hover:text-amber-900"><Link to={link}>{linkname}</Link></li>
                    )
                  })
                }
              </ul>
            </div>
        </div>
        {/* ...........CopyRight and Social.......... */}
        <div className="flex flex-wrap justify-around border-t-[1px] border-gray-500 mt-10 py-3 ">
          <div>
            <p>CopyRight © 2099 NYD Ltd.</p>
          </div>
          <div className="flex gap-5 my-2">
            {
              FootersLinksData.socials.map((item, index)=>{
              return <Link key={index} to={item.link}><item.icon/></Link>
              })
            }
          </div>
        </div>
    </footer>
  )
}
