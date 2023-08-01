import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import ordersFromServer from '../../../orders.json';

const initialState = [...ordersFromServer];

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    removeOrder: (state, action: PayloadAction<number>) => (
      state.filter(item => item.id !== action.payload)
    )
  }
});

export const { actions, reducer: ordersReducer } = ordersSlice;