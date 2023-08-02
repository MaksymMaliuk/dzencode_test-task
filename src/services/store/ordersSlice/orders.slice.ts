import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import ordersFromServer from '../../../orders.json';
import { Order } from '@/types/Order';

const initialState = [...ordersFromServer];

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => (
      state.filter(item => item.id !== action.payload)
    ),
    add: (state, action: PayloadAction<Order>) => (
      [...state, action.payload]
    )
  }
});

export const { actions, reducer: ordersReducer } = ordersSlice;