import React from 'react'
import { IoReturnUpBackOutline } from "react-icons/io5";
import CartItem from '../components/CartItem';

const CartPage = () => {
  return (
    <div className="container mx-auto sm:w-3/4 md:w-2/3 p-7 shadow-lg border mb-16 mt-36">
      <a href="/" className="flex items-center mb-5 cursor-pointer">
        <IoReturnUpBackOutline className="text-xl" />
        <span className="ml-2 font-semibold">Back to Shop</span>
      </a>

      <div className="flex items-center justify-between mb-5">
        <h3 className="text-xl font-semibold">Shopping Cart</h3>
        <h3 className="text-xl font-semibold">Total Price: $300.00 </h3>
        <h3 className="text-xl font-semibold">10 Items</h3>
      </div>

      <CartItem />

 
    </div>
  )
}

export default CartPage