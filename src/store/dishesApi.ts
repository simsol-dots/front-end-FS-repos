import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Dish = {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  mealType: string[];
  difficulty: string;
  rating: number;
};

type DishesResponse = {
  recipes: Dish[];
  total: number;
};

export const dishesApi = createApi({
  reducerPath: "dishesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getDishes: builder.query<DishesResponse, void>({
      query: () => "recipes?limit=8",
    }),
  }),
});

export const { useGetDishesQuery } = dishesApi;
