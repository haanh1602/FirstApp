/**
 * @format
 */

import React from 'react';
import type {Node, ElementRef} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

class Background extends React.Component<$FlowFixMeProps> {
  setNativeProps(props: Object) {}

  render(): React.Node {
    const {children, style, ...props} = this.props;
    const img = {
      path: require('./vertical_lunox_unicorn_dream.jpg'),
    };
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <ImageBackground source={img.path} style={[{height: 2000}, style]}>
            {children}
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

module.exports = Background;
