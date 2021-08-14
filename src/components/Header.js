import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
function Header() {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <>
      {/* top nav */}
      <header className="sticky top-0 z-50">
        <div className="flex items-center sticky top-0 shadow-b-md z-50 bg-amazon_blue p-1 flex-grow py-2  ">
          <div className="mt-2 items-center flex-grow sm:flex-grow-0 ">
            <Image
              onClick={() => router.push("/")}
              src="https://links.papareact.com/f90"
              width={150}
              height={40}
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>
          {/* search */}
          <div className=" hidden sm:flex items-center h-10 rounded-lg flex-grow cursor-pointer   bg-yellow-400 hover:bg-yellow-500 ">
            <input
              type="text"
              className="p-2 w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            />
            <SearchIcon className="h-12 p-4 " />
          </div>
          {/* Right */}
          <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
            <div onClick={!session ? signIn : signOut} className="link ">
              <p className="hover:underline">
                {session ? `Hello, ${session.user.name} ` : "Sign In"}
              </p>
              <p className="font-extrabold md:text-sm">Account & Lists</p>
            </div>
            <div onClick={() => router.push("/orders")} className="link">
              <p>Retuns</p>
              <p className="font-extrabold md:text-sm">& Order</p>
            </div>
            <div
              onClick={() => router.push("/cart")}
              className=" relative  link flex items-center"
            >
              <span className="absolute top-0 right-0 md:right-10 h-4 w-4 text-center rounded-full text-black font-bold bg-yellow-400">
                {items.length}
              </span>
              <ShoppingCartIcon className="h-10 " />

              <p className=" hidden md:inline mt-2 font-extrabold md:text-sm">
                Basket
              </p>
            </div>
          </div>
        </div>
      </header>
      {/* Bottom nav */}
      <div className="flex items-center space-x-3 z-10 p-2 pl-6 bg-amazon_blue-light text-white md:text-sm text-xs">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Vide</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Foood & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </>
  );
}

export default Header;
