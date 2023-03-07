import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  ImageBackground,
} from "react-native";
import { Audio } from "expo-av";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import Image from "../../assets/background.gif";
function Login() {
  async function LoadAudio() {
    soundObject = new Audio.Sound();
    try {
      if (soundObject._loaded) {
        console.log("Se está reproduciendo la canción");
      } else {
        console.log("Se acaba de agregar una canción a la lista");
        await soundObject.loadAsync(require("../../assets/cybersound.mp3"), {shouldPlay: true});
        await soundObject.setPositionAsync(0);
        await soundObject.playAsync();
      }
    } catch (error) {
      console.error(error);
    }
  }

  LoadAudio();
  return (
    <View style={styles.containerDOOM}>
      <ImageBackground
        source={Image}
        resizeMode="cover"
        style={styles.ImageInfo}
      >
        <Text className="flex-1 items-center font-monospace text-white">Dante Aligheri</Text>
        <Text style={[{ fontSize: 20, marginBottom: 80 }, styles.textmain]}>
          Artificial Intelligence
        </Text>
        <LinearGradient
          colors={["rgba(121, 18, 105, 0.8)", "rgba(3, 13, 121, 0.8))"]}
          style={styles.containerFOND}
        >
          <Text style={[styles.textmain, { fontSize: 25, fontWeight: "800" }]}>
              Bienvenido a la Dasboard Principal
          </Text>
          <Text style={[styles.textmain, { fontSize: 15, fontWeight: "800" }]}>
            Panel de control — Administrativo
          </Text>
          <View style={styles.formStyle}>
            <View>
              <Text
                style={[
                  styles.textmain,
                  { marginStart: 10, marginBottom: 10, marginTop: 10 },
                ]}
              >
                USUARIO
              </Text>
              <TextInput
                style={[styles.textmain, styles.inputStyle]}
                placeholder="Email o Usuario"
                placeholderTextColor="rgba(255,255,255,0.4)"
              />
            </View>
            <View>
              <Text
                style={[
                  styles.textmain,
                  { marginStart: 10, marginBottom: 10, marginTop: 10 },
                ]}
              >
                CONTRASEÑA
              </Text>
              <TextInput
                style={[styles.textmain, styles.inputStyle]}
                placeholderTextColor="rgba(255,255,255,0.4)"
                placeholder="Contraseña"
              />
            </View>
            <BouncyCheckbox
              style={styles.checkbox}
              size={20}
              fillColor="#910296"
              text="Mantener sesión."
              textStyle={{ fontFamily: "monospace" }}
            />
            <View style={styles.submitSyle}>
            <TouchableOpacity style={styles.submit}>
              <LinearGradient style={{marginTop: 20, borderRadius: 15, flex: 0.3, justifyContent: 'center', alignItems: 'center'}} colors={["rgba(121, 18, 105, 1)", "rgba(3, 13, 121, 1)"]}>
                <Text style={[
                  styles.textmain, {fontSize: 15}
                ]}>Confirmar</Text>
              </LinearGradient>
            </TouchableOpacity>
            </View>
          </View>
          <StatusBar style="auto" />
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  submitSyle:{
   
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  submit: {
      width: 200,
      flex: 1,
      
  },
  checkbox: {
    margin: 10,
    marginTop: 20,
  },
  formStyle: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
    flex: 0.8,
    marginTop: 20,
    width: "90%",
  },
  inputStyle: {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 7,
    borderRadius: 40,
  },
  containerDOOM: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  textmain: {
    fontFamily: "monospace",
    color: "#d6bdd8",
  },
  ImageInfo: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
  containerFOND: {
    height: "65%",
    marginBottom: 80,
    marginEnd: 20,
    marginStart: 20,
    width: "90%",
    backgroundColor: "rgba(0,0,0,0.8)",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
