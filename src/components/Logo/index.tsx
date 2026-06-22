import { View, Text, StyleSheet } from "react-native";

export function Logo() {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <View style={styles.textView}>
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontSize: 40,
          }}
        >
          M.O.P.A
        </Text>
      </View>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40
  },
  line: {
    width: 300,
    height: 1,
    backgroundColor: "#b3b3b3"
  },
  textView: {
    marginHorizontal: 10,
  }
})