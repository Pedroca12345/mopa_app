import { useEffect } from "react";
import { ScrollView, StyleSheet, Platform, KeyboardAvoidingView, Alert } from "react-native";
import { Logo } from "../../components/Logo";
import { useNavigation } from "@react-navigation/native";
import { storage } from "../../appStorage/appStorage";

import axios from "axios";

export function HomePage() {

  const navigation = useNavigation();

  async function fetchAPI() {
    const token = await storage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }

    try {
      await axios.get("https://mopa-backend.onrender.com/home", headers);
    } catch(error) {
      if(axios.isAxiosError(error) && error.response?.status === 401) {
        await storage.removeItem("token");
        navigation.navigate("Login");
      }
    }
  }

  useEffect(() => {
    fetchAPI();
  }, [])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Logo />
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