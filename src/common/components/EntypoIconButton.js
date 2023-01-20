import React, {Component} from 'react';
import {Text, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const EntypoIconButton = ( {onPress, icon, size, valid, addStyle} ) => {

    let hasSize = size ? size : 35;
    return (
        <TouchableHighlight onPress={onPress} disabled={!valid} style={[style.button,addStyle]}>
            <Icon name={icon} size={hasSize} color={'#FEC037'} />
        </TouchableHighlight>
    )
}

const style = {
    button: {
        padding: 15,
    }
}

export { EntypoIconButton };