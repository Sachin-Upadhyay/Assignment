import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
import styles from "./auth.styles";
import constants from "./auth.contants";
// Login component
export default function Login(props) {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
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
          placeholder={constants.password}
          placeholderTextColor={constants.textInputBackgroundColor}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
        <Text style={[styles.forgot_button, { marginTop: 10 }]}>Don't have account SignUp?</Text>
      </TouchableOpacity>
    </View>
  );
}
