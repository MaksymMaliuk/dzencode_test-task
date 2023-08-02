import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import productsFromServer from '../../../products.json';

const productsSlice = createSlice({
  name: 'products',
  initialState: productsFromServer,
  reducers: {
    removeProduct: (state, action: PayloadAction<number>) => (
      state.filter(item => item.id !== action.payload)
    )
  }
});

export const { actions, reducer: productsReducer } = productsSlice;