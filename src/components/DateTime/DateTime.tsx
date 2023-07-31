'use client'

import Image from "next/image";
import styles from './DateTime.module.scss'
import clockIcon from '../../assets/icon_clock.svg';
import { useEffect, useState } from "react";

export const DateTime = () => {
  const [datetime, setDateTime] = useState(new Date());

  const time = datetime.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });
  const fullDate = datetime.toLocaleDateString(undefined, {
    dateStyle: 'full',
   });

  const day = fullDate.split(',')[0];
  const date = fullDate.split(',')[1];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles['datetime']}>
      <div className={styles['datetime__fullDate fulldate']}>
        <div className={styles['fulldate__day']}>
          {day}
        </div>

        <div className={styles['fulldate__date']}>
          {date}
        </div>
      </div>

      <div className={styles['datetime__time']}>
        <Image src={clockIcon} alt='clock' height={20} />

        <span>{time}</span>
      </div>
    </div>
  );
};