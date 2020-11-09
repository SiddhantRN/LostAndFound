import React, { useState } from "react";

import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import * as Location from "expo-location";

import useLocation from "../hooks/useLocation";
import ImageList from "../Components/ImagePicker";
import colors from "../config/colors";
import useKeyboard from "../hooks/useKeyboard";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

function AddLostItem({ keyboard, setKeyboard }) {
  const location = useLocation();
  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(10).label("title"),
    reward: Yup.number().label("reward"),
    description: Yup.string().required().max(100).label("description"),
  });
  const [images, setImages] = useState([]);
  const [address, setAddress] = useState();
  useKeyboard(setKeyboard);

  const handleSubmit = (values) => {
    alert("done");
  };
  const locFunction = async () => {
    const [place] = await Location.reverseGeocodeAsync(location);
    setAddress(place.district + " , " + place.city + " , " + place.country);
    console.log(place);
  };
  return (
    <Formik
      initialValues={{ title: "", reward: "", description: "", address: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
      }) => (
        <View style={styles.form}>
          <View
            style={{
              width: "95%",
              alignSelf: "center",
            }}
          >
            {!keyboard && <ImageList images={images} setImages={setImages} />}
            <Text style={styles.heading}>Item's Title</Text>
            <TextInput
              placeholder={"Title"}
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
              style={styles.field1}
            />
            {touched.title && errors.title && (
              <Text
                style={{
                  fontSize: 12,
                  color: "red",
                }}
              >
                {errors.title}
              </Text>
            )}
            <Text style={styles.heading}>Reward (Optional)</Text>
            <TextInput
              keyboardType={"number-pad"}
              placeholder={"A little something for person who finds your item"}
              onChangeText={handleChange("reward")}
              onBlur={handleBlur("reward")}
              value={values.reward}
              style={styles.field1}
            />
            {touched.reward && errors.reward && (
              <Text
                style={{
                  fontSize: 12,
                  color: "red",
                }}
              >
                {errors.reward}
              </Text>
            )}
            <Text style={styles.heading}>Description</Text>
            <TextInput
              multiline
              placeholder={"Description about the Item"}
              onChangeText={handleChange("description")}
              onBlur={handleBlur("description")}
              value={values.description}
              style={styles.field2}
            />
            {touched.description && errors.description && (
              <Text
                style={{
                  fontSize: 12,
                  color: "red",
                }}
              >
                {errors.description}
              </Text>
            )}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "95%",
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Location</Text>
              <TouchableOpacity onPress={locFunction}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: colors.primary,
                  }}
                >
                  Use Location
                </Text>
              </TouchableOpacity>
            </View>
            <TextInput
              multiline
              placeholder={"Place where the item was lost"}
              value={address}
              onChangeText={(value) => setAddress(value)}
              style={styles.field2}
            />
          </View>
          {!keyboard && (
            <TouchableOpacity
              style={styles.button}
              delayPressIn={0}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Post</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </Formik>
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

  heading: {
    fontSize: 20,
    fontWeight: "bold",
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
});

export default AddLostItem;
