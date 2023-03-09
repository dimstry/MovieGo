/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, StatusBar, Text} from 'react-native';

const Header = (props: {judul: string}) => {
  return (
    <View>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <StatusBar backgroundColor={'#337bff'} barStyle="light-content" />
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: '#000',
            textAlign: 'center',
            paddingVertical: 5,
          }}>
          {props.judul}
        </Text>
      </View>
    </View>
  );
};

export default Header;
