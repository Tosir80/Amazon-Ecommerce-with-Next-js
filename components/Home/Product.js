import React from "react";
import Image from "next/image";
import ReactStars from "react-rating-stars-component";
import Currency from "react-currency-formatter";
// src/components/Item.js
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";
const Product = ({ product }) => {
  const {
    id,
    title,
    price,
    description,
    category,
    image,
    rating: { count, rate },
  } = product;

  // src/components/Item.js
  const dispatch = useDispatch();

  return (
    <>
      <div className=" pt-6 pb-2 relative  border bg-gray-200 border-orange-400  text-center  rounded-md ">
        <a className="">
          <Image
            width={200}
            height={200}
            objectFit="cover"
            src={image}
            alt=""
          />
        </a>
        <div className="mt-4 ">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 absolute right-0 top-0">
            {category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {title}
          </h2>
          <ReactStars
            classNames="mx-auto"
            value={rate}
            activeColor="#ffd700"
            isHalf={true}
            edit={false}
          />
          <p className="mt-1">
            <Currency quantity={price} currency="USD" />
          </p>
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  id,
                  title,
                  image,
                  price,
                })
              )
            }
            className="bg-orange-300 px-3 p-1 rounded-md mt-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
