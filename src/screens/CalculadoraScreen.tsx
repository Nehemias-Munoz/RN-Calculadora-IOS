import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import BotonCalc from '../components/BotonCalc';
import styles from '../theme/appTheme';
import {useCalculadora} from '../hooks/useCalculadora';

const CalculadoraScreen = () => {
  const {
    numero,
    numeroPequeno,
    limpiar,
    cambioSimbolo,
    btnDel,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    armarNumero,
    calcular,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroPequeno !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroPequeno}</Text>
      )}
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit={true}
        style={styles.resultado}>
        {numero}
      </Text>

      <View style={styles.botonesContainer}>
        <BotonCalc title={'C'} color={'#9b9b9b'} onPress={limpiar} />
        <BotonCalc title={'+/-'} color={'#9b9b9b'} onPress={cambioSimbolo} />
        <BotonCalc title={'del'} color={'#9b9b9b'} onPress={btnDel} />
        <BotonCalc title={'/'} color={'#ff9427'} onPress={btnDividir} />
      </View>
      <View style={styles.botonesContainer}>
        <BotonCalc title={'7'} onPress={armarNumero} />
        <BotonCalc title={'8'} onPress={armarNumero} />
        <BotonCalc title={'9'} onPress={armarNumero} />
        <BotonCalc title={'x'} color={'#ff9427'} onPress={btnMultiplicar} />
      </View>
      <View style={styles.botonesContainer}>
        <BotonCalc title={'4'} onPress={armarNumero} />
        <BotonCalc title={'5'} onPress={armarNumero} />
        <BotonCalc title={'6'} onPress={armarNumero} />
        <BotonCalc title={'-'} color={'#ff9427'} onPress={btnRestar} />
      </View>
      <View style={styles.botonesContainer}>
        <BotonCalc title={'1'} onPress={armarNumero} />
        <BotonCalc title={'2'} onPress={armarNumero} />
        <BotonCalc title={'3'} onPress={armarNumero} />
        <BotonCalc title={'+'} color={'#ff9427'} onPress={btnSumar} />
      </View>
      <View style={styles.botonesContainer}>
        <BotonCalc title={'0'} ancho={150} onPress={armarNumero} />
        <BotonCalc title={'.'} onPress={armarNumero} />
        <BotonCalc title={'='} color={'#ff9427'} onPress={calcular} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
