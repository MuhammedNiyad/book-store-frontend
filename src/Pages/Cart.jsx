
import { useParams } from "react-router-dom";
import { sellingBooksData } from "../Data/Data"

import victor from '../assets/victor.png';

import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Cart() {

    // const {id} =  useParams();
    // console.log({ id });

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODQyNDM5YmI5YThkYzY3NGY3MmJjNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNDI1Njg3OX0.8dYPT5UywqNb4E-56ShmZTtOy8wrVdFNT92lNpZcBW4';

        const headers = {
            'Content-Type': 'application/json',
            token: `Bearer ${authToken}`, // Include your token here
          };

        try {
            
            const res = await axios.get(`http://localhost:5000/api/carts/userCart`, {headers});
            setProduct(res.data);


        } catch (error) {
            console.log("error: ", error);
        }
    };
    console.log("products: ",product);


    const [quantity, setQuantity] = useState(1);

    const qntIncBtn = ()=>{
        setQuantity((prevQnty) => prevQnty + 1 )
    }
    const qntDecBtn = ()=>{
        setQuantity((prevQnty) => prevQnty - 1 )
    }

    return (
        <section className="px-4 sm:px-20 md:px-28 lg:px-36 xl:px-48 py-10 flex flex-col justify-center items-center overflow-hidden ">
            <div>
            <div className='flex flex-col items-center py-14 justify-center w-full md:mt-5'>
              <div className='flex-col items-start py-3'>
                <p className='capitalize text-[#7a7a7a] mb-1 font-[Plus Jakarta, Sans sarif] font-medium text-xs md:text-base '>buy quality books</p>
                <h2 className='font-[prata,serif] text-3xl sm:text-4xl md:text-5xl '>Your valuable cart</h2>
              </div>
              <img src={victor} alt='victor img' className='w-12' />
          </div>
                {
                    sellingBooksData.map(({ img, title , price }, index) => {
                        return (
                            <div key={index} className="flex items-center justify-center border-b-[1px] border-gray-500 py-10">
                                <div className="flex gap-2">
                                    <img src={ img /*`${imgUrl}/${img}`*/} alt="book" className="w-[100px]" />
                                    <div className="flex flex-col gap-2 sm:flex-row sm:gap-16 md:gap-28 lg:gap-36 justify-end sm:justify-center items-center">
                                        <div className="font-[prata,serif]">
                                            <h4 className=" sm:text-lg pb-2">{title}</h4>
                                        <p className="text-sm sm:text-base">{price}</p>
                                        </div>
                                        <div className="font-[prata,serif]">
                                            <p className="text-center mb-2">Quantity:</p>
                                            <button disabled={quantity === 1} onClick={qntDecBtn} className="px-2 py-0 mx-2 hover:bg-[#edebe4] rounded-full shadow-sm border-[1px] border-gray-400 text-xl shadow-[0,0,2px, gray] duration-300 scale-[1] hover:scale-[1.1] text-black font-semibold">−</button>
                                            {quantity}
                                            <button disabled={quantity === 5} onClick={qntIncBtn} className="px-2 py-0 mx-2 hover:bg-[#edebe4] rounded-full shadow-sm border-[1px] border-gray-400 text-xl shadow-[0,0,2px, gray] duration-300 scale-[1] hover:scale-[1.1] text-black font-semibold">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="flex flex-col">
                    <h3 className="font-[prata,serif] text-end my-4">Total Amount: $599</h3>
                <button type='submit' className="btn uppercase mt-3 py-3 px-9 duration-300 relative bg-transparent hover:text-white after:contents:'' after:w-0 after:h-full after:bg-black after:absolute after:left-0 after:top-0 after:duration-300 after:hover:w-full ">Buy now 🤑</button>
                </div>
            </div>
        </section>
    )
}
