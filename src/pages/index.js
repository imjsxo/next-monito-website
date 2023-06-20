import Image from 'next/image'
import { Inter } from 'next/font/google'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { BiChevronRight } from 'react-icons/bi'
import { FaPaw } from 'react-icons/fa'
import PetCard from '@/component/PetCard'
import Productcard from '@/component/Productcard'
import BlogCard from '@/component/BlogCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='w-full'>
      <section className='absolute top-0 w-full'>
        <div>
          <img src="/images/hero-banner.png" alt="banner" className='w-full' />
          <div className='flex flex-col absolute top-[30%] left-[5%]'>
            <h1 className='text-6xl font-bold text-[#003459] mb-1'> One More Friend</h1>
            <h3 className='text-5xl font-semibold text-[47px] text-[#002A48] mb-6'>Thousands more fun!</h3>
            <p className='text-base font-semibold text-[#242B33]'>Having a pet means you have more joy, a new friend, a happy<br />
              person who will always be with you to have fun. We have 200+<br /> different pets that can meet your needs!</p>
            <div className='flex gap-5 mt-9'>
              <button className='flex items-center bg-[#003459] text-white text-base px-9 py-3 border-2 rounded-3xl hover:bg-transparent hover:text-black hover:border-slate-400'>
                View Intro
                <AiOutlinePlayCircle className='ml-2' />
              </button>
              <button className='flex items-center bg-[#003459] text-white text-base px-9 py-3 border-2 rounded-3xl hover:bg-transparent hover:text-black hover:border-slate-400'>Explore Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className='h-[695px]'></section>

      <section className='xl:container mx-auto mb-14'>
        <div>
          <p className='text-base'>Whats new?</p>
          <div className='flex items-center justify-between'>
            <h6 className='text-2xl text-[#003459] font-bold'>Take a look at some of our pets</h6>
            <button className='flex items-center text-base text-[#003459] px-9 py-3 border-2 border-[#003459] rounded-3xl hover:bg-transparent hover:text-black hover:border-slate-400'>
              View Intro
              <BiChevronRight className='ml-2' />
            </button>
          </div>
        </div>
        <div className='flex flex-wrap gap-10 mt-7'>
          <PetCard />
        </div>
      </section>

      <section className='xl:container mx-auto relative'>
        <div>
          <img src="/images/banner-2.png" alt="banner-2" className='w-full' />
          <div className='flex flex-col absolute top-[17%] right-[4%]'>
            <h1 className='text-[52px] font-bold text-[#003459] mb-1'> One More Friend</h1>
            <h3 className='text-4xl font-semibold text-[47px] text-[#002A48] mb-6'>Thousands more fun!</h3>
            <p className='text-xs font-semibold text-[#242B33]'>Having a pet means you have more joy, a new friend, a happy<br />
              person who will always be with you to have fun. We have 200+<br /> different pets that can meet your needs!</p>
            <div className='flex gap-5 mt-9'>
              <button className='flex items-center bg-[#003459] text-white text-base px-9 py-3 border-2 rounded-3xl hover:bg-transparent hover:text-black hover:border-slate-400'>
                View Intro
                <AiOutlinePlayCircle className='ml-2' />
              </button>
              <button className='flex items-center bg-[#003459] text-white text-base px-9 py-3 border-2 rounded-3xl hover:bg-transparent hover:text-black hover:border-slate-400'>Explore Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className='xl:container mx-auto my-14'>
        <div>
          <p className='text-base'>Hard to choose right products for your pets?</p>
          <div className='flex items-center justify-between'>
            <h6 className='text-2xl text-[#003459] font-bold'>Our Products</h6>
            <button className='flex items-center text-base text-[#003459] px-9 py-3 border-2 border-[#003459] rounded-3xl hover:bg-transparent hover:text-black hover:border-slate-400'>
              View Intro
              <BiChevronRight className='ml-2' />
            </button>
          </div>
        </div>
        <div className='flex flex-wrap gap-10 justify-center'>
          <Productcard />
        </div>
      </section>

      <section className='xl:container mx-auto relative'>
        <div>
          <img src="/images/banner-3.png" alt="banner-3" className='w-full' />
          <div className='flex flex-col absolute top-[17%] left-[4%]'>
            <h1 className='text-[52px] font-bold text-[#003459] mb-1 flex items-center'>
              Adoption
              <FaPaw className='ml-4' />
            </h1>
            <h3 className='text-4xl font-semibold text-[47px] text-[#002A48] mb-6'>We need help. so do they.</h3>
            <p className='text-xs font-semibold text-[#242B33]'>Adopt a pet and give it a home,<br />
              it will be love you back unconditionally.</p>
            <div className='flex gap-5 mt-9'>
              <button className='flex items-center bg-[#003459] text-white text-base px-9 py-3 border-2 rounded-3xl hover:bg-transparent hover:text-black hover:border-slate-400'>
                View Intro
                <AiOutlinePlayCircle className='ml-2' />
              </button>
              <button className='flex items-center bg-[#003459] text-white text-base px-9 py-3 border-2 rounded-3xl hover:bg-transparent hover:text-black hover:border-slate-400'>Explore Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className='xl:container mx-auto my-14'>
        <div>
          <p className='text-base'>You already know ?</p>
          <div className='flex items-center justify-between'>
            <h6 className='text-2xl text-[#003459] font-bold'>Useful pet knowledge</h6>
            <button className='flex items-center text-base text-[#003459] px-9 py-3 border-2 border-[#003459] rounded-3xl hover:bg-transparent hover:text-black hover:border-slate-400'>
              View Intro
              <BiChevronRight className='ml-2' />
            </button>
          </div>
        </div>
        <div className='flex flex-wrap gap-10 mt-7'>
          <BlogCard />
        </div>
      </section>
    </main>
  )
}
