import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import BotonCalc from '../components/BotonCalc';
import styles from '../theme/appTheme';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}
const CalculadoraScreen = () => {
  const [numero, setNumero] = useState('0');
  const [numeroPequeno, setNumeroPequeno] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroPequeno('0');
  };
  const armarNumero = (numeroTexto: string) => {
    //no aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') return;
    if (numero.startsWith('0') || numeroTexto.startsWith('-0')) {
      //punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
        //evaluar si el numero presionado es 0 y contiene un punto
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
        // evaluar si el numero presionado es diferente de 0 y no tiene un .
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
        //evitar 00000.0
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };
  const btnDel = () => {
    let negativo = '';
    let numeroTemporal = numero;
    if (numeroTemporal.includes('-')) {
      negativo = '-';
      numeroTemporal = numero.substr(1);
    }
    if (numeroTemporal.length > 1) {
      setNumero(numeroTemporal.slice(0, -1));
    } else {
      setNumero('0');
    }
  };
  const cambioSimbolo = () => {
    if (numero.startsWith('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };
  const cambiarNumxAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroPequeno(numero.slice(0, -1));
    } else {
      setNumeroPequeno(numero);
    }
    setNumero('0');
  };

  const btnDividir = () => {
    cambiarNumxAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };
  const btnMultiplicar = () => {
    cambiarNumxAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };
  const btnRestar = () => {
    cambiarNumxAnterior();
    ultimaOperacion.current = Operadores.restar;
  };
  const btnSumar = () => {
    cambiarNumxAnterior();
    ultimaOperacion.current = Operadores.sumar;
  };

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
