import Header from './Header.js'
import React from "react";
import { useCart } from "./context/cart.js";

import './cart.css'

const Cart = () => {
  const [cart, setCart] = useCart();

    //total price
    const totalPrice = () => {
        try {
          let total = 0;
          (cart || [])?.forEach((item) => {
          
            total += Number(item.price.replace(/[^\d.-]/g, ''));;
          });
          
          return total.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          });
        } catch (error) {
          console.log(error);
          return '₹0'; 
        }
      };
      //detele item
      const removeCartItem = (pid) => {
        try {
          let myCart = [...cart];
          let index = myCart.findIndex((item) => item.id === pid);
          myCart.splice(index, 1);
          setCart(myCart);
          localStorage.setItem("cart", JSON.stringify(myCart));
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <div>
      <Header />
      <div className="  cart-page">
        <div className="container ">
            <div className="">
            <div className=" p-0 m-0">
                {cart && cart.length > 0 ? (
                cart.map((p) => (
                    <div className="my-4" key={p._id}>
                    <div className='flex mx-10 items-center justify-between'>
                    <div className="flex">
                        <img
                        src={(p.image)?`${p.image}`:`${p.img}`}
                        className="object-cover h-32 w-52"
                        alt={p.name}
                        />
                        <div className=" flex-col items-center justify-center p-4">
                        <p className="font-bold">{(p.name)? `${p.name}` : `${p.title}`}</p>
                        <p className="text-lg">Price: {p.price}</p>
                       </div>
                    </div>
                    
                    
                    <div className="flex items-center justify-center">
                        <button
                        className="btn btn-danger bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => removeCartItem(p.id)}
                        >
                        Remove
                        </button>
                    </div>
                    </div>
                    </div>
                ))
                ) : (
                
              <div class=" font-medium text-3xl flex items-center justify-center">
                <p class="text-center">Your cart is empty.</p>
              </div>

                )}
            </div>
            
            </div>
            <div className=" cart-summary p-4 mt-20">
                <h2 className="text-3xl text-left font-bold">Cart Summary</h2>
                
                <hr className=" my-4 " />
                <div className='flex justify-between mx-10 mb-10'>
                <h4 className=' text-xl font-semibold '>Total Item:</h4>
                <h4 className="text-xl font-semibold"> {cart.length} </h4>
                </div>
                <div className='flex justify-between mx-10 '>
                <h4 className=' text-xl font-semibold '>Total Price:</h4>
                <h4 className="text-xl font-semibold"> {totalPrice()} </h4>
                </div>
            </div>
        </div>
        </div>

      
        <div className="flex justify-end mt-4 mr-10">
            <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded">
              Proceed to Pay
            </button>
        </div>
    </div>
  )
}

export default Cart
