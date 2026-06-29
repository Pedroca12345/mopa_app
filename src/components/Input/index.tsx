import { View, TextInput, StyleSheet } from "react-native";
import { TextDefault } from "../TextDefault";
import { type LucideIcon } from "lucide-react-native";

import { useState } from "react";
import { useUserContext } from "../../contexts/UserContext/useUserContext";

type InputProps = {
  label: string;
  inputType: "username" | "password";
  Icon: LucideIcon;
  inputPlaceholder: string;
}

export function Input({ label, inputType, Icon, inputPlaceholder }: InputProps) {

  const [focusColor, setFocusColor] = useState("#b4b4b4");

  const {user, setUser} = useUserContext();

  function handleChange(text: string) {
    setUser({
      ...user,
      [inputType]: text
    });
  }

  const styles = StyleSheet.create({
    container: {
      gap: 5,
    },
    inputBox: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderRadius: 10,
      borderColor: focusColor,
    },
    iconView: {
      marginHorizontal: 5,
    },
    inputView: {
      flex: 1,
    }
  });

  return (
    <View
      style={styles.container}
    >
      <TextDefault fontType="defaultFont" text={label} />
      <View
        style={styles.inputBox}
      >
        <View style={styles.iconView}>
          <Icon size={18} color={focusColor}  />
        </View>
        <View style={styles.inputView}>
          <TextInput
            onFocus={() => { setFocusColor("#ffde22") }}
            onBlur={() => { setFocusColor("#b4b4b4") }}
            secureTextEntry={inputType === "password" ? true : false}
            placeholder={inputPlaceholder}
            value={user[inputType]}
            onChangeText={handleChange}
          />
        </View>
      </View>
    </View>
  );
}