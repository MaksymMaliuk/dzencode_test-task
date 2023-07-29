import Link from 'next/link';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>it is header</h1>
      <Link href='/'>To home page</Link>
    </header>
  )
}