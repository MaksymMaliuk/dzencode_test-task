import Link from 'next/link';
import 'bootstrap/scss/bootstrap-reboot.scss';
import styles from './NavBar.module.scss';
import Image from 'next/image';
import chad from '../../public/assets/chad.jpg';

const navItems = [
  { 
    label: 'Orders', 
    href: '/orders' 
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
      <div className={styles.nav__user}>
        <Image 
          width={150}
          height={150} 
          src={chad} 
          alt='user photo' 
      />
      </div>
      
      <ul className={styles.nav__list}>
        {navItems.map(({ href, label }, index) => (
          <li key={index} className={styles.nav__item}>
            <Link href={href} className={styles.nav__link}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}