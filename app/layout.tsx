import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeCircle",
  description:
    "Ask questions, share technical knowledge, and grow your programming skills with CodeCircle—the interactive, code-focused community.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.className} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <SessionProvider session={session}>
        <body className="min-h-full flex flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}

            {/* Moving Toaster inside the ThemeProvider and body tag fixes the errors */}
            <Toaster richColors />
          </ThemeProvider>
        </body>
      </SessionProvider>
    </html>
  );
}
