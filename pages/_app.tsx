import type { AppProps } from 'next/app'
import "../styles/index.css";
import "../styles/global.css";
import "../styles/custom.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
