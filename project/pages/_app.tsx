import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider, createEmotionCache } from "@mantine/core";
import Navbar from '../components/Navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <MantineProvider

        emotionCache={createEmotionCache({ key: "mantine", prepend: false })}
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <Navbar />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
