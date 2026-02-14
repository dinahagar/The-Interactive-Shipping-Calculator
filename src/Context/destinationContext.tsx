import { createContext, ReactNode, useReducer } from "react";
import { destinationSlice, DestinationState } from "../Store/Reducers/destinationSlice";
import { Action } from "@reduxjs/toolkit";

type DestinationContextType = {
  state: DestinationState;
  dispatch: React.Dispatch<Action>;
};

export const DestinationContext = createContext<
  DestinationContextType | undefined
>(undefined);

export const DestinationProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(
    destinationSlice.reducer,
    destinationSlice.getInitialState(),
  );

  return (
    <DestinationContext.Provider value={{ state, dispatch }}>
      {children}
    </DestinationContext.Provider>
  );
};
