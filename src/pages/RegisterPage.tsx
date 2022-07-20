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
import Icon from 'react-native-vector-icons/FontAwesome';
import {images, fontSizes, sizeButton} from '../constants';
import {
  Divider,
  TextView,
  TextField,
  ButtonRadius,
  SizedBox,
} from '../components/atoms';
import {isValidEmail, isValidatePassword} from '../utils';
function RegisterPage() {
  const [keyboardIsShow, setKeyboardIsShow] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassWord, setErrorPassWord] = useState('');

  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');
  const isSubmit = () =>
    email.length > 0 && passWord.length > 0 && errorEmail.length > 0;
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShow(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShow(false);
    });
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.loginContainer}>
      <View style={styles.loginContainer}>
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
                <TextField
                  placeholder="example@gmail.com"
                  onChangeText={text => {
                    console.log(text.length);
                    setErrorEmail(
                      isValidEmail(text) == true
                        ? ''
                        : 'Email không đúng định dạng',
                    );

                    setEmail(text);
                  }}></TextField>
                <Divider height={1} backgroundColor={'black'}></Divider>
                {errorEmail.length != 0 && email.length != 0 ? (
                  <TextView
                    title={errorEmail}
                    color="red"
                    paddingTop={8}></TextView>
                ) : (
                  <SizedBox height={8}></SizedBox>
                )}
              </View>
              <View style={{marginHorizontal: 15}}>
                <TextView title="Password: " color="black"></TextView>
                <TextField
                  placeholder="*******"
                  secureTextEntry={true}
                  onChangeText={text => {
                    setErrorPassWord(
                      text.length >= 3 == true
                        ? ''
                        : 'Mật khẩu lơn hơn 3 kí tự',
                    );
                    setPassWord(text);
                  }}></TextField>
                <Divider height={1} backgroundColor={'black'}></Divider>
                {errorPassWord.length != 0 && passWord.length != 0 && (
                  <TextView
                    title={errorPassWord}
                    color="red"
                    paddingTop={8}></TextView>
                )}
              </View>
            </View>
            <View style={styles.bottomContent}>
              <ButtonRadius
                disabled={isSubmit() == false}
                onPress={() => {
                  Alert.alert('email:' + email + '/npass:' + passWord);
                }}
                backgroundColor={isSubmit() == true ? 'green' : 'grey'}
                height={sizeButton.h48}
                width={sizeButton.w50per}
                borderRadius={20}
                text="Login"
                textColor={
                  isSubmit() == true ? 'white' : 'black'
                }></ButtonRadius>
              <SizedBox height={12}></SizedBox>
              <TextView title="New user? Register now" color={'red'}></TextView>
            </View>
            {keyboardIsShow == false && (
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
            )}
          </ImageBackground>
        </TouchableWithoutFeedback>
      </View>
    </KeyboardAvoidingView>
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
    flex: 25,
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
export default RegisterPage;
