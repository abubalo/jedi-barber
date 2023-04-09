import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import Head from "next/head";
import { Space_Grotesk } from "@next/font/google";
import { ReactNode } from "react";
import Header from "@/components/Header";

// const globalStyles = css`
//   @font-face {
//     font-family: "Space Grotesk";
//     font-style: normal;
//     font-weight: 400;
//     src: url(${Space_Grotesk[400].woff2}) format("woff2");
//   }

//   body {
//     font-family: "Space Grotesk", sans-serif;
//   }
// `;


export default function App({ Component, pageProps }: AppProps) {
  if (Component.name === "dashboard" || Component.name === "booking") {
    return <Component {...pageProps} />;
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
