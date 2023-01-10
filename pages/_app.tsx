import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CipherProvider } from "../context/CipherContext";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CipherProvider>
      <Component {...pageProps} />
    </CipherProvider>
  );
}

export default MyApp;
