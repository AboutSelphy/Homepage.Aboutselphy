import type { Metadata } from "next";
import './styles/global.scss';

// !Imports
import { Chivo, Akshar } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const chivo = Chivo({
  subsets: ['latin'],
  variable: '--font-chivo',
  display: 'swap',
})

const akshar = Akshar({
  subsets: ['latin'],
  variable: '--font-akshar',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${chivo.variable} ${akshar.variable} ${global}` }>
      <body>
        {children}
      </body>
    </html>
  );
}
