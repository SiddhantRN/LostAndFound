import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

import AddItemScreen from "../Screens/AddItemScreen";
import colors from "../config/colors";
import HomeStack from "./HomeStack";
import MessageStack from "./MessageStack";

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : "";

    if (routeName === "ChatRoom") {
      return false;
    } else if (routeName === "AccountScreen") {
      return false;
    } else if (routeName === "EditProfile") {
      return false;
    }

    return true;
  };
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        keyboardHidesTabBar: true,
        style: {
          backgroundColor: "#eeeeee",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={26}
              color={focused ? colors.primary : "#9e9e9e"}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Add Item"
        component={AddItemScreen}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="add-box"
              size={26}
              color={focused ? colors.primary : "#9e9e9e"}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Message"
        component={MessageStack}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="chat-bubble"
              size={25}
              color={focused ? colors.primary : "#9e9e9e"}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
