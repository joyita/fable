import React from 'react';
import {Dimensions, Platform} from 'react-native';
import {TextStyles} from "./TextStyles";
const SCREEN_WIDTH = Dimensions.get('window').width;

const ToastStyles = {
    good: {
        // fontSize: 16,
        backgroundColor: '#3da482',
        margin: 5,
        marginTop:15,
        padding: 10,
        borderRadius: 5,
        borderWidth:5,
        borderColor: '#3da482',
        width: SCREEN_WIDTH * 0.7,
    },
    goodIOS: {
        // fontSize: 16,
        backgroundColor: '#3da482',
        margin: 5,
        marginTop:15,
        padding: 10,
        borderRadius: 5,
        borderWidth:5,
        borderColor: '#3da482',
        width: SCREEN_WIDTH * 0.7,
        height: 70
    },
    warn: {
        // fontSize: 16,
        backgroundColor: '#e99500',
        margin: 5,
        marginTop:15,
        padding: 10,
        borderRadius: 5,
        borderWidth:5,
        borderColor: '#e99500',
        width: SCREEN_WIDTH * 0.7,
    },
    warnIOS: {
        // fontSize: 16,
        backgroundColor: '#e99500',
        margin: 5,
        marginTop:15,
        padding: 10,
        borderRadius: 5,
        borderWidth:5,
        borderColor: '#e99500',
        width: SCREEN_WIDTH * 0.7,
        height: 70
    },
    error: {
        // fontSize: 26,
        backgroundColor: '#b00900',
        margin: 15,
        marginTop:15,
        padding: 10,
        borderRadius: 5,
        borderWidth:5,
        borderColor: '#b00900',
        width: SCREEN_WIDTH * 0.7,
        height: 90
    },
    errorIOS: {
        // fontSize: 26,
        backgroundColor: '#b00900',
        margin: 15,
        marginTop:15,
        padding: 10,
        borderRadius: 5,
        borderWidth:5,
        borderColor: '#b00900',
        width: SCREEN_WIDTH * 0.7,
        height: 90
    },
    textStyle: {
        fontSize: 16,
        //textAlign: 'center',
        fontFamily: TextStyles.fontFamily,
        paddingTop:5
    },
    getGood() {
        if(Platform.OS === 'android') {
            return ToastStyles.good;
        } else {
            return ToastStyles.goodIOS;
        }
    },
    getWarn() {
        if(Platform.OS === 'android') {
            return ToastStyles.warn;
        } else {
            return ToastStyles.warnIOS;
        }
    },
    getError() {
        if(Platform.OS === 'android') {
            return ToastStyles.error;
        } else {
            return ToastStyles.errorIOS;
        }
    }
};

export { ToastStyles };