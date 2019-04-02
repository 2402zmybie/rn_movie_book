import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,TextInput,TouchableOpacity,WebView} from 'react-native';

import Header from './header'

export default class CustomWebView extends Component {

    render() {
        return (
            <View style={{backgroundColor:'white',flex:1}}>
                <Header
                    initObj={{
                        backName: this.props.backName,
                        title:this.props.title
                    }}
                />
                <WebView
                    startInLoadingState={true}
                    contentInset={{top:-44,bottom:-120}}
                    source={{uri:this.props.uri}}
                />
            </View>
        )
    }
}