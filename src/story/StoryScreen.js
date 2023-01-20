import React, {Component} from 'react';
import {Text, View, Dimensions, Platform} from 'react-native';

import {connect} from "react-redux";
const SCREEN_WIDTH = Dimensions.get('window').width;
import * as story_actions from '../settings/actions/settings_actions';
import {ContainerStyles} from "../common/styles/ContainerStyles";
import {Button} from "../common/components";

class StoryScreen extends Component {

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

    createFable() {

    }

    render() {
        return (
            <View style={[ContainerStyles.centerV,ContainerStyles.container, {padding:40}]}>
                        <Text>Make me a play</Text>
                <Text>Toys - generate random</Text>
                <Text>Length - medium</Text>

                <Button onPress={()=> this.createFable()} valid>Create Fable</Button>

            </View>
        )
    }
}

function mapStateToProps({toys}) {
    return {...toys};
}

export default connect(mapStateToProps, story_actions)(StoryScreen);

const styles = {
    cont: {
        position: 'absolute',
        bottom: 5,
        width: SCREEN_WIDTH
    },
};