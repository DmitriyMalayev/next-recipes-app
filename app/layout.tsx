import "./globals.css";
import Header from "@/components/header";
export const metadata = {
  title: "Recipes and Foods App",
  description: "A collection of recipes and foods.",
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
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&family=Montserrat:wght@400;700&display=swap"
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
