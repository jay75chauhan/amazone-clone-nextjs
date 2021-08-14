import moment from "moment";

import React from "react";
import Currency from "react-currency-formatter";
import Zoom from "react-reveal/Zoom";

function Order({ id, amount, amountShipping, items, timestamp, images }) {
  return (
    <Zoom>
      <>
        <div
          key={id}
          className="relative border rounded-lg shadow-xl cursor-pointer hover:scale-105 duration-500"
        >
          <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
            <div>
              <p className="font-bold text-xs">ORDER PLACED</p>
              <p>{moment.unix(timestamp).format("DD MM YYYY")}</p>
            </div>

            <div>
              <p className="text-xs font-bold">TOTAL</p>
              <p>
                <Currency quantity={amount} currency="INR" /> - Next Day
                Delivery
                {""}
                <Currency quantity={amountShipping} currency="INR" />
              </p>
            </div>

            <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
              {items.length} items
            </p>

            <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
              ORDER # {id}
            </p>
          </div>
          <div className="p-5 sn:p-10">
            <div className="flex space-x-6 overflow-x-auto">
              {images.map((image) => (
                <img
                  src={image}
                  alt=""
                  className="h-20 object-contain sm:h-32"
                />
              ))}
            </div>
          </div>
        </div>
      </>
    </Zoom>
  );
}

export default Order;
