import "./globals.css";
import Footer from "@/structures/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/structures/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={
            "text-gray-900 dark:text-white bg-white dark:bg-gray-700 transition-all"
          }
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navigation />
            <main className="min-h-screen flex flex-col">
              {children}
              <Footer className="flex-grow" />
            </main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
