import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "../api/catApi";

const initialState= {
    categories: [],
    isLoading: false,
    error: false
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        loading: (state) => {
            state.isLoading = true
        },
        success: (state, {payload}) => {
            state.isLoading = false
            state.error = false
            state.categories = payload ?? []
        },
        error: (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        }
    }
})

export const {loading , success , error} = categoriesSlice.actions

export const getApiCategories = () => {
    return async (dispatch) => {
      dispatch(loading());
      try {
        dispatch(success(await getAllCategories()));
      } catch (error) {
        dispatch(error(error.toString()));
      }
    };
  };


export default categoriesSlice.reducer;
