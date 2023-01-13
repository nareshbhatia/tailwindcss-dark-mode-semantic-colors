import * as React from 'react';
import { Inter } from '@next/font/google';
import './global.css';

// Load the Inter font using @next/font. For details, see
// https://beta.nextjs.org/docs/api-reference/components/font#css-variables
const inter = Inter({ subsets: ['latin'], variable: '--font-family-inter' });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} theme-light`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-default text-default antialiased">{children}</body>
    </html>
  );
}
