import React, { useState } from 'react';
//import Link from './Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen]=useState(false);
    return (
        <nav className='bg-slate-700 w-full'>
        <div onClick={()=>setOpen(!open)} className="h-6 w-6 md:hidden">
        { open?
        <XMarkIcon />:
        <Bars3Icon/>
        }
        </div>
        <div className='flex py-8 justify-center px-20 md:justify-between'>
        <h1 className='text-4xl  font-extrabold w-7/12'><span class="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">CRACK QUIZ</span></h1>
        <ul className={`md:flex absolute md:static ease-in duration-500 ${open?'top-6 left-1':'top-[-120px] left-1'}`}>
        <li className='ml-10 text-xl text-white'><NavLink className={({isActive})=>isActive? 'underline':undefined} to={'/'}>Home</NavLink></li>
        <li className='ml-10 text-xl  text-white'><NavLink className={({isActive})=>isActive? 'underline':undefined} to={'statistic'}>Statistics</NavLink></li>
        <li className='ml-10 text-xl  text-white' ><NavLink className={({isActive})=>isActive? 'underline':undefined} to={'blog'}>Blog</NavLink></li>
        </ul>
        </div>
            
        </nav>
    );
};

export default Navbar;