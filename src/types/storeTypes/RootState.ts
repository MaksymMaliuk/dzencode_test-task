import { Order } from "../Order";
import { Product } from "../Product";

export interface RootState {
  products: Product[];
  orders: Order[];
}