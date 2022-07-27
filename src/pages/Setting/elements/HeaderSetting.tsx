import React from 'react';
import {Text, View} from 'react-native';
import {fontSizes} from '../../../constants';
type HeaderSettingProps = {
  title: string;
};
function HeaderSetting(props: HeaderSettingProps) {
  const {title} = props;
  return (
    <View
      style={{
        height: 40,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: fontSizes.s16,
          paddingStart: 10,
        }}>
        {title}
      </Text>
    </View>
  );
}
export default HeaderSetting;
