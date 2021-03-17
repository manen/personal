import React from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/globals.css";
import "tippy.js/dist/tippy.css";
import Head from "next/head";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <script
          async
          defer
          data-domain="manen.me"
          src="https://plausible.io/js/plausible.js"></script>
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
