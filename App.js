import React from "react";
import {
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar
} from "react-native";
import { Main } from "./android/Main";

const App = () => {
  return (
      <SafeAreaView style={styles.container}>
         <Main/>
      </SafeAreaView>
  );
};
const styles = StyleSheet.create({  
  container: {
    flex: 1,
  }
})
export default App;
