import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { Pizza } from "./types";

export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string>>('pizza/fetchPizzasStatus', async (params) => {
  const { category, sortBy, order, search, currentPage } = params;
  const { data } = await axios.get<Pizza[]>(
    `https://64245a6cd6152a4d480d4cad.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search}`,
  );
  return data;
});