import React, { useState } from "react";
import Constants from "expo-constants";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import FoundItems from "./FoundItems";
import LostItems from "./LostItems";
import colors from "../config/colors";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const initialLayout = { width: screenWidth };

function HomeScreen({ navigation }) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Lost" },
    { key: "second", title: "Found" },
  ]);

  const renderScene = SceneMap({
    first: () => <LostItems />,
    second: () => <FoundItems />,
  });
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      labelStyle={{ color: "#000", fontWeight: "bold" }}
      indicatorStyle={{ backgroundColor: colors.primary }}
      style={{ backgroundColor: "#fff" }}
    />
  );
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <TouchableWithoutFeedback>
          <View style={styles.citySelect}>
            <Text style={{ fontSize: 15, color: "#757575", flex: 1 }}>
              City
            </Text>
            <Entypo name="chevron-down" size={24} color="#757575" />
          </View>
        </TouchableWithoutFeedback>
        <TouchableOpacity
          delayPressIn={0}
          onPress={() => navigation.navigate("AccountScreen")}
        >
          <MaterialCommunityIcons name="account" size={28} color="#757575" />
        </TouchableOpacity>
      </View>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        style={{ backgroundColor: colors.primary }}
        initialLayout={initialLayout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  citySelect: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    height: screenHeight * 0.05,
    width: screenWidth * 0.75,
    backgroundColor: "#eeeeee",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#9e9e9e",
  },
  upper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: screenHeight * 0.1,
    width: "100%",
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
