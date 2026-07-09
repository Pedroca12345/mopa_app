import { useState } from "react";
import { PartModalContext } from "../../contexts/PartModalContext";

type PartModalContextProviderProps = {
  children: React.ReactNode;
}

export function PartModalContextProvider({ children }: PartModalContextProviderProps) {
  const [partInfoVisibility, setPartInfoVisibility] = useState(false);

  return(
    <PartModalContext.Provider value={{ partInfoVisibility, setPartInfoVisibility }}>
      {children}
    </PartModalContext.Provider>
  )
}