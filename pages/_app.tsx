import "../styles/globals.scss";
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { Layout } from "../components";
import { getPosts } from "../services";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
