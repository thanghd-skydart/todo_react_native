import {ColorValue, Text} from 'react-native';
import React from 'react';

type TextProps = {
  title: string;
  fontSize?: number | 16;
  paddingTop?: number | string | 16;
  paddingLeft?: number | string | 16;
  paddingRight?: number | string | 16;
  paddingBottom?: number | string | 16;
  paddingVertical?: number | string | 16;
  paddingHorizontal?: number | string | 16;

  color?: ColorValue | 'black';
};
function TextView(props: TextProps) {
  const {
    title,
    fontSize,
    color,
    paddingTop,
    paddingLeft,
    paddingRight,
    paddingBottom,
    paddingVertical,
    paddingHorizontal,
  } = props;
  return (
    <Text
      style={{
        fontSize: fontSize,
        color: color,
        paddingTop: paddingTop,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        paddingBottom: paddingBottom,
        paddingVertical: paddingVertical,
        paddingHorizontal: paddingHorizontal,
      }}>
      {title}
    </Text>
  );
}
export default TextView;
