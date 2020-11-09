// latest version
import React from "react";
import Constants from "expo-constants";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AccountScreen from "./app/Screens/AccountScreen";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,

    marginTop: Constants.statusBarHeight,
  },
});
