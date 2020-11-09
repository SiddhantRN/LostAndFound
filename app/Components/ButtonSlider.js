import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Dimensions,
} from "react-native";


function ButtonSlider({ buttonName1, buttonName2, top, onSlide ,initial}) {
  const [active, setActive] = useState(initial);
  
  return (
    <View style={[styles.buttonContainer, { marginTop: top }]}>
      <>
        <TouchableOpacity
         onPress={() => {
            setActive(true);
            
            onSlide(true);
          }}
          style={[styles.button1,{borderBottomWidth:active?3:null,borderColor:'#000'}]}
        >
          <Text
            style={
              active
                ? { color: "#000", fontWeight: "bold", fontSize: 18 }
                : { color: "#9e9e9e", fontWeight: "bold", fontSize: 18 }
            }
          >
            {buttonName1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActive(false);
            
            onSlide(false);
          }}
          
          style={[styles.button2,{borderBottomWidth:active?null:3,borderColor:'#000'}]}
        >
          <Text
            style={
              active
                ? { color: "#9e9e9e", fontWeight: "bold", fontSize: 18 }
                : { color: "#000", fontWeight: "bold", fontSize: 18 }
            }
          >
            {buttonName2}
          </Text>
        </TouchableOpacity>
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: Dimensions.get("window").height * 0.06,
    overflow: "hidden",
    flexDirection: "row",

    alignSelf: "center",
  },
  button1: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },

});

export default ButtonSlider;
