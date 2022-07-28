import React, {useState, useEffect} from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import {colors} from '../../constants';
import UIHeader from '../../components/elements/UIHeader';
import {getUser, getPopulation} from '../../repositories';
function User() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <UIHeader title={'Settings'} />
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
}
export default User;
