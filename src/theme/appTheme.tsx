import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculadoraContainer: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  resultadoPequeno: {
    color: 'gray',
    fontSize: 30,
    textAlign: 'right',
  },
  resultado: {
    color: 'white',
    fontSize: 45,
    textAlign: 'right',
  },
  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
  },
});

export default styles;
