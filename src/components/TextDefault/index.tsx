import { Text, StyleSheet } from "react-native";
import { Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';

type TextDefaultProps = {
  text: string,
  fontType: "defaultFont" | "boldFont"
}

export function TextDefault ({ text, fontType }: TextDefaultProps) {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text style={styles[fontType]}>
      {text}
    </Text>
  )
}

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16
  },
  boldFont: {
    fontFamily: "Poppins_700Bold",
    fontSize: 16
  }
})