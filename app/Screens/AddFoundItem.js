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

import ImageList from "../Components/ImagePicker";
import colors from "../config/colors";
import useKeyboard from "../hooks/useKeyboard";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

function AddFoundItem({ keyboard, setKeyboard }) {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(10).label("title"),
    description: Yup.string().required().max(100).label("description"),
    address: Yup.string().required().max(200).label("location"),
  });
  const [images, setImages] = useState([]);
  useKeyboard(setKeyboard);

  const handleSubmit = (values) => {
    alert("done");
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
            <Text style={styles.heading}>Location</Text>
            <TextInput
              multiline
              placeholder={"Place where the item was found"}
              onChangeText={handleChange("address")}
              onBlur={handleBlur("address")}
              value={values.address}
              style={styles.field2}
            />
            {touched.address && errors.address && (
              <Text
                style={{
                  fontSize: 12,
                  color: "red",
                }}
              >
                {errors.address}
              </Text>
            )}
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

export default AddFoundItem;
