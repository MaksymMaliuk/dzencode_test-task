'use client'

import { FC, useEffect, useState } from "react";
import { ProductItem } from "../ProductItem/ProductItem";
import styles from './ProductsList.module.scss';
import { useSelector } from "react-redux";
import { RootState } from "@/types/storeTypes/RootState";

export const ProductsList: FC = () => {
  const products = useSelector((state: RootState) => state.products)
  
  return (
    <>
      <h2 className='mb-5'>
        Products / {products.length}
      </h2>

      <ul className={`${styles['product-list']} p-0`}> 
          {products.map((product) => {
            return (
              <ProductItem key={product.id} product={product}/>
            )
        })}
      </ul>
    </>
  )
}