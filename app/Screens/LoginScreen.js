import React, { useState ,useEffect} from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { AntDesign } from '@expo/vector-icons'; 
import ButtonSlider from "../Components/ButtonSlider";
import AppTextInput from "../Components/AppTextInput";

import colors from "../config/colors";
address

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

function LoginScreen(props) {
  const [login, setLogin] = useState(true);
  const [keyboard, setKeyboard] = useState(false);
  
  useKeyboard(setKeyboard);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.slideButton}>
          <ButtonSlider
          initial={login}
            onSlide={setLogin}
            buttonName1={"Login"}
            buttonName2={"Register"}
          />
        </View> 
        <Text style={styles.header}>
          Hello <Text style={{ fontWeight: "bold" }}>There</Text>
        </Text>
       {!login&& <AppTextInput
          width={"100%"}
          placeholder={"E-mail"}
          iconName={"email"}
          top={"2%"}
        />}
        <AppTextInput
          
          width={"100%"}
          placeholder={"Username"}
          top={"5%"}
          iconName={"account"}
        />
        <AppTextInput
        secureTextEntry
          width={"100%"}
          placeholder={"Password"}
          top={"5%"}
          iconName={"lock"}
        />
        <View
          style={{
            flexDirection: "row",
            height: screenHeight * 0.08,
            width: screenWidth * 0.65,
            marginTop: "5%",
            alignItems:'center',
            
            justifyContent: "flex-start",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {login?'Login':"Register"} With :
          </Text>
          <TouchableOpacity style={styles.icons} onPress={()=>{}} delayPressIn={0}> 
            <AntDesign name="google" size={26} color="black" />
          </TouchableOpacity>
         
          <TouchableOpacity style={styles.icons} onPress={()=>{}} delayPressIn={0}>
          <AntDesign name="twitter" size={26} color="black" />
          </TouchableOpacity>
          
          
        </View>
      </View>

    
        <TouchableOpacity
          style={[styles.button,{bottom:keyboard? screenHeight*0.02:screenHeight*0.04 }]}
          delayPressIn={0}
          onPress={() => {}}
        >
          <AntDesign name="arrowright" size={30} color="black" />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: screenHeight * 0.08,
    width: screenWidth * 0.25,
    position: "absolute",
    zIndex: 2,
    justifyContent:'center',
    alignItems:'center',
    alignSelf: "center",
    right: 20,
    
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: Constants.statusBarHeight,
  },
  header: {
    marginTop: screenHeight * 0.04,
    fontSize: screenHeight * 0.06,
  },
  icons:{
    marginLeft:'8%'
  },
  innerContainer: {
    width: "90%",
    height: "92%",
  },
  input: {
    width: "100%",
    height: screenHeight * 0.06,
    backgroundColor: "#f6f6f6",
    marginTop: screenHeight * 0.02,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#c4c4c4",
    paddingLeft: 10,
  },
  lowerContainer: {
    height: "8%",
    width: "100%",
backgroundColor:'#616161',
    justifyContent: "flex-end",
  },
  slideButton: {
    marginTop: "5%",
    width: "55%",
  },
});

export default LoginScreen;
