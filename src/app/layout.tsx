"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import NavBar from "@/components/design/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Summaraize",
  description: "Summarize your text with ease.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
