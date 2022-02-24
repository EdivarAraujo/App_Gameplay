//Estilização da interface do App

//O StyleSheet cria objeto que contem a regra de estilização da interface 
import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1, //ocupa toda tela 
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
     width:'100%',
     height: 360,
  },
  content: {
     marginTop: -40, //margem superior
     paddingHorizontal: 50 //preenchimento Horizontal
  },
  title: {
    color: theme.colors.heading, //cores
    textAlign: 'center',
    fontSize: 35,
    marginBottom: 16,
    fontFamily: theme.fonts.title700, //fonts
    lineHeight: 40 //altura entre linhas 
  },
  subtitle: {
    color: theme.colors.heading, //cores
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 64,
    fontFamily: theme.fonts.title500, //fonts
    lineHeight: 25

  },
  
  
});