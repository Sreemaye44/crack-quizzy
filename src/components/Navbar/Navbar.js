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
        <XMarkIcon className='text-white' />:
        <Bars3Icon className='text-white'/>
        }
        </div>
        <div className='py-8  px-20 md:flex justify-between'>
        <div className='flex px-10'>
        <img src="https://quizizz.com/media/resource/gs/quizizz-media/quizzes/fe37cb45-e033-47b0-8c8a-c4d5437e6ecb?w=200&h=200" className='h-10 w-10'alt="" />
        <h1 className='text-4xl font-extrabold'><span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500 px-10">CRACK QUIZ</span></h1>
        </div>
        <ul className={`md:flex absolute md:static ease-in duration-500 ${open?'top-6 left-0':'top-[-120px] left-0'}`}>
        <li className='md:ml-10 text-xl text-white hover:bg-green-600 p-1 rounded-lg'><NavLink className={({isActive})=>isActive? 'bg-green-600 p-1 rounded-lg text-2xl':undefined} to={'/home'}>Home</NavLink></li>
        <li className='md:ml-10 text-xl  text-white hover:bg-green-600 p-1 rounded-lg'><NavLink className={({isActive})=>isActive? 'bg-green-600 p-1 rounded-lg text-2xl':undefined} to={'statistic'}>Statistics</NavLink></li>
        <li className='md:ml-10 text-xl  text-white hover:bg-green-600 p-1 rounded-lg' ><NavLink className={({isActive})=>isActive? 'bg-green-600 p-1 rounded-lg text-2xl':undefined} to={'blog'}>Blog</NavLink></li>
        </ul>
        </div>
            
        </nav>
    );
};

export default Navbar;