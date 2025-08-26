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

export const GetBasket = createAsyncThunk("todos/GetBasket", async () => {
  try {
    const { data } = await API.get('Cart/get-products-from-cart')
    return data.data
  } catch (error) {
    console.log(error);
  }
})

export const PostCard = createAsyncThunk("todos/PostCard", async (id,{dispatch}) => {
  try {
     await API.post(`Cart/add-product-to-cart?id=${id}`)
    dispatch(GetBasket())
  } catch (error) {
    console.log(error);
  }
})

export const DeleteProduct = createAsyncThunk("todos/DeleteProduct", async (id ,{dispatch}) => {
  try {
    await API.delete(`Cart/delete-product-from-cart?id=${id}`)
    dispatch(GetBasket())
  } catch (error) {
    console.log(error);
  }
})

export const Increment = createAsyncThunk("todos/Increament", async (id, { dispatch }) => {
  try {
    await API.put(`Cart/increase-product-in-cart?id=${id}`)
    dispatch(GetBasket())
  } catch (error) {
    console.log(error);
  }
})

export const Decrement = createAsyncThunk("todos/Decrement", async (id, { dispatch }) => {
  try {
    await API.put(`Cart/reduce-product-in-cart?id=${id}`)
    dispatch(GetBasket())
  } catch (error) {
    console.log(error);
  }
})

export const ClearBasket = createAsyncThunk("todos/ClearBasket", async (__dirname, {dispatch}) => {
  try {
    await API.delete(`Cart/clear-cart`)
     dispatch(GetBasket())
  } catch (error) {
    console.log(error);
  }
})

const token = localStorage.getItem('accessToken')

export const Profile = createAsyncThunk("todos/Profile", async (id) => {
  try {
    const res = await API.get(`UserProfile/get-user-profile-by-id?id=${id}` ,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
)
    return res.data
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
    wishlist: [],
    basket: [], 
    user: [], 
  },
  
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
    }),
    builder.addCase(GetBasket.fulfilled , (state, {payload})=>{
      state.basket = payload
    }),
    builder.addCase(Profile.fulfilled , (state ,{payload})=>{
      state.user = payload
    })
  }
})

export const { addToWishlist, removeFromWishlist } = DataSlice.actions;

export default DataSlice.reducer