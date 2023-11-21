import "./globals.css";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "../context/GlobalProvider";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styled from "styled-components";
import StyledComponentsRegistry from './registry'
import { MainContentWrapper } from "./page";

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
        <meta property="og:image" content="opengraph-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>

      <body className={inter.className}>
      <StyledComponentsRegistry>
        <GlobalContextProvider>
          <Navbar />
          <MainContentWrapper>{children}</MainContentWrapper>
          <Footer />
        </GlobalContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
