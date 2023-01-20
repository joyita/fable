import React, {Component} from 'react';
import {Text, TouchableHighlight, Platform} from 'react-native';
import {TextStyles} from "../styles/TextStyles";

const Button = ( {onPress, children, valid, outline, clip, small, styles=[]} ) => {

    let baseStyle = [style.buttonStyle, valid ? '' : style.invalid];
    let additionalProps = {};
    if(outline === true) {
        baseStyle.push(style.outline)
        additionalProps = {activeOpacity: 1,
            underlayColor: '#FFF7EA',};
    } else {
        baseStyle.push(style.fill)
    }
    if(clip!==true) {
        baseStyle.push(style.clipped)
    } else {
        baseStyle.push(style.unclipped)
    }
    if(small===true) {
        if(Platform.OS === 'android') {
            baseStyle.push(style.small)
        } else {
            baseStyle.push(style.smallIOS)
        }
    }
    baseStyle.push(styles);
    let textStyle = outline ? style.outlineText : style.text;
    return (
        <TouchableHighlight onPress={onPress} style={baseStyle} disabled={!valid} {...additionalProps}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableHighlight>
    )
};

const style = {
    buttonStyle: {
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: 1,
        margin:15,
        marginHorizontal:25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    clipped: {
        height:50,
        padding: 10,
        paddingTop: 10,
        paddingHorizontal:15
    },
    unclipped: {
        height:50,
        padding: 10,
        paddingHorizontal:20
        // width: 200,
    },
    fill: {
        backgroundColor: '#9dd6c7',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        borderColor: '#9dd6c7',
        shadowColor: '#967863',
    },
    outline: {
        borderColor: '#93fce3',
        backgroundColor: 'rgba(255,255,255, 0.7)',
        // <-- "backgroundColor" will be always overwritten by "underlayColor"
    },
    invalid : {
      opacity: 0.5
    },
    text: {
        alignSelf: 'center',
        fontSize: 18,
        fontFamily: TextStyles.fontFamily,
        color: '#fff',
    },
    outlineText: {
        alignSelf: 'center',
        fontSize: 18,
        fontFamily: TextStyles.fontFamily,
        color: '#9dd6c7',
        textAlign: 'center'
    },
    smallIOS: {
        padding: 1,
        paddingTop: 5,
        height:33,
        borderRadius:2
    },
    small: {
        padding: 1,
        paddingBottom: 3,
        height:40,
        borderRadius:2
    }
}

export { Button };