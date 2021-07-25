/**
 * @format
 * @flow strict-local
 */

import React, {Component, useState} from 'react';
import type {Node} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const StyleTextInput: () => Node = () => {
  const [focus, setFocus] = useState(false);
  const outside = () => {
    Keyboard.dismiss();
    setFocus(false);
  };
  return (
    <TouchableWithoutFeedback onPress={outside}>
      <SafeAreaView style={{flex: 1}}>
        <View>
          <TextInput
            onFocus={() => setFocus(true)}
            style={focus ? styles.inputFocus : styles.input}></TextInput>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  up: {
    flex: 3,
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
});

export default StyleTextInput;
