import { useContext } from "react";
import { PartModalContext } from ".";

export function usePartModalContext() {
  return useContext(PartModalContext);
}