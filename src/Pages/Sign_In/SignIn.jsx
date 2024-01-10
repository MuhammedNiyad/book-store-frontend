// Import signin css....!
import { useState } from 'react';
import './SignIn.css';

// import react icons..........!
import { LuUserCircle } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { SignInSuccess, SignInFailure } from '../../redux/user/userSlice';



export default function SignIn() {
    const [formData, setFromData] = useState({});
    const [register, setRegister] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleChange = (e)=>{

        setFromData({
            ...formData,
            [e.target.id] : e.target.value
        })
    }
    // console.log('formData: ', formData);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/user/login', formData);
            // console.log(res.data);
            const data = await res.data;
            dispatch(SignInSuccess(data.access_token))
            console.log('User Login successful..!', data.access_token);
            setRegister(true);
        } catch (error) {
            setError(true);
            console.log('login submit error: ', error);
            dispatch(SignInFailure(error.message));
        }
        
    };
    if(register === true){
            navigate('/')
        }

  return (
    <section className="flex justify-center items-start w-full min-h-screen overflow-hidden">
        <div className='bg-[#edebe4] mt-32 py-20 px-16 md:px-36 relative'>
            <h3 className='font-[Prata,sarif] text-xl text-center uppercase'>Login in</h3>
            {error === true ? (
            <p className='text-center text-red-700'>Incorrect username or password</p>
            ) : null} 
            <form onSubmit={handleSubmit} autoComplete='off' className='flex flex-col justify-center items-center mt-3'>
                <div className='input-box'>
                    <span className='icon'><LuUserCircle /></span>
                      <input type='text' required className='active:bg-[#edebe4] h-16 text-xl w-[250px] sm:w=[300px] md:w-[350px]' id='username' onChange={handleChange} /> 
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
