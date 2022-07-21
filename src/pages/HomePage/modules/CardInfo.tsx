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
  //   uri: string;
  //   name: string;
  //   price: number;
  //   type: string;
  //   website: string;
  //   socials: {}[];
};
function CardInfo(props: CardInfoProps) {
  //   const {uri, name, price, type, website, socials} = props;
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
            uri: 'https://www.vitquaylangson.net/wp-content/uploads/2013/06/vi%CC%A3t-quay-la%CC%A3ng-so%CC%9Bn-6.jpg',
          }}
          style={{
            height: 100,
            width: 100,
            resizeMode: 'cover',
            borderRadius: 10,
          }}></Image>
      </View>
      <View style={{flex: 2}}>
        <TextView title="Vịt quay Lạng Sơn"></TextView>
        <Divider height={1} backgroundColor={'black'}></Divider>
        <RichText title={'Price: '} content={'35000'}></RichText>
        <RichText title={'Food Type: '} content={'Món mặn'}></RichText>
        <RichText title={'Website: '} content={'đây là website '}></RichText>
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
