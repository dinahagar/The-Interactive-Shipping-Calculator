import { createContext, ReactNode, useReducer } from "react";
import { Action } from "@reduxjs/toolkit";
import { courierSlice } from "../Store/Reducers/courierSlice";
import { CourierState } from "../Types/courierTypes";

type CourierContextType = {
  courierState: CourierState;
  dispatchCourier: React.Dispatch<Action>;
};

export const CourierContext = createContext<
  CourierContextType | undefined
>(undefined);

export const CourierProvider = ({ children }: { children: ReactNode }) => {
  const [courierState, dispatchCourier] = useReducer(
    courierSlice.reducer,
    courierSlice.getInitialState(),
  );

  return (
    <CourierContext.Provider value={{ courierState, dispatchCourier }}>
      {children}
    </CourierContext.Provider>
  );
};
