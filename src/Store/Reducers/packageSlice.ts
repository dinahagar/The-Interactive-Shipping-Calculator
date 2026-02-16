import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PackageState } from "../../Types/packageTypes";

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
    resetPackageData: () => initialState,
  },
});

export const { updateData, resetPackageData } = packageSlice.actions;

export default packageSlice.reducer;
