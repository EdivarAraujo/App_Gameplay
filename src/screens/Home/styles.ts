//Estilização da home
import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper'; //importação de barra status ios 

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row', //um ao lado do outro
    justifyContent: 'space-between', //ocupa as estremidades
    marginTop: getStatusBarHeight() + 26, 
    marginBottom: 42,
  }
});