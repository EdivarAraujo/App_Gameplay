//Estilo do Botão
import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container:{
    width: '100%', //largura
    height: 56,    // altura
    backgroundColor: theme.colors.primary,//cores
    borderRadius: 8, 
    flexDirection: 'row', //deixa os icones um do lado do outro
    alignItems: 'center'
  },
   
  title: {
    flex: 1, 
    color: theme.colors.heading,
    fontSize:15, //tamanho da fonte
    textAlign: 'center' //alinhamento de texto

  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center', //justificar conteudo
    alignItems: 'center', //Alinhar Itens
    borderRightWidth: 1, // largura direita da borda
    borderColor: theme.colors.line
  },

  icon :{
    width: 24,
    height: 18
   }
  
});