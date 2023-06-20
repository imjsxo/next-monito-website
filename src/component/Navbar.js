import React from 'react'
import Link from 'next/link'
import { BiSearch } from 'react-icons/bi'

function Navbar() {
    return (
        <>
            <div className='xl:container mx-auto flex mt-7 z-10 relative'>
                <div className='flex flex-row w-1/2 items-center img-fluid'>
                    <img src="/images/logo-nav.png" alt="logo" className='mr-12'/>
                    <div className='flex w-full gap-12 text-base font-bold text-[#003459]'>
                        <Link href="/">Home</Link>
                        <Link href="/">Category</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Contact</Link>
                    </div>
                </div>
                <div className='flex flex-row w-1/2'>
                    <form action="post" className='flex items-center mr-3.5 h-12 px-3 py-4 text-sm border rounded-3xl border-black w-full'>
                        <BiSearch className='mr-3'/>
                        <input type="text" placeholder='Search something here!' className='w-full bg-transparent'/>
                    </form>
                    <button className='w-full bg-[#003459] text-white rounded-3xl'>Join the community</button>
                </div>
            </div>
        </>
    )
}

export default Navbar