import React, {Component} from 'react';
import {
    View,
    LayoutAnimation,
    UIManager,
    Text,
    TouchableWithoutFeedback,
    TouchableHighlight
} from 'react-native';

import {Button} from "./Button";
import {TextStyles} from "../styles/TextStyles";

class Picker extends Component {

    state = {show:false};

    componentDidUpdate(prevProps) {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
        if(this.props.showPicker!==prevProps.showPicker) {
            this.setState({show:this.props.showPicker})
        }
    }

    selectItem(item) {
        this.setState({show:false, valid:true});
        this.props.itemSelected(item);
    }

    renderOptions() {
        console.log(this.props)
        return (
            this.props.options.map(
            (item, i) => {
                return (
                    <TouchableHighlight style={styles.option} key={item} onPress={() => this.selectItem(item)} underlayColor={'#FEC037'}>
                        <Text style={styles.optionText}>{item}</Text>
                    </TouchableHighlight>
                )
           })
        )
    }

    renderPopover() {

        let style = this.props.list ? styles.popoverList : styles.popover;

        if(this.state.show) {
            return (
                <TouchableWithoutFeedback onPress={e => this.setState({show:false})}>
                    <View>
                    <View style={style}>
                        {this.renderOptions()}
                    </View>
                        {this.props.extraButton}
                    </View>
                </TouchableWithoutFeedback>
            )
        }
    }

    showOptions() {
        this.setState({show:true})
    }

    render() {
        return (
                <View style={styles.container}>
                    <Button onPress={e => this.setState({show:true})}
                            outline={!this.state.valid} valid clip
                            styles={[this.state.show?styles.date2:styles.date, this.props.addStyle]}>
                        {this.props.buttonText}</Button>
                    {this.renderPopover()}
                </View>

        )
    }

}

const styles = {
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 5,
    },
    popover: {
        marginTop: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    popoverList: {
        marginTop: 20,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    option: {
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#ffffff',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.05,
        shadowRadius: 1,
        shadowColor: '#b49f8c',
        margin: 7,
    },
    optionText: {
        fontFamily: TextStyles.fontFamily,
        fontSize: 17,
    },
    date: {
        width: 500
    },
    date2: {
        width: 500,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.40,
        shadowRadius: 5,
        shadowColor: '#f6b300',
    }

};

export default Picker;