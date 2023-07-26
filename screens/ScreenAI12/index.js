import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const CreditCardScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cvvNumber, setCvvNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');

  const handleCreate = () => {// Logic for creating the credit card
  };

  const handleEdit = () => {// Logic for editing the credit card
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Card Number</Text>
        <TextInput style={styles.input} value={cardNumber} onChangeText={setCardNumber} placeholder="Enter card number" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>CVV Number</Text>
        <TextInput style={styles.input} value={cvvNumber} onChangeText={setCvvNumber} placeholder="Enter CVV number" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Cardholder's Name</Text>
        <TextInput style={styles.input} value={cardHolderName} onChangeText={setCardHolderName} placeholder="Enter cardholder's name" />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleCreate}>
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleEdit}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  inputContainer: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default CreditCardScreen;