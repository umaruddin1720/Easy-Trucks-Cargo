import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { HomeScreen } from "../screens/HomeScreen";

const LoginScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [userPassword, setuserPassword] = useState("");

  const pressSubmit = () => {
    if (firstName != "" && userPassword != "") {
      navigation.navigate("HomeScreen", { myName: firstName });
    } else {
      Alert.alert("error", "Please enter Name and password");
    }
  };
  const handleName = (name) => {
    setFirstName(name);
  };
  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.image1}
        source={require("../../assets/images.png")}
      />

      <Text style={styles.mainHeader}>LOGIN</Text>
      <Text style={styles.description}>Easy-Truck-Cargo</Text>
      <View style={styles.inputContanier}>
        <Text style={styles.labels}>Enter your Name</Text>
        <TextInput
          style={styles.inputStyle}
          autoCorrect={false}
          value={firstName}
          onChangeText={(e) => handleName(e)}
        />
      </View>
      <View style={styles.inputContanier}>
        <Text style={styles.labels}>Enter your Password</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={userPassword}
          onChangeText={(p) => {
            setuserPassword(p);
          }}
        />
      </View>
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: "skyblue" }]}
        onPress={pressSubmit}
      >
        <Text style={{ fontWeight: "bold" }}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: "lightgreen" }]}
        onPress={() => {
          navigation.navigate("AdminLoginScreen");
        }}
      >
        <Text style={{ fontWeight: "bold" }}>LOGIN AS ADMIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 15,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 35,
    color: "blue",
    fontWeight: "bold",
    paddingTop: 20,
    paddingBottom: 15,
    alignItems: "center",
    textAlign: "center",
  },
  description: {
    fontSize: 20,
    color: "green",
    paddingBottom: 20,
    lineHeight: 25,
    textAlign: "center",
  },
  inputContanier: {
    marginTop: 10,
  },
  labels: {
    fontSize: 18,
    color: "green",
    marginBottom: 5,
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontSize: 18,
  },
  buttonStyle: {
    marginTop: 20,
    alignItems: "center",
    height: 40,
    justifyContent: "center",
  },
  image1: {
    height: 100,
    width: 200,
    alignSelf: "center",
  },
});

export default LoginScreen;
