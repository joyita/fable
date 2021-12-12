import React, {Component} from 'react';
import {Text, View, Dimensions, Platform} from 'react-native';
import {connect} from "react-redux";
const SCREEN_WIDTH = Dimensions.get('window').width;
import * as toys_actions from './actions/toys_actions';

class ToysScreen extends Component {

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
                        <Text>Add your toys</Text>
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