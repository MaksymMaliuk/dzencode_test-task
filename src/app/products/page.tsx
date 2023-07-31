'use client'

import { 
  FC, 
  useEffect, 
  useState 
} from "react";
import productsFromServer from '../../products.json';
import { ProductItem } from "@/components/Product";
import { Product } from "@/types/Product";

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
            <ProductItem key={product.id} product={product}/>
          )
        })}
      </ul>
    </>
  )
}

export default Products;