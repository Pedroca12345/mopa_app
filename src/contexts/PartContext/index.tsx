import { createContext, SetStateAction } from "react";
import { PartModel } from "../../models/PartModel";

export type PartContextProps = {
  part: PartModel;
  setPart: React.Dispatch<SetStateAction<PartModel>>;
}

export const initialState: PartModel = {
  partcode: "",
  description: "",
  location: "",
  quantity: 0, 
}

export const PartContext = createContext<PartContextProps>({
  part: initialState,
  setPart: () => {}
})
