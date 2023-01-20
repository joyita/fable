import React, {Component} from 'react';
import {View, TouchableHighlight} from 'react-native';

const FloatingButton = ( {onPress, children, valid} ) => {
    return (
        <TouchableHighlight onPress={onPress} style={style.buttonStyle} disabled={!valid}>
            <View style={style.textStyle}>
                {children}
            </View>
        </TouchableHighlight>
    )
}

const style = {
    buttonStyle: {
        position: 'absolute',
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: '#ffbb1b',
        bottom: 40,
        right: 40,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.4,
        shadowRadius: 10,
        shadowColor: '#472e05',
    },
    invalid : {
      opacity: 0.5
    },
    textStyle: {
        alignSelf: 'center',
        flex: 1,
        backgroundColor:'rgba(255, 255, 255, 0.0)',
        marginLeft: 1
    }
}

export { FloatingButton };