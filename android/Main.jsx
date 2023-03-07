import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import Navigation from "./navigation/Navigation";
import Login from "./Screen/Login";
import { registerRootComponent } from "expo";

export const Main = () => {
  return (
    <>
      <NavigationContainer>
        <Login />
      </NavigationContainer>
    </>
  );
};


