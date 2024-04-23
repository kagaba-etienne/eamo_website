import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "East-African Mathematical Olympiad",
  description: "Regional Math Competition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-[url(https://eamo-official.org/static/images/awesomebg.jpg)] bg-fixed bg-cover bg-center bg-celadon/100`}
      >
        <div className="w-full h-full bg-blue_c/95">{children}</div>
      </body>
    </html>
  );
}
