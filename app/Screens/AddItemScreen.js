import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import Constants from "expo-constants";

import CheckBox from "../Components/CheckBox";
import colors from "../config/colors";
import AddLostItem from "./AddLostItem";
import AddFoundItem from "./AddFoundItem";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

function AddItemScreen(props) {
  const [lost, setLost] = useState(true);
  const [keyboard, setKeyboard] = useState(false);

  return (
    <View style={styles.container}>
      {!keyboard && (
        <View style={styles.options}>
          <View style={{ flexDirection: "row" }}>
            <CheckBox
              active={lost ? true : false}
              setLost={setLost}
              setValue={true}
            />
            <Text style={styles.option}>Item Lost</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <CheckBox
              active={lost ? false : true}
              setLost={setLost}
              setValue={false}
            />
            <Text style={styles.option}>Item Found</Text>
          </View>
        </View>
      )}

      {lost ? (
        <AddLostItem keyboard={keyboard} setKeyboard={setKeyboard} />
      ) : (
        <AddFoundItem keyboard={keyboard} setKeyboard={setKeyboard} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    zIndex: 1,
    right: 10,
    bottom: 10,
    justifyContent: "center",
    alignItems: "center",
    height: screenHeight * 0.08,
    width: screenWidth * 0.2,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
  },
  form: {
    flex: 1,
  },
  field1: {
    width: "95%",
    height: screenHeight * 0.06,
    borderColor: "#c4c4c4",
    borderBottomWidth: 2,
  },
  field2: {
    width: "95%",
    textAlignVertical: "top",
    height: screenHeight * 0.1,
    borderColor: "#c4c4c4",
    borderBottomWidth: 2,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: "2%",
  },
  option: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  options: {
    width: screenWidth * 0.85,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "5%",

    marginBottom: "7%",
  },
});

export default AddItemScreen;
