import React from 'react'
import shoeimg01 from '../assets/shoecover01.jpg'
import shoeimg02 from '../assets/shoecover02.jpg'
import shoeimg03 from '../assets/shoecover03.jpg'

const Shoecover = () => {
  return (
    <div className='mt-6 h-[52rem]'>
        <div className="shoe-headline flex flex-col justify-evenly items-center">
        <h2 className='text-3xl font-bold md:text-sm sm:text-sm'>Popular Categories</h2>
        <p className='mt-3 text-xl md:text-sm'>Explore our vast ranges of Products from the popular footwear categories.</p>
        <p className='mt-1 text-xl'>We suit your taste.</p>
        </div>
        <div className='flex flex-col items-center mt-3 relative'>
            <div className=''><img className='shadow-2xl md:w-96' src={shoeimg01} width={1000} alt="" /></div>
            <div className='absolute left-24 top-72'><img className='shadow-2xl' src={shoeimg02} width={500} alt="" /></div>
            <div className='absolute right-24 top-12'><img className='shadow-2xl' src={shoeimg03} width={500} alt="" /></div>
        </div>
    </div>
  )
}

export default Shoecover
