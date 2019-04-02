//封装搜索组件
//外部传入 placeHolder onPress, onChangeText
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,TextInput} from 'react-native';

export default class SearchBar extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputStyle} {...this.props}/>
                <Button title={"搜索"} {...this.props} style={styles.btnStyle}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        height:44,
        flexDirection:'row',
        //设置主轴的方法
        justifyContent:'flex-end'
    },
    inputStyle: {
        flex:1,
        paddingLeft:10,
        borderWidth:1,
        borderColor:'white',
        height:44
    },
    btnStyle: {
        width:55,
        height: 44,
        backgroundColor:'green',
        color: 'white',
        marginLeft:10,
        marginRight:10,
        lineHeight:44
    }
})

