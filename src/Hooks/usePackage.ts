import { useContext } from "react";
import { PackageContext } from "../Context/packageDimContext";

export function usePackage() {
  const packageContext = useContext(PackageContext);
  if (!packageContext)
    throw new Error("Must be used inside DestinationProvider");

  return packageContext;
}