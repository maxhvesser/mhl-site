import type {Metadata} from 'next'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import {IBM_Plex_Mono} from "next/font/google";
import './globals.css'

const ibmPlexMono = IBM_Plex_Mono({weight: ['100', '200', '300', '400', '500', '600', '700'], subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Maximilian Hvesser-Lewis',
  description: 'Senior Android Developer',
}

export default function RootLayout({
 children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body id="home" className={`${ibmPlexMono.className} [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] bg-old-lace dark:bg-tiber`}>
        {children}
        <SpeedInsights/>
        <Analytics/>
      </body>
    </html>
  )
}
