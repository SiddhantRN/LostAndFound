import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";
import Options from "../Components/Options";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

function AccountScreen({ navigation: { goBack } }) {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <View style={styles.header}>
          <TouchableOpacity delayPressIn={0} onPress={() => goBack()}>
            <Ionicons name="md-arrow-round-back" size={26} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.heading}>Account</Text>
          <Text style={styles.edit}>Edit</Text>
        </View>
      </View>
      <View style={styles.nameBox}>
        <Image
          source={{
            uri:
              "https://res.cloudinary.com/dy71m2dro/image/upload/v1601154655/FirstClient/user1_oq1dy5.png",
          }}
          style={styles.dp}
          resizeMode={"cover"}
        />
        <View style={styles.innerBox}>
          <Text style={styles.name}>Siddhant Shrivastava</Text>
          <View>
            <Text style={{ fontSize: 16 }}>Contact Info:</Text>
            <Text
              style={{ fontSize: 15, fontWeight: "bold", paddingTop: 5 }}
              numberOfLines={1}
            >
              siddhantshrivastava19@gmail.com
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#333333",
                paddingTop: 5,
              }}
            >
              9425604709
            </Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: screenHeight * 0.15 }} />
      <Options
        option={"Items Lost"}
        iconBackground={"#e0e0e0"}
        iconName={"emoticon-sad"}
        iconColor={"#000"}
      />
      <Options
        option={"Items Found"}
        iconBackground={"#e0e0e0"}
        iconName={"emoticon-happy"}
        iconColor={"#000"}
      />
      <Options
        option={"Settings"}
        iconBackground={"#e0e0e0"}
        iconName={"settings"}
        iconColor={"#000"}
      />
      <View style={styles.logout}>
        <Options
          option={"Logout"}
          iconBackground={"#FFAB91"}
          iconName={"logout"}
          iconColor={"#D84315"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
  },
  dp: {
    height: screenHeight * 0.15,
    width: screenHeight * 0.15,
    borderRadius: screenHeight * 0.075,
  },
  edit: {
    fontSize: screenHeight * 0.025,
    color: "#fff",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
    width: "95%",
    marginTop: "2%",
    alignSelf: "center",
  },
  heading: {
    fontSize: screenHeight * 0.03,
    color: "#fff",
    fontWeight: "bold",
  },
  innerBox: {
    flex: 1,
    paddingLeft: 5,
    justifyContent: "space-between",
    height: screenHeight * 0.15,
  },
  logout: {
    position: "absolute",
    bottom: 10,
  },
  name: {
    fontSize: screenHeight * 0.028,
    fontWeight: "bold",
  },
  nameBox: {
    position: "absolute",
    zIndex: 1,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    height: screenHeight * 0.2,
    width: "95%",
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 10,
    top: screenHeight * 0.1,
    elevation: 5,
  },
  upper: {
    height: screenHeight * 0.2,
    width: "100%",
    backgroundColor: colors.primary,
  },
});

export default AccountScreen;
