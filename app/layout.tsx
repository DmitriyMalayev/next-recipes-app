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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
