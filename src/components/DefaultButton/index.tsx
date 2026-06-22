import { StyleSheet, TouchableOpacity, Text } from "react-native";

type DefaultButtonProps = {
  buttonText: string;
}

export function DefaultButton({ buttonText }: DefaultButtonProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7}>
      <Text>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ffde22",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 20,
  }
});