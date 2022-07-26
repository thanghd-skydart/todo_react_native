import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import {colors} from '../../../constants';
import {
  Divider,
  TextView,
  RichText,
  IconSocial,
} from '../../../components/elements';
type CardInfoProps = {
  uri: string;
  name: string;
  price: number;
  type: string;
  status: string;
  website: string;
  socials: {
    facebook?: string | undefined;
    twitter?: string | undefined;
    instagram?: string | undefined;
  };
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};
function _getColorFromStatus(status: string) {
  let color;
  status.toLowerCase().trim() == 'opening now'
    ? (color = colors.success)
    : status.toLowerCase().trim() == 'closing now'
    ? (color = colors.warning)
    : (color = colors.alert);
  return color;
}
function CardInfo(props: CardInfoProps) {
  const {uri, name, price, status, website, socials, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          height: 100,
          flexDirection: 'row',
          marginHorizontal: 12,
          justifyContent: 'space-between',
        }}>
        <View style={{flex: 1}}>
          <Image
            source={{
              uri: uri,
            }}
            style={{
              height: 100,
              width: 100,
              resizeMode: 'cover',
              borderRadius: 10,
            }}></Image>
        </View>
        <View style={{flex: 2}}>
          <TextView title={name}></TextView>
          <Divider height={1} backgroundColor={'black'}></Divider>
          <RichText
            title={'Status: '}
            content={status.toUpperCase()}
            colorRich={_getColorFromStatus(status)}></RichText>
          <RichText title={'Price: '} content={'price'}></RichText>
          <RichText title={'Website: '} content={website}></RichText>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            {socials['facebook'] != undefined && (
              <View style={{paddingRight: 8}}>
                <IconSocial name="facebook" size={20} color="blue"></IconSocial>
              </View>
            )}
            {socials['instagram'] != undefined && (
              <View style={{paddingRight: 8}}>
                <IconSocial
                  name="instagram"
                  size={20}
                  color="green"></IconSocial>
              </View>
            )}
            {socials['twitter'] != undefined && (
              <View style={{paddingRight: 8}}>
                <IconSocial name="twitter" size={20} color="grey"></IconSocial>
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default CardInfo;
