import React, { useState } from 'react';
import { Text, TextInput, Button, SafeAreaView, StyleSheet, Picker } from 'react-native';

const Screen = () => {
  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [address, setAddress] = useState('');
  const [workArea, setWorkArea] = useState('');

  const handleCreateAccount = () => {// Handle create account logic here
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Business Name</Text>
      <TextInput style={styles.input} value={businessName} onChangeText={setBusinessName} />

      <Text style={styles.label}>Contact Person Name</Text>
      <TextInput style={styles.input} value={contactName} onChangeText={setContactName} />

      <Text style={styles.label}>Business Email</Text>
      <TextInput style={styles.input} value={businessEmail} onChangeText={setBusinessEmail} keyboardType="email-address" />

      <Text style={styles.label}>Contact Phone</Text>
      <TextInput style={styles.input} value={contactPhone} onChangeText={setContactPhone} keyboardType="phone-pad" />

      <Text style={styles.label}>Address</Text>
      <TextInput style={styles.input} value={address} onChangeText={setAddress} />

      <Text style={styles.label}>Work Area</Text>
      <Picker style={styles.input} selectedValue={workArea} onValueChange={setWorkArea}>
        <Picker.Item label="Select Work Area" value="" />
        <Picker.Item label="Area 1" value="area1" />
        <Picker.Item label="Area 2" value="area2" />
        <Picker.Item label="Area 3" value="area3" />
      </Picker>

      <Button title="Create the account" onPress={handleCreateAccount} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
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
    marginBottom: 16,
    paddingHorizontal: 8
  }
});
export default Screen;