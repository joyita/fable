import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const Spinner = ({size}) => {

    const {textStyle, viewStyle} = styles;

    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'}/>
        </View>
    );
};

const styles = {
    viewStyle: {
    },
    spinnerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'

    }
};

export { Spinner };