import { Children } from "react";


export default function Button({children}) {
  return (
    <button className="relative border-2 font-normal leading-3 font-['Plus Jakarta Sans', sans-serif] border-gray-800 bg-transparent py-3 md:py-5 px-[25px] md:px-[35px] uppercase text-[#111111] transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#222222] before:transition-transform before:duration-500 before:content-[''] hover:text-[#efeee8] before:hover:scale-x-100 ">
        {children}
    </button>
  )
}
