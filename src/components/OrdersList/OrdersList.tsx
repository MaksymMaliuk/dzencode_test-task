import { OrderItem } from "../OrderItem"
import styles from './OrdersList.module.scss';

export const OrdersList = () => {
  return (
    <div>
      <div className='mb-5'>
        <h2 className='mb-0'>
          Orders: 
        </h2>
      </div>

      <ul className={`${styles['orders-list']} m-0 p-0`}>
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </ul>
  </div>
  )
}