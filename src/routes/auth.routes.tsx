//Criaçao das rotas de navegação da aplicação
//Definição da estrutura de navegação
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { SignIn } from '../screens/SignIn'

const { Navigator, Screen } = createStackNavigator()

//função pra chamar a navegação
export function AuthRoutes() {
  return (
    // screenOptions tira a barra de navegação  na aplicação
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Screen
        name="SignIn" //1 screen a ser chamada
        component={SignIn} //componente a ser renderizado
      />

      <Screen
        name="Home" //2 screen a ser chamada
        component={Home} //componente a ser renderizado
      />
    </Navigator>
  )
}
