import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Courier, CourierState } from "../../Types/courierTypes";

const initialState: CourierState = {
  couriers: [],
  selectedCourier: null,
};

export const courierSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setSelectedCourier: (state, action: PayloadAction<Courier>) => {
      state.selectedCourier = action.payload;
    },
  },
});

export const { setSelectedCourier } = courierSlice.actions;

export default courierSlice.reducer;
