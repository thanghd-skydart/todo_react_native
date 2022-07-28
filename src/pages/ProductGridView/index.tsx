import React, {useState} from 'react';
import {FlatList, StyleSheet, View, SafeAreaView} from 'react-native';

import {productData} from '../../assets/datas';

import GridItems from './elements/GridItems';
function ProductGridView() {
  const [products, setProducts] = useState(productData);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({item, index}) => (
          <GridItems
            onPress={() => {
              console.log('hjahaha');
              let productTmp = products.map((product, index) => {
                if (item.productName == product.productName) {
                  return {
                    ...product,
                    isSaved: item.isSaved == false ? true : false,
                  };
                }
                return product;
              });
              setProducts(productTmp);
            }}
            item={item}
            index={index}></GridItems>
        )}></FlatList>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  component: {},
});
export default ProductGridView;
