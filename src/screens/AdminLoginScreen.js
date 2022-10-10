import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { HomeScreen } from "../screens/HomeScreen";

const AdminLoginScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [userPassword, setuserPassword] = useState("");

  const pressSubmit = () => {
    if (firstName === "Ahad khan" && userPassword == "12345678") {
      navigation.navigate("AdminScreen");
    } else {
      Alert.alert("error", "Enter Correct Name and Password");
    }
  };
  const handleName = (name) => {
    setFirstName(name);
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>ADMIN</Text>

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
        style={[styles.buttonStyle, { backgroundColor: "lightgreen" }]}
        onPress={pressSubmit}
      >
        <Text style={{ fontWeight: "bold" }}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 35,
    color: "#25b849",
    fontWeight: "bold",
    paddingTop: 20,
    paddingBottom: 15,
    alignItems: "center",
    textAlign: "center",
  },
  description: {
    fontSize: 20,
    color: "#a725b8",
    paddingBottom: 20,
    lineHeight: 25,
    textAlign: "center",
  },
  inputContanier: {
    marginTop: 20,
  },
  labels: {
    fontSize: 18,
    color: "green",
    marginTop: 10,
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
});

export default AdminLoginScreen;
