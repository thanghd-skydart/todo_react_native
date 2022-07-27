import React from 'react';
import {Switch, Text, View, ColorValue} from 'react-native';
import {colors, fontSizes} from '../../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
type ElementSettingProps = {
  iconLeftName: string;
  title: string;
  subtitle?: string | undefined;
  iconRightName?: string;
  thumbColor?: ColorValue;
  onValueChange?: ((value: boolean) => void | Promise<void>) | null | undefined;
  valueSwitch?: boolean | undefined;
};
export function ElementSetting(props: ElementSettingProps) {
  const {
    iconLeftName,
    title,
    subtitle,
    iconRightName,
    thumbColor,
    onValueChange,
    valueSwitch,
  } = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
      }}>
      <Icon
        name={iconLeftName}
        style={{marginStart: 10}}
        size={20}
        color={'black'}
      />
      <Text
        style={{
          color: 'black',
          fontSize: fontSizes.s16,
          paddingStart: 10,
        }}>
        {title}
      </Text>
      <View style={{flex: 1}} />
      {subtitle != undefined && (
        <Text
          style={{
            color: 'black',
            fontSize: fontSizes.s16,
            paddingEnd: 10,
            opacity: 0.5,
          }}>
          {subtitle}
        </Text>
      )}
      {iconRightName != undefined && (
        <Icon
          name={iconRightName}
          style={{
            paddingEnd: 10,
            opacity: 0.5,
          }}
          size={20}
          color={'black'}
        />
      )}
      {valueSwitch != undefined && (
        <Switch
          trackColor={{false: colors.inactive, true: colors.primary}}
          thumbColor={thumbColor}
          onValueChange={onValueChange}
          value={valueSwitch}
          style={{marginEnd: 10}}
        />
      )}
    </View>
  );
}
