import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import productData from "@/data/productData";
import type ProductType from "@/lib/types/productType";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductType[], void>({
      queryFn: () => ({ data: productData }),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
