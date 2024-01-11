import profile from '../assets/profile.png'
import { useSelector, useDispatch } from "react-redux";
import { SignOut } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';


export default function Profile() {
    const { currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const singOut = ()=> {
        dispatch(SignOut);
        navigate('/sign-in');
    }

  return (
    <section className="flex justify-center items-start w-full min-h-screen overflow-hidden">
    <div className='bg-[#edebe4] mt-32 py-20 px-16 md:px-36 relative'>
        <h3 className='font-[Prata,sarif] text-xl text-center uppercase'>Profile</h3>
        <form autoComplete='off' className='flex flex-col justify-center items-center mt-3'>
            <tr>
                <img src={profile} className='w-40 h-40 bg-white shadow-lg sh rounded-full' />
            </tr>
            <div className='pt-10 flex flex-col gap-3 pb-5'>
                <tr className='font-[Prata,sarif] text-base'>
                    {`Username: ${'Niyad'}`}
                </tr>
                <tr className='font-[Prata,sarif] text-base'>
                    {`Email: ${'niyad@gmail.com'}`}
                </tr>
            </div>
            <button onClick={singOut} className="btn uppercase mt-3 py-1 px-4 duration-300 relative bg-transparent hover:text-white after:contents:'' after:w-0 after:h-full after:bg-black after:absolute after:left-0 after:top-0 after:duration-300 after:hover:w-full ">Sign Out</button>
        </form>
    </div>
    </section>
  )
}
