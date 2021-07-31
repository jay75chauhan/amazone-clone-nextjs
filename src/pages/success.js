import React from "react";
import Header from "../components/Header";
import { useRouter } from "next/router";
import Head from "next/head";
import { CheckCircleIcon } from "@heroicons/react/solid";
import Zoom from "react-reveal/Zoom";

function succes() {
  const router = useRouter();
  return (
    <div className="h-screen bg-gray-100">
      <Head>
        <title>✔️ Payment-success </title>
        <link
          rel="icon"
          href="https://cdn3.iconfinder.com/data/icons/cute-flat-social-media-icons-3/512/amazon.png"
        />
      </Head>
      <Header />

      <main className="max-w-screen-lg mx-auto">
        <Zoom>
          <div className="flex flex-col p-10 bg-whiter rounded-lg shadow-2xl m-8">
            <div className="flex items-center space-x-2 mb-5 mt">
              <CheckCircleIcon className=" text-green-500 h-10" />
              <h1 className="text-3xl">
                Thank you, your order has been comfirmed!
              </h1>
            </div>
            <p>
              Thank you for shopping with us. We'll send a confirmation once
              item has shipped, if you would like to check the status of your
              order(s) please press the link below.
            </p>
            <button
              onClick={() => router.push("/orders")}
              className="button mt-8"
            >
              Go to my orders
            </button>
          </div>
        </Zoom>
      </main>
    </div>
  );
}

export default succes;
