import React from "react";
import Constants from "expo-constants";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.upperBox}>
        <Image
          source={require("../assets/appIcon.png")}
          resizeMode={"contain"}
          style={styles.logo}
        />
      </View>

      <View style={styles.lowerBox}>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <View
            style={{
              height: "50%",
              width: "100%",

              justifyContent: "center",
            }}
          >
            <Text style={styles.heading}>Welcome</Text>
            <Text style={styles.message}>Report anything you found or</Text>
            <Text style={styles.message}>anything you might have lost</Text>
          </View>
          <View
            style={{
              height: "50%",
              width: "100%",
              paddingBottom: 5,
              justifyContent: "flex-end",
            }}
          >
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {}}
              delayPressIn={0}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: screenHeight * 0.028,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => {}}
              delayPressIn={0}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: screenHeight * 0.028,
                }}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {},
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: "center",
  },
  heading: {
    fontSize: screenHeight * 0.04,
    fontWeight: "bold",
    marginBottom: "3%",
  },
  logo: {
    marginTop: screenHeight * 0.1,
    height: screenHeight * 0.25,
    width: screenHeight * 0.25,
  },
  lowerBox: {
    height: screenHeight * 0.5,
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderTopRightRadius: screenHeight * 0.035,
    borderTopLeftRadius: screenHeight * 0.035,
  },
  loginButton: {
    height: screenHeight * 0.08,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: "black",
  },
  registerButton: {
    height: screenHeight * 0.08,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: "white",
  },
  message: {
    fontWeight: "bold",
    fontSize: screenHeight * 0.028,
  },
  upperBox: {
    height: screenHeight * 0.5,
    width: "100%",
    alignItems: "center",
  },
});

export default WelcomeScreen;
