import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Typus.AI - AI-Powered Architectural Visualization",
  description:
    "Transform your architectural designs with AI. Typus.AI preserves structure while creating stunning visualizations from your CAD files and sketches.",
  keywords: "AI architecture, architectural visualization, CAD to render, AI design, building visualization",
  authors: [{ name: "Typus.AI" }],
  creator: "Typus.AI",
  publisher: "Typus.AI",
  icons: {
    icon: "/logo/typus_logo.png",
    shortcut: "/logo/typus_logo.png",
    apple: "/logo/typus_logo.png",
  },
  openGraph: {
    title: "Typus.AI - AI-Powered Architectural Visualization",
    description:
      "Transform your architectural designs with AI. Preserve structure while creating stunning visualizations.",
    url: "https://typus.ai",
    siteName: "Typus.AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Typus.AI - AI-Powered Architectural Visualization",
    description:
      "Transform your architectural designs with AI. Preserve structure while creating stunning visualizations.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} antialiased`} suppressHydrationWarning>
      <body className="font-sans dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
