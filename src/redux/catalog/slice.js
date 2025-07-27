import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchBrands, fetchCarById } from './operations.js';

const slice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    brands: [],
    car: null,
    loading: false,
    error: false,
    favorites: [],
    filters: {
      brand: '',
      rentalPrice: '',
      mileageTo: '',
    },
    page: 1,
    hasMore: true,
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
      state.page = 1;
      state.items = [];
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    addToFavorites: (state, action) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        if (state.page === 1) {
          state.items = action.payload.cars;
        } else {
          state.items = [...state.items, ...action.payload.cars];
        }

        if (state.page < action.payload.totalPages) {
          state.hasMore = true;
        } else {
          state.hasMore = false;
        }
      })
      .addCase(fetchCars.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(fetchBrands.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(fetchCarById.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.loading = false;
        state.car = action.payload;
      })
      .addCase(fetchCarById.rejected, state => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { setFilters, setPage, addToFavorites } = slice.actions;

export default slice.reducer;
