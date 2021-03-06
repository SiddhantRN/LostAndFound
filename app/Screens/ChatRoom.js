import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function renderBubble(props) {
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        left: {
          backgroundColor: colors.secondary,
        },
        right: {
          backgroundColor: colors.primary,
        },
      }}
      textStyle={{
        left: {
          fontWeight: "bold",
          color: "#757575",
        },
        right: {
          fontWeight: "bold",
          color: "#fff",
        },
      }}
    />
  );
}

function renderSend(props) {
  return (
    <Send {...props}>
      <View style={styles.sendingContainer}>
        <MaterialCommunityIcons name="send" size={32} color={colors.primary} />
      </View>
    </Send>
  );
}

function ChatRoom({ route }) {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: route.params.user.message,
      createdAt: new Date(),
      user: {
        _id: 2,
        name: route.params.user.sellerName,
        avatar: route.params.user.image,
      },
    },
  ]);

  function handleSend() {
    alert("Connecting to backend will provide full messaging functionality :)");
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={() => handleSend()}
      user={{ _id: 1 }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
    />
  );
}
const styles = StyleSheet.create({
  sendingContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
});

export default ChatRoom;
