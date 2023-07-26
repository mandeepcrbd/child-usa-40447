import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Business Login</Text>
      <TextInput style={styles.input} placeholder="Official Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => {
      navigation.navigate("ScreenAI9");
    }}>
        <Text style={styles.forgotPasswordText}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.proceedButton} onPress={() => {
      navigation.navigate("ScreenAI10");
    }}>
        <Text style={styles.proceedButtonText}>Proceed</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 20
  },
  forgotPasswordText: {
    color: '#007AFF',
    fontSize: 16
  },
  proceedButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  proceedButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default LoginScreen;