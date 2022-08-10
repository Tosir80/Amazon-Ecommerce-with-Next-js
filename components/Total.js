import { useSelector } from "react-redux";
import {useSession} from 'next-auth/react' 
import { loadStripe } from "@stripe/stripe-js";
const stripePromise =loadStripe(process.env.Stripe_Public_Key)
import axios from "axios";
const Total = () => {
  const cart = useSelector((state) => state.cart);
  const session =useSession()
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
       totalPrice +=Math.floor( item.price * item.quantity)
    });
    return {totalPrice, totalQuantity };
  };
  // for stripe
 const createCheckoutSession = async ()=>{
  const stripe =await stripePromise 
  //backend session 
  const checkoutSession =await axios.post('/api/checkout_session',{
    items: cart ,
    email: session.data.user.email 
  })
  const result =await stripe.redirectToCheckout({
    sessionId:checkoutSession.data.id 
  })
if(result.error) alert (result.error.message) 

 }
// --- -- - -- --
  return (
    <div className=" bg-orange-300 rounded-md p-5">
      <p className="total__p">
        Total ({getTotal().totalQuantity} items) :
        <strong>${getTotal().totalPrice}</strong>
      </p>
      <button onClick={createCheckoutSession} className="text-white mt-4 bg-indigo-500 rounded-md p-2 px-4">Checkout</button>
    </div>
    
  );
};

export default Total;
