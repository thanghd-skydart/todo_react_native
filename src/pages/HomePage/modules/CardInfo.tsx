import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';

import {images, fontSizes, sizeButton, colors} from '../../../constants';
import {
  Divider,
  TextView,
  SizedBox,
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
  socials: {}[];
};
function _getColorFromStatus(status: string) {
  if (status.toLowerCase().trim() == 'opening now') {
    return colors.success;
  } else if (status.toLowerCase().trim() == 'closing now') {
    return colors.warning;
  } else if (status.toLowerCase().trim() == 'comming soon') {
    return colors.alert;
  }
}
function CardInfo(props: CardInfoProps) {
  const {uri, name, price, status, website, socials} = props;

  return (
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
        <RichText title={'Status: '} content={status.toUpperCase()}></RichText>
        <RichText title={'Price: '} content={'price'}></RichText>
        <RichText title={'Website: '} content={website}></RichText>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <IconSocial name="facebook" size={20} color="blue"></IconSocial>
          <SizedBox width={8}></SizedBox>
          <IconSocial name="instagram" size={20} color="green"></IconSocial>
          <SizedBox width={8}></SizedBox>
          <IconSocial name="twitter" size={20} color="grey"></IconSocial>
        </View>
      </View>
    </View>
  );
}
export default CardInfo;
