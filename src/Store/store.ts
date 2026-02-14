import { configureStore } from "@reduxjs/toolkit";
import courierReducer from "../Store/Reducers/courierSlice";
import { courierApi } from "./Services/courier";
import packageReducer from "../Store/Reducers/packageSlice";
import destinationReducer from "../Store/Reducers/destinationSlice";
import originReducer from "../Store/Reducers/originSlice";

export const store = configureStore({
  reducer: {
    courier: courierReducer,
    package: packageReducer,
    destination: destinationReducer,
    origin: originReducer,
    [courierApi.reducerPath]: courierApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(courierApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
