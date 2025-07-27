import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const fetchCars = createAsyncThunk(
  'cars/fetch',
  async ({ filters, page }, thunkAPI) => {
    try {
      const { brand, rentalPrice, mileageTo } = filters;

      const params = {
        page,
        ...(brand && { brand }),
        ...(rentalPrice && { rentalPrice }),
        ...(mileageTo && { mileage: mileageTo }),
      };

      const response = await axios.get('/cars', {
        params,
      });

      const { cars, totalPages } = response.data;

      return { cars, totalPages };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  'cars/fetchById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/cars/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchBrands = createAsyncThunk(
  'brands/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/brands');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
