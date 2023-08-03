import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import shieldIcon from '../../public/assets/icon_shield.svg';
import searchIcon from '../../public/assets/icon_search.svg';
import { DateTime } from '../DateTime/DateTime';

export const Header = () => {
  return (
    <header className={styles['header']}>
      <div className={`${styles['header__content']} container`}>
        <div className={styles['header__emblem']}>
          <Image src={shieldIcon} height={50} alt={'shield'} />
        </div>

        <div className={styles['header__input-container']}>
          <span className={styles['header__input-icon']}>
            <Image 
              src={searchIcon} 
              alt='search icon'
            />
          </span>

          <input 
            className={`${styles['header__input']} form-control`} 
            id='searchInput' 
            placeholder='Search' 
          />
          <label htmlFor="searchInput" />
        </div>

        <DateTime />
      </div>
    </header>
  )
}