import {ColorValue, Text, View} from 'react-native';
import React from 'react';

type TextProps = {
  title: string;
  content: string;
  fontSize?: number | 16;
  fontSizeRich?: number | 16;
  paddingTop?: number | string | 16;
  paddingLeft?: number | string | 16;
  paddingRight?: number | string | 16;
  paddingBottom?: number | string | 16;
  paddingVertical?: number | string | 16;
  paddingHorizontal?: number | string | 16;
  paddingHorizontalRich?: number | string | 16;

  color?: ColorValue | 'black';
  colorRich?: ColorValue | 'black';
};
function RichText(props: TextProps) {
  const {
    title,
    fontSize,
    fontSizeRich,
    color,
    colorRich,
    paddingTop,
    paddingLeft,
    paddingRight,
    paddingBottom,
    paddingVertical,
    paddingHorizontal,
    paddingHorizontalRich,
    content,
  } = props;
  return (
    <View style={{flexDirection: 'row'}}>
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
      <Text
        style={{
          fontSize: fontSizeRich,
          color: colorRich,
          paddingHorizontal: paddingHorizontalRich,
        }}>
        {content}
      </Text>
    </View>
  );
}
export default RichText;
