import { Action } from "@reduxjs/toolkit";
import { createContext, ReactNode, useReducer } from "react";
import { packageSlice } from "../Store/Reducers/packageSlice";
import { PackageState } from "../Types/packageTypes";

type PackageContextType = {
  packageState: PackageState;
  dispatch: React.Dispatch<Action>;
};

export const PackageContext = createContext<PackageContextType | undefined>(
  undefined
);

export const PackageProvider = ({ children }: { children: ReactNode }) => {

  const [packageState, dispatch] = useReducer(packageSlice.reducer, packageSlice.getInitialState());

  return (
    <PackageContext.Provider value={{ packageState, dispatch }}>
      {children}
    </PackageContext.Provider>
  );
};