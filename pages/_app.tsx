import type { AppProps } from "next/app";
import ProgressBar from "@badrap/bar-of-progress";
import "../styles/globals.css";

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
