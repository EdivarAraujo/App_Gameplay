//Contexto de navegação

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AuthRoutes } from './auth.routes'

export function Routes() {
  return (
    //cuida de qual rota foi aberta anteriormente

    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  )
}
