import {ColorValue, Text} from 'react-native';
import React from 'react';

type TextProps = {
  title: string;
  fontSize?: number;
  paddingTop?: number | string | undefined;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingBottom?: number | string;
  paddingVertical?: number | string;
  paddingHorizontal?: number | string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  color?: ColorValue | 'black';
};
function TextView(props: TextProps) {
  const {
    title,
    fontSize = 16,
    fontWeight,
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
        fontWeight: fontWeight,
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
