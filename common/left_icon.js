//返回的箭头

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,TextInput} from 'react-native';

export default class LeftIcon extends Component {


    render() {
        return (
            <View style={styles.icon}></View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width:20,
        height:20,
        borderColor:'white',
        borderLeftWidth:2,
        borderBottomWidth:2,
        marginLeft:10,
        transform:[{rotate:'45deg'}]
    }
})