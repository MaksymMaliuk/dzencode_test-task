import { FC } from 'react';
import styles from './Button.module.scss';
import Image from 'next/image';

type Props = {
  iconPath: string
  onClick: () => void
}

export const Button: FC<Props> = ({ iconPath, onClick }) => {
  return(
    <button onClick={onClick} className={styles['button']}>
      <Image src={iconPath} alt='image' />
    </button>
  )
}