import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PackageState {
  packageDetails: {
    weight: string;
    volume: string;
  };
}

const initialState: PackageState = {
  packageDetails: {
    weight: "",
    volume: "",
  },
};

export const packageSlice = createSlice({
  name: "package",
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<Partial<PackageState>>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { updateData } = packageSlice.actions;

export default packageSlice.reducer;
