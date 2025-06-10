import './globals.css'
import Navbar from '@/components/layout/navbar' // Make sure the path is correct

export const metadata = {
  title: 'QrCode Creator',
  description: 'Create custom QR codes easily',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-white">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
