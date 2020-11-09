import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { Modalize } from "react-native-modalize";
import { SliderBox } from "react-native-image-slider-box";
// import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";

const images = [
  "https://res.cloudinary.com/dy71m2dro/image/upload/v1602770259/lost%20and%20found%20/s-l1600_ytmidd.jpg",
  "https://res.cloudinary.com/dy71m2dro/image/upload/v1602770251/lost%20and%20found%20/s-l640_hxwv50.jpg",
];

const deviceHeight = Dimensions.get("window").height;
function ItemDetailScreen({ navigation }) {
  const modalizeRef = React.createRef();
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ position: "absolute", left: 8 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="md-arrow-round-back" size={26} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: deviceHeight * 0.03, fontWeight: "bold" }}>
          Item Details
        </Text>
      </View>
      <View>
        <SliderBox
          images={images}
          sliderBoxHeight={deviceHeight * 0.53}
          dotColor={colors.primary}
          inactiveDotColor="#90A4AE"
          dotStyle={styles.dots}
          paginationBoxStyle={{
            bottom: 10,
          }}
          resizeMode={"cover"}
        />
      </View>
      <Modalize
        ref={modalizeRef}
        onClose={() => modalizeRef.current?.scrollTo(0)}
        alwaysOpen={
          Platform.OS === "ios"
            ? deviceHeight * 0.4 - Constants.statusBarHeight
            : deviceHeight * 0.4
        }
        modalStyle={{ backgroundColor: "#fff" }}
        modalHeight={deviceHeight * 0.7}
        disableScrollIfPossible
      >
        <View style={{ padding: 7 }}>
          <View style={styles.titleBox}>
            <Text style={styles.title} numberOfLines={1}>
              Fossil watch Black
            </Text>
            <View style={styles.status}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Found</Text>
            </View>
          </View>
          <Text style={styles.reward}>
            <Text style={styles.field}>Reward : </Text> 20 $
          </Text>
          <View style={styles.ownerBox}>
            <Text style={styles.ownerName} numberOfLines={1}>
              <Text style={styles.field}>Owner : </Text> Rohit Saxena
            </Text>

            <TouchableOpacity
              onPress={() => {}}
              delayPressIn={0}
              style={styles.button}
            >
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

          <Text style={styles.address}>
            <Text style={styles.field}>Address: </Text>Near Chetak bridge, Mp
            nagar, Bhopal{" "}
          </Text>

          <View style={styles.detailsBox}></View>
          <Text style={styles.details}>
            <Text style={styles.field}>Details: </Text>
            Xbox Series X and Series S are upcoming home video game consoles
            developed by Microsoft. They are both scheduled to be released on
            November 10, 2020 as the fourth generation. n Xbox Series X, enjoy
            4K resolution at 60 FPS in campaign and greatly reduced load times
            creating seamless gameplay that ushers in the next generation of
            gaming. Explore the epic expanse of a Halo ring for the first time
            in the most ambitious Halo game ever made.With Smart Delivery, you
            can buy a supported game once and always have the best available
            version for whatever console you play on.
          </Text>
        </View>
      </Modalize>
    </>
  );
}

const styles = StyleSheet.create({
  address: {
    marginTop: "4%",
    fontSize: 18,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  container: { flex: 1, top: Constants.statusBarHeight },
  details: {
    fontSize: deviceHeight * 0.025,
    marginTop: "2%",
    textAlign: "justify",
  },
  dots: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginHorizontal: 3,
    padding: 0,
    margin: 0,
  },
  detailsBox: {
    height: 1,
    width: "100%",
    alignSelf: "center",
    marginTop: "3%",
    backgroundColor: "#c4c4c4",
  },
  field: {
    fontSize: deviceHeight * 0.023,
    fontWeight: "bold",
    color: "#757575",
  },
  header: {
    width: "100%",
    height: deviceHeight * 0.07,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
  },
  ownerBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "3%",
  },
  ownerName: {
    fontWeight: "bold",
    fontSize: deviceHeight * 0.022,
    width: "70%",
  },
  reward: {
    fontSize: deviceHeight * 0.03,
    fontWeight: "bold",
    marginTop: "3%",
  },
  status: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {
    fontSize: deviceHeight * 0.035,
    fontWeight: "bold",
    width: "65%",
  },
  titleBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default ItemDetailScreen;
