import { StyleSheet, TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

type DefaultButtonProps = {
  buttonText: string;
} & TouchableOpacityProps;

export function DefaultButton({ buttonText, ...rest }: DefaultButtonProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
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