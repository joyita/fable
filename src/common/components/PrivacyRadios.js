import React, {Component} from 'react';
import {
    View,
    Dimensions,
    LayoutAnimation,
    UIManager,
    Platform,
    Text,
    TouchableWithoutFeedback,
    TouchableHighlight
} from 'react-native';

import RadioButton from "./RadioButton";

class PrivacyRadios extends Component {

    state = {
        pub:false,
        friends: false,
        priv: false
    };

    componentDidUpdate(prevProps) {
        this.selectPrivacy(this.props.privacy)
    }

    getSnapshotBeforeUpdate(nextProps) {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }

    constructor(props) {
        super(props);
    }

    selectPrivacy(privacy) {

        switch (privacy) {
            case 'public':
                this.setState({
                    pub:true,
                    friends: false,
                    priv: false
                });
                break;
            case 'friends':
                this.setState({
                    pub:false,
                    friends: true,
                    priv: false
                });
                break;
            case 'private':
                this.setState({
                    pub:false,
                    friends: false,
                    priv: true
                });
                break;
        }
        this.props.selectPriv(privacy)
    }


    render() {
        return (
            <View style={styles.radios}>
                <RadioButton
                    animation={'bounceIn'}
                    isSelected={this.state.pub}
                    onPress={() => this.selectPrivacy('public')}
                />
                <RadioButton
                    animation={'bounceIn'}
                    isSelected={this.state.friends}
                    onPress={() => this.selectPrivacy('friends')}
                />
                <RadioButton
                    animation={'bounceIn'}
                    isSelected={this.state.priv}
                    onPress={() => this.selectPrivacy('private')}
                />
            </View>

        )
    }

}

const styles = {
    radios: {
        flex:1,
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-around'
    }
};


export default PrivacyRadios;