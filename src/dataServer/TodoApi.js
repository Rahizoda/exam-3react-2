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



export const DataSlice = createSlice({
  name: 'counter',
  
  initialState:{
    data: [],
    byCategory:[]
  } ,
  reducers: {},
    extraReducers(builder) {
      builder.addCase(GetProducts.fulfilled, (state, { payload }) => {
            state.data = payload;
    }), 
    builder.addCase(GetCategory.fulfilled, (state , {payload} )=>{
        state.byCategory = payload
    })
  }
})


export default DataSlice.reducer