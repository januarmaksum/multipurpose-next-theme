import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Multipurpose Next.js Theme",
  description: "Multipurpose Next.js Theme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
