import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Alert,
  TextInput,
  Keyboard,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {images, fontSizes, sizeButton} from '../constants';
import {
  Divider,
  TextView,
  TextField,
  ButtonRadius,
  SizedBox,
} from '../components/atoms';

function LoginPage() {
  return (
    <View style={styles.loginContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.loginContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ImageBackground
            source={images.image_bg}
            resizeMode="cover"
            style={styles.imageBackgroud}>
            <View style={styles.header}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: fontSizes.s20,
                  textAlign: 'left',
                  maxWidth: 200,
                  color: 'black',
                }}>
                Already have an Account ?
              </Text>
              <Image
                source={images.image_login}
                style={styles.imageLogo}></Image>
            </View>

            <View style={styles.topContent}>
              <View style={{marginHorizontal: 15}}>
                <TextView title="Email: " color={'black'}></TextView>
                <TextField placeholder="example@gmail.com"></TextField>
                <Divider height={1} backgroundColor={'black'}></Divider>
              </View>
              <View style={{marginHorizontal: 15, paddingTop: 10}}>
                <TextView title="Password: " color="black"></TextView>
                <TextField
                  placeholder="*******"
                  secureTextEntry={true}></TextField>
                <Divider height={1} backgroundColor={'black'}></Divider>
              </View>
            </View>
            <View style={styles.bottomContent}>
              <ButtonRadius
                onPress={() => {}}
                backgroundColor={'green'}
                height={sizeButton.h48}
                width={sizeButton.w50per}
                borderRadius={20}
                text="Login"
                textColor={'black'}></ButtonRadius>
              <SizedBox height={12}></SizedBox>
              <TextView title="New user? Register now" color={'red'}></TextView>
            </View>

            <View style={styles.bottom}>
              <View style={styles.styleChildBottom}>
                <Divider
                  height={1}
                  backgroundColor={'red'}
                  width="100%"
                  marginHorizontal={10}></Divider>
                <TextView title="Use other methods ?"></TextView>
                <Divider
                  height={1}
                  backgroundColor={'red'}
                  width="100%"
                  marginHorizontal={10}></Divider>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="facebook" size={45} color={'#3982E4'}></Icon>
                <SizedBox width={20}></SizedBox>
                <Icon name="google" size={45} color="#E34234"></Icon>
              </View>
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}
const styles = StyleSheet.create({
  loginContainer: {
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
  header: {
    flex: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 26,
  },
  imageLogo: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    resizeMode: 'center',
  },
  topContent: {
    flex: 20,
  },
  bottomContent: {
    flex: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flex: 25,
  },
  styleChildBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default LoginPage;
