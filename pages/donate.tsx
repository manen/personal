import React from "react";
import Head from "next/head";
import $ from "jquery";
import Header from "../components/Header";

const Donate: React.FC = () => (
  <div>
    <Head>
      <title>Support my work - manen</title>
    </Head>
    <Header />
    <div className="m-4">
      <h1 className="font-black text-5xl">Donate</h1>
      <div className="mt-1 text-sm text-accent-500 dark:text-accent-400">
        <p>You can support my work by donating on PayPal.</p>
      </div>
      <div className="m-8">
        <div className="m-4">
          <p>
            While it's completely optional, it'd be <b>really</b> greatly
            appreciated.
          </p>
        </div>
      </div>
      <div className="h-full flex justify-center">
        <a
          target="_blank"
          href="https://www.paypal.com/pools/c/8xPkV1n2Q2"
          className="p-14 w-64 bg-accent-200 hover:bg-accent-300 dark:bg-accent-800 dark:hover:bg-accent-700 font-black text-xl transition-colors rounded-xl">
          Donate now
        </a>
      </div>
    </div>
  </div>
);

export default Donate;
