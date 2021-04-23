import React, {useState} from 'react';
import {Text, View} from 'react-native';
import BotonCalc from '../components/BotonCalc';
import styles from '../theme/appTheme';

const CalculadoraScreen = () => {
  const [numero, setNumero] = useState('0');
  const [numeroPequeno, setNumeroPequeno] = useState('0');

  const armarNumero = (numeroTexto: string) => {
    setNumero(numero + numeroTexto);
  };

  const cambioSimbolo = (numeroTexto: string) => {
    if (numero.startsWith('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };
  return (
    <View style={styles.calculadoraContainer}>
      {numero !== '0' ? (
        <Text style={styles.resultadoPequeno}>{numeroPequeno}</Text>
      ) : null}
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit={true}
        style={styles.resultado}>
        {numero}
      </Text>

      <View style={styles.botonesContainer}>
        <BotonCalc
          title={'C'}
          color={'#9b9b9b'}
          onPress={() => {
            setNumero('0');
          }}
        />
        <BotonCalc title={'+/-'} color={'#9b9b9b'} onPress={cambioSimbolo} />
        <BotonCalc
          title={'del'}
          color={'#9b9b9b'}
          onPress={() => {
            setNumero('0');
          }}
        />
        <BotonCalc
          title={'/'}
          color={'#ff9427'}
          onPress={() => {
            setNumero('0');
          }}
        />
      </View>
      <View style={styles.botonesContainer}>
        <BotonCalc title={'7'} onPress={armarNumero} />
        <BotonCalc title={'8'} onPress={armarNumero} />
        <BotonCalc title={'9'} onPress={armarNumero} />
        <BotonCalc
          title={'x'}
          color={'#ff9427'}
          onPress={() => {
            setNumero('0');
          }}
        />
      </View>
      <View style={styles.botonesContainer}>
        <BotonCalc title={'4'} onPress={armarNumero} />
        <BotonCalc title={'5'} onPress={armarNumero} />
        <BotonCalc title={'6'} onPress={armarNumero} />
        <BotonCalc
          title={'-'}
          color={'#ff9427'}
          onPress={() => {
            setNumero('0');
          }}
        />
      </View>
      <View style={styles.botonesContainer}>
        <BotonCalc title={'1'} onPress={armarNumero} />
        <BotonCalc title={'2'} onPress={armarNumero} />
        <BotonCalc title={'3'} onPress={armarNumero} />
        <BotonCalc
          title={'+'}
          color={'#ff9427'}
          onPress={() => {
            setNumero('0');
          }}
        />
      </View>
      <View style={styles.botonesContainer}>
        <BotonCalc title={'0'} ancho={150} onPress={armarNumero} />
        <BotonCalc title={'.'} onPress={armarNumero} />
        <BotonCalc
          title={'='}
          color={'#ff9427'}
          onPress={() => {
            setNumero('0');
          }}
        />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
