export type SpringPage<T> = {
  content: T[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  numberOfElements?: number;
  first: boolean;
  empty: boolean;
};
