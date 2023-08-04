import 'bootstrap/scss/bootstrap-reboot.scss';
import styles from './NavBar.module.scss';
import Image from 'next/image';
import chad from '../../public/assets/chad.jpg';
import { NavLink } from '../NavLink';

const navItems = [
  {
    label: 'Home Page',
    href: '/',
  }, {
    label: 'Orders',
    href: '/orders',
  },
  {
    label: 'Products',
    href: '/products',
  },
];

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__user}>
        <Image width={150} height={150} src={chad} alt="user photo" />
      </div>

      <ul className={styles.nav__list}>
        {navItems.map(({ href, label }, index) => {
          return (
            <li key={index} className={styles['nav__item']}>
              <NavLink href={href} label={label} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};