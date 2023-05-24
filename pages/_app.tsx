import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps, router }: AppProps) {
  // if (Component.name === "dashboard" || Component.name === "booking") {
  //   return <Component {...pageProps} />;
  // }
  
  if(router.pathname.startsWith("/dashboard") || router.pathname.startsWith("/dashboard")){
      return <Component {...pageProps} />;

  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
