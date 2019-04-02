import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image} from 'react-native';


import SearchBar from './../../common/searchbar'
import Douban_APIS from './../../common/service'
import Utli from './../../common/utli'

export default class Book extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            isLoading:true,
            keywords:'React',
            books:[]
        }
    }

    componentDidMount(): void {
        this._getData();
    }

    render() {
        return (
            <View>
                <SearchBar placeholder={"请输入图书名称"} />
                {
                    this.state.isLoading ? Utli.loading :
                        <FlatList
                            data={this.state.books}
                            renderItem={({item}) => this._renderItem(item)}
                            keyExtractor={(item) => item.id}
                        />
                }
            </View>
        )
    }

    _renderItem(item) {
        return (
            <View style={{padding:10,flexDirection:'row'}}>
                <Image source={{uri:item.images.large}} style={{marginRight:10,width:100,height:150}}/>
                <View style={{justifyContent:'space-around',alignItems:'center'}}>
                    <Text style={{fontSize:16,fontFamily:'bold'}}>{item.title}</Text>
                    <Text style={{fontSize:14}}>{item.id}</Text>
                </View>
            </View>
        )
    }

    _getData() {
        const url2 =`${Douban_APIS.book_search}?count=20&q=${this.state.keywords}`;
        Utli.getRequest(url2,(data) => {

        },(e) => {

        })
    }
}