import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Huzaifa Ahmed | Software Engineer",
  description: "Software Engineer building intelligent applications and immersive digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col selection:bg-emerald/30 selection:text-emerald-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {/* Global Background Design Elements */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#1A0B05] dark:bg-[#B8860B] blur-[90px] opacity-60 dark:opacity-20" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#1A0B05] dark:bg-[#B8860B] blur-[90px] opacity-80 dark:opacity-20" />
            <div className="absolute inset-0 bg-grid-pattern opacity-100" />
          </div>

          <CustomCursor />
          <div className="relative z-10 flex flex-col min-h-full">
            <Navbar />
            <main className="flex-1 pt-20">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
