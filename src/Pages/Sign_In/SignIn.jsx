// Import signin css....!
import { useState } from 'react';
import './SignIn.css';

// import react icons..........!
import { LuUserCircle } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';



export default function SignIn() {
    const [formData, setFromData] = useState({});
    const [register, setRegister] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e)=>{

        setFromData({
            ...formData,
            [e.target.id] : e.target.value
        })
    }
    console.log('formData: ', formData);

  return (
    <section className="flex justify-center items-start w-full min-h-screen overflow-hidden">
        <div className='bg-[#edebe4] mt-32 py-20 px-16 md:px-36 relative'>
            <h3 className='font-[Prata,sarif] text-xl text-center uppercase'>Login in</h3>
            <form className='flex flex-col justify-center items-center mt-3'>
                <div className='input-box'>
                    <span className='icon'><LuUserCircle /></span>
                    <input type='text' required className='h-16 text-xl w-[250px] sm:w=[300px] md:w-[350px]' id='username' onChange={handleChange}/> 
                    <label>Username:</label>
                </div>
                    <div className='input-box'>
                    <span className='icon'><MdLockOutline /></span>
                    <input type='password' required className='h-16 text-xl w-[250px] sm:w=[300px] md:w-[350px]' id='password' onChange={handleChange}/>
                        <label>Password:</label>
                    </div>
                        <button type='submit' className="btn uppercase mt-3 py-3 px-9 duration-300 relative bg-transparent hover:text-white after:contents:'' after:w-0 after:h-full after:bg-black after:absolute after:left-0 after:top-0 after:duration-300 after:hover:w-full ">Sign In</button>
            </form>
            <p className='absolute bottom-3 md:left-4'>Don't have an account? <Link to={'/register'}  className='text-lg hover:underline hover:text-amber-900'>Register</Link></p>
        </div>
    </section>
  )
}
