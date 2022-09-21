import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import RequestScreen from "../screens/RequestScreen";
import DestinationScreen from "../screens/DestinationScreen";
import ConfirmScreen from "../screens/ConfirmScreen";
import ConfirmPickUpScreen from "../screens/ConfirmPickUpScreen";
import FinalScreen from "../screens/FinalScreen";

const Home = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Home.Navigator>
      <Home.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Home.Screen
        name="RequestScreen"
        component={RequestScreen}
        options={{ headerShown: false }}
      />
      <Home.Screen
        name="DestinationScreen"
        component={DestinationScreen}
        options={{ headerShown: false }}
      />
      <Home.Screen
        name="ConfirmScreen"
        component={ConfirmScreen}
        options={{ headerShown: false }}
      />
      <Home.Screen
        name="ConfirmPickUpScreen"
        component={ConfirmPickUpScreen}
        options={{ headerShown: false }}
      />
      <Home.Screen
        name="FinalScreen"
        component={FinalScreen}
        options={{ headerShown: false }}
      />
    </Home.Navigator>
  );
}
