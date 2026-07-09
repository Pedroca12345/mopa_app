import { createContext, SetStateAction } from "react";

type PartModalContextProps = {
  partInfoVisibility: boolean;
  setPartInfoVisibility: React.Dispatch<SetStateAction<boolean>>
}

export const PartModalContext = createContext<PartModalContextProps>({
  partInfoVisibility: false,
  setPartInfoVisibility: () => {}
})