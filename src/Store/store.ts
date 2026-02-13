import { configureStore } from "@reduxjs/toolkit";
import courierReducer from "../Store/Reducers/courierSlice";
import { courierApi } from "./Services/courier";

export const store = configureStore({
  reducer: {
    courier: courierReducer,
    [courierApi.reducerPath]: courierApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(courierApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
