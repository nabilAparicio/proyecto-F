import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cuestionarios from "../screens/cuestionarios/Cuestionarios";
import Home from "../screens/home/Home";

export default function Routes() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Tab"
        component={TabNavigator}
      />
      <Stack.Screen name="Cuestionarios" component={Cuestionarios} />
    </Stack.Navigator>
  );
}

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Home1" component={Home} />
      <Tab.Screen name="Home2" component={Home} />
      <Tab.Screen name="Cuestionarios" component={Cuestionarios} />
    </Tab.Navigator>
  );
};
