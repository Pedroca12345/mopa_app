import { useContext } from "react";
import { PartContext } from ".";

export function usePartContext() {
  return useContext(PartContext);
}