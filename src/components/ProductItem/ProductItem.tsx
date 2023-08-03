import { FC } from "react"
import styles from './ProductItem.module.scss'
import { Price, Product } from "../../types/Product";
import { Button } from "../Button";
import trashCan from '../../public/assets/icon_trash.svg';
import { useDispatch } from "react-redux";
import { actions } from "@/services/store/productsSlice";
import Image from "next/legacy/image";
import { BASE_URL } from "@/services/constants";

type Props = {
  product: Product
}

export const ProductItem: FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const {
    title,
    price,
    type,
    date,
    photo
  } = product;

  const handleRemoveProduct = (id: number) => (
    dispatch(actions.removeProduct(id))
  )

  const findPriceBySymbol = (price: Price[], symbol: string) => {
    const foundPrice = price.find(item => item.symbol === symbol);
    return foundPrice ? foundPrice.value : undefined;
  };

  const uahPrice = findPriceBySymbol(price, 'UAH');
  const usdPrice = findPriceBySymbol(price, 'USD');

  return(
    <li className={`${styles['product']} row gx-0`}>
      <div className={`${styles['product__image']} col-1`}>
        <Image
          src={`${BASE_URL}/${photo}`} 
          alt={title}
          objectFit="contain"
          width={50}
          height={50}
        />
      </div>

      <div className={`${styles['product__title']} col`}>
        {title}
      </div>

      <div className={`${styles['product__type']} col-2`}>
        {type}
      </div>

      <div className={`${styles['product__date']} col-1`}>
        {date}
      </div>

      <div className={`${styles['product__price']} col-2`}>
        <span className={styles['product__price--uah']}>
          {uahPrice}
        </span>

        <span className={styles['product__price--usd']}>
          {usdPrice}
        </span>
      </div>

      <div className={`${styles['product__delete-button']} col-1`}>
        <Button 
          onClick={() => handleRemoveProduct(product.id)} 
          iconPath={trashCan} 
        />
      </div>
    </li>
  )
}