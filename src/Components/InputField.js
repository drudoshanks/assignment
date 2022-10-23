import React from 'react';
import SimpleToast from 'react-native-simple-toast';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import colors from '../Theme/Colors';

const InputField = (props) => {


  const {
    customStyle,
    placeholder,
    value,
    onChangeText,
    returnKeyType,
    onSubmitEditing,
    editable,
    fieldRef
  } = props



  return (


    <View style={[styles.mainContainer, customStyle]}>

      <TextInput
        style={{ fontSize: 14, color: colors.Black }}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={'grey'}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        editable={editable}
        ref={fieldRef}
        blurOnSubmit={false}

      />




    </View>



  )
};

const styles = StyleSheet.create({

  mainContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.White,
    borderWidth: 0.75,
    borderColor: colors.Black,
    paddingHorizontal: 8,
    elevation: 1,
    borderRadius: 8,
    height: 56
  },


  input: {
    height: '100%',
  },

});
export default InputField;

