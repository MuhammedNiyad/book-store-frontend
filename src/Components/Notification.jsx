import React from 'react'
import { IoCheckmarkOutline } from "react-icons/io5";

const CustNotification = ({type, message, style}) => {
  return (
    <div className={`fixed max-w-[300px] bg-gray-50 top-10 right-0 z-50 border-green-500 border`}>
        <div className="flex items-center p-4 space-x-4">
            <div><IoCheckmarkOutline size={20} color='green' /></div>
            <div className="flex-1">
                <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
        </div>
    </div>
  )
}

export default CustNotification