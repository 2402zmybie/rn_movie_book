//封装header  initObj(backName, title)  传入

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,TextInput,TouchableOpacity} from 'react-native';

import {Actions} from "react-native-router-flux"
import LeftIcon from './left_icon'
import Utli from './utli'


export default class Header extends Component{
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {Actions.pop()}} style={{flexDirection: 'row'}}>
                    <LeftIcon />
                    <Text style={styles.backName}>{this.props.initObj.backName}</Text>
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{this.props.initObj.title}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width:Utli.width,
        height:44,
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'pink'
    },
    backName: {
        fontSize:14,
        marginLeft:6,
        color:'white'
    },
    textContainer: {
        height:44,
        position: "absolute",
        width: 100,
        left: "50%",
        marginLeft: -50,
        justifyContent:'center',
        alignItems: 'center'
    },
    title: {
        fontSize:16,
        fontFamily:'bold',
        color:'white',


    }
})