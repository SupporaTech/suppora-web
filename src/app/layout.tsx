import type { Metadata } from "next";

import React from "react";

import "./globals.scss";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  applicationName: "SUPPORA",
  title: "SUPPORA - BPO-услуги для вашего бизнеса",
  description: "SUPPORA - профессиональные BPO-услуги для оптимизации бизнес-процессов. Снижаем операционные расходы до 30% и повышаем эффективность.",
  keywords: ["BPO", "аутсорсинг", " бизнес-процессы", "оптимизация", "клиентская поддержка", "обработка данных"],
  authors: [
    { name: "Suppora", url: "https://suppora.tech" }
  ],
  openGraph: {
    title: "SUPPORA - BPO-услуги для вашего бизнеса",
    description: "Профессиональные BPO-решения для повышения эффективности вашего бизнеса",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    description: "SUPPORA - BPO-услуги для оптимизации бизнеса",
  },
};

type Props = React.PropsWithChildren;

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="ru">
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
