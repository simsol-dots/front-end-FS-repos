import { configureStore } from "@reduxjs/toolkit";
import { dishesApi } from "./dishesApi";
import { productsApi } from "./productsApi";
import slideReducer from "./slideSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      slide: slideReducer,
      [dishesApi.reducerPath]: dishesApi.reducer,
      [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        dishesApi.middleware,
        productsApi.middleware,
      ),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
