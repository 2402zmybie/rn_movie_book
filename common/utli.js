
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,ActivityIndicator,Dimensions} from 'react-native';

//export default 导出一个变量或者方法
/*

// 正确
export var a = 1;

// 正确
var a = 1;
export default a;

// 错误
export default var a = 1;
//上面代码中，export default a的含义是将变量a的值赋给变量default。所以，最后一种写法会报错。
 */

 const Utli = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,

    getRequest(url,successCallback,failCallback) {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                successCallback(data)
            })
            .then(e => {
                failCallback(e)
            })
    },

    loading: <ActivityIndicator size={'small'} style={{justifyContent:'center',alignItems:'center',flex:1}}/>
}

export default Utli;