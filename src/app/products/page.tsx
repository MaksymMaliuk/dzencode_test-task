import { ProductsList } from "@/components/ProductsList";
import { FC } from "react";

export const metadata = {
  title: 'Products'
}

const Products: FC = () => {
  return <ProductsList />
}

export default Products;