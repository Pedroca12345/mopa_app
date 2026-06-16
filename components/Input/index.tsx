import { View, TextInput } from "react-native";
import { TextDefault } from "../TextDefault";

import { useState } from "react";

type InputProps = {
  label: string;
  inputType: "text" | "password";
}

export function Input({ label, inputType }: InputProps) {

  const [focusColor, setFocusColor] = useState("#b4b4b4")

  return (
    <View
      style={{
        gap: 3
      }}
    >
      <TextDefault fontType="defaultFont" text={label} />
      <TextInput
        style={{
          borderWidth: 1,
          borderRadius: 10,
          padding: 10,
          borderColor: focusColor,
        }}
        onFocus={() => { setFocusColor("#ffde22") }}
        onBlur={() => { setFocusColor("#b4b4b4") }}
        secureTextEntry={ inputType === "password" ? true : false }
      />
    </View>
  );
}