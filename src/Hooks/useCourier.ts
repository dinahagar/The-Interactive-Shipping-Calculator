import { useContext } from "react";
import { CourierContext } from "../Context/courierContext";

export function useCourier() {
  const courierContext = useContext(CourierContext);
  if (!courierContext)
    throw new Error("Must be used inside DestinationProvider");

  return courierContext;
}