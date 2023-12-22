import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "./screen/Home/Index";
import ProfileScreen from "./screen/Profile/Index";
import { colors } from "./constants/colors";

const Tab = createMaterialTopTabNavigator();

function AuthenticatedHome() {
  return (
    <Tab.Navigator
    initialRouteName={"Home"}
    screenOptions={{
      tabBarActiveTintColor: colors.accent01,
      tabBarLabelStyle: { fontSize: 16, fontWeight:"bold" },
      tabBarStyle: { backgroundColor: colors.primary02 },
    }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default AuthenticatedHome;
