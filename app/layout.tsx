import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mathi R | Portfolio",
  description: "Created By Mathi R via Next js",
  authors : [{name : "mathi" ,  "url" : "https://github.com/arivusurya"}],
  keywords: [
    "Full-stack TypeScript Developer",
    "Next.js Developer Portfolio",
    "React.js Frontend Engineer",
    "Modern Web Development with TypeScript",
    "Serverless Applications with AWS and Docker",
    "Next.js with TypeScript Best Practices",
    "React and GraphQL Integration",
    "REST API Development with Node.js and TypeScript",
    "Scalable NoSQL Database Solutions",
    "SQL vs NoSQL for Modern Applications",
    "Building LLM Applications with LangChain",
    "Langraph for Graph-based AI Models",
    "Fullstack Development with Next.js and GraphQL",
    "Dockerized React Applications on AWS",
    "Cloud-Native Development with Docker and AWS",
    "TypeScript in 2025: Why It’s Essential",
    "Next.js 13 Features for Fullstack Developers",
    "Real-time Data Handling with GraphQL Subscriptions",
    "AI-Powered Applications using LangChain and LLMs",
    "Learn TypeScript for React Developers",
    "How to Build Scalable Apps with Next.js and Docker",
    "GraphQL vs REST API: What Developers Need to Know",
    "AWS Deployment for Fullstack JavaScript Apps"
  ]
  

};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#141414]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          // enableSystem
          // disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
