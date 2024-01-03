// Import victor image....!
import victor from '../assets/victor.png';
// Import Treeshape image....!
import treeShape from '../assets/treeShape.png';

// Button import........!
import Button from '../Components/Button';


// import react Link.........!
import { Link,useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { imgUrl } from '../utils/urls';




export default function Book() {
    const {id} =  useParams();
    // console.log({ id });

    const [product, setProduct] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/products/find/${id}`);
            setProduct(res.data);


        } catch (error) {
            console.log("error: ", error);
        }
    };

    // console.log(product);
    
    const cartProductData = [
        {
            productId: product?._id,
            quantity: 1,
        }
    ];
    
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODQyNDM5YmI5YThkYzY3NGY3MmJjNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNDI1Njg3OX0.8dYPT5UywqNb4E-56ShmZTtOy8wrVdFNT92lNpZcBW4'

    const addToCart = async ()=> {
        const headers = {
            'Content-Type': 'application/json',
            token: `Bearer ${authToken}`, // Include your token here
          };
        try {
            const req = await axios.post(`http://localhost:5000/api/carts`,cartProductData, {headers});
            console.log("cartData: ", req.data);
        } catch (error) {
            console.log("add to cart error :", error);
        }
    };

    return (
        <section className="px-10 lg:px-24 xl:px-36 overflow-hidden">
            <div className='headear-container max-w-[1880px] w-[90%] my-0 mx-auto h-full flex items-center justify-center relative py-2 md:py-10 lg:py-[20px] '>
                {/* ..........Header shepe.......... */}
                <div className="header-shape absolute  top-0 left-0 -z-10">
                    
                </div>
                {/* { */}
                    {/* books.map(({ img, name, writer, desc, price, shopbtnLink }) => { */}
                        {/* return ( */}
                            <div className="header-wrapper container flex flex-col md:flex-row mt-0 items-center gap-1 md:gap-[10px] xl:gap-[20px] mx-auto h-full w-full">
                                {/* .........Header left.......... */}
                                <div className="heared-left w-full h-full sm:p-20 md:p-2 xl:p-24 max-w-[768px] relative ">
                        <img src={`${imgUrl}/${product?.img}`} className="w-full h-full object-cover" />
                                    <img src={treeShape} alt=""  className="header-shape absolute bottom-10 xl:bottom-40 -right-28 -z-10" />
                                </div>
                                {/* ...........Header right....... */}
                                <div className="Header-right max-w-[1024px] w-full ">
                        <h1 className=" text-2xl md:text-3xl xl:text-5xl xl:leading-[50px] text-[#222222] font-[prata,serif] z-10">{product?.title}</h1>
                                    <img src={victor} alt='victor img' className='w-12' />
                        <h5 className='font-[prata,serif] text-lg sm:text-xl md:text-2xl mt-7 '>by {product?.author}</h5>
                        <p /*dangerouslySetInnerHTML={{__html:info}}*/ className="text-sm md:text-base lg:text-xl md:leading-[25px] lg:leading-[200%] tracking-[4%] font-['Plus Jakarta Sans', sans-serif] mt-1 md:mt-3 mb-4 lg:mb-7 ">{product?.desc}</p>
                        <h5 className='text-2xl my-3 font-[prata,sarif]'>$ {product?.price}</h5>
                        <Link to={`/cart`} onClick={addToCart}>
                                        <Button >add to cart</Button>
                                    </Link>
                                </div>
                            </div>
                        {/* ) */}
                    {/* }) */}
                {/* } */}
                
            </div>
        </section>
    )
}
