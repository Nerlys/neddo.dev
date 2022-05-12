import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { ThemeType } from "../types/theme";
import { Header } from "../components/header";
import Head from "next/head";
import { Footer } from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sven - Full Stack Engineer</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neddo.dev/" />
        <meta property="og:title" content="Sven - Full Stack Engineer" />
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
          defaultTheme={ThemeType.SYSTEM}
          themes={Object.values(ThemeType)}
        >
          <div className="max-w-3xl mx-auto px-5 md:px-0">
            <Header />
            <Component {...pageProps} />
            <Footer />
          </div>
        </ThemeProvider>
      </div>
    </>
  );
}

export default MyApp;
