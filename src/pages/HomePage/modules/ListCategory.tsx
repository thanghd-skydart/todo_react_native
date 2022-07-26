import React from 'react';
import {View, Image, FlatList, TouchableOpacity} from 'react-native';
import {TextView} from '../../../components/elements';
type ListCategoryProps = {
  categories: {
    name: string;
    url: string;
  }[];
};
export function ListCategory(props: ListCategoryProps) {
  const {categories} = props;
  return (
    <FlatList
      data={categories}
      style={{flex: 1, alignSelf: 'center'}}
      horizontal={true}
      renderItem={({item, index}) => (
        <TouchableOpacity
          onPress={() => {
            console.log('hehehelo' + item.name.toLowerCase().trim());
          }}>
          <View
            key={index}
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              paddingHorizontal: 10,
              alignSelf: 'center',
            }}>
            <Image
              source={{uri: item.url}}
              style={{
                width: 50,
                height: 50,
                resizeMode: 'cover',
                borderRadius: 25,
                alignSelf: 'center',
              }}></Image>
            <TextView title={item.name} color="black"></TextView>
          </View>
        </TouchableOpacity>
      )}></FlatList>
  );
}
