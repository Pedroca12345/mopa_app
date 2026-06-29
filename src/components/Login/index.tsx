import { View } from "react-native";
import { Input } from "../Input";
import { Lock, User } from "lucide-react-native";

export function Login() {
  return (
    <View
      style={{
        gap: 20,
      }}
    >
      <Input inputPlaceholder="Digite seu nome de usuário" Icon={User} label="Nome de usuário:" inputType="username"/>
      <Input inputPlaceholder="Digite sua senha" Icon={Lock} label="Senha:" inputType="password"/>
    </View>
  );
}