import React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native';

const AppScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to our App!</Text>
        <Text style={styles.subtitle}>Learn more about us</Text>
      </View>
      <View style={styles.content}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vestibulum, nunc id aliquam tincidunt, nisl nunc tincidunt nunc, id
          lacinia nunc nunc id lacinia nunc.
        </Text>
        <Text style={styles.description}>
          Sed vestibulum, nunc id aliquam tincidunt, nisl nunc tincidunt nunc,
          id lacinia nunc nunc id lacinia nunc.
        </Text>
        <Text style={styles.description}>
          Nunc id aliquam tincidunt, nisl nunc tincidunt nunc, id lacinia nunc
          nunc id lacinia nunc.
        </Text>
        <Text style={styles.description}>
          Nunc id aliquam tincidunt, nisl nunc tincidunt nunc, id lacinia nunc
          nunc id lacinia nunc.
        </Text>
        <Text style={styles.description}>
          Nunc id aliquam tincidunt, nisl nunc tincidunt nunc, id lacinia nunc
          nunc id lacinia nunc.
        </Text>
        <Text style={styles.description}>
          Nunc id aliquam tincidunt, nisl nunc tincidunt nunc, id lacinia nunc
          nunc id lacinia nunc.
        </Text>
        <Text style={styles.description}>
          Nunc id aliquam tincidunt, nisl nunc tincidunt nunc, id lacinia nunc
          nunc id lacinia nunc.
        </Text>
        <Text style={styles.description}>
          Nunc id aliquam tincidunt, nisl nunc tincidunt nunc, id lacinia nunc
          nunc id lacinia nunc.
        </Text>
        <Text style={styles.description}>
          Nunc id aliquam tincidunt, nisl nunc tincidunt nunc, id lacinia nunc
          nunc id lacinia nunc.
        </Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    alignItems: 'center',
    marginTop: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    color: '#888'
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center'
  }
});
export default AppScreen;