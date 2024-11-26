import "./globals.css";
import { Inter, Baloo_Thambi_2 } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
const balooThambi = Baloo_Thambi_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecosystem Builder's Community",
  description: "A community of creative minds driving the Oyo ecosystem through Innovation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Baloo+Thambi+2:wght@400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} ${balooThambi.className}`}>{children}</body>
    </html>
  );
}

