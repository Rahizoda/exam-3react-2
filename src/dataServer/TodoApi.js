import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API } from '../config/configAxios';
import axios from 'axios';

export const GetProducts = createAsyncThunk("todos/GetData", async () => {
  try {
    const res = await axios.get("http://37.27.29.18:8002/Product/get-products");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const GetCategory = createAsyncThunk("todos/GetCategory", async () => {
  try {
    const res = await axios.get("http://37.27.29.18:8002/Category/get-categories");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const GetById = createAsyncThunk("todos/GetById", async (id) => {
  try {
     const {data} = await axios.get(`http://37.27.29.18:8002/Product/get-product-by-id?id=${id}`)
    return data.data
  } catch (error) {
    console.log(error);
  }
})



export const DataSlice = createSlice({
  name: 'counter',
  
  initialState:{
    data: [],
    byCategory: [],
    byId: [], 
    wishlist:[]
  } ,
  reducers: {
    addToWishlist: (state, { payload }) => {
       const exists = state.wishlist.find((item) => item.id === payload.id);
    if (!exists) {
    state.wishlist.push(payload);
  }
  },
  removeFromWishlist: (state, { payload }) => {
    state.wishlist = state.wishlist.filter(item => item.id !== payload);
  }
  },
    extraReducers(builder) {
      builder.addCase(GetProducts.fulfilled, (state, { payload }) => {
            state.data = payload;
    }), 
    builder.addCase(GetCategory.fulfilled, (state , {payload} )=>{
        state.byCategory = payload
    }), 
    builder.addCase(GetById.fulfilled, (state , {payload})=>{
      state.byId = payload
    })
  }
})

export const { addToWishlist, removeFromWishlist } = DataSlice.actions;

export default DataSlice.reducer