'use client'

import { 
  FC, 
  useEffect, 
  useState 
} from "react";
import productsFromServer from '../../products.json';
import { Product }
import Image from "next/image";

export const metadata = {
  title: 'Blog'
}

const Products: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productsFromServer)
  }, [])

  return ( 
    <>
      <ul> 
        {products.map((product) => {
         
          return (
            <Product key={product.id} product={product}/>
          )
        })}
      </ul>
    </>
  )
}

export default Products;