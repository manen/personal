import Head from "next/head";
import React from "react";
import Header from "../components/Header";

const Contact: React.FC = () => (
  <div>
    <Head>
      <title>Contact - manen</title>
      <meta name="description" content="Contact manen" />
    </Head>
    <Header />
    <div className="m-4">
      <h1 className="text-2xl">Contact</h1>
      <div className="m-6">
        <a target="_blank" href="https://discord.com/users/449871144246312961">
          <div className="m-4 p-2 bg-bruh-50 text-black rounded-xl">
            <h2 className="text-xl">Discord</h2>
            <p>I prefer to use Discord for communication.</p>
          </div>
        </a>
        <a target="_blank" href="mailto:varga.bercel.i@gmail.com">
          <div className="m-4 p-2 bg-gray-200 hover:bg-gray-300 dark:bg-nice-800 dark:hover:bg-nice-700 transition rounded-xl">
            <h2 className="text-xl">E-mail</h2>
            <p>Only use as a fallback option.</p>
          </div>
        </a>
      </div>
    </div>
    <a
      className="text-xs text-gray-400 dark:text-gray-600"
      target="_blank"
      href="https://www.youtube.com/watch?v=I0L7QWsDffY">
      Spammers get blocked.
    </a>
  </div>
);

export default Contact;
