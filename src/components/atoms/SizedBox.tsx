import {ColorValue, Text, View} from 'react-native';
import React from 'react';

type SizedProps = {
  height?: number | 1;
  backgroundColor?: ColorValue | 'black';
  width?: number | string | '100%';
};
function SizedBox(props: SizedProps) {
  const {height, backgroundColor, width} = props;
  return (
    <View
      style={{
        height: height,
        backgroundColor: backgroundColor,
        width: width,
      }}></View>
  );
}
export default SizedBox;
