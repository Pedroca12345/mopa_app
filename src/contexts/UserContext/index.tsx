import { createContext, type SetStateAction } from "react";
import type { UserModel } from "../../models/UserModel";

export type UserContextProps = {
  user: UserModel;
  setUser: React.Dispatch<SetStateAction<UserModel>>;
}

export const initialState: UserModel = {
  password: "",
  username: "",
  token: "",
}

export const UserContext = createContext<UserContextProps>({
  user: initialState,
  setUser: () => { }
})