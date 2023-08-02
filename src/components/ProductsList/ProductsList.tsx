'use client'

import { FC, useState } from "react";
import { ProductItem } from "../ProductItem/ProductItem";
import styles from './ProductsList.module.scss';
import { useSelector } from "react-redux";
import { RootState } from "@/types/storeTypes/RootState";
import { Filter } from "@/types/Filter";

export const ProductsList: FC = () => {
  const products = useSelector((state: RootState) => state.products);
  const [selectedFilter, setSelectedFilter] = useState(Filter.ALL);

  const filteredProducts = (filterOption: Filter) => (
    products.filter(({ type }) => (
      type === filterOption
    ))
  )

  const handleFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>
    ) => {
    setSelectedFilter(event.target.value as Filter);
  };

  const visibleProducts = selectedFilter === Filter.ALL 
    ? products 
    : filteredProducts(selectedFilter)
    
  return (
    <>
      <div className="mb-5 row gx-0">
        <h3 className='m-0 col-2 gx-0'>
          Products / {products.length}
        </h3>

        <div className={`${styles['filter']} col-4 gx-0`}>
          <h5 className={`${styles['filter__subtitle']} col-2 gx-0`}>
            Type:
          </h5>

          <select 
            className={`${styles['filter__selector']} form-select col gx-0`} 
            value={selectedFilter} 
            onChange={handleFilterChange}
          >
            {Object.values(Filter).map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      

      <ul className={`${styles['product-list']} p-0`}> 
          {visibleProducts.map((product) => {
            return (
              <ProductItem key={product.id} product={product} />
            )
        })}
      </ul>
    </>
  )
}