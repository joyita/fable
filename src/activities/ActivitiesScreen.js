import React, {Component} from 'react';
import {Text, View, Dimensions, Platform} from 'react-native';
import {connect} from "react-redux";
const SCREEN_WIDTH = Dimensions.get('window').width;
import * as activities_actions from './actions/activites_actions';
import {createStackNavigator} from "@react-navigation/stack";

class ActivitiesScreen extends Component {

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
                    <View>
                        <Text>Choose your Activites</Text>
                    </View>
        )
    }
}

function mapStateToProps({toys}) {
    return {...toys};
}

export default connect(mapStateToProps, activities_actions)(ActivitiesScreen);

const styles = {
    cont: {
        position: 'absolute',
        bottom: 5,
        width: SCREEN_WIDTH
    },
};