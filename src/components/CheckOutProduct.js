import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckOutProduct({
  id,
  title,
  rating,
  price,
  description,
  category,
  image,
  hsaPrime,
}) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      rating,
      price,
      description,
      category,
      image,
      hsaPrime,
    };

    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div
      className="grid grid-cols-5  bg-white shadow-xl rounded-lg p-5"
      key={id}
    >
      <Image src={image} height={200} width={200} objectFit="contain" />

      {/* Middle */}

      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <p className="font-bold">{`₹ ${Math.round(price * 74.38)}`}</p>
        {hsaPrime && (
          <div className="flex items-center space-x-1">
            <img
              className="w-2"
              loading="lazy"
              src="https://links.papareact.com/fdw"
              alt="Amazone Prime"
            />
            <p className="text-xs text-gray-500">FREE Next-dat Delivery</p>
          </div>
        )}
      </div>
      {/* RIght add remove buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button " onClick={addItemToBasket}>
          {" "}
          Add to Basket
        </button>
        <button className="button " onClick={removeItemFromBasket}>
          Remove frome Basket
        </button>
      </div>
    </div>
  );
}

export default CheckOutProduct;
