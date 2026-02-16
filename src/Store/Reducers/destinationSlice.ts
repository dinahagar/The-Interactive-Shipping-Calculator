import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DestinationState } from "../../Types/destinationTypes";

const initialState: DestinationState = {
  destination: {
    countryCode: "",
    country: "",
    city: "",
    street: "",
  },
};

export const destinationSlice = createSlice({
  name: "destination",
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<Partial<DestinationState>>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { updateData } = destinationSlice.actions;

export default destinationSlice.reducer;
