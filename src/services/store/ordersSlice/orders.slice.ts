import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import ordersFromServer from '../../../orders.json';
import { Order } from '@/types/Order';

const initialState: Order[] = [...ordersFromServer];

interface OrderPayload {
  orderId: number;
  productId: number;
}

const removeProductReducer: CaseReducer<Order[], PayloadAction<OrderPayload>> = (
  state, action
  ) => {
  const { orderId, productId } = action.payload;
  
  return state.map(order => {
    if (order.id === orderId) {
      console.log(order.id);
      
      return {
        ...order,
        products: order.products.filter(product => product.id !== productId)
      };
    }
    return order;
  });
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    removeProduct: removeProductReducer
  }
});

export const { actions, reducer: ordersReducer } = ordersSlice;
