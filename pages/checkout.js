import React from "react";
// src/pages/Cart.js
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import Total from "../components/Total";
import { useDispatch } from 'react-redux'
import { removeAll } from "../slices/cartSlice";


const checkout = () => {
    const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)


  return (
    <div >
      <div className="cart__left">
      {cart.length==0? <h3 className="text-center py-4 text-3xl">Cart is Empty</h3> : <h3>Cart items</h3> }
      <div className="md:flex  justify-around">
      <div className="p-2 px-5">
         
         {cart?.map((item) => (
           <CartItem
             key={item.id}
             id={item.id}
             image={item.image}
             title={item.title}
             price={item.price}
             quantity={item.quantity}
           />
         ))}
     {cart.length>0 &&    <div className='flex justify-end'>
   <button onClick={() => dispatch(removeAll())} className="bg-red-500 p-2 px-4 ">Clear all Items</button>
   </div>}
       </div> 
       <Total/>
      </div>
      </div>
    </div>
  );
};

export default checkout;
