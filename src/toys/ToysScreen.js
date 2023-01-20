import React, {Component} from 'react';
import {Text, View, Dimensions, ScrollView} from 'react-native';
import {connect} from "react-redux";
const SCREEN_WIDTH = Dimensions.get('window').width;
import * as toys_actions from './actions/toys_actions';
import {Button} from "../common/components";
import {ContainerStyles} from "../common/styles/ContainerStyles";
import {TextStyles} from "../common/styles/TextStyles";
import {ToyListing} from "./ToyListing";

class ToysScreen extends Component {


    constructor(nextProps) {
        super(nextProps)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.toys !== this.props.toys) {
            //this.renderToyList();
        }
    }

    openToy(item) {
        this.props.navigation.navigate("AddToy", item)
    }

    renderToyList() {
        return this.props.toys.map(
            (item) => {
                return (
                    <ToyListing onPress={() => this.openToy(item)} toy={item} key={item.id}/>
                )
            }
        )
    }

    render() {
        return (
            <View style={[ContainerStyles.centerV,ContainerStyles.container, {padding:40}]}>
                <ScrollView directionalLockEnabled={true}>
                    {this.renderToyList()}
                </ScrollView>
                <Button onPress={()=> this.props.navigation.navigate("AddToy")} valid>Add Toy</Button>
            </View>
        )
    }
}

function mapStateToProps({toys}) {
    return {...toys};
}

export default connect(mapStateToProps, toys_actions)(ToysScreen);

const styles = {
    cont: {
        position: 'absolute',
        bottom: 5,
        width: SCREEN_WIDTH
    },
};