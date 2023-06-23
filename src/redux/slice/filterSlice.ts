import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export enum SortPropertyEnum {
  RATING_ASC = '-rating',
  RATING_DESC = 'rating',
  NAME_ASC = '-name',
  NAME_DESC = 'name',
  PRICE_ASC = '-price',
  PRICE_DESC = 'price'
}

export type Sort = {
  name: string, 
  sortProperty: SortPropertyEnum
}

export interface FilterSliceState {
  searchValue: string,
  categoryId: number,
  currentPage: number,
  sort: Sort,
}

const initialState: FilterSliceState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  sort: { 
    name: 'популярности', 
    sortProperty: SortPropertyEnum.RATING_DESC 
  },
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSort: (state, action: PayloadAction<Sort>) => {
      state.sort = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setFilters: (state, action: PayloadAction<FilterSliceState>) => {
      if (Object.keys(action.payload).length){
        state.currentPage = Number(action.payload.currentPage);
        state.categoryId = Number(action.payload.categoryId);
        state.sort = action.payload.sort;
      } else {
        state.currentPage = 1;
        state.categoryId = 0;
        state.sort = {
          name: 'популярности', 
          sortProperty: SortPropertyEnum.RATING_DESC
        }
      }
    },
  },
});

export const selectFilter = (state: RootState) => state.filterReducer;
export const selectSort = (state: RootState) => state.filterReducer.sort;

export const { setCategoryId, setSort, setCurrentPage, setFilters, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
