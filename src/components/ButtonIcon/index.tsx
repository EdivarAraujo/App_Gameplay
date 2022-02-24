import React from 'react';
import{
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps,

} from 'react-native';

import DiscordImg from '../../assets/discord.png'; //importação do icone do botão
import { styles } from './styles'; // importação do estilo

type Props =   TouchableOpacityProps &{  //tipo de propriedade
  title: string;
}
//Função do Botão
export function ButtonIcon ({title, ...rest} : Props) {
  return(
    <TouchableOpacity  //Elemento de click
      style={styles.container}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon}/>
      </View>

      
     <Text style={styles.title}> 
        {title}    {/*Em vez de ficar o texto fisico coloca a string title*/}
     </Text>

    </TouchableOpacity>
  )
}


