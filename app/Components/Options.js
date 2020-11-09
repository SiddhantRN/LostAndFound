import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

function Options({
  iconBackground,
  iconColor,
  iconName,
  onPress,
  option,
  optionColor,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={[styles.iconContainer, { backgroundColor: iconBackground }]}
          >
            <MaterialCommunityIcons
              name={iconName}
              size={26}
              color={iconColor}
            />
          </View>

          <Text style={[styles.optionName, { color: iconColor }]}>
            {option}
          </Text>
        </View>
        <Entypo name="chevron-right" size={26} color={iconColor} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    height: screenHeight * 0.08,
    width: screenWidth * 0.95,
  },
  iconContainer: {
    height: screenHeight * 0.06,
    width: screenHeight * 0.06,
    borderRadius: 5,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  optionName: {
    fontSize: screenHeight * 0.028,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default Options;
