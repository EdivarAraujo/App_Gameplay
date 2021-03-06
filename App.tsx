//INTERFACE DA APLICAÇÃO

import React from 'react'
import { StatusBar } from 'react-native' //importação da barra de status
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter' //importação de fontes
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold
} from '@expo-google-fonts/rajdhani' //importação de fontes
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font' //carrega as fontes

import { Routes } from './src/routes'
import { Background } from './src/components/Background'

export default function App() {
  const [fontsLoaded] = useFonts({
    //carregamento de fonts
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Background>
  )
}
