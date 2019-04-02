import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,Image,TouchableOpacity} from 'react-native';

import SearchBar from './../../common/searchbar'
import Douban_APIS from './../../common/service'
import Utli from './../../common/utli'

import {Actions} from "react-native-router-flux"


export default class Movie extends Component<Props> {

    constructor(props) {
        super(props)
        this.state = {
            isLoading:true,
            keywords:'哈利',
            movies: []
        }
    }

    componentDidMount() {
        this._pullFromServer()
    }

    render() {
        if(this.state.isLoading) {
            return Utli.loading
        }
        return (
            <View>
                <SearchBar placeholder={"请输入搜索的电影名称"} onPress={this._search} onChangeText={this._changeText}/>
                <FlatList
                    data={this.state.movies}
                    ItemSeparatorComponent={this.serparator}
                    renderItem={({item}) => this._renderItem(item)}
                    keyExtractor={(item) => item.id}
                />
            </View>
        )
    }


    serparator = () => {
        return <View style={{backgroundColor:'#ccc',height: 1,marginLeft:10,marginRight: 10}}></View>
    }

    //https://api.douban.com/v2/movie/search?count=20&q=哈利
    _pullFromServer() {
        const url2 =`${Douban_APIS.movie_search}?count=20&q=${this.state.keywords}`;
        Utli.getRequest(url2,(data) => {
            console.log(data)
            if(data != null && data.subjects.length > 0) {
                console.log(data)
                this.setState({
                    isLoading:false,
                    movies:data.subjects
                })
            }
        },(e) => {

        })
    }

    _search = () => {
        this._pullFromServer()
    }

    _changeText = (text) => {
        this.setState({
            keywords: text
        })
    }


    _renderItem = (item) => {
        return (
            <TouchableOpacity onPress={this._gotoMovieDetail}>
                <View style={{padding:10,flexDirection:'row'}} >
                    <Image source={{uri:item.images.large}} style={{marginRight:10,width:100,height:150}}/>
                    <View style={{justifyContent:'space-around',alignItems:'center'}}>
                        <Text style={{fontSize:16,fontFamily:'bold'}}>{item.title}</Text>
                        <Text style={{fontSize:14}}>{item.id}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    _gotoMovieDetail = (item) => {
        //跳转到详情页
        const uri = `${Douban_APIS.movie_detail_id}${item.id}`
        Actions.push("goToDetail",{uri:uri,backName:'返回',title:'电影详情'})
    }

}