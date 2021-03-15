import React from "react";
import Head from "next/head";
import Header from "../components/Header";

const Home: React.FC = () => (
  <div className="font-sans text-center">
    <Head>
      <title>manen</title>
    </Head>
    <Header />
    <p className="m-4">Hi</p>
  </div>
);

export default Home;
