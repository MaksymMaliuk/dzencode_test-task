import { FC, useState } from 'react';
import styles from './OrderItem.module.scss';
import { Order } from '@/types/Order';
import { Button } from '../Button';
import iconList from '../../public/assets/icon_list.svg';
import classnames from 'classnames';


type Props = {
  order: Order
}


export const OrderItem: FC<Props> = ({ order }) => {
  const [isSelected, setIsSelected] = useState(false);

  const {
    title,
    date,
    products
  } = order;

  const orderModclass = classnames(
    isSelected 
    ? styles['order--short'] 
    : styles['order'],
  );
  

  const getSum = (currency: string) => {
    const sum = products.reduce(
      (accumulator, product) => {
        const currencyPrice  = product.price.find(({ symbol }) => symbol === currency);
        if (currencyPrice ) {
          accumulator += currencyPrice.value
        }

        return accumulator
      }, 0
    );

    return sum;
  }

  const sumUAH = getSum('UAH');
  const sumUSD = getSum('USD');

  return (
    <li className={orderModclass}>
      <div className='col gx-0 d-flex justify-content-center'>
        <span className={styles['order__title']}>
          {title}
        </span>
      </div>


      <div className={`${styles['order__content']} col-2 gx-0`}>
        <Button iconPath={iconList} onClick={() => {}}/>

        <span className={styles['content__counter']}>
          {order.products?.length}
        </span>
      </div>

      <div className={`${styles['order__date']} col-2 gx-0`}>
        <span className={styles['order__date--short']}>
          {date}
        </span>

        <span className={styles['order__date--long']}>
          {date}
        </span>
      </div>

      <div className={`${styles['order__total-price']} col-2 gx-0`}>
        <span className={styles['order__total-price--usd']}>
          {sumUSD}
        </span>
        
        <span className={styles['order__total-price--uah']}>
          {sumUAH}
        </span>

      </div>
    </li>
  )
}