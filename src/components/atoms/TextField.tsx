import {
  ColorValue,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import React from 'react';
type TextFieldProps = {
  color?: ColorValue | 'black';
  placeholderTextColor?: ColorValue | 'black';
  placeholder: string;
  secureTextEntry?: boolean | false;
};
function TextField(props: TextFieldProps) {
  const {color, placeholderTextColor, placeholder, secureTextEntry} = props;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <TextInput
        style={{color: color}}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}></TextInput>
    </TouchableWithoutFeedback>
  );
}
export default TextField;
