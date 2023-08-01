'use client'

import { useSelector } from "react-redux";
import { OrderItem } from "../OrderItem"
import styles from './OrdersList.module.scss';
import { RootState } from "@/types/storeTypes/RootState";

export const OrdersList = () => {
  const orders = useSelector((state: RootState) => state.orders)

  return (
    <>
      <div className='mb-5'>
        <h2 className='mb-0'>
          Orders / {orders.length}
        </h2>
      </div>

      <ul className={`${styles['orders-list']} m-0 p-0`}>
        {orders.map(order => (
          <OrderItem key={order.id} order={order} />
        ))}
      </ul>
    </>
  )
}