import {ColorValue, Text} from 'react-native';
import React from 'react';

type TextProps = {
  title: string;
  fontSize?: number | 16;
  color?: ColorValue | 'black';
};
function LabelView(props: TextProps) {
  const {title, fontSize, color} = props;
  return <Text style={{fontSize: fontSize, color: color}}>{title}</Text>;
}
export default LabelView;
