import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import MessagesScreen from "../Screens/MessagesScreen";
import ChatRoom from "../Screens/ChatRoom";

const Stack = createStackNavigator();

function MessageStack() {
  return (
    <Stack.Navigator
      initialRouteName={MessagesScreen}
      screenOptions={{
        gestureDirection: "horizontal",

        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="MessageScreen"
        component={MessagesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={({ route }) => ({
          title: route.params.user.sellerName,
        })}
      />
    </Stack.Navigator>
  );
}

export default MessageStack;
