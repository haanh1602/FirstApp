/**
 * @format
 * @flow strict-local
 */

import React, {Component, useState} from 'react';
import type {Node} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  Keyboard,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login: () => Node = () => {
  const [text, setText] = useState('None');
  const [focus, setFocus] = useState(false);
  const outside = () => {
    Keyboard.dismiss();
    setFocus(false);
  };
  return (
    // <TouchableWithoutFeedback onPress={outside}>
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.textTitle}>Hi!</Text>
          <Text style={styles.footer}>Hello</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
    // </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  up: {
    flex: 3,
    alignItems: 'center',
  },
  down: {
    flex: 7,
  },
  input: {
    height: 50,
    width: 300,
    backgroundColor: 'rgba(254, 0, 0, 0.2)',
    fontSize: 18,
    paddingHorizontal: 10,
    color: 'red',
    borderRadius: 8,
  },
  inputFocus: {
    height: 50,
    width: 300,
    backgroundColor: 'rgba(254, 0, 0, 0.2)',
    fontSize: 18,
    paddingHorizontal: 10,
    color: 'red',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'red',
  },
  textTitle: {
    color: 'white',
    fontSize: 32,
    lineHeight: 64,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a1',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    fontSize: 32,
  },
});

export default Login;
