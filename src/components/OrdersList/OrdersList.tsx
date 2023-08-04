'use client'

import { useDispatch, useSelector } from "react-redux";
import { OrderItem } from "../OrderItem"
import styles from './OrdersList.module.scss';
import { RootState } from "@/types/storeTypes/RootState";
import { useEffect, useState } from "react";
import { OrderItemInfo } from "../OrderItemInfo";
import { actions as orderActions } from "@/services/store/ordersSlice";
import classnames from "classnames";
import { Product } from "@/types/Product";
import _ from 'lodash';

export const OrdersList = () => {
  const [isSelectedOrder, setIsSelectedOrder] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null)
  const orders = useSelector((state: RootState) => state.orders);
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  
  const hadnleSelectOrder = (orderId: number) => {
    setSelectedOrderId(orderId);
    setIsSelectedOrder(true);
  }

  const handleCloseOrderInfo = () => {
    setIsSelectedOrder(false);
    setSelectedOrderId(null);
  }

  useEffect(() => {
    const ordersWithProducts = orders.map(order => {
      const foundProducts: Product[] = products.filter(product => 
        product.order === order.id || undefined
      )
      return { ...order, products: foundProducts }
    });

      dispatch(orderActions.setOrders(ordersWithProducts));
      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const listModClass = classnames(
    isSelectedOrder
      ? 'col-2'
      : ''
  )

  const orderInfo = orders.find((order) => order.id === selectedOrderId);
    
  return (
    <>
      <div className='mb-5'>
        <h2 className='mb-0'>
          Orders / {orders.length}
        </h2>
      </div>

      <div className={styles['orders']}>
        <ul className={`${styles['orders__list']} m-0 p-0 ${listModClass}`}>
          {orders.map(order => (
            <OrderItem
              onSelect={hadnleSelectOrder}
              isSelected={isSelectedOrder}
              selectedId={selectedOrderId}
              key={order.id}
              order={order}
            />
          ))}
        </ul>
        
        {isSelectedOrder && orderInfo &&
          <div className="col-8 gx-0 ms-4">
            <OrderItemInfo
              onClose={handleCloseOrderInfo}
              order={orderInfo}
            />
          </div>
        }
      </div>
    </>
  )
}