// Import victor image....!
import victor from '../assets/victor.png';
// Import Treeshape image....!
import treeShape from '../assets/treeShape.png';

// Button import........!
import Button from '../Components/Button';


// import react Link.........!
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { imgUrl } from '../utils/urls';
import { useDispatch, useSelector } from "react-redux";
import { galleryData } from '../Data/Data';
import { addToCart } from '../redux/cart/cartSlice';





export default function Book() {

    const { currentUser } = useSelector((state) => state.user);
    const {id} =  useParams();
    // console.log({ id });
    const [product, setProduct] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();


    // console.log('userToken: ', currentUser);

    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = async () => {
        // try {

            console.log(galleryData);
            console.log(id);
            
            const filteredData = galleryData.find((item) => item.id == id);
            console.log(filteredData);
            
            setProduct(filteredData);

            return
            const res = await axios.get(`http://localhost:5000/api/products/find/${id}`);
            setProduct(res.data);

        // } catch (error) {
        //     console.log("error: ", error);
        // }
    };

    // console.log(product);
    
    // const cartProductData = {
    //         product: product,
    //         quantity: 1,
    //     };


    const addItemToCart = async ()=> {

        dispatch(addToCart({
            product: product,
            quantity: 1,
        }));

        navigate('/cart');

        return
        if(currentUser != null){
            const headers = {
                'Content-Type': 'application/json',
                'token': `Bearer ${currentUser}`, // Include your token here
              };
            try {
                const req = await axios.post(`http://localhost:5000/api/carts`,cartProductData, {headers});
                // console.log("cartData: ", req.data);
    
    
            } catch (error) {
                console.log("add to cart error :", error);
            }
    
            navigate('/cart');
        }else{
            navigate('/sign-in')
        }
    };

    return (
        <section className="px-10 lg:px-24 xl:px-36 overflow-hidden">
            <div className='headear-container max-w-[1880px] w-[90%] my-0 mx-auto h-full flex items-center justify-center relative py-2 md:py-10 lg:py-[20px] '>
                {/* ..........Header shepe.......... */}
                <div className="header-shape absolute  top-0 left-0 -z-10">
                    
                </div>
                    <div className="header-wrapper container flex flex-col md:flex-row mt-0 items-center gap-1 md:gap-[10px] xl:gap-[20px] mx-auto h-full w-full">
                        {/* .........Header left.......... */}
                        <div className="heared-left w-full h-full sm:p-20 md:p-2 xl:p-24 max-w-[768px] relative ">
                            <img src={product?.image} className="w-full h-full object-cover" />
                            <img src={treeShape} alt=""  className="header-shape absolute bottom-10 xl:bottom-40 -right-28 -z-10" />
                        </div>
                        {/* ...........Header right....... */}
                                <div className="Header-right max-w-[1024px] w-full ">
                                    <h1 className=" text-2xl md:text-3xl xl:text-5xl xl:leading-[50px] text-[#222222] font-[prata,serif] z-10">{product?.name}</h1>
                                    <img src={victor} alt='victor img' className='w-12' />
                                    <h5 className='font-[prata,serif] text-lg sm:text-xl md:text-2xl mt-7 '>by {product?.writer}</h5>
                                    <p className="text-sm md:text-base lg:text-xl md:leading-[25px] lg:leading-[200%] tracking-[4%] font-['Plus Jakarta Sans', sans-serif] mt-1 md:mt-3 mb-4 lg:mb-7 ">{product?.desc}</p>
                                    <h5 className='text-2xl my-3 font-[prata,sarif]'>$ {product?.price}</h5>
                
                                    <button onClick={addItemToCart} type='submit' className="btn uppercase mt-3 py-3 px-9 duration-300 relative bg-transparent hover:text-white after:contents:'' after:w-0 after:h-full after:bg-black after:absolute after:left-0 after:top-0 after:duration-300 after:hover:w-full ">add to cart</button>
                                </div>
                            </div>
            </div>
        </section>
    )
}
