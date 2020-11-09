import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import { MaterialIcons } from "@expo/vector-icons";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

function Item({ item, lost }) {
  return (
    <View style={styles.container}>
      {item.reward && (
        <View
          style={{
            flexDirection: "row",

            alignItems: "center",
            position: "absolute",
            top: 0,
            right: 5,
            zIndex: 1,
          }}
        >
          <Image
            source={require("../assets/reward.png")}
            style={styles.reward}
            resizeMode={"contain"}
          />
          <Text style={{ fontSize: screenHeight * 0.025, fontWeight: "bold" }}>
            {item.reward}
          </Text>
        </View>
      )}
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.image}
        resizeMode={"contain"}
      />
      <View style={styles.innerBox}>
        <Text style={styles.heading} numberOfLines={2}>
          {item.title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 16 }}>
              {lost ? "Owner :" : "Found by :"}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {item.owner}
            </Text>
          </View>
          <TouchableOpacity style={styles.button} delayPressIn={0}>
            {/* <MaterialIcons name="chat-bubble" size={24} color="#fff" /> */}
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Message
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.adddress} numberOfLines={2}>
          <Text style={{ fontWeight: "bold" }}>
            {lost ? "Lost Location :" : "Found on Location :"}
          </Text>
          {"\n"}
          {item.address}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  adddress: {
    fontSize: 16,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  container: {
    height: screenHeight * 0.2,
    width: screenWidth * 0.95,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: "#fff",
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  heading: {
    fontWeight: "bold",
    fontSize: screenHeight * 0.025,
    width: screenWidth * 0.45,
  },
  image: {
    height: screenHeight * 0.16,
    width: screenHeight * 0.16,
    borderRadius: 10,
  },
  innerBox: {
    flex: 1,
    height: screenHeight * 0.18,
    marginLeft: 5,
    justifyContent: "space-between",
  },
  reward: {
    height: screenHeight * 0.05,
    width: screenHeight * 0.05,
  },
  user: {
    fontSize: 16,
  },
});

export default Item;
