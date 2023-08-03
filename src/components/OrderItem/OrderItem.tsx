import { FC, useState } from 'react';
import styles from './OrderItem.module.scss';
import { Order } from '@/types/Order';
import { Button } from '../Button';
import iconList from '../../public/assets/icon_list.svg';
import classnames from 'classnames';


type Props = {
  order: Order
  onSelect: (orderId: number) => void
  isSelected: boolean
}

export const OrderItem: FC<Props> = ({ 
  order, 
  onSelect, 
  isSelected 
}) => {
  const {
    title,
    date,
    products
  } = order;
  
  const dividedData = date.split(' ');

  const formatDate = (inputDate: string) => {
    const months = [
      'january', 'february', 'march', 'april', 'may', 'june',
      'july', 'august', 'september', 'october', 'novemver', 'december'
    ];

    const dateParts = inputDate.split('-');
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1;
    const day = parseInt(dateParts[2]);

    return `${day} ${months[month]} ${year} p.`;
  };

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
    <li className={styles['order']}>
      {!isSelected && (
        <div className='col gx-0 d-flex justify-content-center'>
          <span className={styles['order__title']}>
            {title}
          </span>
        </div>
      )}

      <div className={`${styles['order__button']} col-2 gx-0`}>
        <Button iconPath={iconList} onClick={() => onSelect(order.id)}/>
      </div>

      <div className={`${styles['order__counter']} col-3 mx-2`}>
        <span className={styles['order__counter-value']}>
          {order.products?.length}
        </span>

        <span className={styles['order__counter-label']}>
          Products
        </span>
      </div>

      <div className={classnames(
        styles['order__date'],
        isSelected ? "col" : "col-2",
         "gx-0"
        )}
      >
        <span className={styles['order__date--short']}>
          {formatDate(dividedData[0])}
        </span>

        <span className={styles['order__date--long']}>
          {dividedData[0]}
        </span>
      </div>
      {!isSelected && (
        <div className={`${styles['order__total-price']} col-2 gx-0`}>
          <span className={styles['order__total-price--usd']}>
            {sumUSD}
          </span>
          
          <span className={styles['order__total-price--uah']}>
            {sumUAH}
          </span>
        </div>
      )}
    </li>
  )
}