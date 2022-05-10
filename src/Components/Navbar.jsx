import React, { useState } from 'react'
import { MenuIcon, XIcon } from "@heroicons/react/outline"
const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav);
    }
    return (
        <div className='w-screen bg-zinc-200 h-[80px] fixed z-10  drop-shadow-lg '>
            <div className='px-2 flex items-center justify-between w-full h-full' >
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold sm:text-4xl mr-4'>Fring</h1>
                    <ul className='hidden  md:flex '>
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Platforms</li>
                        <li>Pricings</li>

                    </ul>
                </div>
                <div className='hidden md:flex'>
                    <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>
                <div className='md:hidden ' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-8' /> : <XIcon className='w-8' />}
                </div>
            </div>
            <ul className={!nav ? "hidden" : 'md:hidden  absolute bg-zinc-200 w-full px-8'}>
                <li className='border-b-2 border-zinc-300 w-full text-center'>Home</li>
                <li className='border-b-2 border-zinc-300 w-full text-center'>About</li>
                <li className='border-b-2 border-zinc-300 w-full text-center'>Support</li>
                <li className='border-b-2 border-zinc-300 w-full text-center'>Platforms</li>
                <li className='border-b-2 border-zinc-300 w-full text-center'>Pricing</li>
                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4' >Sign In</button>
                    <button className=' px-8 py-3'>Sign Up</button>
                </div>
            </ul>

        </div>
    )
}

export default Navbar