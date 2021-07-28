/**
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
  Image,
  Animated,
} from 'react-native';
import faker from 'faker';

const {width, height} = Dimensions.get('screen');

//const faker = faker.seed(10);
const ITEM_HEIGHT = 100;

const DATA = new Array(30);

function getData() {
  for (let i = 0; i < DATA.length; i++) {
    DATA[i] = {
      title: 'item: ' + i,
      content: {
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: {uri: faker.image.avatar()},
      },
      index: i,
      id: i + 1,
    };
  }
}

const Item = ({title, content, scale}) => {
  return (
    <Animated.View
      style={[
        {flexDirection: 'row'},
        styles.item,
        styles.itemShadow,
        {transform: [{scale}]},
      ]}>
      <View style={{flex: 3, alignItems: 'center'}}>
        <Image source={content.avatar} style={styles.avatar}></Image>
      </View>

      <View style={{flex: 7}}>
        <Text style={[styles.content, styles.name]}>{content.name}</Text>
        <Text style={[styles.content, styles.email]}>{content.email}</Text>
      </View>
    </Animated.View>
  );
};

function TestFlatList() {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  getData();
  const renderItem = ({item}) => {
    const inputRange = [
      -1,
      0,
      (ITEM_HEIGHT + 20) * item.index,
      (ITEM_HEIGHT + 20) * (item.index + 2),
    ];
    const opacityInputRange = [
      -1,
      0,
      (ITEM_HEIGHT + 20) * item.index,
      (ITEM_HEIGHT + 20) * (item.index + 0.5),
    ];
    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });
    const opacity = scrollY.interpolate({
      inputRange: opacityInputRange,
      outputRange: [1, 1, 1, 0],
    });
    return <Item title={item.title} content={item.content} scale={scale} />;
  };
  //console.log(DATA.length);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* <View style={{height: 60}}></View> */}
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIE_3ZAN0NgK47Ny587fSMu9VI5cWjoFicwg&usqp=CAU',
        }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={50}
        opacity={0.8}
      />
      <Animated.FlatList
        data={DATA}
        renderItem={renderItem}
        contentContainerStyle={{
          padding: 20,
          paddingTop: StatusBar.currentHeight || 20,
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        keyExtractor={item => item.id}
        bounces={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    height: ITEM_HEIGHT,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  itemShadow: {
    elevation: 7,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowOpacity: 0.8,
  },
  avatar: {
    height: (3 * ITEM_HEIGHT) / 4,
    width: (3 * ITEM_HEIGHT) / 4,
    borderRadius: (3 * ITEM_HEIGHT) / 8,
    borderWidth: 2,
    borderColor: '#1234',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'rgb(0,0,0)',
  },
  content: {
    fontSize: 18,
    color: 'rgb(0,0,0)',
    paddingBottom: 2,
  },
  name: {
    fontWeight: '800',
  },
  email: {
    fontSize: 13,
  },
  footer: {
    height: 50,
  },
});

export default TestFlatList;
