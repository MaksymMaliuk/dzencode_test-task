import 'bootstrap/scss/bootstrap.scss';
import { Header } from '@/components/Header'
import { NavBar } from '@/components/NavBar/NavBar'

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
        <div className='row'>
          <Header />
        </div>

        <div className='row'>
          <div className='col-2'>
            <NavBar />
          </div>

          <main className='container col'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}