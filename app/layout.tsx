import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "NextJS Recipes App",
  description: "A collection of recipes for various dishes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
