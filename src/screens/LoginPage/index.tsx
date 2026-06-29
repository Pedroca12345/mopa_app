import { ScrollView, StyleSheet, Platform, KeyboardAvoidingView, Alert, View, ActivityIndicator } from "react-native";
import { Logo } from "../../components/Logo";
import { Login } from "../../components/Login";
import { DefaultButton } from "../../components/DefaultButton";
import { useUserContext } from "../../contexts/UserContext/useUserContext";
import { useNavigation } from "@react-navigation/native";
import { UserModel } from "../../models/UserModel";
import { storage } from "../../appStorage/appStorage";
import { useEffect, useState } from "react";

import axios from "axios";


export function LoginPage() {

  const { user } = useUserContext();
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(true);

  async function checkToken() {
    const token = await storage.getItem("token");

    if(token) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }]
      });
      return;
    }

    setIsLoading(false);
  }

  useEffect(() => {
    checkToken();
  }, [])

  async function handlePress() {
    const userBody: UserModel = {
      username: user.username,
      password: user.password,
      token: ""
    }

    try {
      const response = await axios.post<UserModel>("https://mopa-backend.onrender.com/login", userBody);
      const token = response.data.token;

      if (response.status === 200) {
        await storage.setItem("token", token);
        navigation.navigate("Home");
      }

      
    } catch (e) {
      Alert.alert("Erro", `${e}`);
    }
  }

  if(isLoading) {
    return (
      <View style={styles.loadingView}>
        <ActivityIndicator size={"large"}/>
      </View>
    )
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Logo />
        <Login />
        <DefaultButton buttonText="Entrar" onPress={handlePress} />
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
  loadingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});