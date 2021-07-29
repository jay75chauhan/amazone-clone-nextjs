import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckOutProduct from "../components/CheckOutProduct";
import { useSession } from "next-auth/client";

function CheckOut() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const [session] = useSession();

  return (
    <div className="bg-white">
      <Head>
        <title>your 🛒 </title>
        <link
          rel="icon"
          href="https://cdn3.iconfinder.com/data/icons/cute-flat-social-media-icons-3/512/amazon.png"
        />
      </Head>
      <Header />
      <main className="lg:flex  max-w-screen-xl mx-auto ">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm rounded-sm bg-gray-50 ">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-gray-50">
            <h1 className="text-3xl border-b font-medium pb-4">
              {items.length === 0
                ? "Your Amazone Basket is empty. "
                : "Shopping Basket"}
            </h1>
            {items.map((item, i) => (
              <CheckOutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col bg-gray-50 m-5 p-10 md:m-2 shadow-md rounded-md lg:mt-4 md:w-[500px]  ">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-normal">
                Subtotal ({items.length} items) :{""}
                <p className="font-bold items-center md:pl-5">
                  {` ₹_${Math.round(total * 74.38)}`}
                </p>
              </h2>

              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  `from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed`
                }`}
              >
                {!session ? "Sign in to Checkout" : "proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default CheckOut;
