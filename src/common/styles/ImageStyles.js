import React from 'react';
import {Text, View, Dimensions} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;

const ImageStyles = {
    icon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        overflow:'hidden'
    },
    profilePic: {
        width: SCREEN_WIDTH * 0.4,
        height: SCREEN_WIDTH * 0.4,
        borderRadius: SCREEN_WIDTH * 0.2,
        overflow: 'hidden',
        marginBottom: 20
    },

};

export { ImageStyles };