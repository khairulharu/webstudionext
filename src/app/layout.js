import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WebStudioBone",
  description: "Jasa Pembuatan Website Kab Bone.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gray-900">
          {children}
        </div>
        </body>
    </html>
  );
}
