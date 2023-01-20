import React, {Component} from 'react';
import {
    Text, View, TouchableHighlight, Image, Dimensions, Platform
} from 'react-native';
import {TextStyles} from "../common/styles/TextStyles";

const SCREEN_WIDTH = Dimensions.get('window').width;

const ToyListing = (props) => {

    return (
        <View style={Platform.OS === 'android' ? styles.shadow: styles.shadowIOS}>
            <TouchableHighlight key={props.toy.id} onPress={props.onPress} underlayColor={'#fffaed'}
                                activeOpacity={0.8} style={styles.fill}>
                <View style={styles.container}>
                    <Image style={styles.imageStyle}
                           source={props.toy.image} defaultSource={""}/>
                    <View style={styles.details}>
                        <Text style={styles.title}>{props.toy.name}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    )
};

const styles = {

    container: {
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_WIDTH * 0.8,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        borderRadius: 15,
        overflow: 'hidden',
    },
    shadow: {
        margin: SCREEN_WIDTH * 0.1,
        marginBottom: SCREEN_WIDTH * 0.05,
        marginTop: SCREEN_WIDTH * 0.05,
        backgroundColor:'rgba(255, 255, 255, 0.0)',
        elevation:10,
        borderRadius: 15,
        // borderColor: 'rgba(204, 101, 1, 0.29)',
        // borderWidth: 5,
        // borderBottomWidth: 15,

        // borderStyle: 'solid inset solid solid'
        overflow: 'hidden'

},
    shadowIOS: {
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.4,
        shadowRadius: 7,
        shadowColor: '#cab9ab',
        margin: SCREEN_WIDTH * 0.1,
        marginBottom: SCREEN_WIDTH * 0.05,
        marginTop: SCREEN_WIDTH * 0.05,
        backgroundColor:'rgba(255, 255, 255, 0.0)',
        borderRadius: 15,
    },
    imageStyle: {
        flex: 1,
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_WIDTH * 0.8,
        borderTopRightRadius: 15,
        backgroundColor:'rgba(255, 255, 255, 0.0)',
        borderTopLeftRadius: 15
    },
    fill: {
        flex: 1,
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor:'rgba(255, 255, 255, 0.0)'
    },
    details: {
        margin: 30,
        flexDirection: 'column',
        marginTop: 10,
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        fontFamily: TextStyles.fontFamily
    },
    myGoal: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    detailText: {
        fontFamily: TextStyles.fontFamily
    }
};

export {ToyListing};