import React from 'react';
import {View} from 'react-native';
import {images, colors, icons, fontSizes} from '../../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
type StarProps = {
  numberOfStars: number;
};
export function FiveStars(props: StarProps) {
  //i
  const {numberOfStars} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
      }}>
      {[0, 1, 2, 3, 4].map(item => (
        <Icon
          key={`${item}`}
          name="star"
          style={{marginEnd: 2}}
          size={8}
          color={item <= numberOfStars - 1 ? colors.warning : 'grey'}
        />
      ))}
    </View>
  );
}
