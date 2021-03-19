import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";

const Donate: React.FC = () => {
  const router = useRouter();
  const { s } = router.query;

  return (
    <div>
      <Head>
        <title>Support {s || "my work"} - manen</title>
        <meta name="description" content={"Donate to " + (s || "manen")} />
      </Head>
      <Header />
      <div className="m-4">
        <h1 className="font-black text-5xl">Donate{s ? " to " + s : ""}</h1>
        <div className="mt-1 text-sm text-accent-500 dark:text-accent-400">
          <p>
            You can support {s || "my work"} by donating
            {s ? " to manen" : ""} on PayPal.
          </p>
        </div>
        <p className="m-6">
          While it's completely optional, it'd be <b>really</b> greatly
          appreciated.
        </p>
        <div className="h-full flex justify-center">
          <a
            target="_blank"
            href="https://paypal.me/maneney"
            className="px-14 py-8 bg-accent-200 hover:bg-accent-300 dark:bg-accent-800 dark:hover:bg-accent-700 text-xl transition-colors rounded-xl">
            Donate now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Donate;
