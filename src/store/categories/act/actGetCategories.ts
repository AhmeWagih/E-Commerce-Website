import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosErrorHandler } from '@utils';
import { TCategory } from '@types';
type TResponse = TCategory[];

const actGetCategories = createAsyncThunk('category/getCategories', async (_, thunkAPI) => {
  const { rejectWithValue,signal } = thunkAPI;
  try {
    const response = await axios.get<TResponse>('/categories',{ signal });
    return response.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
});

export default actGetCategories;
