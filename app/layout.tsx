import "./globals.css";

import { Metadata } from "next";

import { Header } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import PathnameBreadcrumb from "@/components/utils/pathname-breadcrumb";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },

  description: siteConfig.description,

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" className="h-full" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "h-full bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-full mx-auto max-w-4xl px-4 border-x border-accent">
              <Header />

              <main className="mt-4 lg:mt-6 flex flex-col gap-4">
                <PathnameBreadcrumb />
                {children}
              </main>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}

export const viewport = {
  themeColor: [
    {
      title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
      },

      description: siteConfig.description,

      icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
      },
    },
    {
      title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
      },

      description: siteConfig.description,

      icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
      },
    },
  ],
};
