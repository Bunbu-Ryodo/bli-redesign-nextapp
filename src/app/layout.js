import './globals.css'
import { Dosis } from 'next/font/google';

const dosis = Dosis({subsets: ['latin'], weight: ['400']});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dosis.className}>{children}</body>
    </html>
  )
}