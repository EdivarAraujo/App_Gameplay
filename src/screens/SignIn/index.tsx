//Estrutura da Interface do App

import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'

import { ButtonIcon } from '../../components/ButtonIcon'
import IlustrationImg from '../../assets/illustration.png' //impotação de imagem
import { styles } from './styles' //importação de estilo

export function SignIn() {
  return (
    <View style={styles.container}>
      <Image
        source={IlustrationImg} // faz com que a imagem seja carregada
        style={styles.image} // estilo da imagem
        resizeMode="stretch" // ajusta ao tamanho da tela
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {`\n`} {/* o {'\n'} faz a quebra de linha */}e organize
          seus {`\n`}
          Jogos!!!
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos...
        </Text>

        <ButtonIcon //Botão
          title="Entrar com discord"
          activeOpacity={0.7} //opacidade ao clicar o botão
        />
      </View>
    </View>
  )
}
