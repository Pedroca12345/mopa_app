import { useState } from "react";
import { UserContext } from "../../contexts/UserContext";

import { initialState } from "../../contexts/UserContext/";

type UserContextProviderProps = {
  children: React.ReactNode;
}


export function UserContextProvider({ children }: UserContextProviderProps) {

  const[user, setUser] = useState(initialState);

  return(
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}