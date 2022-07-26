import React, {useState} from 'react';
import {View} from 'react-native';

import {Divider, SizedBox} from '../../components/elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {foodData, categoriesData} from '../../assets/datas';
import {SearchContainer} from './modules/SearchContainer';
import {ListCategory} from './modules/ListCategory';
import {NoData} from './elements/NoData';
import {ListFood} from './modules/ListFood';
function HomePage() {
  const [foods, setFoods] = useState(foodData);
  const [categories, setCategories] = useState(categoriesData);
  const [searchText, setSearchText] = useState<string>('');

  function filteredFoods() {
    return foods.filter(food =>
      food.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  }
  return (
    <View
      style={{
        flex: 100,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          alignItems: 'center',
          paddingHorizontal: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <SearchContainer
          onChangeText={text => {
            setSearchText(text);
            console.log(searchText);
          }}
        />
        <Icon name="bars" size={25} color={'black'}></Icon>
      </View>
      <View style={{height: 90}}>
        <Divider height={1}></Divider>
        <SizedBox height={10} />
        <ListCategory categories={categories} />
        <Divider height={1} />
      </View>
      {filteredFoods().length ? (
        <View style={{flex: 80, paddingTop: 10}}>
          <ListFood foods={filteredFoods()}></ListFood>
        </View>
      ) : (
        <NoData />
      )}
    </View>
  );
}
export default HomePage;
