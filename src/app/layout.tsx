import { Header } from '@/components/Header'
import './globals.scss'

export const metadata = {
  title: 'Home Page',
  description: 'It is simple NextJS app '
}

export default function RootLayout({ 
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}