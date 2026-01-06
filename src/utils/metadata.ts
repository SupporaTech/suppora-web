import type { Metadata } from "next";
import ruContent from '@/data/ru/content.json';
import enContent from '@/data/en/content.json';
import esContent from '@/data/es/content.json';

type Language = 'ru' | 'en' | 'es';

export function getMetadata(language: Language = 'ru'): Metadata {
  const contentData = 
    language === 'ru' ? ruContent : 
    language === 'en' ? enContent : 
    esContent;
  
  const metadata = contentData.metadata;

  return {
    applicationName: metadata.applicationName,
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    authors: [
      { name: "Suppora", url: "https://suppora.tech" }
    ],
    openGraph: {
      title: metadata.openGraph.title,
      description: metadata.openGraph.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      description: metadata.twitter.description,
    },
  };
}

