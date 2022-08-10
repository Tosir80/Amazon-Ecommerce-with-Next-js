
import { incrementQuantity,
    decrementQuantity,
    removeItem,addToCart} from '../slices/cartSlice'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
function CartItem({id, image, title, price, quantity=0}) {
  const dispatch = useDispatch()

  return (
    <>
    <div className="cartItem md:flex justify-around space-x-5 bg-slate-200 my-4 items-center px-4 p-2 rounded-md">
      <Image
        width={100}
        height={100}
        objectFit="cover"
        src={image}
        alt=""
      />
      <div className="cartItem__info md:flex justify-around md:space-x-5 ">
        <p className="cartItem__title">{title}</p>
        <p className="cartItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='cartItem__incrDec md:flex justify-around md:space-x-5'>
          <button className='border border-green-500 rounded-full px-4 ' onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p>{quantity}</p>
          <button className='border border-green-500 rounded-full px-4 ' onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div>
        
        <button
          className=' my-2 md:my-0 cartItem__removeButton bg-red-500 rounded-md px-2' 
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </button>
      </div>
     
    </div>
   
    </>
  )
}

export default CartItem