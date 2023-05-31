"use client";
import Image from "next/image";
import { Test, HeaderText } from "@/utils/components";
import theme from "./theme";
export default function Home() {
  return (
    <main className="flex min-h-screen flex items-center justify-around p-14">
      <div>
        <HeaderText>Storalink</HeaderText>
        <h3 className="mb-10">Store, sort, and share an assortment of links in a smart way!</h3>
        <h3 style={{color: theme.themeYellow}}>Coming Soon!</h3>
      </div>
      <div>test</div>
    </main>
  );
}
