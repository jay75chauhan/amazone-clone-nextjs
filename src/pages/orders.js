import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import { getSession, useSession, signIn } from "next-auth/client";
import { db } from "../../firebase";
import moment from "moment";
import Order from "../components/Order";

function orders({ orders }) {
  const [session] = useSession();
  return (
    <div>
      <Head>
        <title>📦 order Order's</title>
        <link
          rel="icon"
          href="https://cdn3.iconfinder.com/data/icons/cute-flat-social-media-icons-3/512/amazon.png"
        />
      </Head>
      <Header />

      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl font-medium border-b-2 mb-2 pb-1 border-yellow-400 ">
          Your Order's
        </h1>

        {session ? (
          <h2 className="text-2xl bg-gray-300 rounded-full p-1 m-2 text-center w-10 shadow-2xl   ">
            {orders.length}
          </h2>
        ) : (
          <>
            <h2 className="text-base">Please sign in to see your order</h2>

            <button onClick={() => signIn()} className="button mt-10 o ">
              SIGN IN
            </button>
          </>
        )}

        <div className="mt-5 space-y-4">
          {orders?.map(
            ({ id, amount, amountShipping, items, timestamp, images }) => (
              <Order
                key={id}
                id={id}
                amount={amount}
                amountShipping={amountShipping}
                items={items}
                timestamp={timestamp}
                images={images}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
}

export default orders;

// Tells nextJS that's no longer a static page
// eg "Please calculate smthg and send it to the user next"
// Here, it's executed by Node.js
export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  // Get the user logged in  credentials...
  const session = await getSession(context);

  if (!session) {
    return { props: {} };
  }

  //firebase db

  const stripeOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  //stripe order

  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  return {
    props: { orders },
  };
}
