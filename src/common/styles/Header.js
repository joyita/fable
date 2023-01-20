import React from 'react';
import {Platform} from 'react-native';
import {TextStyles} from "./TextStyles";
import {ToastStyles} from "./ToastStyles";

const Header = {
    container: {
        backgroundColor: '#ffffff',
        // marginTop: -15,
        height: 50,
        paddingTop: 5,
        shadowColor: '#a76728',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        width:'100%',
        textAlign: 'center',
        flex: 1

    },
    containerDroid: {
        backgroundColor: '#f8f8f8',
        marginTop: -15,
        height: 70,
        paddingTop: 15,
        shadowColor: '#a76728',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        width:'100%',
        alignSelf:'center'

    },
    title: {
        fontSize: 22,
        fontFamily: TextStyles.fontFamily,
        textAlign: 'center',
        flex: 1
    },
    titleDroid: {
        fontSize: 22,
        marginTop: -5,
        fontFamily: TextStyles.fontFamily,
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1
    },
    userName: {
        fontSize: 30,
        fontFamily: TextStyles.fontFamily
    },
    subtitle: {
        marginTop: 15,
        fontSize: 12,
        fontFamily: TextStyles.fontFamily,
        fontWeight: '600',
        textAlign: 'center',
    },
    iconRight: {
        marginTop:0, marginRight:-5},
    iconRightIOS: {
        marginTop:-5, marginRight:-5
    },
    getContainer() {
        if(Platform.OS === 'android') {
            return Header.containerDroid;
        } else {
            return Header.container;
        }
    },
    getTitle() {
        if(Platform.OS === 'android') {
            return Header.titleDroid;
        } else {
            return Header.title;
        }
    },

};

export { Header };