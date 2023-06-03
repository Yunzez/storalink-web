import "./globals.css";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "../context/GlobalProvider";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Storalink",
  description: "Store, sort, and share an assortment of links in a smart way!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name='title' property="og:title" content= "Storalink" />
        <meta name='image' property="og:image" content= "https://i.postimg.cc/tgxcR3ts/metaimg.png" />
        <meta name='type' property="og:type" content='website' />
        <meta name='description' property="og:description" content= "Store, sort, and share an assortment of links in a smart way!" />
        <meta name='url' property="og:url" content= "www.storalink.com" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:title" content="Storalink" />
        <meta name="twitter:description" content="Store, sort, and share an assortment of links in a smart way!" />
        <meta name="twitter:image" content="https://i.postimg.cc/tgxcR3ts/metaimg.png" />
      </Head>

      <GlobalContextProvider>
        <body className={inter.className}>{children}</body>
      </GlobalContextProvider>
    </html>
  );
}
