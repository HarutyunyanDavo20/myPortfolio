import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './categoriesSlice';
import globalSlice from './globalSlice';
import imageSlice from './imageSlice';
import TodosSlice from './TodosSlice';

export const store = configureStore({
  reducer: {
    todos: TodosSlice,
    categories: categoriesSlice,
    images: imageSlice,
    globalState: globalSlice,
  },
});
