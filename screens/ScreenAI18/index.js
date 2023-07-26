import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
const WorkAreas = ['Technology', 'Finance', 'Healthcare', 'Education', 'Retail', 'Hospitality'];

const Screen = () => {
  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [address, setAddress] = useState('');
  const [selectedWorkArea, setSelectedWorkArea] = useState('');

  const handleCreateAccount = () => {// Handle create account logic here
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Business Name</Text>
        <TextInput style={styles.input} value={businessName} onChangeText={setBusinessName} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contact Person Name</Text>
        <TextInput style={styles.input} value={contactName} onChangeText={setContactName} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Business Email</Text>
        <TextInput style={styles.input} value={businessEmail} onChangeText={setBusinessEmail} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contact Phone</Text>
        <TextInput style={styles.input} value={contactPhone} onChangeText={setContactPhone} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address</Text>
        <TextInput style={styles.input} value={address} onChangeText={setAddress} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Work Area</Text>
        <Picker style={styles.picker} selectedValue={selectedWorkArea} onValueChange={itemValue => setSelectedWorkArea(itemValue)}>
          {WorkAreas.map(area => <Picker.Item key={area} label={area} value={area} />)}
        </Picker>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Create the account</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  inputContainer: {
    marginBottom: 16
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8
  },
  picker: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
};
export default Screen;