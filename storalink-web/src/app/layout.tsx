import './globals.css'
import { Inter } from 'next/font/google'
import { GlobalContextProvider } from "../context/GlobalProvider";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Storalink',
  description: 'Store, sort, and share an assortment of links in a smart way!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GlobalContextProvider>
      <body className={inter.className}>{children}</body>
      </GlobalContextProvider>
    </html>
  )
}
