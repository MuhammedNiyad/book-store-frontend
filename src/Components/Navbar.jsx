//Import  Router Link....!
import { Link, NavLink} from 'react-router-dom';

//Import Logo from assets...!
import Logo from '../assets/logo.png';

//Import NavLinks from Data..!
import {navLinks, navRight} from '../Data/Data';

//Import menu icons....!
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

//Import Button...!
import Button from './Button';



export default function Navbar() {
  return (
    <nav>
        <div>
            {/*......Logo......*/}
            <Link to={'/'}>
                <img className='w-10' src={Logo} alt='logo' />
            </Link>
            {/*......Nav-Links.......*/}
            <ul>
                {
                    navLinks.map(({name, path}, index)=> {
                        return(
                            <li key={index}>
                                <NavLink to={path}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            {/*......Nav-Rights.......*/}
            <div className='nav-right'>
                {
                    navRight.managements.map((item, index)=>{
                        return(
                            <Link key={index} 
                            // target='_blank' 
                            className='management-icons' to={item.link}>
                                <item.icon />
                            </Link>
                        )
                    })
                }
                
                <Button>
                    <CiMenuFries />
                    <TfiClose />
                </Button>

            </div>

        </div>
    </nav>
  )
}
