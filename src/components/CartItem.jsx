import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa"

const CartItem = () => {
  return (
    <div className="flex flex-wrap items-center justify-between border border-purple-900 px-4 py-4 mb-4">
        <div className="image-holder w-24 h-16 border">
          <img
            src=""
              className="w-full h-full object-cover"
              alt=""
          />
        </div>
        <div className="product-name h-auto w-20">
          {/* <small className="font-semibold">clothing</small> */}
          <p className="text-xl font-semibold text-purple-950">Black Shoe</p>
        </div>
        <div className="product-price h-auto">
          <p className="text-xl font-semibold text-purple-950">$100</p>
        </div>
        <div className="product-action flex items-center justify-evenly">
          <FaMinus className="text-2xl mx-2 text-purple-950 cursor-pointer" />
          <div className="quantity h-8 w-12 font-semibold border-2 border-purple-900 flex items-center justify-evenly">
           3
          </div>
          <FaPlus className="text-2xl mx-2 text-purple-950 cursor-pointer" />
        </div>
        <div className="product-price h-auto">
          <p className="text-xl font-semibold text-purple-950">$500.00</p>
        </div>
        <button
          type="button"
          className="text-xl focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-5 py-2.5 mb-2"
        >
          Delete
        </button>
      </div>
  )
}

export default CartItem