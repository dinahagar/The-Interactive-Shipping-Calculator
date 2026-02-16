import { createContext, ReactNode, useReducer } from "react";
import { originSlice } from "../Store/Reducers/originSlice";
import { Action } from "@reduxjs/toolkit";
import { OriginState } from "../Types/originTypes";

type OriginContextType = {
  originState: OriginState;
  dispatchOrigin: React.Dispatch<Action>;
};

export const OriginContext = createContext<OriginContextType | undefined>(
  undefined,
);

export const OriginProvider = ({ children }: { children: ReactNode }) => {
  const [originState, dispatchOrigin] = useReducer(
    originSlice.reducer,
    originSlice.getInitialState(),
  );

  return (
    <OriginContext.Provider value={{ originState, dispatchOrigin }}>
      {children}
    </OriginContext.Provider>
  );
};
