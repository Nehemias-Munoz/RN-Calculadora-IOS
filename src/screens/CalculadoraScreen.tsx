import React, {useState} from 'react';
import {Text, View} from 'react-native';
import BotonCalc from '../components/BotonCalc';
import styles from '../theme/appTheme';

const CalculadoraScreen = () => {
  const [numero, setNumero] = useState('0');
  const [numeroPequeno, setNumeroPequeno] = useState('0');

  return (
    <View style={styles.calculadoraContainer}>
      {numero !== '0' ? (
        <Text style={styles.resultadoPequeno}>{numeroPequeno}</Text>
      ) : null}
      <Text style={styles.resultado}>{numero}</Text>

      <View style={styles.botonesContainer}>
        <BotonCalc
          title={'C'}
          color={'#9b9b9b'}
          onPress={() => {
            setNumero('0');
          }}
        />
        <BotonCalc title={'+/-'} color={'#9b9b9b'} />
        <BotonCalc title={'del'} color={'#9b9b9b'} />
        <BotonCalc title={'/'} color={'#ff9427'} />
      </View>
      <View style={styles.botonesContainer}>
        <BotonCalc title={'7'} />
        <BotonCalc title={'8'} />
        <BotonCalc title={'9'} />
        <BotonCalc title={'x'} color={'#ff9427'} />
      </View>
      <View style={styles.botonesContainer}>
        <BotonCalc title={'4'} />
        <BotonCalc title={'5'} />
        <BotonCalc title={'6'} />
        <BotonCalc title={'-'} color={'#ff9427'} />
      </View>
      <View style={styles.botonesContainer}>
        <BotonCalc title={'1'} />
        <BotonCalc title={'2'} />
        <BotonCalc title={'3'} />
        <BotonCalc title={'+'} color={'#ff9427'} />
      </View>
      <View style={styles.botonesContainer}>
        <BotonCalc title={'0'} ancho={150} />
        <BotonCalc title={'.'} />
        <BotonCalc title={'='} color={'#ff9427'} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
