import Head from "next/head";
import React from "react";
import Header from "../components/Header";

const Donate: React.FC = () => (
  <div>
    <Head>
      <title>Support my work - manen</title>
    </Head>
    <Header />
    <div className="m-4">
      <h1 className="text-2xl">Donate</h1>
    </div>
  </div>
);

export default Donate;
