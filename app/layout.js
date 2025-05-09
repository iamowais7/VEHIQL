import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({subsets: ["latin"]})

export const metadata = {
  title: "Vehiql",
  description: "Find your dream vehicle",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className} `} >

        <Header/>

        <main className="min-h-screen">
          {children}
          </main>
          <Toaster richColors />

        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-500">
          <p className="text-sm">&copy; {new Date().getFullYear()} Maddy Pvt Ltd All rights reserved.</p>
          <p className="text-xs">Designed & Developed by <span className="font-semibold text-gray-600">Owais Khan</span></p>
          </div>
        </footer>

      </body>
    </html>
    </ClerkProvider>
  );
}
