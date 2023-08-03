import { useDispatch } from 'react-redux';
import { actions as orderActions } from '@/services/store/ordersSlice';
import { Order } from '@/types/Order';
import styles from './OrderItemInfo.module.scss'
import Image from 'next/legacy/image';
import { BASE_URL } from '@/services/constants';
import { Button } from '../Button';
import iconDelete from '../../public/assets/icon_trash.svg';
import iconClose from '../../public/assets/icon_x-mark.svg';

type Props = {
  order: Order;
  onClose: () => void
};

export const OrderItemInfo: React.FC<Props> = ({ order, onClose }) => {
  const dispatch = useDispatch();
  
  const handleRemoveProduct = (productId: number) => {
    dispatch(orderActions.removeProduct({ orderId: order.id, productId }))
    
  };
  
  const listLenght = order.products.length

  return (
    <div className={styles['order']}>
      <div className={styles['order__close-button']}>
        <Button onClick={() => onClose()} iconPath={iconClose} />
      </div>

      {listLenght > 0 
        ? (<ul 
            className={styles['order__list']}
            >
              {order.products.map(product => {
                const { 
                  title, 
                  photo, 
                  id 
                } = product

              return (
                <li
                  className={styles['product']}
                  key={product.id}
                >
                  <div className={styles['product__image']}>
                    <Image 
                      alt={title}
                      width={50} 
                      height={50} 
                      objectFit='contain' 
                      src={`${BASE_URL}/${photo}`}
                    />
                  </div>

                  <span className={styles['product__title']}>
                    {title}
                  </span>

                  <div className={styles['product__delete-button']}>
                    <Button iconPath={iconDelete} onClick={() => handleRemoveProduct(id)} />
                  </div>
                </li>
              )
              })}
            </ul>

        ) : (<h2>Nothing in here...</h2>)
      }
    </div>
  );
};
