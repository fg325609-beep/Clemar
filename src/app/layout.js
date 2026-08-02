import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import Hero from "@/components/hero/page";
import Kategoriya from "@/components/categoriya/page";
import Aparatlar from "@/components/aparatlar/page";
import Products from "@/components/products/page";
<<<<<<< HEAD
import TrustedBy from "@/components/trustedby/page";
const geistSans = Geist( {
=======
import Partners from "../components/pantners/page"
Aparatlar


const geistSans = Geist({
>>>>>>> e490d8d (some changes)
  variable: "--font-geist-sans",
  subsets: [ "latin" ],
} );

const geistMono = Geist_Mono( {
  variable: "--font-geist-mono",
  subsets: [ "latin" ],
} );

export const metadata = {
  title: "Clemar - Professional Cleaning Equipment",
  description: "Поломоечные машины, профессиональные пылесосы и моющие средства",
};

export default function RootLayout( { children } ) {
  return (
    <html
      lang="ru"
      className={ `${ geistSans.variable } ${ geistMono.variable } h-full antialiased` }
    >
      <body className="min-h-full flex flex-col">
        <Header />
<<<<<<< HEAD
        <Hero />
        <Kategoriya />
        <Aparatlar />
        <Products />
        <TrustedBy />
        <main className="flex-1">{ children }</main>
=======
        <Hero/>
        <Kategoriya/>
        <Aparatlar/>
        <Products/>
        <main className="flex-1">{children}</main>
        <Partners/>
>>>>>>> e490d8d (some changes)
        <Footer />
      </body>
    </html>
  );
}
