import React from "react";
import Home from "../Screen/Home";
import Perfil from "../Screen/Perfil"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="HomeS">
        <Stack.Screen name="HomeS" component={Home}/>
    </Stack.Navigator>
  );
}

export function ProfileStack(){
    return (
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name="Profile" component={Perfil}/>
        </Stack.Navigator>
    )
}

