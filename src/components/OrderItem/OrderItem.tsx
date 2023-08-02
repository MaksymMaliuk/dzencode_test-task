import { FC } from 'react';
import styles from './OrderItem.module.scss';
import { Order } from '@/types/Order';
import { Button } from '../Button';
import iconList from '../../public/assets/icon_list.svg';


type Props = {
  order: Order
}

export const OrderItem: FC<Props> = ({ order }) => {
  const {
    title,
    date,
    products
  } = order;

  const getSum = (currency: string) => {
    const sum = products.reduce(
      (accumulator, product) => {
        const currencyPrice  = product.price.find(({ symbol }) => symbol === currency);
        if (currencyPrice ) {
          accumulator += currencyPrice .value
        }

        return accumulator
      }, 0
    );

    return sum;
  }

  return (
    <li className={`${styles['order-item']} row gx-0`}>
      <div className='col gx-0 d-flex justify-content-center'>
        <span className={styles['order-item__title']}>
          {title}
        </span>
      </div>


      <div className={`${styles['order-item__content']} col-2 gx-0`}>
        <Button iconPath={iconList} onClick={() => {}}/>

        <span className={styles['content__counter']}>
          {order.products?.length}
        </span>
      </div>

      <div className={`${styles['order-item__date']} col-2 gx-0`}>
        <span className={styles['order-item__date--short']}>
          {date}
        </span>

        <span className={styles['order-item__date--long']}>
          {date}
        </span>
      </div>

      <div className={`${styles['order-item__total-price']} col-2 gx-0`}>
        <span className={styles['order-item__total-price--usd']}>
          {getSum('USD')}
        </span>
        
        <span className={styles['order-item__total-price--uah']}>
          {getSum('UAH')}
        </span>

      </div>
    </li>
  )
}