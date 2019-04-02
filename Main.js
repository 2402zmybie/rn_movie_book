import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,Image,TouchableOpacity} from 'react-native';

import {
    Router,
    Stack,
    Scene
}from 'react-native-router-flux'

//导入首页
import App from './App'
//导入封装的详情页
import customWebView from './common/customWebView'

export default class Main extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key={'app'} component={App} hideNavBar={true}/>
                    <Scene key="goToDetail" component={customWebView} hideNavBar={true} />

                </Stack>
            </Router>
        )
    }
}