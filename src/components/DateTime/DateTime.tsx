import Image from "next/image";
import styles from './DateTime.module.scss'
import clockIcon from '../../assets/icon_clock.svg';

export const DateTime = () => {
  return (
    <div className={styles['datetime']}>
      <div className={styles['datetime__date']}>
        Вторник
        <br />
        06 Апр, 2017
      </div>

      <div className={styles['datetime__time']}>
        <Image src={clockIcon} alt='clock' height={20} />

        <span>13:48</span>
      </div>
    </div>
  );
};