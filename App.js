import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [entrada, setEntrada] = useState('');

  // Função para lidar com os números e operações
  const Escolhe_o_botao = (value) => {
    setEntrada((previa_da_entrada) => previa_da_entrada + value);
  };

  // Função para calcular o resultado
  const calcular_o_resultado = () => {
    try {
      setEntrada(eval(entrada).toString());
    } catch (error) {
      setEntrada('Erro');
    }
  };

  // Função para limpar o input
  const limpar_entrada = () => {
    setEntrada('');
  };

  return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Calculadora</Text>
        <TextInput
            style={styles.entrada}
            value={entrada}
            editable={false}
        />
        <View style={styles.deixa_o_botao_em_fileira}>
          <TouchableOpacity style={styles.botao} onPress={() => Escolhe_o_botao('1')}>
            <Text style={styles.texto_do_botao}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => Escolhe_o_botao('2')}>
            <Text style={styles.texto_do_botao}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => Escolhe_o_botao('3')}>
            <Text style={styles.texto_do_botao}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => Escolhe_o_botao('+')}>
            <Text style={styles.texto_do_botao}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.deixa_o_botao_em_fileira}>
          <TouchableOpacity style={styles.botao} onPress={() => Escolhe_o_botao('4')}>
            <Text style={styles.texto_do_botao}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => Escolhe_o_botao('5')}>
            <Text style={styles.texto_do_botao}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => Escolhe_o_botao('6')}>
            <Text style={styles.texto_do_botao}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => Escolhe_o_botao('-')}>
            <Text style={styles.texto_do_botao}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.deixa_o_botao_em_fileira}>
          <TouchableOpacity style={styles.botao} onPress={() => Escolhe_o_botao('7')}>
            <Text style={styles.texto_do_botao}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => Escolhe_o_botao('8')}>
            <Text style={styles.texto_do_botao}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => Escolhe_o_botao('9')}>
            <Text style={styles.texto_do_botao}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => Escolhe_o_botao('*')}>
            <Text style={styles.texto_do_botao}>X</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.deixa_o_botao_em_fileira}>
          <TouchableOpacity style={styles.botao} onPress={() => Escolhe_o_botao('0')}>
            <Text style={styles.texto_do_botao}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={limpar_entrada}>
            <Text style={styles.texto_do_botao}>✂</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => Escolhe_o_botao('/')}>
            <Text style={styles.texto_do_botao}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={calcular_o_resultado}>
            <Text style={styles.texto_do_botao}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dadada',
  },

  titulo: {
    fontSize: 30,
    marginBottom: 20,
  },

  entrada: {
    height: 60,
    width: '80%',
    backgroundColor: '#fff',
    marginBottom: 20,
    fontSize: 30,
    textAlign: 'right',
    paddingRight: 20,
  },

  deixa_o_botao_em_fileira: {
    flexDirection: 'row',
    marginBottom: 5,
  },

  botao: {
    backgroundColor: '#00b332',
    padding: 20,
    margin: 5,
    borderRadius: 5,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  texto_do_botao: {
    fontSize: 25,
    color: '#fff',
  },
});