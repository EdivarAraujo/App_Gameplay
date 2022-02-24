import React, { ReactNode } from 'react' //importa qualquer elemento filho do React
import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './style' //importação de estilos
import { theme } from '../../global/styles/theme' //importação de fonts, cores

type Props = {
  children: ReactNode
}

export function Background({ children }: Props) {
  const { secondary80, secondary100 } = theme.colors

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]} //para um array para definir de que cor que comecar a te terminar
    >
      {children}
    </LinearGradient>
  )
}
