import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {images, icons, fontSizes, colors} from './constants';
// import { sumNumber, subNumber, PI } from './utils/Calculation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CustomButton} from './components/molecules/index';

interface IAppProps {}
function App(props: IAppProps) {
  const [listType, setListType] = useState([
    {name: 'Bài 1', isSelected: false},
    {name: 'Bài 2', isSelected: false},
    {name: 'Bài 3', isSelected: false},
    {name: 'Bài 4', isSelected: false},
  ]);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={styles.imageBackgroud}>
        <View style={styles.viewHeader}>
          <View style={styles.headerLeft}>
            <Image source={icons.ic_fire} style={styles.imageIcon}></Image>
            <Text style={styles.textStyle}> MinDecor99</Text>
          </View>
          <View style={styles.headerRight}>
            <Image
              source={icons.ic_question}
              style={styles.iconRightHeader}></Image>
          </View>
        </View>
        <View style={styles.viewBody}>
          <Text style={styles.textStyleP}> Welcome</Text>
          <Text style={styles.textStyleH1}> MinDecor</Text>
          <Text style={styles.textStyleP}>Please select your account type</Text>
        </View>
        <View style={styles.viewForm}>
          {listType.map((type, index) => (
            <CustomButton
              key={index}
              title={type.name}
              isSelected={type.isSelected}
              onPress={() => {
                let newListType = listType.map(aType => {
                  //   if (aType.name == type.name && aType.isSelected == false) {
                  //     return {...aType, isSelected: true};
                  //   } else {
                  //     return {...aType, isSelected: false};
                  //   }
                  return {
                    ...aType,
                    isSelected:
                      aType.name == type.name && aType.isSelected == false,
                  };
                });
                setListType(newListType);
              }}
            />
          ))}
        </View>
        <View style={styles.viewBottom}>
          <CustomButton title={'Login'} onPress={() => {}} />
          <Text
            style={{
              color: 'white',
              fontSize: fontSizes.s20,
              fontWeight: '600',
              alignSelf: 'center',
            }}>
            Want to register with new account?
          </Text>
          <TouchableOpacity style={{paddingTop: 12}}>
            <Text
              style={{
                color: colors.primary,
                fontSize: fontSizes.s16,
                fontWeight: '600',
                alignSelf: 'center',
                textDecorationLine: 'underline',
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 100,
    width: '100%',
    height: '100%',
  },
  imageBackgroud: {
    flex: 100,
    alignSelf: 'stretch',
    width: '100%',
    height: '100%',
  },
  viewHeader: {
    paddingHorizontal: 8,
    flexDirection: 'row',
    flex: 15,
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  viewBody: {
    flex: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyleP: {
    marginBottom: 7,
    color: 'black',
    fontSize: fontSizes.s14,
  },
  textStyleH1: {
    marginBottom: 7,
    color: 'black',
    fontSize: fontSizes.s16,
    fontWeight: 'bold',
  },
  viewForm: {
    flex: 45,
    // backgroundColor: 'blue',
    paddingTop: 20,
  },

  viewBottom: {flex: 25},
  headerLeft: {
    flexDirection: 'row',
    height: 50,
    // main
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    // cross row ra center dùng alignItem
    alignItems: 'center',
  },
  headerRight: {
    // colomn dùng justify
    justifyContent: 'center',
    height: 50,
  },
  imageIcon: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  iconRightHeader: {
    width: 30,
    height: 30,
    tintColor: 'white',
    justifyContent: 'center',
  },

  textStyle: {
    color: 'white',
    alignItems: 'center',
  },
  buttonStyle: {
    borderColor: 'white',
    borderWidth: 1,
    height: 45,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default App;
