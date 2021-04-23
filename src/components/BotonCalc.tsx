import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  title: string;
  color?: string;
}

const BotonCalc = ({title, color = '#2d2d2d'}: Props) => {
  return (
    <TouchableOpacity>
      <View style={[styles.boton, color ? {backgroundColor: color} : null]}>
        <Text
          style={[
            styles.botonTexto,
            color !== '#9b9b9b' ? {color: 'white'} : null,
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: '#9b9b9b',
  },
  botonTexto: {
    color: 'black',
    fontSize: 30,
  },
});

export default BotonCalc;
