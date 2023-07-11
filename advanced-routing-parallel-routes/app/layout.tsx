import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Main page',
  description: 'Main page description',
}

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
          <body className={inter.className}>
              <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                {children}
              </div>
          </body>
      </html>
  )
}
