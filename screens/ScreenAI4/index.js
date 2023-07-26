import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

const FeedbackScreen = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const senderEmail = 'example@example.com';

  const handleSendFeedback = () => {
    // Send feedback logic here
    console.log('Sending feedback...');
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.senderEmail}>{senderEmail}</Text>
      <TextInput style={styles.input} placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput style={styles.input} placeholder="Feedback" value={text} onChangeText={setText} multiline />
      <TouchableOpacity style={styles.sendButton} onPress={handleSendFeedback}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  senderEmail: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  sendButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default FeedbackScreen;