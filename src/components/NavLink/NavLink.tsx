'use client'

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import styles from './NavLink.module.scss'
import { FC } from "react";

type Props = {
  href: string
  label: string
}

export const NavLink: FC<Props> = ({ href, label }) => {
  const currentRoute = usePathname();
  const isActive = currentRoute === href;

  return (
    <div 
    >
      <Link 
        className={classNames(
          styles['link'],
          { [styles['link--active']]: isActive }
          )} 
        href={href} 
        passHref
      >
        {label}
      </Link>
    </div>
  );
};
