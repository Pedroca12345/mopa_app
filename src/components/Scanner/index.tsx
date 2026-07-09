import { Modal, View, StyleSheet } from "react-native"
import { DefaultButton } from "../DefaultButton"
import { CameraView } from "expo-camera"
import { usePartContext } from "../../contexts/PartContext/usePartContext";
import { SetStateAction, useRef } from "react";
import { usePartModalContext } from "../../contexts/PartModalContext/usePartModalContext";
import { PartModel } from "../../models/PartModel";
import { storage } from "../../appStorage/appStorage";

import axios from "axios";


type ScannerProps = {
  visible: boolean;
  setVisible: React.Dispatch<SetStateAction<boolean>>;
}

export function Scanner({ visible, setVisible }: ScannerProps) {

  const { part, setPart } = usePartContext();
  const { setPartInfoVisibility } = usePartModalContext();
  
  const codeLock = useRef(false);

  function handleScanner(data: string) {
    if (data && !codeLock.current) {
      codeLock.current = true;
      handleCodeScan(data);
    }
  }

  async function handleCodeScan(data: string) {
    const partBody: PartModel = {
      partcode: data,
    }

    const token = await storage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    }


    const response = await axios.get<PartModel>(
      "https://mopa-backend.onrender.com/part",
      {
        headers: headers,
        params: partBody
      }
    );

    setPart({
      ...part,
      ...response.data
    });

    setVisible(false);
    setPartInfoVisibility(true);
    codeLock.current = false;
  }

  return (
    <Modal visible={visible} style={styles.cameraModal}>
      <CameraView
        style={styles.cameraModal}
        facing="back"
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "code128"]
        }}
        onBarcodeScanned={({ data }) => handleScanner(data)}
      />
      <View style={styles.modalButton}>
        <DefaultButton buttonText="SAIR" onPress={() => setVisible(false)} />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  cameraModal: {
    flex: 1,
  },
  modalButton: {
    position: "absolute",
    bottom: 30,
    left: 30,
    right: 30
  }
})