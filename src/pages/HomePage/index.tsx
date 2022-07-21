import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Alert,
  Keyboard,
  Platform,
  ScrollView,
} from 'react-native';

import {images, fontSizes, sizeButton, colors} from '../../constants';
import CardInfo from './modules/CardInfo';
import {
  Divider,
  TextView,
  TextField,
  ButtonRadius,
  SizedBox,
  RichText,
  IconSocial,
} from '../../components/elements';
// ListView from a Map of Object
// FlatList
function HomePage() {
  // list of food == state
  const [foods, setFoods] = useState([
    {
      name: 'Bún đậu mắm tôm',
      status: 'Opening Now',
      price: 25000,
      website: 'https://www.facebook.com/',
      image:
        'https://www.thatlangon.com/wp-content/uploads/2020/06/bun-dau-7-e1593236905415.jpg',
      social: [
        {
          facebook: 'https://www.facebook.com/',
          zalo: 'https://chat.zalo.me/',
          instagram: 'https://www.instagram.com/',
        },
      ],
    },
    {
      name: 'Cơm gà',
      status: 'Opening Now',
      price: 35000,
      website: 'https://www.facebook.com/',
      image: 'https://statics.vinpearl.com/com-ga-xoi-mo-01_1631605364.jpg',
      social: [
        {
          facebook: 'https://www.facebook.com/',
        },
      ],
    },
    {
      name: 'Cơm rang dưa bò',
      status: 'Opening Now',
      price: 35000,
      website: 'https://www.facebook.com/',
      image:
        'https://pastaxi-manager.onepas.vn/content/uploads/articles/mon-an-vat-hai/com-rang-dua-bo/cach-lam-com-rang-dua-bo-1.jpg',
      social: [
        {
          facebook: 'https://www.facebook.com/',
          instagram: 'https://www.instagram.com/',
        },
      ],
    },
    {
      name: 'Gà luộc cả con',
      status: 'Opening Now',
      price: 125000,
      image:
        'https://cdn.tgdd.vn/Files/2020/08/11/1278766/cach-moi-nhanh-va-de-giup-luoc-ga-khong-rach-da-chat-gon-dep-doc-xong-chi-muon-thu-ngay-202201131530578368.jpg',
      website: 'https://www.facebook.com/',
      social: [
        {
          facebook: 'https://www.facebook.com/',
          zalo: 'https://chat.zalo.me/',
        },
      ],
    },
    {
      name: 'Gà chiên mắm',
      status: 'Opening Now',
      price: 45000,
      image:
        'https://img-global.cpcdn.com/recipes/2436699_10c8ba21ce2b8016/400x400cq70/photo.jpg',
      website: 'https://www.facebook.com/',
      social: [
        {
          zalo: 'https://chat.zalo.me/',
          instagram: 'https://www.instagram.com/',
        },
      ],
    },
    {
      name: 'Vịt quay',
      status: 'Opening Now',
      price: 250000,
      image:
        'https://www.vitquaylangson.net/wp-content/uploads/2013/06/vi%CC%A3t-quay-la%CC%A3ng-so%CC%9Bn-6.jpg',
      website: 'https://www.facebook.com/',
      social: [
        {
          facebook: 'https://www.facebook.com/',
        },
      ],
    },
  ]);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <ScrollView>
          <CardInfo></CardInfo>
          <SizedBox height={20}></SizedBox>
          <CardInfo></CardInfo>
          <SizedBox height={20}></SizedBox>
          <CardInfo></CardInfo>
          <SizedBox height={20}></SizedBox>
          <CardInfo></CardInfo>
          <SizedBox height={20}></SizedBox>
          <CardInfo></CardInfo>
          <SizedBox height={20}></SizedBox>
          <CardInfo></CardInfo>
          <SizedBox height={20}></SizedBox>
          <CardInfo></CardInfo>
          <SizedBox height={20}></SizedBox>
          <CardInfo></CardInfo>
          <SizedBox height={20}></SizedBox>
          <CardInfo></CardInfo>
          <SizedBox height={20}></SizedBox>
          <CardInfo></CardInfo>
          <SizedBox height={20}></SizedBox>
          <CardInfo></CardInfo>
          <SizedBox height={20}></SizedBox>
        </ScrollView>
      </View>
    </View>
  );
}
export default HomePage;
