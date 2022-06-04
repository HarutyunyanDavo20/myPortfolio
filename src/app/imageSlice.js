import { createSlice } from "@reduxjs/toolkit";
import { fetchImages } from "../api/catApi";

const initialState = {
  images: [],
  page: 1,
  isLoading: false,
  fetching: false,
  error: null,
};

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    getLoading: (state) => {
      state.isLoading = true;
    },
    getFetching: (state) => {
      state.fetching = true;
    },
    getSuccess: (state, { payload }) => {
      state.isLoading = true;
      state.images = [...state.images, ...payload];
      state.page++;
    },
    getSuccessAdd: (state, { payload }) => {
      state.images = payload;
      state.page = 1;
    },
    getDrag: (state, { payload }) => {
      const { currentCard = { id: 1234 }, card } = payload;
      const newImages = [];
      state.images.forEach((val, i) => {
        if (val.id === card.id) {
          newImages[i] = currentCard;
        } else if (val.id === currentCard.id) {
          newImages[i] = card;
        } else {
          newImages[i] = val;
        }
      });
      state.images = newImages;
    },
    getError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    getFilterImages: (state, { payload }) => {
      state.images = state.images.filter((img) =>
        img.id.search(payload) !== -1 ? true : false
      );
    },
    finallyFetch: (state) => {
      state.images = state.images.map((img, i) => {
        return { ...img, order: i + 1 };
      });
      state.isLoading = false;
      state.fetching = false;
    },
  },
});

export const {
  getLoading,
  getSuccess,
  getError,
  getFilterImages,
  finallyFetch,
  getSuccessAdd,
  getFetching,
  getDrag,
} = imagesSlice.actions;

export const getImages = (page = 1, categoryID = "") => {
  return async (dispatch) => {
    dispatch(getLoading());
    try {
      dispatch(getSuccess(await fetchImages(page + 1, categoryID)));
    } catch (error) {
      dispatch(getError(error.toString()));
    } finally {
      dispatch(finallyFetch());
    }
  };
};

export const getNewImages = (page = 1, categoryID = "") => {
  return async (dispatch) => {
    dispatch(getLoading());
    try {
      dispatch(getSuccessAdd(await fetchImages(page, categoryID)));
    } catch (error) {
      dispatch(getError(error.toString()));
    } finally {
      dispatch(finallyFetch());
    }
  };
};

export default imagesSlice.reducer;
