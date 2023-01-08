import "../styles/globals.css";
import type { AppProps } from "next/app";

import "../styles/styles.css";
import "../styles/cover.css";
import "../public/assets/dist/css/bootstrap.min.css";
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}