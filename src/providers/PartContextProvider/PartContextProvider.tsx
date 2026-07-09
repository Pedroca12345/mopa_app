import { useState } from "react"
import { PartContext } from "../../contexts/PartContext"
import { initialState } from "../../contexts/PartContext"

type PartContextProviderProps = {
  children: React.ReactNode;
}

export function PartContextProvider({ children }: PartContextProviderProps) {

  const [part, setPart] = useState(initialState);

  return (
    <PartContext.Provider value={{part, setPart}}>
      {children}
    </PartContext.Provider>
  )
}