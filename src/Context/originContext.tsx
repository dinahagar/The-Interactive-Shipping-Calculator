import { createContext, ReactNode, useReducer } from "react";
import { originSlice, OriginState } from "../Store/Reducers/originSlice";
import { Action } from "@reduxjs/toolkit";

type OriginContextType = {
  originState: OriginState;
  dispatch: React.Dispatch<Action>;
};

export const OriginContext = createContext<OriginContextType | undefined>(
  undefined,
);

export const OriginProvider = ({ children }: { children: ReactNode }) => {
  const [originState, dispatch] = useReducer(
    originSlice.reducer,
    originSlice.getInitialState(),
  );

  return (
    <OriginContext.Provider value={{ originState, dispatch }}>
      {children}
    </OriginContext.Provider>
  );
};
