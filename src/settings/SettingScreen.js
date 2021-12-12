import React, {Component} from 'react';
import {Text, View, Dimensions, Platform} from 'react-native';

import {connect} from "react-redux";
const SCREEN_WIDTH = Dimensions.get('window').width;
import * as story_actions from '../story/actions/story_actions';

class SettingScreen extends Component {

    state = {
        angels: [],
        dismissed: []
    };

    componentDidMount() {
    }
    constructor(nextProps) {
        super(nextProps)
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            console.log("goal updated")
        }
    }

    render() {
        return (
                    <View style={{flex: 1}}>
                        <Text>Add your toys</Text>
                    </View>
        )
    }
}

function mapStateToProps({toys}) {
    return {...toys};
}

export default connect(mapStateToProps, story_actions)(SettingScreen);

const styles = {
    cont: {
        position: 'absolute',
        bottom: 5,
        width: SCREEN_WIDTH
    },
};