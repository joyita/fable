import React, {Component} from 'react';
import {Text, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconButton = ( {onPress, icon, size, valid} ) => {

    let hasSize = size ? size : 35;

    return (
        <TouchableHighlight onPress={onPress} disabled={!valid} style={style.button}  underlayColor={'#6c290f'}>
            <Icon name={icon} size={hasSize} color={'#FEC037'} />
        </TouchableHighlight>
    )
}

const style = {
    button: {
        padding: 15,
    }
}

export { IconButton };