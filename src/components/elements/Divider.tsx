import {ColorValue, Text, View} from 'react-native';
import React from 'react';

type DividerProps = {
  height?: number | 1;
  backgroundColor?: ColorValue | 'black';
  width?: number | string | '100%';
  marginHorizontal?: number | string | '100%';
};
function Divider(props: DividerProps) {
  const {height, backgroundColor, width, marginHorizontal} = props;
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
