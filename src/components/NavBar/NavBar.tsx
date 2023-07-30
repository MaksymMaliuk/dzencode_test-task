import Link from "next/link"
import styles from './NavBar.module.scss'

const navItems = [
  { 
    label: 'Income', 
    href: '/income' 
  }, { 
    label: 'Groups', 
    href: '/groups' 
  }, { 
    label: 'Products', 
    href: '/products' 
  }, { 
    label: 'Users', 
    href: '/users' 
  }, { 
    label: 'Settings', 
    href: '/settings' 
  },
];

export const NavBar = () => {

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {navItems.map(({ href, label }, index) => (
          <li key={index} className={styles.nav__item}>
            <Link href={href}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}