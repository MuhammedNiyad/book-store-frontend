// Import signin css....!
import './SignIn.css';

// import react icons..........!
import { LuUserCircle } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";



export default function SignIn() {
  return (
    <section className="flex justify-center items-start w-full min-h-screen overflow-hidden">
        <div className='bg-[#edebe4] mt-32 py-20 px-16 md:px-36'>
            <h3 className='font-[Prata,sarif] text-xl text-center uppercase'>Login in</h3>
            <form className='flex flex-col justify-center items-center mt-3'>
                <div className='input-box'>
                    <span className='icon'><LuUserCircle /></span>
                    <input type='text' required className='h-16 text-xl w-[200px] sm:w=[300px] md:w-[350px]'/> 
                    <label>Username:</label>
                </div>
                    <div className='input-box'>
                    <span className='icon'><MdLockOutline /></span>
                    <input type='password' required className='h-16 text-xl w-[200px] sm:w=[300px] md:w-[350px]'/>
                        <label>Password:</label>
                    </div>
                        <button type='submit' className="relative mt-3 border-2 font-normal leading-3 font-['Plus Jakarta Sans', sans-serif] border-gray-800 bg-transparent py-3 md:py-5 px-[25px] md:px-[35px] uppercase text-[#111111] transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#222222] before:transition-transform before:duration-500 before:content-[''] hover:text-[#efeee8] before:hover:scale-x-100 ">Sign In</button>
            </form>
        </div>
    </section>
  )
}
