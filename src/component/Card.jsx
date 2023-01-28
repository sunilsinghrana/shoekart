import React from 'react'

const Card = ({product, idx}) => {
  return (
    <div className="flex justify-center" key={idx}>
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img className="rounded-t-lg" src={product.img} alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{product.title}</h5>
      <p className="text-gray-700 text-base mb-4">
        Starts from Rs.299
      </p>
    </div>
  </div>
</div>
  )
}

export default Card
