import React from 'react';
import {View, FlatList} from 'react-native';
import {SizedBox} from '../../../components/elements';
import CardInfo from './CardInfo';

type ListFoodProp = {
  foods: {
    name: string;
    status: string;
    price: number;
    type: string;
    website: string;
    image: string;
    social: {
      facebook?: string;
      twitter?: string;
      instagram?: string;
    };
  }[];
};
export function ListFood(props: ListFoodProp) {
  const {foods} = props;
  return (
    <FlatList
      data={foods}
      renderItem={({item, index}) => (
        <View key={index}>
          <CardInfo
            onPress={() => {
              console.log('bấm vào 1 phát ăn 1 cái tát ' + item.name);
            }}
            status={item.status}
            name={item.name}
            uri={item.image}
            type={item.type}
            price={item.price}
            socials={item.social}
            website={item.website}></CardInfo>
          <SizedBox height={20}></SizedBox>
        </View>
      )}
      ListEmptyComponent={<View />}
    />
  );
}
