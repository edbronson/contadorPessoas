import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

let contadordePessoas = () => {
  let [count, contador] = useState(0);

  let handleIncrement = () => {
    contador(count + 1);
  };

  let handleDecrement = () => {
    if (count > 0) {
    contador(count - 1);
    }
  };

  return (
    <View>

      <Text style={{marginTop:60, textAlign: 'center', fontSize: 20, color: 'red'}}>Contador de pessoas:</Text>

      <Text style={{marginTop:30, textAlign: 'center', fontSize: 50, color: 'red', marginBottom: 60}}>{count}</Text>
      
      <Button title="Mais" onPress={handleIncrement} />

      <Text style={{marginTop:1}}></Text>

      <Button title="Menos" onPress={handleDecrement} />
    </View>
  );
};

export default contadordePessoas;