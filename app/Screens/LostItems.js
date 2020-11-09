import React from "react";
import Constants from "expo-constants";
import { View, StyleSheet, Text, FlatList } from "react-native";
import Item from "../Components/Item";

const items = [
  {
    id: 1,
    title: "Fossil watch Black",
    image:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1602770251/lost%20and%20found%20/s-l640_hxwv50.jpg",
    address: "Near Chetak bridge,Mp nagar",
    owner: "Razor Saxena",
    reward: "20$",
  },
  {
    id: 2,
    title: "Ford car keys",
    image:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1602770248/lost%20and%20found%20/Car_Key_Fob_Battery_Replacement_gkwlvj.jpg",
    address: "Near stadium,New Market,Bhopal",
    owner: "Shishir Mehto",
    reward: "5$",
  },
  {
    id: 3,
    title: "Wallet",
    image:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1602770259/lost%20and%20found%20/s-l1600_ytmidd.jpg",
    address: "Arera Colony Bhopal",
    owner: "Marcos Prasad",
  },
];

function LostItems() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Item item={item} lost />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
  },
});

export default LostItems;
