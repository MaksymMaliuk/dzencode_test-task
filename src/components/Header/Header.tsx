import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import shieldIcon from '../../assets/icon_shield.svg'
import { DateTime } from '../DateTime/DateTime';
import ActiveSessionsCounter from '../ActiveSessionCounter/ActiveSessionCounter';

export const Header = () => {
  return (
    <header className={styles['header']}>
      <div className={`${styles['header__content']} container`}>
        <div className={styles['header__emblem']}>
          <Image src={shieldIcon} height={50} alt={'shield'} />
        </div>

        <div className={styles['header__input']}>
          <input id='searchInput' placeholder='search' />
          <label htmlFor="searchInput" />
        </div>

        <DateTime />
        <ActiveSessionsCounter />
      </div>
    </header>
  )
}