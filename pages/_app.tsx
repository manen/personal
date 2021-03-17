import React from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/globals.css";
import "tippy.js/dist/tippy.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
