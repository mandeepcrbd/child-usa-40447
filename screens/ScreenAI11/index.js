import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PaymentScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Payment Options</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.amountText}>Amount: $100</Text>
        <TouchableOpacity style={styles.cardOption} onPress={() => {
        navigation.navigate("ScreenAI12");
      }}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.cardImage} />
          <Text style={styles.cardText}>Credit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.payButton} onPress={() => {
        navigation.navigate("ScreenAI13");
      }}>
          <Text style={styles.payButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#f9f9f9',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  amountText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  cardOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  cardImage: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  payButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8
  },
  payButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }
});
export default PaymentScreen;