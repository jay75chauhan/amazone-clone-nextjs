import { getSession } from "next-auth/client";
import Head from "next/head";
import Baneer from "../components/Baneer";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100 ">
      <Head>
        <title>amazon </title>
        <link
          rel="icon"
          href="https://cdn3.iconfinder.com/data/icons/cute-flat-social-media-icons-3/512/amazon.png"
        />
      </Head>

      <Header />

      <main className="max-w-screen-xl mx-auto">
        {/* Banner */}
        <Baneer />
        {/* ProductFeed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
      session,
    },
  };
}
// GET == https://fakestoreapi.com/products
