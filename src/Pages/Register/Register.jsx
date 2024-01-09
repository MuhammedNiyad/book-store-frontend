// Import signin css....!
import './Register.css';

// import react icons..........!
import { LuUserCircle } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

// Import Link.........!
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';



export default function Register() {
    const [formData, setFromData] = useState({}); //This state is for tracking what type in input field..!
    const [register, setRegister] = useState(false);
    const navigate = useNavigate();

    //Handle Change is Input tracking function.......!
    const handleChange = (e) => {
        setFromData({
          ...formData,
          [e.target.id]: e.target.value
        })
      };
    //   console.log( "formData: ",formData);

      const handleSubmit = async (e)=>{
        e.preventDefault(); //This for prevent default submition..!
        try {
            const res = await axios.post('http://localhost:5000/api/user/register',formData);
            // const data = await res.data;
            console.log("User register successfull");
            setRegister(true);

        } catch (error) {
            console.log('submit Error: ', error.message);
        };
    };
    if (register === true) {
        navigate('/sign-in');
    }

  return (
    <section className="flex justify-center items-start w-full min-h-screen overflow-hidden">
        <div className='bg-[#edebe4] mt-32 py-20 px-16 md:px-36 relative'>
            <h3 className='font-[Prata,sarif] text-xl text-center uppercase'>Login in</h3>
            <form onSubmit={handleSubmit} autoComplete='off' className='flex flex-col justify-center items-center mt-3'>
                <div className='input-box'>
                    <span className='icon'><LuUserCircle /></span>
                    <input type='text' required className='h-16 text-xl w-[250px] sm:w=[300px] md:w-[350px]' id='username' onChange={handleChange}/> 
                    <label>Username:</label>
                </div>
                <div className='input-box'>
                    <span className='icon'><HiOutlineMail /></span>
                    <input type='email' required className='h-16 text-xl w-[250px] sm:w=[300px] md:w-[350px]' id='email' onChange={handleChange}/> 
                    <label>Email:</label>
                </div>
                    <div className='input-box'>
                    <span className='icon'><MdLockOutline /></span>
                    <input type='password' required className='h-16 text-xl w-[250px] sm:w=[300px] md:w-[350px]' id='password' onChange={handleChange}/>
                        <label>Password:</label>
                    </div>
                        <button type='submit' className="btn uppercase mt-3 py-3 px-9 duration-300 relative bg-transparent hover:text-white after:contents:'' after:w-0 after:h-full after:bg-black after:absolute after:left-0 after:top-0 after:duration-300 after:hover:w-full ">Register</button>
            </form>
            <p className='absolute bottom-3 md:left-4'>Have an account? <Link to={'/sign-in'}  className='text-lg hover:underline hover:text-amber-900'>Sign In</Link></p>
        </div>
    </section>
  )
}
