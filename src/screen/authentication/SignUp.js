import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ToastAndroid
} from "react-native";
import styles from "./auth.styles";
import constants from "./auth.contants";

//Registration Component
export default function SignUp(props) {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
//validating email  
  const validateEmail = (email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      ToastAndroid.show("Email is incorrect", 1000)
    }
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../../asset/image/logo.jpg")} />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder={constants.userName}
          placeholderTextColor={constants.textInputBackgroundColor}
          onChangeText={(userName) => setUserName(userName)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder={constants.email}
          placeholderTextColor={constants.textInputBackgroundColor}
          onChangeText={(email) => validateEmail(email)}
        />

      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder={constants.phoneNo}
          placeholderTextColor={constants.textInputBackgroundColor}
          maxLength={10}
          onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder={constants.password}
          placeholderTextColor={constants.textInputBackgroundColor}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder={constants.confirmPassword}
          placeholderTextColor={constants.textInputBackgroundColor}
          secureTextEntry={true}
          onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>SIGNUP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
        <Text style={[styles.forgot_button, { marginTop: 10 }]}>Have account Login?</Text>
      </TouchableOpacity>
    </View>
  );
}
