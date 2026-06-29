import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginPage } from "../../screens/LoginPage";
import { HomePage } from "../../screens/HomePage";
import { createStaticNavigation } from "@react-navigation/native";

const RootStack = createNativeStackNavigator({
  initialRouteName: "Login",
  screens: {
    Login: LoginPage,
    Home: HomePage,    
  },
  screenOptions: {
    headerShown: false,
  },
});

type RootStackType = typeof RootStack;

declare module '@react-navigation/native' {
  interface RootNavigator extends RootStackType {}
}

export const Navigation = createStaticNavigation(RootStack);
