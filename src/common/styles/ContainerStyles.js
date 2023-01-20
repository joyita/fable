import React from 'react';
import {Text, View} from 'react-native';
import {TextStyles} from "./TextStyles";

const ContainerStyles = {
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 5,
        justifyContent: 'center',
        flex: 1,
        fontFamily: TextStyles.fontFamily,
        backgroundColor:'rgb(255,246,229)'
    },
    prompt: {
        fontSize: 16,
        color: '#4f3b39',
        textAlign: 'center',
        margin: 5,
        fontFamily: TextStyles.fontFamily
    },
    loadingContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor:'rgba(255,255,255,0.3)'

    },
    centerV:
    {
        flexDirection: 'column',
        alignItems: 'center'
    },
    center:
        {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent:'center'
        },
    centerH: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 1,
        backgroundColor: 'rgba(255,255,255, 0.4)',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { ContainerStyles };