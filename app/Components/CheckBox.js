import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function CheckBox({ active, setLost, setValue }) {
  return (
    <TouchableOpacity delayPressIn={0} onPress={() => setLost(setValue)}>
      <View style={styles.container}>
        {active && <View style={styles.dot}></View>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
  },
  dot: {
    height: 20,
    width: 20,
    borderRadius: 10,

    backgroundColor: colors.primary,
  },
});

export default CheckBox;
