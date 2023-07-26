import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

const Screen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI7");
    }}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI12");
    }}>
        <Text style={styles.buttonText}>Edit Payment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI6");
    }}>
        <Text style={styles.buttonText}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI5");
    }}>
        <Text style={styles.buttonText}>Terms and Conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI17");
    }}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI4");
    }}>
        <Text style={styles.buttonText}>Support / Send Feedback</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Delete Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log Out</Text>
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
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default Screen;