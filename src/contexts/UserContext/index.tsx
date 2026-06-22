import { createContext, type SetStateAction } from "react";
import type { UserModel } from "../../models/UserModel";

export type UserContextProps = {
  user: UserModel;
  setUser: React.Dispatch<SetStateAction<UserModel>>;
}

const initialState: UserModel = {
  password: "",
  username: ""
}

export const UserContext = createContext<UserContextProps>({
  user: initialState,
  setUser: () => { }
})