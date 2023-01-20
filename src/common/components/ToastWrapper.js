import React, {Component} from 'react';
import Toast from 'react-native-root-toast';
import {ToastStyles} from "../styles/ToastStyles";


const ToastWrapper = {

    // state = {latitude:0, longitude:0, title:'', submittable:false, search:''};

    LONG : 1000,
    SHORT : 100,
    TOP : 10,
    BOTTOM : 20,

    show(message, length, position, style) {

        Toast.show(message, {
            containerStyle: style,
 //           textStyle: ToastStyles.textStyle,
            duration: Toast.durations.LONG,
            position: Toast.positions.TOP,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            opacity: 0.9,
            shadowColor: '#988989',
            onShow: () => {
                // calls on toast\`s appear animation start
            },
            onShown: () => {
                // calls on toast\`s appear animation end.
            },
            onHide: () => {
                // calls on toast\`s hide animation start.
            },
            onHidden: () => {
                // calls on toast\`s hide animation end.
            }
        });
    }
};

export {ToastWrapper};