import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import * as profile_actions from '../../profile/actions/profile_actions';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextStyles} from "../styles/TextStyles";

class PremiumButton extends Component {


    render() {

        let {onPress, children, valid, outline, clip, small, styles, onPurchase} = this.props;

        let baseStyle = [style.buttonStyle, valid ? '' : style.invalid];
        if (outline === true) {
            baseStyle.push(style.outline)
        } else {
            baseStyle.push(style.fill)
        }
        if (clip !== true) {
            baseStyle.push(style.clipped)
        } else {
            baseStyle.push(style.unclipped)
        }
        if (small === true) {
            baseStyle.push(style.small)
        }
        if (styles === (undefined || null)) {
            styles = [];
        }
        baseStyle.push(styles);
        let textStyle = outline ? [style.outlineText] : [style.text];
        let press = onPress;
        if (this.props.profile.premium !== true) {
            valid = true;
            baseStyle.push(style.getPremium);
            textStyle.push(style.getPremiumText);
            press = onPurchase;
        }

        return (
            <TouchableHighlight onPress={press} style={baseStyle} disabled={!valid}>
                <View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        justifyContent: 'space-between',
                        marginTop: -5
                    }}>
                    <View style={{width: 1}}/>
                        <Icon name='star' size={18} style={style.icon}/>
                    </View>
                    <Text style={textStyle}>
                        {children}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }
}


const style = {
    buttonStyle: {
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    clipped: {
        height: 50,
        padding: 10,
        paddingTop: 12,
    },
    unclipped: {
        height: 50,
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        // width: 200,
    },
    fill: {
        backgroundColor: '#FEC037',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        borderColor: '#FEC037',
        shadowColor: '#5c3c06',
    },
    outline: {
        borderColor: '#FEC037',
        backgroundColor: 'rgba(255,255,255, 0.7)',
    },
    invalid: {
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
        color: '#FEC037',
        textAlign: 'center'
    },
    small: {
        padding: 1,
        paddingTop: 3,
        height: 33,
        borderRadius: 2
    },
    getPremium: {
        borderColor: '#ffffff',
        backgroundColor: '#2294FF',
    },
    getPremiumText: {
        color: '#ffffff',
    },
    icon: {
        color: '#FEC037',
        marginTop: -20,
        marginBottom: 2,
        marginRight:-15,
        backgroundColor: 'rgba(255,255,255, 0.0)',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 3,
        shadowColor: '#2294FF',
        textShadowColor: '#2294FF',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 3

    }
};


function mapStateToProps({profile}) {
    return profile;
}

export default connect(mapStateToProps, profile_actions)(PremiumButton);
