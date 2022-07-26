import React from 'react';
import {View, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
type SearchProps = {
  onChangeText?: ((text: string) => void) | undefined;
};
export function SearchContainer(props: SearchProps) {
  const {onChangeText} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: '80%',
        width: '92%',
      }}>
      <Icon
        name="search"
        size={15}
        style={{
          color: 'black',
          position: 'absolute',
          top: 10,
          left: 10,
        }}></Icon>
      <TextInput
        autoCorrect={false}
        style={{
          backgroundColor: 'grey',
          width: '100%',
          borderRadius: 10,
          opacity: 0.5,
          marginEnd: 8,
          paddingStart: 30,
          color: 'white',
        }}
        onChangeText={onChangeText}></TextInput>
    </View>
  );
}
