export type SearchPizzaParams = {
  category:string, 
  sortBy:string, 
  order:string, 
  search:string, 
  currentPage:string
}

export type Pizza = { 
  id: string, 
  name: string, 
  imageUrl: string, 
  price: number, 
  types: number[], 
  sizes: number[]
 }

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export interface PizzaSliceState {
  items: Pizza[],
  status: Status
}