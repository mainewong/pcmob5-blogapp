import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { commonStyles } from "../styles/commonStyles";
import { useState } from "react";
import axios from "axios";

const API = "https://pcmob5-blog-api.mainewong.repl.co/create";
const API_LOGIN = "/auth";

export default function CreateScreen({ navigation }) {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function createPost() {

    const params = JSON.stringify({

      "title": title,
      "content": content,

    });

    axios.post(API, params,{

      "headers": {
      
      "content-type": "application/json",
      
      },
      
      })
      .then(function(response) {
      
      console.log(response);
      
      })
      
      .catch(function(error) {
      
      console.log(error);
      
      });
    } 


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Text style={styles.title}>Create Post</Text>
      <Text style={styles.fieldTitle}>Title</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={title}
        onChangeText={(input) => setTitle(input)}
      />
      <Text style={styles.fieldTitle}>Content</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={content}
        onChangeText={(input) => setContent(input)}
      />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={createPost} style={styles.loginButton}>
          <Text style={styles.buttonText}>Create post</Text>
        </TouchableOpacity>
        
      </View>
      
      <View style={{ height: 20, alignItems: "left" }}></View>
    </View>
  </TouchableWithoutFeedback>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 24,
  },
  fieldTitle: {
    fontSize: 18,
    marginBottom: 12,
  },
  input: {
    borderColor: "#999",
    borderWidth: 1,
    marginBottom: 24,
    padding: 4,
    height: 36,
    fontSize: 18,
    backgroundColor: "white",
  },
  loginButton: {
    backgroundColor: "blue",
    width: 120,
    alignItems: "center",
    padding: 18,
    marginTop: 12,
    marginBottom: 36,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  errorText: {
    color: "red",
    height: 40,
  },
});