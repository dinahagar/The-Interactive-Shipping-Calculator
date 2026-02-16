import { createContext, ReactNode, useReducer } from "react";
import { destinationSlice } from "../Store/Reducers/destinationSlice";
import { Action } from "@reduxjs/toolkit";
import { DestinationState } from "../Types/destinationTypes";

type DestinationContextType = {
  destinationState: DestinationState;
  dispatch: React.Dispatch<Action>;
};

export const DestinationContext = createContext<
  DestinationContextType | undefined
>(undefined);

export const DestinationProvider = ({ children }: { children: ReactNode }) => {
  const [destinationState, dispatch] = useReducer(
    destinationSlice.reducer,
    destinationSlice.getInitialState(),
  );

  return (
    <DestinationContext.Provider value={{ destinationState, dispatch }}>
      {children}
    </DestinationContext.Provider>
  );
};
