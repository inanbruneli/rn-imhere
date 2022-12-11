import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Participante } from '../../components/Participante';
import { styles } from './styles';

export default function Home() {
  const [participantes, setParticipantes] = useState<string[]>(['inan', 'gael']);
  const [input, setInput] = useState('');

  function addParticipante() {
    if (participantes.includes(input)) {
      return Alert.alert('Participante exist', 'Este participante já existe')
    }

    setParticipantes([...participantes, input])
  }

  function removeParticipante(name: string) {
    Alert.alert('Remover', `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipantes(participantes.filter(item => item != name))
      },
      {
        text: 'Não',
        style: 'cancel',
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          value={input}
          onChangeText={(value) => setInput(value)}
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor={'#6b6b6b'}
        />

        <TouchableOpacity style={styles.button} onPress={addParticipante}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {participantes.map(participante => (
          <Participante
            key={participante}
            name={participante}
            onRemove={() => removeParticipante(participante)} />
        ))}
      </ScrollView>
    </View>
  );
}