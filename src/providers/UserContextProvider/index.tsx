import { useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import type { UserModel } from "../../models/UserModel";

type UserContextProviderProps = {
  children: React.ReactNode;
}

const initialState: UserModel = {
  password: "",
  username: ""
}

export function UserContextProvider({ children }: UserContextProviderProps) {

  const[user, setUser] = useState(initialState);

  return(
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}