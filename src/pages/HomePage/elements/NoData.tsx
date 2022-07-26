import React, {useState} from 'react';
import {View} from 'react-native';
import {TextView} from '../../../components/elements';
export function NoData() {
  return (
    <View
      style={{
        flex: 80,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TextView title="Không tìm thấy dữ liệu" color="black"></TextView>
    </View>
  );
}
