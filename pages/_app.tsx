import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { ThemeType } from "../types/theme";
import { Header } from "../components/menu/header";
import Head from "next/head";
import { Footer } from "../components/menu/footer";
import { AnimatePresence } from "framer-motion";
import { Router } from "next/router";

import NProgress from "nprogress"
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Sven - Full Stack Engineer</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neddo.dev/" />
        <meta property="og:title" content="Hiya! I'm Sven!" />
        <meta
          property="og:description"
          content="An 18 year old full stack engineer. Striving to have fun, while also making quality products."
        />
        <link
          rel="icon"
          type="image/png"
          href="https://i.imgur.com/Fg9Qi95.png"
        />
        <meta property="og:image" content="https://i.imgur.com/Mn3HUDS.jpg" />
        <meta name="theme-color" content="#2F3136" />
      </Head>
      <div className="duration-200 font-mono">
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          themes={Object.values(ThemeType)}
        >
          <div className="max-w-3xl mx-auto px-5 md:px-0">
            <Header />
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={router.pathname}/>
            </AnimatePresence>
            <Footer />
          </div>
        </ThemeProvider>
      </div>
    </>
  );
}

export default MyApp;
