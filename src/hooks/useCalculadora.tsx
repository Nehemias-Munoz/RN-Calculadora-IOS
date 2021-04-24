import {useState, useRef} from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
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

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroPequeno);
    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);
        break;
      case Operadores.restar:
        setNumero(`${num2 - num1}`);
        break;
      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);
        break;
      case Operadores.dividir:
        setNumero(`${num2 / num1}`);
        break;
      case undefined:
        break;
      default:
        break;
    }
    setNumeroPequeno('0');
  };
  return {
    numero,
    numeroPequeno,
    limpiar,
    btnDel,
    cambioSimbolo,
    btnSumar,
    btnRestar,
    btnMultiplicar,
    btnDividir,
    armarNumero,
    calcular,
  };
};
