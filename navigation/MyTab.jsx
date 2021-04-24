import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Auth } from "../screen/Auth";
import { Home } from "../screen/Home";
import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export function MyTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel:false
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {

          switch (route.name) {
            case "Home":
              return focused
                ? <Ionicons name="home" size={size} color="#FA4A0C" />
                : <Ionicons name="home-outline" size={size} color={color} />;
            case "Auth":
              return focused
                ? <Entypo name="heart" size={24} color="#FA4A0C" />
                : <Entypo name="heart-outlined" size={24} color={color} />
            case "Auth2":
              return focused
                ? <MaterialCommunityIcons name="account-circle" size={24} color="#FA4A0C" />
                : <MaterialCommunityIcons name="account-circle" size={24} color={color} />;
            case "Auth3":
              return focused
                ? <Ionicons name="time" size={24} color={"#FA4A0C"} />
                : <Ionicons name="time-outline" size={size} color={color} />;
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Auth" component={Auth} />
      <Tab.Screen name="Auth2" component={Auth} />
      <Tab.Screen name="Auth3" component={Auth} />
    </Tab.Navigator>
  );
}