import { ScrollView, StyleSheet, Platform, TouchableOpacity, Text, KeyboardAvoidingView } from "react-native";
import { Logo } from "../../components/Logo";
import { Login } from "../../components/Login";
import { DefaultButton } from "../../components/DefaultButton";

export function LoginPage() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Logo />
        <Login />
        <DefaultButton buttonText="Entrar" />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
  },
  scrollContent: {
    flex: 1,
    justifyContent: "center"
  },
  
});