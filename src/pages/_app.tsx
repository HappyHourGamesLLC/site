import type { AppProps } from 'next/app'
import { Geist, Geist_Mono } from "next/font/google";
import Head from 'next/head';
import '@/styles/globals.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Happy Hour Games</title>
        <meta name="description" content="Innovative game development studio prioritizing work-life balance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;