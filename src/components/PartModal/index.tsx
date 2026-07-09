import { Modal, StyleSheet, View, Text } from "react-native"
import { DefaultButton } from "../DefaultButton"
import { usePartContext } from "../../contexts/PartContext/usePartContext";
import { usePartModalContext } from "../../contexts/PartModalContext/usePartModalContext";

export function PartModal() {

  const { part } = usePartContext();

  const { partInfoVisibility, setPartInfoVisibility } = usePartModalContext();

  return (
    <Modal
      visible={partInfoVisibility}
      transparent={true}
    >
      <View style={styles.partModalContainer}>
        <View style={styles.partModal}>

          <View style={styles.partInfo}>
            <Text>
              Código: <Text style={styles.partText}>{part.partcode}</Text>
            </Text>
          </View>

          <View style={styles.partInfo}>
            <Text>
              Descrição: <Text style={styles.partText}>{part.description}</Text>
            </Text>
          </View>

          <View style={styles.partInfo}>
            <Text>
              Quantidade: <Text style={styles.partText}>{part.quantity}</Text>
            </Text>
          </View>

          <View style={styles.okButton}>
            <DefaultButton buttonText="OK" onPress={() => setPartInfoVisibility(false)} style={styles.partModalButton} />
          </View>

        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  partModal: {
    width: 300,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  partModalButton: {
    alignItems: "center",
    backgroundColor: "#ffde22",
    borderRadius: 10,
    padding: 10,
    width: 100,
  },
  okButton: {
    alignItems: "center",
    marginTop: 10
  },
  partInfo: {
    marginVertical: 10,
  },
  partText: {
    fontWeight: "bold",
  },
  partModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
})