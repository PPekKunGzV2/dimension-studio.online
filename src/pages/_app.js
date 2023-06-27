import "../styles/globals.scss";
import Navbar from "../../components/layouts/Navbar";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <title>Dimension Studio - Minecraft Developer Content.</title>
        <link
          rel="icon"
          href="https://cdn.discordapp.com/attachments/1059440471409184798/1059440964478967838/DimensionPortalFireBG.png"
        />

        {/* <!-- SEO --> */}
        <meta name="author" content="PPekKunGzDev" />
        <meta name="keywords" content="" />

        <meta property="og:local" content="th_TH" />
        <meta property="og:url" content="https://dimension.online" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Dimension Studio" />
        <meta property="og:description" content="Dimension Studio - Website" />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/1059440471409184798/1059440964478967838/DimensionPortalFireBG.png"
        />
        <meta property="og:url" content="https://dimension.online/" />
        <meta
          property="og:site_name"
          content="dimension studio, minecraft developer, datapack, moddding, thailand modding"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}