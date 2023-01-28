import React from 'react'
import Card from './Card'
import boots from '../assets/boots.jpg'
import formal from '../assets/formal_shoe.jpg'
import loafer from '../assets/loafer.jpg'
import sandle from '../assets/sandal.jpg'
import sneaker from '../assets/sneaker.jpg'
import sport from '../assets/sport_shoe.jpg'

const Carditem = () => {
    const ShoeCat = [
        {
            "img": boots,
            "title": 'Boots'
        }, {
            "img": formal,
            "title": 'Formal Shoes'
        }, {
            "img": loafer,
            "title": 'Loafer Shoes'
        }, {
            "img": sandle,
            "title": 'Sandles'
        }, {
            "img": sneaker,
            "title": 'Sneaker Shoes'
        }, {
            "img": sport,
            "title": 'Sports Shoe'
        }
    ]
  return (
    <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {ShoeCat.map((product, idx)=>(
            <Card product={product} idx={idx}/>
        ))}
    </div>
  )
}

export default Carditem
