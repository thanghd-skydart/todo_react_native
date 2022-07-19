import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
type TypeButtonProps = {
  onPress: () => void;
  title: string;
  isSelected?: boolean | false;
};
function CustomButton(props: TypeButtonProps) {
  const {onPress, title, isSelected} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderColor: isSelected ? 'green' : 'white',
        borderWidth: 1.5,
        height: 45,
        borderRadius: 5,
        marginHorizontal: 15,
        marginBottom: 20,

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      {isSelected == true && (
        <Icon
          size={20}
          name={'check-circle'}
          style={{
            color: 'green',
            position: 'absolute',
            top: 10,
            left: 10,
          }}
        />
      )}
      <Text style={{color: isSelected ? 'green' : 'black', fontSize: 16}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
export default CustomButton;
// aler dialog
//   Alert.alert(
//     'Alert Title',
//     'My Alert Msg',
//     // khi bấm vào action
//     [
//       {
//         text: 'Cancel',
//         // onPress: () => Alert.alert('Cancel Pressed'),
//         style: 'cancel',
//       },
//       {text: 'OK', onPress: () => console.log('OK Pressed')},
//     ],
//     // custom khi bấm ra ngoài alert
//     {
//       cancelable: true,
//       onDismiss: () =>
//         Alert.alert(
//           'This alert was dismissed by tapping outside of the alert dialog.',
//         ),
//     },
//   );
