import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Background from '../../src/data/backgrounds/Background';

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
      <Button title="Detail1" onPress={() => navigation.push('Detail1')} />
      {/* <Button title="Home" onPress={() => navigation.navigate('Home')}></Button> */}
    </Background>
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
        <Stack.Screen name="Detail1" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
