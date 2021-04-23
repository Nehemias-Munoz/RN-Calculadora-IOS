import React, {useState} from 'react';
import {Text, View} from 'react-native';
import BotonCalc from '../components/BotonCalc';
import styles from '../theme/appTheme';

const CalculadoraScreen = () => {
  const resultado = useState('0');
  const resultadoPequeno = useState('0');

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>{resultadoPequeno}</Text>
      <Text style={styles.resultado}>{resultado}</Text>

      <View style={styles.botonesContainer}>
        <BotonCalc title={'C'} color={'#9b9b9b'} />
        <BotonCalc title={'+/-'} color={'#9b9b9b'} />
        <BotonCalc title={'del'} color={'#9b9b9b'} />
        <BotonCalc title={'/'} color={'#ff9427'} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
