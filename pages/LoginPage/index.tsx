import { ScrollView, StyleSheet, Platform } from "react-native";
import { Logo } from "../../components/Logo";
import { Login } from "../../components/Login";
import { KeyboardAvoidingView } from "react-native";

export function LoginPage() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Logo />
        <Login />
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
  }
});