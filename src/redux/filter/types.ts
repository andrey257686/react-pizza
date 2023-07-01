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