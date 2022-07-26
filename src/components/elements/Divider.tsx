import {ColorValue, Text, View} from 'react-native';
import React from 'react';

type DividerProps = {
  height?: number | 1;
  backgroundColor?: ColorValue;
  width?: number | string;
  marginHorizontal?: number | string;
};
function Divider(props: DividerProps) {
  const {
    height,
    backgroundColor = 'black',
    width = '100%',
    marginHorizontal = '100%',
  } = props;
  return (
    <View
      style={{
        height: height,
        backgroundColor: backgroundColor,
        width: width,
        marginHorizontal: marginHorizontal,
      }}></View>
  );
}
export {Divider};
