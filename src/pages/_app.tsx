import clsx from "clsx";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Layout from "@/layout/layout";

interface Props {
  Component: React.ElementType
  pageProps: any
}
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'success',
  description: '',
}
export default function App({ Component, pageProps }: Props) {
  return (
    <>
      <Head>
        {/* Other head elements */}
        <link rel='icon' href='/favicon.jpeg' />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <style jsx global>{`
          body {
            @apply ${clsx(inter.className)};
          }
        `}</style>
      </Layout>{' '}
    </>
  )
}
