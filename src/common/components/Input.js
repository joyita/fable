import React, { Component } from 'react';
import { TextInput, Dimensions} from 'react-native';
import {TextStyles} from "../styles/TextStyles";
const SCREEN_WIDTH = Dimensions.get('window').width;

const Input = ( {value, onChangeText, placeholder, secure, onEndEditing,
                    valid, autoCorrect=false, onSubmitEditing, keyboardType, styles, autoFocus=false} ) => {

    let inputStyles = [style.input];
    if(valid) {
        inputStyles.push(style.valid);
    }
    if(valid === false) {
        inputStyles.push(style.invalid);
    }

    if(keyboardType===undefined) {
        keyboardType='default';
    }
    if(styles!==null) {
        inputStyles.push(styles);
    } else {
        inputStyles.push(style.default)
    }

    return (
            <TextInput
                placeholder={placeholder}
                autoCorrect={autoCorrect}
                value={value}
                onChangeText={ onChangeText }
                onEndEditing={onEndEditing}
                style={inputStyles}
                secureTextEntry={secure}
                onSubmitEditing={onSubmitEditing}
                keyboardType={keyboardType}
                underlineColorAndroid='rgba(0,0,0,0)'
                autoFocus={autoFocus}
                enablesReturnKeyAutomatically
            />
    );
};

const style = {
  input: {
      color: '#000',
      fontSize: 18,
      lineHeight: 23,
      fontFamily: TextStyles.fontFamily,
      padding: 10,
      borderRadius: 3,
      borderColor: '#aca8a6',
      borderBottomWidth:1,
      backgroundColor: '#fff',
      height: 50,
      paddingLeft:15,
      paddingRight:15

  },
    default: {
        width : SCREEN_WIDTH,
    },
    valid: {
      borderColor: '#52ac6b',
        color: '#52ac6b',
    },
    invalid: {
        borderColor: '#ac0f0f',
        color: '#ac0f0f',
    },
  label: {
      paddingLeft: 20,
      fontSize: 18,
      flex: 1
  },
  container: {
      height: 50,
      margin: 15
  }
};
export { Input };