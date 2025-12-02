import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Learners Global School - Sathagalli",
  description: "Shaping Future Leaders of India",
};

import { EnquiryProvider } from "@/components/providers/EnquiryProvider";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <EnquiryProvider>
          {children}
        </EnquiryProvider>
      </body>
    </html>
  );
}
