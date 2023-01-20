import React, {Component, useState} from 'react';
import {Text, View, Dimensions, ScrollView, TouchableHighlight} from 'react-native';
import {connect} from "react-redux";
const SCREEN_WIDTH = Dimensions.get('window').width;
import * as toys_actions from './actions/toys_actions';
import {ContainerStyles} from "../common/styles/ContainerStyles";
import {Button, Input} from "../common/components";
import {TextStyles} from "../common/styles/TextStyles";

class AddToysScreen extends Component {

    state = {
        type:"",
        name:"",
        typeValid:false,
        nameValid:false,
        toySearch: [],
        edit:false
    }


    componentDidMount() {
        if(this.props.route.params) {
            this.setState({edit:true, type:this.props.route.params.type, name:this.props.route.params.name, typeValid:true,nameValid:true})
        }
    }

    constructor(nextProps) {
        super(nextProps)
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
        }
    }

    //TODO
    async addToy() {
        await this.props.addToy(this.state.type, this.state.name);
        this.props.navigation.navigate("Toys");
    }

    async addToy() {
        await this.props.addToy(this.state.type, this.state.name);
        this.props.navigation.navigate("Toys");
    }

    async deleteToy() {
        await this.props.deleteToy(this.state.name);
        this.props.navigation.navigate("Toys");
    }

    onTypeTitleChange(title) {
        let toySearch = toys_actions.searchToys(title);
        if(title.length<3) {
            this.setState({toySearch:[],type:title})
        } else {
            this.setState({toySearch:[],type:title})
            this.setState({toySearch,type:title})
        }
    }

    setType(animal) {
        this.setState({type:animal, typeValid:true, toySearch:[]})
    }

    onNameTitleChange(title) {
        if(title.length>2) {
            this.setState({nameValid:true,name:title})
        } else {
            this.setState({nameValid:false,name:title})
        }
    }

    renderDelete() {
        if(this.state.edit) {
            return (<Button onPress={()=> this.deleteToy()} valid={this.state.nameValid}>Delete Toy</Button>
            )}
    }

    renderAdd() {
        if(this.state.edit) {
            return (                <Button onPress={()=> this.editToy()} valid={this.state.nameValid && this.state.typeValid}>Edit Toy</Button>

            )} else {
            return (                <Button onPress={()=> this.addToy()} valid={this.state.nameValid && this.state.typeValid}>Add Toy</Button>

            )
        }
    }

    renderSearchResults() {
            {
                return (
                    <ScrollView style={{height:112}}>
                        <View style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}>
                            {
                                this.state.toySearch.map(
                                    (item, i) => {
                                        return (
                                            <TouchableHighlight key={i} onPress={() => this.setType(item)}>
                                                <View style={styles.result}>
                                                    <Text style={{padding: 5, fontFamily: TextStyles.fontFamily}}>
                                                        {item}</Text>
                                                    {/*<Text style={styles.resultCategory}>{item.category}</Text>*/}
                                                </View>
                                            </TouchableHighlight>
                                        )
                                    }
                                )
                            }
                        </View>
                    </ScrollView>
                )
            }
    }

    render() {
        return (
            <View style={[ContainerStyles.centerV,ContainerStyles.container, {padding:40}]}>
                <Text>Name</Text>
                <Input
                    value={this.state.name}
                    placeholder={"Mr Snappy"}
                    onChangeText={this.onNameTitleChange.bind(this)}
                    autoCorrect={true}
                    styles={{width:SCREEN_WIDTH*0.8, marginBottom: 10}}
                    autoFocus={true}
                    valid={this.state.nameValid}
                />
                <Text>Type</Text>
                <Input
                    value={this.state.type}
                    placeholder={'Crocodile'}
                    onChangeText={this.onTypeTitleChange.bind(this)}
                    autoCorrect={true}
                    styles={{width:SCREEN_WIDTH*0.8, marginBottom: 10}}
                    autoFocus={true}
                    valid={this.state.typeValid}
                />
                {this.renderSearchResults()}
                {this.renderAdd()}
                {this.renderDelete()}

            </View>
        )
    }
}

function mapStateToProps({toys}) {
    return {...toys};
}

export default connect(mapStateToProps, toys_actions)(AddToysScreen);

const styles = {
    cont: {
        position: 'absolute',
        bottom: 5,
        width: SCREEN_WIDTH
    },
        radios: {
            marginTop: 10,
            justifyContent: 'space-between',
            width: 300,
            marginBottom: 20
        },
        container: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 15,
            paddingTop: 5
        },
        result: {
            backgroundColor: '#fff4e4',
            marginLeft: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.3,
            shadowRadius: 1,
            shadowColor: '#965c00',
            borderRadius: 2,
            marginBottom: 5
        },
        resultCategory: {
            color: '#ffad43',
            padding: 5,
            paddingBottom: 3,
            backgroundColor: '#fff',
            fontFamily: TextStyles.fontFamily,
            borderWidth: 0.5,
            borderColor: '#ffad43'
        }
};