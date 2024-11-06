export type Response<T> = {
  data: T;
};

export type Page = {
  num: number;
  size: number;
  shard?: number;
};

export type PaginatedData<T> = {
  data: T[];
  nextPage?: Page;
};

export type PaginatedResponse<T> = {
  data: T[];
  links: { next?: string };
};
