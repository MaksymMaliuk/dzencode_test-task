import { FC } from "react"
import styles from './Product.module.scss';

type Props = {
  product: Product
}

export const Product: FC<Props> = ({ product }) => {
  const {
    title,
    price,
    type
  } = product;

  const findPriceBySymbol = (price: Price[], symbol: string) => {
    const foundPrice = price.find(item => item.symbol === symbol);
    return foundPrice ? foundPrice.value : undefined;
  };

  const uahPrice = findPriceBySymbol(price, 'UAH'); 
  const usdPrice = findPriceBySymbol(price, 'USD'); 

  return(
    <li className={`${styles['product']} row`}>
      <div className={`${styles['product__title']} col`}>
        {title}
      </div>

      <div className={`${styles['product__type']} col`}>
        {type}
      </div>

      <div className={`${styles['product__price']} col`}>
        <span className={styles['product__price--uah']}>
          {uahPrice}
        </span>

        <span className={styles['product__price--usd']}>
          {usdPrice}
        </span>
      </div>
    </li>
  )
}