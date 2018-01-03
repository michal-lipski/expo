import React from 'react'
import {connect} from 'react-redux'
import {Button, Text, View} from "react-native";
import ItemsList from "../list/ItemsList";
import {reportWork} from "../../actions";
import {projects} from "./registrables";


export class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: projects,
            selection: ''
        };
    }


    itemSelected = (item) => {
        this.setState({
            list: item.list,
            selection: this.state.selection + ' ' + item.title
        })

    };

    confirmReport = () => {
        this.props.reportWork(this.state.selection)
    };

    render() {
        return (
            <View style={{backgroundColor: 'lightgrey', flexGrow: 1, width: '100%', justifyContent: 'space-between'}}>
                <ItemsList list={this.state.list} itemSelected={this.itemSelected}/>
                <Text>{this.state.selection}</Text>
                <Button title='OK' icon={{name: 'done'}} onPress={() => this.confirmReport()}/>
            </View>
        )
    }


}

const mapDispatchToProps = {
    reportWork
};

export default connect(null, mapDispatchToProps)(Registration)