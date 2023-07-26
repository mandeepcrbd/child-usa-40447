import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';

const AppInfoScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
        <Text style={styles.appName}>My App</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("ScreenAI18");
      }}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.linkContainer}>
        <TouchableOpacity style={styles.linkButton} onPress={() => {
        navigation.navigate("ScreenAI3");
      }}>
          <Text style={styles.linkText}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkButton} onPress={() => {
        navigation.navigate("ScreenAI4");
      }}>
          <Text style={styles.linkText}>Send Feedback</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.footerLink} onPress={() => {
        navigation.navigate("ScreenAI5");
      }}>
          <Text style={styles.footerLinkText}>Terms and Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerLink} onPress={() => {
        navigation.navigate("ScreenAI6");
      }}>
          <Text style={styles.footerLinkText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10
  },
  buttonContainer: {
    marginBottom: 20
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  linkContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  linkButton: {
    marginRight: 10,
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  footerContainer: {
    flexDirection: 'row'
  },
  footerLink: {
    marginRight: 10
  },
  footerLinkText: {
    color: '#007AFF',
    fontSize: 14
  }
});
export default AppInfoScreen;