import { useContext } from "react";
import { OriginContext } from "../Context/originContext";

export function useOrigin() {
  const originContext = useContext(OriginContext);
  if (!originContext) throw new Error("Must be used inside OriginProvider");

  return originContext;
}
