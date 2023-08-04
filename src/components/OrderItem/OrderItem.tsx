import { FC, useState } from 'react';
import styles from './OrderItem.module.scss';
import { Order } from '@/types/Order';
import { Button } from '../Button';
import iconList from '../../public/assets/icon_list.svg';
import iconArrow from '../../public/assets/icon_arrow.svg';
import classnames from 'classnames';
import { formatDate } from '@/services/helpers';
import Image from 'next/legacy/image';


type Props = {
  order: Order
  onSelect: (orderId: number) => void
  isSelected: boolean
  selectedId: number | null
}

export const OrderItem: FC<Props> = ({ 
  order, 
  onSelect, 
  isSelected,
  selectedId
}) => {
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
          accumulator += currencyPrice.value
        }

        return accumulator
      }, 0
    );

    return sum;
  }

  const sumUAH = getSum('UAH');
  const sumUSD = getSum('USD');

  const isOrderSelected = selectedId === order.id;

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

      <div className={`${styles['order__counter']} col-2 mx-2`}>
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
          {formatDate(date, 'short')}
        </span>

        <span className={styles['order__date--long']}>
          {formatDate(date, 'long')}
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

        <div className={styles['order__arrow-pointer']}>
          {isSelected && isOrderSelected && (
            <Image alt='arrow' width={20} height={30} src={iconArrow}/>
          )}
        </div>
    </li>
  )
}