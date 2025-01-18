
// import { useParams } from "react-router-dom";
// import { sellingBooksData } from "../Data/Data"

import victor from '../assets/victor.png';
import { TfiClose } from "react-icons/tfi";


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { imgUrl, productFetchUrl } from '../utils/urls';
import { useSelector } from "react-redux";
import { useCurrentUser, useUserCart } from '../redux/selector';

export default function Cart() {


    const cart = useUserCart();
    const currentUser = useCurrentUser()
    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState([]);

    console.log(cart);
    

    // console.log('currentUser: ', currentUser);

    // useEffect(() => {
    //     fetchData();
    // },[]);

    // const fetchData = async () => {

    //     const headers = {
    //         'Content-Type': 'application/json',
    //         'token': `Bearer ${currentUser}`, // Include your token here
    //       };

    //     try {
            
    //         const res = await axios.get(`http://localhost:5000/api/carts/userCart`, {headers});
    //         setCart(res.data)
    //         console.log("cartData: ",res.data);

    //         const productIds = res.data.products.map((p) => p.productId);
    //         // console.log("ids", { productIds });
    //         const quantities = res.data.products.map((p) => p.quantity);
    //         // console.log("quantities:", { quantities });
    //         setQuantity(quantities);

    //         const productFetchPromises = productIds.map(async (id) => {
    //             try {
    //                 const response = await axios.get(`${productFetchUrl}/${id}`);
    //                 return response.data; // Return the fetched product data
                    
    //             } catch (error) {
    //                 console.log(`Error fetching product with ID ${id}:`, error);
    //                 return null; // Return null or handle the error as needed
    //             }
    //         });
            
    //         const productsData = await Promise.all(productFetchPromises);
    //         setProducts(productsData.filter(product => product !== null));

    //     } catch (error) {
    //         console.log("error: ", error);
    //     }
    // };


    const qntIncBtn = async (id)=> {
        const headers = {
            'Content-Type': 'application/json',
            token: `Bearer ${currentUser}`, // Include your token here
          };
        try {
            const req = await axios.post(`http://localhost:5000/api/carts`,{
                productId: id,
                quantity: 1
            }, {headers});
            fetchData();
            // console.log("cartData: ", req.data);
        } catch (error) {
            console.log("add to cart error :", error);
        }
    }  

    const qntDecBtn = async (id)=> {
            const headers = {
                'Content-Type': 'application/json',
                token: `Bearer ${currentUser}`, // Include your token here
              };
            try {
                const req = await axios.post(`http://localhost:5000/api/carts`,{
                    productId: id,
                    quantity: -1
                }, {headers});
                fetchData();
                // console.log("cartData: ", req.data);
            } catch (error) {
                console.log("add to cart error :", error);
            }
        }

    const removeBtn = async (id)=>{
        const headers = {
            'Content-Type': 'application/json',
            token: `Bearer ${currentUser}`, // Include your token here
          };
        try {
            await axios.delete(`http://localhost:5000/api/carts/${id}`,{headers});

            fetchData();

        } catch (error) {
            console.log("remove button error:", error);
        }
    }

    const findGrandTotal = ()=>{
        let grandTotal = 0;
        cart.map(({ product, quantity }) => {
            grandTotal += product.price * quantity;
        });
        return grandTotal || 0;
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
                    cart.map(({ product, quantity }, index) => {
                        return (
                            <div key={index} className="flex items-center justify-center border-b-[1px] border-gray-500 py-10">
                                <div className="flex gap-2 w-full relative">
                                    <img src={product.image} alt="book" className="w-[100px]" />
                                    <div className="flex flex-col gap-2 sm:flex-row sm:gap-16 md:gap-28 lg:gap-36 w-full justify-center sm:justify-between items-center">
                                        <div className="font-[prata,serif]">
                                            <h4 className=" sm:text-lg pb-2">{product.name}</h4>
                                        <p className="text-sm sm:text-base">$ {quantity * product.price }</p>
                                        </div>
                                        <div className="font-[prata,serif]">
                                            <p className="text-center mb-2">Quantity:</p>
                                            <button disabled={quantity <= 1} onClick={()=>qntDecBtn(product.id)} className="px-2 py-0 mx-2 hover:bg-[#edebe4] rounded-full shadow-sm border-[1px] border-gray-400 text-xl shadow-[0,0,2px, gray] duration-300 scale-[1] hover:scale-[1.1] text-black font-semibold">−</button>
                                            {quantity}
                                            <button disabled={quantity >= 5} onClick={()=>qntIncBtn(product.id)} className="px-2 py-0 mx-2 hover:bg-[#edebe4] rounded-full shadow-sm border-[1px] border-gray-400 text-xl shadow-[0,0,2px, gray] duration-300 scale-[1] hover:scale-[1.1] text-black font-semibold">+</button>
                                        </div>
                                    </div>
                                    <button onClick={()=>removeBtn(product.id)} className='absolute top-0 right-0 duration-300 rotate-0 hover:rotate-180'>< TfiClose /></button>
                                </div>
                            </div>
                        )
                    }) 
                }
                {
                    cart.length !== 0? 
                    <div className="flex flex-col mb-40">
                            <h3 className="font-[prata,serif] text-end my-4">Total Amount: ${findGrandTotal()}</h3>
                    <button type='submit' className="btn uppercase mt-3 py-3 px-9 duration-300 relative bg-transparent hover:text-white after:contents:'' after:w-0 after:h-full after:bg-black after:absolute after:left-0 after:top-0 after:duration-300 after:hover:w-full ">Buy now 🤑</button>
                    </div> :
                    <div className='flex flex-col justify-center my-24'>
                    <h1 className='font-[prata,serif] text-xl sm:text-2xl md:text-3xl text-center my-32 ' >Your cart is empty!</h1>
                    <Link to={'/shope'} className='w-auto flex justify-center'>
                    <button  className="btn uppercase mt-3 py-3 px-9 duration-300 relative bg-transparent hover:text-white after:contents:'' after:w-0 after:h-full after:bg-black after:absolute after:left-0 after:top-0 after:duration-300 after:hover:w-full ">Back to shope</button>
                    </Link>
                    </div>
                }
            </div>
        </section>
    )  }
