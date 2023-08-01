import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import productsFromServer from '../../../products.json';

const initialState = [...productsFromServer]

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    removeProduct: (state, action: PayloadAction<number>) => (
      state.filter(item => item.id !== action.payload)
    )
  }
});

export const { actions, reducer: productsReducer } = productsSlice;