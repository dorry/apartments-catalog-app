import localFont from "next/font/local";
import "./globals.css";
import Provider from "../providers/next-ui.provider";
import MainHeader from "@/components/layout/main-header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Apartments Catalog",
  description: "Apartments Listing website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <MainHeader />
          {children}
        </Provider>
      </body>
    </html>
  );
}
