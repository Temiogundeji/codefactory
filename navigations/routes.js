import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreen from "../screens/IntroScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignUpScreen";
import BottomTab from "./BottomTab";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IntroScreen">
        <Stack.Screen
          options={{ headerShown: false }}
          name="IntroScreen"
          component={IntroScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignUpScreen"
          component={SignupScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ProfileScreen"
          component={ProfileScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="DashboardScreen"
          component={BottomTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
