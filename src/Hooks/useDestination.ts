import { useContext } from "react";
import { DestinationContext } from "../Context/destinationContext";

export function useDestination() {
  const destinationContext = useContext(DestinationContext);
  if (!destinationContext)
    throw new Error("Must be used inside DestinationProvider");

  return destinationContext;
}