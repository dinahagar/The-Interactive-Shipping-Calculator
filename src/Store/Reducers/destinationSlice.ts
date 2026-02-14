import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DestinationState {
  destination: {
    countryCode: string;
    country: string;
    city: string;
    street: string;
  };
}

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
