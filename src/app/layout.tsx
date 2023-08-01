import 'bootstrap/scss/bootstrap.scss';
import '../styles/custom-scrollbar.scss';
import { Header } from '@/components/Header';
import { NavBar } from '@/components/NavBar/NavBar';
import styles from './layout.module.scss';
import { Roboto } from '@next/font/google';

export const metadata = {
  title: 'Home Page',
  description: 'It is simple NextJS app '
}

const mainFont = Roboto({
  subsets: ['latin'],
  weight: '500'
})

export default function RootLayout({ 
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mainFont.className} >
        <div className='row gx-0'>
          <Header />
        </div>

        <div className={`${styles['content']} row gx-0`}>
          <div className='col-2 gx-0 z-1'>
            <NavBar />
          </div>

          <main className={`${styles['content__container']} col gx-0`}>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}