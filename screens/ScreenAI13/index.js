import React from "react";
import { View, Text, TouchableOpacity, Image, SafeAreaView, StyleSheet } from "react-native";

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Take a Survey</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.graphicalDisplay}>
        {
        /* Placeholder image for graphical display */
      }
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.graphicalDisplayImage} />
      </View>
      <View style={styles.uploadSection}>
        <Text style={styles.uploadSectionTitle}>Uploaded Documents</Text>
        {
        /* List of uploaded documents */
      }
        <Text style={styles.uploadedDocument}>Document 1</Text>
        <Text style={styles.uploadedDocument}>Document 2</Text>
        <Text style={styles.uploadedDocument}>Document 3</Text>
        {
        /* Upload button */
      }
        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadButtonText}>Upload</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  graphicalDisplay: {
    marginTop: 40,
    alignItems: "center"
  },
  graphicalDisplayImage: {
    width: 200,
    height: 200,
    resizeMode: "contain"
  },
  uploadSection: {
    marginTop: 40
  },
  uploadSectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  uploadedDocument: {
    fontSize: 16,
    marginBottom: 5
  },
  uploadButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10
  },
  uploadButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});
export default Screen;