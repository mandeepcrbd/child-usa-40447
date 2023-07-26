import React from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';

const UploadScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Upload Files</Text>
      <TouchableOpacity style={styles.button}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.buttonText}>Select File</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default UploadScreen;