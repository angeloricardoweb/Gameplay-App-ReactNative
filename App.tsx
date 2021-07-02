import React from "react";
import { View, Text, } from "react-native";
import { Signin } from "./src/screens/Signin";
import { useFonts } from "expo-font";
import { Inter_500Medium, Inter_400Regular } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'
import AppLoading from "expo-app-loading";








export default function App() {
  // pega as fonts que foram importadas do google e põe elas numa constante
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  // se a as fontes ainda n tiverem sido carregadas, não sai da logo de carregamento do app
  if (!fontsLoaded) {
    // Apploading é importado do expo-app-loading, ele é o responsavel por não iniciar o app até carregar determinada situação, que nesse caso é o carregamento da fonte
    return <AppLoading />
  }


  return (
    <Signin />
  )

}