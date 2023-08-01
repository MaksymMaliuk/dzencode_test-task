import { FC } from 'react';
import styles from './Button.module.scss';
import Image from 'next/image';

type Props = {
  iconPath: string
}

export const Button: FC<Props> = ({ iconPath }) => {
  return(
    <button className={styles['button']}>
      <Image src={iconPath} alt='image' />
    </button>
  )
}