import { createContext, ReactNode, useReducer } from "react";
import { Action } from "@reduxjs/toolkit";
import { courierSlice, CourierState } from "../Store/Reducers/courierSlice";

type CourierContextType = {
  state: CourierState;
  dispatch: React.Dispatch<Action>;
};

export const CourierContext = createContext<
  CourierContextType | undefined
>(undefined);

export const CourierProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(
    courierSlice.reducer,
    courierSlice.getInitialState(),
  );

  return (
    <CourierContext.Provider value={{ state, dispatch }}>
      {children}
    </CourierContext.Provider>
  );
};
