import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, TextInput, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

function AppTextInput({
  width,
  placeholder,
  height,
  iconName,
  top,
  ...otherProps
}) {
  return (
    <View style={[styles.container, { width: width, marginTop: top }]}>
      {iconName && (
        <MaterialCommunityIcons name={iconName} size={24} color="#c4c4c4" />
      )}

      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#9e9e9e"}
        style={[styles.input, { height: height }]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#c4c4c4",
    borderBottomWidth: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "100%",

    textAlignVertical: "top",
    paddingLeft: 10,
  },
});

export default AppTextInput;
