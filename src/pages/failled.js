import React from "react";

import Header from "../components/Header";
import { useRouter } from "next/router";
import Head from "next/head";
import { XCircleIcon } from "@heroicons/react/solid";
import Zoom from "react-reveal/Zoom";

function failled() {
  const router = useRouter();
  return (
    <div className="h-screen bg-gray-100">
      <Head>
        <title>❌ Payment-failled </title>
        <link
          rel="icon"
          href="https://cdn3.iconfinder.com/data/icons/cute-flat-social-media-icons-3/512/amazon.png"
        />
      </Head>
      <Header />

      <main className="max-w-screen-lg mx-auto">
        <Zoom>
          <div className="flex flex-col p-10 bg-whiter rounded-lg shadow-2xl m-8 bottom-b border-black">
            <div className="flex items-center space-x-2 mb-5 mt">
              <XCircleIcon className=" text-red-500 h-10" />
              <h1 className="text-3xl">Payment failled </h1>
            </div>

            <button
              onClick={() => router.push("/checkout")}
              className="button mt-10"
            >
              Go to Checkout Page
            </button>
          </div>
        </Zoom>
      </main>
    </div>
  );
}

export default failled;
