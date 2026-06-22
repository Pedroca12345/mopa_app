import { useContext } from "react";
import { UserContext } from ".";

export function useUserContext () {
  return useContext(UserContext);
}