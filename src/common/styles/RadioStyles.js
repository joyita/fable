import React from 'react';
import {Text, View} from 'react-native';
import {TextStyles} from "./TextStyles";

const RadioStyles = {
    radioItem: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginBottom: 15
    },
    radioText: {
        fontFamily: TextStyles.fontFamily,
        fontSize: 16,
        marginLeft: 10,
        width: 90,
        marginTop:6
    },

};

export { RadioStyles };