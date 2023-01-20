import React, {Component} from 'react';
import {Text, View, Dimensions, Platform, ScrollView} from 'react-native';
import {connect} from "react-redux";
const SCREEN_WIDTH = Dimensions.get('window').width;
import * as activities_actions from './actions/activites_actions';
import {createStackNavigator} from "@react-navigation/stack";
import {ContainerStyles} from "../common/styles/ContainerStyles";
import {ToyListing} from "../toys/ToyListing";
import {ActivityListing} from "./ActivityListing";

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

    openActivity() {

    }

    renderActivityList() {
        return this.props.activities.map(
            (item) => {
                return (
                    <ActivityListing onPress={() => this.openActivty(item)} activity={item} key={item.type}/>
                )
            }
        )
    }

    render() {
        return (
            <View style={[ContainerStyles.centerV,ContainerStyles.container, {padding:40}]}>
                        <Text>Choose your Activites</Text>
                <ScrollView directionalLockEnabled={true}>
                    {this.renderActivityList()}
                </ScrollView>
            </View>
        )
    }
}

function mapStateToProps({activities}) {
    return {...activities};
}

export default connect(mapStateToProps, activities_actions)(ActivitiesScreen);

const styles = {
    cont: {
        position: 'absolute',
        bottom: 5,
        width: SCREEN_WIDTH
    },
};