import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Background from '../../src/data/backgrounds/Background';
import TestFlatList from '../../src/util/TestFlatList';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="Detail" onPress={() => navigation.push('Detail')}></Button>
    </View>
  );
}

function DetailScreen({navigation}) {
  return (
    <Background>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <View style={{padding: 10}}></View>
      <Button title="FlatList" onPress={() => navigation.push('FlatList')} />
      {/* <Button title="Home" onPress={() => navigation.navigate('Home')}></Button> */}
    </Background>
  );
}

function FlatList({navigation}) {
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: 'yellow',
    //   }}>
    //   <Button title="First screen" onPress={() => navigation.popToTop()} />
    // </View>
    <View style={{flex: 1}}>
      <TestFlatList />
    </View>
  );
}

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="FlatList" component={FlatList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
