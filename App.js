/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Login from './src/components/Login';
import SampleReactNative from './src/SampleReactNative';
import StyleTextInput from './src/components/StyleTextInput';
import Background from './src/data/backgrounds/Background';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HiddenBar from './src/components/HiddenBar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MainNavigation from './src/screens/MainNavigation';
import TestFlatList from './src/util/TestFlatList';

const Header = props => {
  return (
    <View style={styles.header}>
      <Ionicons name="arrow-undo" size={32}></Ionicons>
      <Text
        style={[
          styles.textTitle,
          {backgroundColor: '#ffffff00', color: 'black'},
        ]}>
        {props.title}
      </Text>
      <Text style={{}}>Login</Text>
    </View>
    //<HiddenBar></HiddenBar>
  );
};

const App: () => Node = () => {
  //return <Login></Login>;
  return (
    // <SafeAreaView style={{flex: 1}}>
    //   <Header title="Homie"></Header>
    //   <ScrollView>
    //     <Background>
    //       <View style={{height: 560}}></View>
    //       <View style={[{flex: 1}, styles.textField]}>
    //         <Text style={styles.textTitle}>Under the sea</Text>
    //         <Text style={styles.textContent}>
    //           Hello world 2 hello world 2 hello world 2 hello world 2 hello
    //           world 2
    //         </Text>
    //       </View>
    //     </Background>
    //   </ScrollView>
    // </SafeAreaView>
    <MainNavigation></MainNavigation>
    //<TestFlatList></TestFlatList>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#feefffff',
    paddingHorizontal: 16,
  },
  textField: {
    backgroundColor: '#00000091',
    padding: 16,
  },
  textTitle: {
    color: 'white',
    fontSize: 32,
    lineHeight: 64,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 8,
    paddingBottom: 4,
  },
  textContent: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    fontSize: 32,
  },
});
export default App;
