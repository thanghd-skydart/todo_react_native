import {ColorValue, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
type TextProps = {
  name: string;
  size?: number | 16;

  color?: ColorValue | 'black';
};
function IconSocial(props: TextProps) {
  const {name, size, color} = props;
  return <Icon name={name} size={size} color={color}></Icon>;
}
export default IconSocial;
