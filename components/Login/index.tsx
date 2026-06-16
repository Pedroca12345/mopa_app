import { View } from "react-native";
import { Input } from "../Input";

export function Login() {
  return (
    <View
      style={{
        gap: 20,
      }}
    >
      <Input label="Nome de usuário:" inputType="text"/>
      <Input label="Senha:" inputType="password"/>
    </View>
  );
}