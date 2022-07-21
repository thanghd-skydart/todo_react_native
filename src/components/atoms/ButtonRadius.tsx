import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ColorValue,
  FlexAlignType,
} from 'react-native';
type ButtonRadiusprops = {
  onPress: () => void;
  text: string;
  borderRadius?: number | 10;
  borderWidth?: number | 1.5;
  height?: number | string | 48;
  width?: number | string | 48;
  backgroundColor?: ColorValue | 'white';
  textColor?: ColorValue | undefined;
  disabled?: boolean | undefined;
  alignSelf?: 'auto' | FlexAlignType | undefined;
};
function ButtonRadius(props: ButtonRadiusprops) {
  const {
    onPress,
    text,
    backgroundColor,
    textColor,
    borderRadius,
    borderWidth,
    height,
    width,
    disabled,
    alignSelf,
  } = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        borderWidth: borderWidth,
        height: height,
        width: width,
        borderRadius: borderRadius,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: alignSelf,
        backgroundColor: backgroundColor,
      }}>
      <Text style={{color: textColor, fontSize: 16}}>{text}</Text>
    </TouchableOpacity>
  );
}
export default ButtonRadius;
