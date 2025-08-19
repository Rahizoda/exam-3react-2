import { configureStore } from '@reduxjs/toolkit'
import  DataSlice  from './TodoApi'

export const store = configureStore({
  reducer: {
    data:DataSlice
  },
})