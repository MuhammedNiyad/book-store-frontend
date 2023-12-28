//Import  Router Link....!
import { Link, NavLink} from 'react-router-dom';

//Import Logo from assets...!
import Logo from '../assets/Book_brand_logo.png';

//Import CSS....!
import './Navbar.css';

//Import NavLinks from Data..!
import {navLinks, navRight} from '../Data/Data';

//Import menu icons....!
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

//Import State...!
import { useState } from 'react';




export default function Navbar() {
    const [toggle, setToggle] = useState(false);

// This for when scroll then hide side nav....!
    if(innerWidth < 768){
        window.addEventListener('scroll', ()=> {
            document.querySelector('.nav-Links-Side').classList.add('hidden');
            setToggle(false);
        })
    }

  return (
    <nav className={`nav h-24 grid place-items-center sticky top-0 bg-[#f3f2ec] z-50 border-1 border-[#838382] px-3 lg:h-[90px] ${toggle? 'shadow-lg': ''}`}>
        <div className='container nav-container flex items-center justify-between lg:relative lg:h-full'>
            {/*......Logo......*/}
            <Link to={'/'} className='logo w-[120px] '>
                <img src={Logo} alt='logo' />
            </Link>
            {/*......Nav-Links.......*/}
            <ul className='nav-links hidden md:flex items-center gap-7'>
                {
                    navLinks.map(({name, path}, index)=> {
                        return(
                            <li key={index} className='text-[#606060] text-base uppercase' >
                                <NavLink to={path} className={({isActive})=> {
                                    isActive ? 'active:text-amber-900' : ''
                                }}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            {/*......Nav-Rights.......*/}
            <div className='nav-right flex items-center gap-7  '>
                {
                    navRight.managements.map((item, index)=>{
                        return(
                            <Link key={index} 
                            // target='_blank' 
                            className='management-icons text-[#7a7a7a] text-[17px] ' to={item.link}>
                                <item.icon />
                            </Link>
                        )
                    })
                }
                
                <button onClick={()=> setToggle((togPrev)=> !togPrev)} className='menu-button flex md:hidden text-[#7a7a7a] text-lg'>
                    {
                        toggle? <TfiClose /> : <CiMenuFries />
                    } 
                </button>
                {/* ......nav-links side bar...... */}
            <ul className={`nav-Links-Side ${toggle? 'flex' : 'hidden' } flex-col gap-0 w-64 top-[90px] right-0 fixed`}>
                    {
                        navLinks.map(({name, path}, index)=>{
                            return(
                                <li key={index} className='text-[#606060] text-base uppercase hover:bg-[#f6ce4c]' >
                                <NavLink to={path} className={({isActive})=> {
                                    isActive ? 'text-[#c7b064]' : ''
                                }}>{name}</NavLink>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </nav>
  )
}
