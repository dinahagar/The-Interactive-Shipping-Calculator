import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OriginState } from "../../Types/originTypes";

const initialState: OriginState = {
  origin: {
    countryCode: "",
    country: "",
    city: "",
    street: "",
  },
};

export const originSlice = createSlice({
  name: "origin",
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<Partial<OriginState>>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { updateData } = originSlice.actions;

export default originSlice.reducer;
