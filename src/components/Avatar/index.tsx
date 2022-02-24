import React from "react";
import { Image } from "react-native";
import {LinearGradient } from 'expo-linear-gradient';


import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {   //usa a imagem em varios locias diferentes, pra usar o componete diz uma urlImage
  urlImage: string;

}

export function Avatar({urlImage}: Props){
  const {secondary50, secondary70} = theme.colors; 



  return (
    <LinearGradient 
      style ={styles.container}
      colors = {[secondary50, secondary70]}  //para um array para definir de que cor que comecar a te terminar 
    
    > 
    <Image
      source={{uri: urlImage}}
      style={styles.avatar}
    />
    </LinearGradient>
  )
}