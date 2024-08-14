import type { PropsWithChildren } from "react";
import "./globals.css";
import { Toaster } from "~/components/ui/sonner";

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
