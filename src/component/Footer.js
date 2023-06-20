import React from 'react'
import Link from 'next/link'
import { BsTwitter, BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'

function Footer() {
    return (
        <div className='bg-[#FFE7BA]'>
            <div className='pt-20 pb-10'>
                <div className='xl:container mx-auto px-8 py-8 flex bg-[#003459] rounded-lg'>
                    <p className='text-white text-2xl w-2/5 font-bold'>Register now so you don't miss our programs</p>
                    <form action="submit" className='w-3/5 bg-white px-3 py-3 flex items-center rounded-lg'>
                        <input type="text" placeholder='Enter your Email' className='w-[73%] border border-[#99A2A5] py-3.5 px-7 rounded-lg' />
                        <button className='w-1/4 ml-3 text-white bg-[#003459] text-base py-3.5 px-7 rounded-lg'>Subcribe Now</button>
                    </form>
                </div>

                <div className='xl:container mx-auto flex justify-between my-10 pb-10 border-b border-[#CCD1D2]'>
                    <div className='flex text-base font-bold text-[#003459] gap-14'>
                        <Link href="/">Home</Link>
                        <Link href="/">Category</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Contact</Link>
                    </div>
                    <div className='flex gap-10 text-[#00171F] text-2xl'>
                        <Link href="/"> <BsFacebook /></Link>
                        <Link href="/"><BsTwitter /></Link>
                        <Link href="/"><BsInstagram /></Link>
                        <Link href="/"><BsYoutube /></Link>
                    </div>
                </div>

                <div className='xl:container mx-auto flex justify-between text-sm text-[#667479] items-center'>
                    <p>&copy; {new Date().getFullYear()} Monito. All rights reserved</p>
                    <img src="/images/logo-nav.png" alt="logo" />
                    <div className='flex gap-5'>
                        <div>
                            <Link href='/'>Term of Service</Link>
                        </div>
                        <div>
                            <Link href='/'>Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer