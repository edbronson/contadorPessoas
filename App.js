import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import { styles } from './styles';

const IMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');
  const [situacao, setSituacao] = useState('');

  const calcularIMC = () => {
    const imc = peso / (altura * altura);
    setImc(imc.toFixed(2));
    if (imc < 18.5) setSituacao('Abaixo do peso');
    else if (imc < 25) setSituacao('Peso normal');
    else if (imc < 30) setSituacao('Sobrepeso');
    else if (imc < 35) setSituacao('Obesidade grau 1');
    else if (imc < 40) setSituacao('Obesidade grau 2');
    else setSituacao('Obesidade grau 3');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Alcool ou Gasolina</Text>
      <Image
        source={{ uri: 'https://www.plasticadosonho.com.br/wp-content/uploads/2017/12/blog-06-como-calcular-o-imc.jpg' }}
        style={{ width: 300, height: 200,marginBottom: 10}}
      />

      <TextInput
        style={styles.input}
        placeholder="Peso"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura"
        value={altura}
        onChangeText={setAltura}
      />
      <Pressable style={styles.botao} onPress={calcularIMC}>
        <Text style={styles.botaoTexto}>Verificar</Text>
      </Pressable>
      <Text style={styles.resultado}>{situacao}</Text>
    </View>
  );
}

export default IMC;
