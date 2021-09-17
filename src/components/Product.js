import Image from "next/image"
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

const Product = ({ id, title, price, description, category, image }) => {

  const MAX_RATING = 5, MIN_RATING = 1;

  const [rating] = useState( Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);

  const [hasprime] = useState(Math.random() < 0.5)
 
  return (
    <div className="relative flex flex-col m5 bg-white z-30 p-10 m-5">

      <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category} </p>
      
      <Image
        src = {image}
        height={200}
        width={200}
        objectFit={"contain"}
      />

      <h4
        className="my-3 line-clamp-1"
      >{title}</h4>

      <div className="flex">
        {Array(rating).fill().map((_,i) => (
          <StarIcon className="h-5 text-yellow-500" />
        ))}
    </div>


          <p className="text-xs my-2 line-clamp-2">{description} </p>

      <div className="mb-5">
        <Currency
          quantity={price}
          currency = "GBP"
        />
      </div>

      {hasprime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs">FREE Next-Day Delivery</p>
        </div>
      )}

      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
}

export default Product;