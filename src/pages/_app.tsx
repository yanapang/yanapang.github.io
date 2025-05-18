import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ Bootstrap 전역 적용
import "@/styles/globals.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
