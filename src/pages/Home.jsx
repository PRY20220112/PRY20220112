import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Button } from "react-native";
import StyledText from "../components/StyledText.jsx";
import VisualizeMH from "../pages/VisualizeMH copy.jsx";
const Home = ({ nameDoctor,navigator_registrar,navigator_visualizar,navigator_reporte,navigator_cerrar }) => {
  return (
    <>
      <View style={styles.header}>
        <StyledText style={styles.text}>Bienvenido {nameDoctor} </StyledText>
      </View>
      <View style={styles.body}>
        <Image style={styles.image} source={require("../../assets/logo.png")} />
      </View>
      <View style={styles.buttons}>
        <View style={styles.row_buttons}>

        <TouchableOpacity style={styles.button}
        >
          <Button 
              onPress={()=>{
                navigation.navigate('Registrarse')
              }} title="Registrarse" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
          onPress={()=>{
            navigator_visualizar.navigate('Historia clinica')
          }} title="Historia clinica"
          >
            <StyledText style={styles.textbotones}>Visualizar Historia Clinica</StyledText>
          </TouchableOpacity>

        </View>
        <View style={styles.row_buttons}>
          <TouchableOpacity style={styles.button}>
            <StyledText style={styles.textbotones}>Reporte de edicion</StyledText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <StyledText style={styles.textbotones}>Cerrar Sesion</StyledText>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 20,
  },

  header: {
    backgroundColor: "#AEC0B6",
  },
  body: {
    margin: 12,
    // backgroundColor: "black",
  },
  buttons: {
    alignItems: "center",
  },
  row_buttons: {
    flexDirection: "row",

  },
  button: {
    margin: 7,
    backgroundColor: "#AEC0B6",
    textDecorationColor: "white",
    borderRadius: 20,
    alignItems: "center",
    width: "40%",
    justifyContent: "center",
    padding: 15,
  },
  text: {
    color: "white",
    padding: 5,
    textAlign: "center",
    fontSize: 20,
  },
  textbotones: {
    color: "black",
    padding: 5,
    textAlign: "center",
    fontSize: 20,
  },

  image: {
    width: 100,
    height: 100,
    marginVertical: 20,
    alignSelf: "center",
  },
});

export default Home;
