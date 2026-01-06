import type { Metadata } from "next";
import { cookies } from "next/headers";

import React from "react";

import "./globals.scss";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { getMetadata } from "@/utils/metadata";

type Language = 'ru' | 'en' | 'es';

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const language = (cookieStore.get('language')?.value || 'ru') as Language;
  
  return getMetadata(language);
}

type Props = React.PropsWithChildren;

export default async function RootLayout({ children }: Readonly<Props>) {
  const cookieStore = await cookies();
  const language = (cookieStore.get('language')?.value || 'ru') as Language;

  return (
    <html lang={language}>
      <body className={`antialiased`}>
        <LanguageProvider>
          <div className="wrapper">
              <Navbar />
              {children}
              <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
