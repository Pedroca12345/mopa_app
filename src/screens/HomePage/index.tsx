import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { storage } from "../../appStorage/appStorage";
import { DefaultButton } from "../../components/DefaultButton";
import { PartModal } from "../../components/PartModal";
import { Scanner } from "../../components/Scanner";
import { useCameraPermissions } from "expo-camera";

import axios from "axios";
import { PartModalContextProvider } from "../../providers/PartModalContextProvider";

export function HomePage() {

  const navigation = useNavigation();

  const [scannerVisibility, setScannerVisibility] = useState(false);

  async function fetchAPI() {
    const token = await storage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }

    try {
      await axios.get("https://mopa-backend.onrender.com/home", headers);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        await storage.removeItem("token");
        navigation.navigate("Login");
      }
    }
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  const [permission, requestPermission] = useCameraPermissions();

  function openCamera() {
    try {
      if (!permission) {
        requestPermission();
      }
      setScannerVisibility(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <DefaultButton buttonText="LER CÓDIGO DA PEÇA" onPress={openCamera} />
      <PartModalContextProvider>
        <Scanner visible={scannerVisibility} setVisible={setScannerVisibility}/>
        <PartModal />
      </PartModalContextProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  button: {
    backgroundColor: "#ffde22",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 20,
  },
});