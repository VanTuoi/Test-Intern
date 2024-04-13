import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const product = createSlice({
  name: 'product',
  initialState: {
    product: {
      id: -1,
      title: '',
      photo: '',
      price: 0,
    }
  },
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
  }
})
export default product;